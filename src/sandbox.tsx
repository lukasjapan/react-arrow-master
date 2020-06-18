import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ArrowArea,
  Arrow,
  PosXLocation,
  PosYLocation,
  ArrowStyleAlias,
  HeadStyleAlias,
  ArrowLocation,
} from "../lib";
import { CompactPicker } from "react-color";
import { ramArrows, initialArrows } from "./configurations";

const cells = 25;

const Select = (props: {
  value: any;
  values: [any, string][];
  setValue: (newValue: any) => void;
}) => (
  <select
    className="form-control"
    onChange={(e) => props.setValue(JSON.parse(e.target.value))}
    value={JSON.stringify(props.value)}
  >
    {props.values.map((pair) => (
      <option key={JSON.stringify(pair[0])} value={JSON.stringify(pair[0])}>
        {pair[1]}
      </option>
    ))}
  </select>
);

const LocationSetting = (props: {
  location: ArrowLocation;
  setLocation: (location: ArrowLocation) => void;
}) => (
  <div className="form-row">
    <div className="form-group col-md-4">
      <label>Target</label>
      <Select
        value={props.location.id}
        values={Array(cells)
          .fill(null)
          .map((_, i) => [
            `box${String.fromCharCode(65 + i)}`,
            `Box ${String.fromCharCode(65 + i)}`,
          ])}
        setValue={(id) => {
          props.location.id = id;
          props.setLocation(props.location);
        }}
      />
    </div>
    <div className="form-group col-md-4">
      <label>Vertical Position</label>
      <Select
        value={props.location.posX}
        values={[
          ["left", "Left"],
          ["middle", "Middle"],
          ["right", "Right"],
        ]}
        setValue={(posX) => {
          props.location.posX = posX;
          props.setLocation(props.location);
        }}
      />
    </div>
    <div className="form-group col-md-4">
      <label>Vertical Position</label>
      <Select
        value={props.location.posY}
        values={[
          ["top", "Top"],
          ["middle", "Middle"],
          ["bottom", "Bottom"],
        ]}
        setValue={(posY) => {
          props.location.posY = posY;
          props.setLocation(props.location);
        }}
      />
    </div>
  </div>
);

const ArrowSettings = (props: {
  arrow: Arrow;
  setArrow: (newSpec: Arrow) => void;
}) => (
  <>
    <div className="form-group row">
      <label className="col-sm-3">Arrow From</label>
      <div className="col-sm-9">
        <LocationSetting
          location={props.arrow.from as ArrowLocation}
          setLocation={(location) => {
            props.arrow.from = location;
            props.setArrow(props.arrow);
          }}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-3">Arrow To</label>
      <div className="col-sm-9">
        <LocationSetting
          location={props.arrow.to as ArrowLocation}
          setLocation={(location) => {
            props.arrow.to = location;
            props.setArrow(props.arrow);
          }}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-3">Color</label>
      <div className="col-sm-9">
        <CompactPicker
          color={props.arrow.spec!.color}
          onChange={(color) => {
            props.arrow.spec!.color = color.hex;
            props.setArrow(props.arrow);
          }}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-3">Width</label>
      <div className="col-sm-9">
        <input
          type="number"
          className="form-control"
          min="0"
          value={props.arrow.spec!.width}
          onChange={(e) => {
            props.arrow.spec!.width = Number.parseFloat(e.target.value);
            props.setArrow(props.arrow);
          }}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-3">Arrow Style</label>
      <div className="col-sm-9">
        <Select
          value={props.arrow.spec!.arrowStyle}
          values={[
            ["none", "Direct"],
            ["corners", "Corners"],
            ["smooth", "Smooth"],
            ["clipClockwise", "Clip - Clockwise"],
            ["clipCounterclockwise", "Clip - Counter-Clockwise"],
            ["arcClockwise", "Arc - Clockwise"],
            ["arcCounterclockwise", "Arc - Counter-Clockwise"],
          ]}
          setValue={(arrowStyle) => {
            props.arrow.spec!.arrowStyle = arrowStyle;
            props.setArrow(props.arrow);
          }}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-3">Head Style</label>
      <div className="col-sm-9">
        <Select
          value={props.arrow.spec!.headStyle}
          values={[
            ["default", "Default"],
            ["hollow", "Hollow"],
            ["filledDiamond", "Diamond (Filled)"],
            ["diamond", "Diamond"],
            ["disk", "Disk"],
            ["circle", "Circle"],
            ["none", "None"],
          ]}
          setValue={(headStyle) => {
            props.arrow.spec!.headStyle = headStyle;
            props.setArrow(props.arrow);
          }}
        />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-sm-3">JSON</label>
      <div className="col-sm-9">
        <pre>{JSON.stringify(props.arrow, undefined, 4)}</pre>
      </div>
    </div>
  </>
);

type BoxType = "dim" | "solid" | "invisible";

const colors = ["#000000", "#FF0000", "#00FF00", "#0000FF"];

const posX: PosXLocation[] = ["left", "middle", "right"];
const posY: PosYLocation[] = ["top", "middle", "bottom"];
const headStyle: HeadStyleAlias[] = [
  "default",
  "hollow",
  "filledDiamond",
  "diamond",
  "disk",
  "circle",
  "none",
];
const arrowStyle: ArrowStyleAlias[] = [
  "none",
  "clipClockwise",
  "clipCounterclockwise",
  "arcClockwise",
  "arcCounterclockwise",
  "corners",
  "smooth",
];

const rand = (n: number): number => Math.floor(Math.random() * n);
const randFrom = <T extends any>(array: T[]) => array[rand(array.length)];

const randomArrow = () => ({
  from: {
    id: `box${String.fromCharCode(65 + rand(cells))}`,
    posX: randFrom(posX),
    posY: randFrom(posY),
  },
  to: {
    id: `box${String.fromCharCode(65 + rand(cells))}`,
    posX: randFrom(posX),
    posY: randFrom(posY),
  },
  spec: {
    width: Math.random() * 2 + 1,
    color: randFrom(colors),
    headStyle: randFrom(headStyle),
    arrowStyle: randFrom(arrowStyle),
  },
});

const clearBoxes: BoxType[] = Array(cells)
  .fill(null)
  .map(() => "dim");

const initialBoxes = [...clearBoxes];
initialBoxes[0] = "solid";
initialBoxes[1] = "solid";
initialBoxes[3] = "solid";
initialBoxes[4] = "solid";
initialBoxes[13] = "solid";
initialBoxes[14] = "solid";
initialBoxes[17] = "solid";

const App = () => {
  const [arrows, setArrows] = React.useState(initialArrows);
  const [boxes, setBoxes] = React.useState(initialBoxes);
  const [arrowIndex, setArrowIndex] = React.useState(0);

  return (
    <ArrowArea arrows={arrows}>
      <div
        style={{
          fontFamily: "sansSerif",
          textAlign: "center",
        }}
      >
        <h1>Hello CodeSandbox</h1>
        <ArrowArea
          arrows={[
            {
              from: { id: "from", posY: "bottom" },
              to: { id: "to", posY: "bottom" },
              spec: { arrowStyle: "clipCounterclockwise" },
            },
          ]}
        >
          Start <span id="from">editing</span> to see some{" "}
          <span id="to">magic</span> happen!
          <br />
          <br />
          <br />
        </ArrowArea>
      </div>
      <div className="container">
        <h1
          onClick={() => {
            setArrows(ramArrows);
            setBoxes(clearBoxes);
          }}
        >
          React Arrow Master - Sandbox
        </h1>
        <p></p>
        <hr />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            boxSizing: "border-box",
            gridGap: "20px",
          }}
        >
          {boxes.map((type, i) => (
            <div
              key={`box${i}-${type}`}
              id={`box${String.fromCharCode(65 + i)}`}
              onClick={() => {
                boxes[i] =
                  (boxes[i] == "invisible" && "dim") ||
                  (boxes[i] == "dim" && "solid") ||
                  "invisible";
                setBoxes([...boxes]);
              }}
              style={{
                height: 100,
                cursor: "pointer",
                ...((type == "solid" && {
                  border: "2px solid #000000",
                  borderRadius: 10,
                }) ||
                  (type == "dim" && {
                    border: "1px dashed #e5e5e5",
                    borderRadius: 10,
                  }) ||
                  {}),
              }}
            >
              <div
                style={{
                  height: 100,
                  textAlign: "center",
                  fontSize: "2em",
                  lineHeight: "100px",
                  color:
                    type == "solid"
                      ? "#000000"
                      : type == "dim"
                      ? "#e9e9e9"
                      : "transparent",
                }}
              >
                {type !== "invisible" && `Box ${String.fromCharCode(65 + i)}`}
              </div>
            </div>
          ))}
        </div>
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                const times = rand(3) + 3;
                const arrows = Array(times).fill(null).map(randomArrow);
                setArrows(arrows);
                setBoxes([...clearBoxes]);
              }}
            >
              Randomize
            </button>
          </li>
          <li className="nav-item">&nbsp;</li>
          <li className="nav-item">
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                setArrows([]);
                setBoxes([...clearBoxes]);
              }}
            >
              Clear
            </button>
          </li>
          <li className="nav-item">&nbsp;</li>
          <li className="nav-item">
            <button
              onClick={() => {
                arrows.push(randomArrow());
                setArrows([...arrows]);
                setArrowIndex(arrows.length - 1);
              }}
              className="btn btn-success"
            >
              Add Arrow
            </button>
          </li>
          <li className="nav-item">&nbsp;&nbsp;&nbsp;</li>
          {arrows.map((_, i) => (
            <li className="nav-item" key={i}>
              <a
                href="#"
                className={`nav-link ${arrowIndex == i && "active"}`}
                onClick={() => setArrowIndex(i)}
              >
                Arrow {i + 1}
              </a>
            </li>
          ))}
        </ul>
        <br />
        {arrows[arrowIndex] && (
          <ArrowSettings
            arrow={arrows[arrowIndex]}
            setArrow={(arrow) => {
              arrows[arrowIndex] = arrow;
              setArrows([...arrows]);
            }}
          />
        )}
      </div>
    </ArrowArea>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
