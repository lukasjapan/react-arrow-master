"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var lib_1 = require("../lib");
var react_color_1 = require("react-color");
var configurations_1 = require("./configurations");
var cells = 25;
var Select = function (props) { return (React.createElement("select", { className: "form-control", onChange: function (e) { return props.setValue(JSON.parse(e.target.value)); }, value: JSON.stringify(props.value) }, props.values.map(function (pair) { return (React.createElement("option", { key: JSON.stringify(pair[0]), value: JSON.stringify(pair[0]) }, pair[1])); }))); };
var LocationSetting = function (props) { return (React.createElement("div", { className: "form-row" },
    React.createElement("div", { className: "form-group col-md-4" },
        React.createElement("label", null, "Target"),
        React.createElement(Select, { value: props.location.id, values: Array(cells)
                .fill(null)
                .map(function (_, i) { return [
                "box" + String.fromCharCode(65 + i),
                "Box " + String.fromCharCode(65 + i),
            ]; }), setValue: function (id) {
                props.location.id = id;
                props.setLocation(props.location);
            } })),
    React.createElement("div", { className: "form-group col-md-4" },
        React.createElement("label", null, "Vertical Position"),
        React.createElement(Select, { value: props.location.posX, values: [
                ["left", "Left"],
                ["middle", "Middle"],
                ["right", "Right"],
            ], setValue: function (posX) {
                props.location.posX = posX;
                props.setLocation(props.location);
            } })),
    React.createElement("div", { className: "form-group col-md-4" },
        React.createElement("label", null, "Vertical Position"),
        React.createElement(Select, { value: props.location.posY, values: [
                ["top", "Top"],
                ["middle", "Middle"],
                ["bottom", "Bottom"],
            ], setValue: function (posY) {
                props.location.posY = posY;
                props.setLocation(props.location);
            } })))); };
var ArrowSettings = function (props) { return (React.createElement(React.Fragment, null,
    React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-sm-3" }, "Arrow From"),
        React.createElement("div", { className: "col-sm-9" },
            React.createElement(LocationSetting, { location: props.arrow.from, setLocation: function (location) {
                    props.arrow.from = location;
                    props.setArrow(props.arrow);
                } }))),
    React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-sm-3" }, "Arrow To"),
        React.createElement("div", { className: "col-sm-9" },
            React.createElement(LocationSetting, { location: props.arrow.to, setLocation: function (location) {
                    props.arrow.to = location;
                    props.setArrow(props.arrow);
                } }))),
    React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-sm-3" }, "Color"),
        React.createElement("div", { className: "col-sm-9" },
            React.createElement(react_color_1.CompactPicker, { color: props.arrow.spec.color, onChange: function (color) {
                    props.arrow.spec.color = color.hex;
                    props.setArrow(props.arrow);
                } }))),
    React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-sm-3" }, "Width"),
        React.createElement("div", { className: "col-sm-9" },
            React.createElement("input", { type: "number", className: "form-control", min: "0", value: props.arrow.spec.width, onChange: function (e) {
                    props.arrow.spec.width = Number.parseFloat(e.target.value);
                    props.setArrow(props.arrow);
                } }))),
    React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-sm-3" }, "Arrow Style"),
        React.createElement("div", { className: "col-sm-9" },
            React.createElement(Select, { value: props.arrow.spec.arrowStyle, values: [
                    ["none", "Direct"],
                    ["corners", "Corners"],
                    ["smooth", "Smooth"],
                    ["clipClockwise", "Clip - Clockwise"],
                    ["clipCounterclockwise", "Clip - Counter-Clockwise"],
                    ["arcClockwise", "Arc - Clockwise"],
                    ["arcCounterclockwise", "Arc - Counter-Clockwise"],
                ], setValue: function (arrowStyle) {
                    props.arrow.spec.arrowStyle = arrowStyle;
                    props.setArrow(props.arrow);
                } }))),
    React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-sm-3" }, "Head Style"),
        React.createElement("div", { className: "col-sm-9" },
            React.createElement(Select, { value: props.arrow.spec.headStyle, values: [
                    ["default", "Default"],
                    ["hollow", "Hollow"],
                    ["filledDiamond", "Diamond (Filled)"],
                    ["diamond", "Diamond"],
                    ["disk", "Disk"],
                    ["circle", "Circle"],
                    ["none", "None"],
                ], setValue: function (headStyle) {
                    props.arrow.spec.headStyle = headStyle;
                    props.setArrow(props.arrow);
                } }))),
    React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-sm-3" }, "JSON"),
        React.createElement("div", { className: "col-sm-9" },
            React.createElement("pre", null, JSON.stringify(props.arrow, undefined, 4)))))); };
var colors = ["#000000", "#FF0000", "#00FF00", "#0000FF"];
var posX = ["left", "middle", "right"];
var posY = ["top", "middle", "bottom"];
var headStyle = [
    "default",
    "hollow",
    "filledDiamond",
    "diamond",
    "disk",
    "circle",
    "none",
];
var arrowStyle = [
    "none",
    "clipClockwise",
    "clipCounterclockwise",
    "arcClockwise",
    "arcCounterclockwise",
    "corners",
    "smooth",
];
var rand = function (n) { return Math.floor(Math.random() * n); };
var randFrom = function (array) { return array[rand(array.length)]; };
var randomArrow = function () { return ({
    from: {
        id: "box" + String.fromCharCode(65 + rand(cells)),
        posX: randFrom(posX),
        posY: randFrom(posY),
    },
    to: {
        id: "box" + String.fromCharCode(65 + rand(cells)),
        posX: randFrom(posX),
        posY: randFrom(posY),
    },
    spec: {
        width: Math.random() * 2 + 1,
        color: randFrom(colors),
        headStyle: randFrom(headStyle),
        arrowStyle: randFrom(arrowStyle),
    },
}); };
var clearBoxes = Array(cells)
    .fill(null)
    .map(function () { return "dim"; });
var initialBoxes = __spreadArrays(clearBoxes);
initialBoxes[0] = "solid";
initialBoxes[1] = "solid";
initialBoxes[3] = "solid";
initialBoxes[4] = "solid";
initialBoxes[13] = "solid";
initialBoxes[14] = "solid";
initialBoxes[17] = "solid";
var App = function () {
    var _a = React.useState(configurations_1.initialArrows), arrows = _a[0], setArrows = _a[1];
    var _b = React.useState(initialBoxes), boxes = _b[0], setBoxes = _b[1];
    var _c = React.useState(0), arrowIndex = _c[0], setArrowIndex = _c[1];
    return (React.createElement(lib_1.ArrowArea, { arrows: arrows },
        React.createElement("div", { className: "container" },
            React.createElement("h1", { onClick: function () {
                    setArrows(configurations_1.ramArrows);
                    setBoxes(clearBoxes);
                } }, "React Arrow Master - Sandbox"),
            React.createElement("p", null),
            React.createElement("hr", null),
            React.createElement("div", { style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    boxSizing: "border-box",
                    gridGap: "20px",
                } }, boxes.map(function (type, i) { return (React.createElement("div", { key: "box" + i + "-" + type, id: "box" + String.fromCharCode(65 + i), onClick: function () {
                    boxes[i] =
                        (boxes[i] == "invisible" && "dim") ||
                            (boxes[i] == "dim" && "solid") ||
                            "invisible";
                    setBoxes(__spreadArrays(boxes));
                }, style: __assign({ height: 100, cursor: "pointer" }, ((type == "solid" && {
                    border: "2px solid #000000",
                    borderRadius: 10,
                }) ||
                    (type == "dim" && {
                        border: "1px dashed #e5e5e5",
                        borderRadius: 10,
                    }) ||
                    {})) },
                React.createElement("div", { style: {
                        height: 100,
                        textAlign: "center",
                        fontSize: "2em",
                        lineHeight: "100px",
                        color: type == "solid"
                            ? "#000000"
                            : type == "dim"
                                ? "#e9e9e9"
                                : "transparent",
                    } }, type !== "invisible" && "Box " + String.fromCharCode(65 + i)))); })),
            React.createElement("hr", null),
            React.createElement("ul", { className: "nav nav-pills" },
                React.createElement("li", { className: "nav-item" },
                    React.createElement("button", { className: "btn btn-outline-primary", onClick: function () {
                            var times = rand(3) + 3;
                            var arrows = Array(times).fill(null).map(randomArrow);
                            setArrows(arrows);
                            setBoxes(__spreadArrays(clearBoxes));
                        } }, "Randomize")),
                React.createElement("li", { className: "nav-item" }, "\u00A0"),
                React.createElement("li", { className: "nav-item" },
                    React.createElement("button", { className: "btn btn-outline-danger", onClick: function () {
                            setArrows([]);
                            setBoxes(__spreadArrays(clearBoxes));
                        } }, "Clear")),
                React.createElement("li", { className: "nav-item" }, "\u00A0"),
                React.createElement("li", { className: "nav-item" },
                    React.createElement("button", { onClick: function () {
                            arrows.push(randomArrow());
                            setArrows(__spreadArrays(arrows));
                            setArrowIndex(arrows.length - 1);
                        }, className: "btn btn-success" }, "Add Arrow")),
                React.createElement("li", { className: "nav-item" }, "\u00A0\u00A0\u00A0"),
                arrows.map(function (_, i) { return (React.createElement("li", { className: "nav-item", key: i },
                    React.createElement("a", { href: "#", className: "nav-link " + (arrowIndex == i && "active"), onClick: function () { return setArrowIndex(i); } },
                        "Arrow ",
                        i + 1))); })),
            React.createElement("br", null),
            arrows[arrowIndex] && (React.createElement(ArrowSettings, { arrow: arrows[arrowIndex], setArrow: function (arrow) {
                    arrows[arrowIndex] = arrow;
                    setArrows(__spreadArrays(arrows));
                } })))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("container"));
