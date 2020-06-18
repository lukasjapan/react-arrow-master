import * as React from "react";
import { render } from "react-dom";
import { arrowStyleAliases, headStyleAliases } from "./styles";

interface Props {
  arrows: Arrow[];
  defaultArrowSpec?: Partial<ArrowSpec>;
  children: React.ReactNode;
}

export type Point = [number, number];

export interface DirectedPoint {
  point: Point;
  direction: Point;
}

export interface Arrows {
  arrows: Arrow[];
  defaultArrowSpec: ArrowSpec;
}

export interface Value {
  value: number;
  unit: "px" | "%";
}

export interface ExtraPoint {
  x: Value;
  y: Value;
  absolute: boolean;
}

export interface MidPointSpec {
  curved: boolean;
  points:
    | ExtraPoint[]
    | ((from: DirectedPoint, to: DirectedPoint) => ExtraPoint[]);
}

export interface HeadPointSpec {
  size: number;
  adjust: number;
  hollow: boolean;
  svgPath: string;
}

export type ArrowStyleAlias =
  | "none"
  | "clipClockwise"
  | "clipCounterclockwise"
  | "arcClockwise"
  | "arcCounterclockwise"
  | "corners"
  | "smooth";

export type HeadStyleAlias =
  | "default"
  | "hollow"
  | "filledDiamond"
  | "diamond"
  | "disk"
  | "circle"
  | "none";

export interface ArrowSpec {
  width: number;
  color: string;
  arrowStyle: ArrowStyleAlias | MidPointSpec;
  headStyle: HeadStyleAlias;
}

export type PosXLocation = "left" | "middle" | "right";
export type PosYLocation = "top" | "middle" | "bottom";

export interface ArrowLocation {
  id: string;
  posX?: PosXLocation;
  posY?: PosYLocation;
}

export interface Arrow {
  from: string | ArrowLocation;
  to: string | ArrowLocation;
  spec?: Partial<ArrowSpec>;
}

export interface PathSpec {
  points: Point[];
  curved: boolean;
  width: number;
  color: string;
  headPoints: HeadPointSpec | null;
}

const ARROWMASTER_CLASS = "__react_arrowmaster";

const requireLocation = (
  input: string | ArrowLocation
): Required<ArrowLocation> =>
  typeof input == "string"
    ? { id: input, posX: "middle", posY: "middle" }
    : {
        id: input.id,
        posX: input.posX || "middle",
        posY: input.posY || "middle",
      };

const getPoint = (location: string | ArrowLocation): DirectedPoint | null => {
  const loc = requireLocation(location);
  const el = document.getElementById(loc.id);

  if (!el) {
    return null;
  }

  let x, y, dx, dy;

  if (loc.posX === "left") {
    x = el.offsetLeft;
    dx = -1;
  } else if (loc.posX === "middle") {
    x = el.offsetLeft + el.offsetWidth / 2;
    dx = 0;
  } else if (loc.posX === "right") {
    x = el.offsetLeft + el.offsetWidth;
    dx = 1;
  }

  if (loc.posY === "top") {
    y = el.offsetTop;
    dy = -1;
  } else if (loc.posY === "middle") {
    y = el.offsetTop + el.offsetHeight / 2;
    dy = 0;
  } else if (loc.posY === "bottom") {
    y = el.offsetTop + el.offsetHeight;
    dy = 1;
  }

  let parent: any = el.offsetParent;
  while (parent && !parent.className.includes(ARROWMASTER_CLASS)) {
    x += parent.offsetLeft;
    y += parent.offsetTop;
    parent = parent.offsetParent;
  }

  return x !== undefined &&
    y !== undefined &&
    dx !== undefined &&
    dy !== undefined
    ? { point: [x, y], direction: [dx, dy] }
    : null;
};

const diff = (a: Point, b: Point): Point => [b[0] - a[0], b[1] - a[1]];
const len = (a: Point): number => Math.sqrt(a[0] * a[0] + a[1] * a[1]);

const buildPath = (
  arrow: Arrow,
  defaultArrowSpec: ArrowSpec
): PathSpec | null => {
  const from = getPoint(arrow.from);
  const to = getPoint(arrow.to);

  if (!from || !to) {
    return null;
  }

  const dx = to.point[0] - from.point[0];
  const dy = to.point[1] - from.point[1];
  if (from.direction[0] === 0 && from.direction[1] === 0) {
    from.direction[0] = Math.abs(dx) >= Math.abs(dy) ? dx : 0;
    from.direction[1] = Math.abs(dy) >= Math.abs(dx) ? dy : 0;
  } else {
    from.direction[0] = from.direction[0] * Math.abs(dx);
    from.direction[1] = from.direction[1] * Math.abs(dy);
  }

  if (to.direction[0] === 0 && to.direction[1] === 0) {
    to.direction[0] = Math.abs(dx) >= Math.abs(dy) ? -dx : 0;
    to.direction[1] = Math.abs(dy) >= Math.abs(dx) ? -dy : 0;
  } else {
    to.direction[0] = to.direction[0] * Math.abs(dx);
    to.direction[1] = to.direction[1] * Math.abs(dy);
  }

  const spec = arrow.spec ?? defaultArrowSpec;
  const width = spec.width ?? defaultArrowSpec.width;
  const color = spec.color ?? defaultArrowSpec.color;
  const headStyle = spec.headStyle ?? defaultArrowSpec.headStyle;
  const midPointSpec = spec.arrowStyle ?? defaultArrowSpec.arrowStyle;
  const midPoints =
    typeof midPointSpec == "string"
      ? arrowStyleAliases[midPointSpec]
      : midPointSpec;
  const headPoints =
    typeof headStyle == "string" ? headStyleAliases[headStyle] : headStyle;
  const curved = midPoints.curved;
  const coordAbs: { o: Point; v: Point; w: Point } = {
    o: from.point,
    v: [to.point[0] - from.point[0], 0],
    w: [0, to.point[1] - from.point[1]],
  };
  let coordRel: { o: Point; v: Point; w: Point } = {
    o: from.point,
    v: [to.point[0] - from.point[0], to.point[1] - from.point[1]],
    w: [to.point[1] - from.point[1], from.point[0] - to.point[0]],
  };

  const extraPoints =
    typeof midPoints.points == "function"
      ? midPoints.points(from, to)
      : midPoints.points;

  const others = extraPoints.map((p) => {
    const { o, v, w } = p.absolute ? coordAbs : coordRel;
    const fx = p.x.value / (p.x.unit == "%" ? 100 : len(v));
    const fy = p.y.value / (p.y.unit == "%" ? 100 : len(w));
    return [
      o[0] + v[0] * fx + w[0] * fy,
      o[1] + v[1] * fx + w[1] * fy,
    ] as Point;
  });
  const points = [from.point, ...others, to.point];

  if (headPoints?.adjust) {
    const adj = headPoints.adjust;
    const b = points.pop()!;
    const a = points.pop()!;
    const d = diff(a, b);
    const dl = len(d);
    const mw = width * adj;
    const f = dl > mw ? (dl - mw) / dl : 0.001;
    b[0] = a[0] + d[0] * f;
    b[1] = a[1] + d[1] * f;
    points.push(a);
    points.push(b);
  }

  return { points, curved, width, color, headPoints };
};

function notNull<T>(value: T | null): value is T {
  return value !== null;
}

const update = (el: HTMLDivElement) => {
  const arrows: Arrows = JSON.parse(el.dataset.arrows!);
  const holder = el.closest(`.${ARROWMASTER_CLASS}`);

  const paths = arrows.arrows
    .map((a) => buildPath(a, arrows.defaultArrowSpec))
    .filter(notNull);

  const pathElements = paths.map((path, i) => {
    let d;
    const s = path.points.shift()!.join(" ");
    if (path.curved && path.points.length > 1) {
      const c =
        path.points.length > 2
          ? `C ${path.points.shift()!.join(" ")}, ${path.points
              .shift()!
              .join(" ")},`
          : `Q ${path.points.shift()!.join(" ")},`;
      const e = path.points.map((p) => p.join(" ")).join(" T ");
      d = `M ${s} ${c} ${e}`;
    } else {
      const e = path.points.map((p) => p.join(" ")).join(" L ");
      d = `M ${s} L ${e}`;
    }
    return (
      <path
        key={`path-${i}`}
        d={d}
        stroke={path.color}
        strokeWidth={path.width}
        fill="none"
        markerEnd={path.headPoints ? `url(#marker-${i})` : undefined}
      />
    );
  });

  const markerElements = paths.map(
    (path, i) =>
      path.headPoints && (
        <marker
          key={`marker-${i}`}
          id={`marker-${i}`}
          markerWidth={path.headPoints.size}
          markerHeight={path.headPoints.size}
          refX={path.headPoints.size - path.headPoints.adjust}
          refY={path.headPoints.size / 2}
          orient="auto"
        >
          <path
            d={path.headPoints.svgPath}
            fill={path.headPoints.hollow ? "none" : path.color}
            stroke={path.headPoints.hollow ? path.color : "none"}
          />
        </marker>
      )
  );

  render(
    <>
      <defs>{markerElements}</defs>
      {pathElements}
    </>,
    holder!.firstChild as SVGElement
  );
};

const attach = (el: HTMLDivElement | null, arrows: Arrows) => {
  if (!el) {
    return;
  }

  // TODO: make this better... maybe just one global listening... should also cleanup...
  if (!el.dataset.arrows) {
    new MutationObserver(() => update(el)).observe(el, {
      attributes: true,
      childList: true,
      subtree: true,
    });
    window.addEventListener("resize", () => update(el));
  }

  el.dataset.arrows = JSON.stringify(arrows);
};

export const ArrowArea = ({
  arrows,
  children,
  defaultArrowSpec = {},
}: Props) => (
  <div className={ARROWMASTER_CLASS} style={{ position: "relative" }}>
    <svg
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    />
    <div
      ref={(el) =>
        attach(el, {
          arrows,
          defaultArrowSpec: {
            color: "#000000",
            width: 1,
            headStyle: "default",
            arrowStyle: "none",
            ...defaultArrowSpec,
          },
        })
      }
    >
      {children}
    </div>
  </div>
);

export default ArrowArea;
