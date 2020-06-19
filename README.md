# react-arrow-master

`react-arrow-master` is a lightweight library for connecting your react components with SVG arrows.
See how it works yourself in the [Sandbox](https://4dtmw.csb.app/)!

![Example](/images/example.png)

## Install

Add `react-arrow-master` to your react project:

```bash
npm install react-arrow-master --save-dev
# or
yarn add react-arrow-master --dev
```

## Usage / Examples

Elements can be connected with arrows if they have an id attribute and are inside an `ArrowArea`.
The arrows are drawn by an absolute positioned SVG element that lies over the `ArrowArea`.

### Simple Arrows - Starting from the Center of an Element

Arrows are drawn from and to the center of the specified elements by default.

```tsx
import { ArrowArea } from "react-arrow-master";

const MyComponent = () => (
  <ArrowArea arrows={[{ from: "el1", to: "el2" }]}>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div id="el1">○</div>
      <div id="el2">○</div>
    </div>
  </ArrowArea>
);
```

![Simple](/images/simple.png)

### Simple Arrows - Starting from the Side of an Element

To start from the side of an element, pass the `id` along with the `posX` and `posY` property as an object.

```tsx
import { ArrowArea } from "react-arrow-master";

const MyComponent = () => (
  <ArrowArea
    arrows={[
      {
        from: { id: "el1", posX: "right", posY: "middle" },
        to: { id: "el2", posX: "left", posY: "middle" },
      },
    ]}
  >
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div id="el1">Element 1</div>
      <div id="el2">Element 2</div>
    </div>
  </ArrowArea>
);
```

![Sides](/images/sides.png)

### Arrows with Custom Style

Each arrow can be styled individually by the `style` propery.

```tsx
import { ArrowArea } from "react-arrow-master";

const MyComponent = () => (
  <ArrowArea
    arrows={[
      { from: "el1", to: "el2", style: { color: "blue" } },
      {
        from: "el3",
        to: "el2",
        style: {
          color: "red",
          width: 2,
          head: "diamond",
          arrow: "smooth",
        },
      },
    ]}
  >
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div id="el1" style={{ marginBottom: 20 }}>
        ○
      </div>
      <div id="el2" style={{ marginBottom: 20 }}>
        ○
      </div>
      <div id="el3" style={{ marginTop: 20 }}>
        ○
      </div>
    </div>
  </ArrowArea>
);
```

![Styled](/images/styled.png)

| Property | Description                                                       | Example                                                                                                     |
| -------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| color    | The color of the arrow as a string that can be understood by SVG. | `#0000ff`, `red`, ...                                                                                       |
| width    | The width of the arrow. Floating point numbers can be used.       | `1`,`1.5`,..                                                                                                |
| head     | The type of the arrow head.                                       | See [here](https://github.com/lukasjapan/react-arrow-master/blob/master/index.d.ts#L36) for possible values |
| arrow    | The type of the arrow line.                                       | See [here](https://github.com/lukasjapan/react-arrow-master/blob/master/index.d.ts#L35) for possible values |

### Default Style

If no style is given, default values are used.
Default values can be expicitly set by passing them to the `ArrowArea`.

```tsx
const MyComponent = () => (
  <ArrowArea
    arrows={[
      { from: "el1", to: "el2" },
      { from: "el3", to: "el2" },
    ]}
    defaultArrowStyle={{ head: "filledDiamond", width: 2 }}
  >
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div id="el1" style={{ marginBottom: 20 }}>
        ○
      </div>
      <div id="el2" style={{ marginBottom: 20 }}>
        ○
      </div>
      <div id="el3" style={{ marginTop: 20 }}>
        ○
      </div>
    </div>
  </ArrowArea>
);
```

![Default Style](/images/default_style.png)

## Advanced Usage

TBA
