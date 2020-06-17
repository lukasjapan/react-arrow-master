"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialArrows = [
    {
        from: { id: "boxA", posX: "middle", posY: "bottom" },
        to: { id: "boxN", posX: "middle", posY: "top" },
        spec: {
            width: 2,
            color: "#000000",
            arrowStyle: "smooth",
            headStyle: "default",
        },
    },
    {
        from: {
            id: "boxB",
            posX: "middle",
            posY: "bottom",
        },
        to: {
            id: "boxD",
            posX: "middle",
            posY: "bottom",
        },
        spec: {
            width: 2,
            color: "#000000",
            headStyle: "disk",
            arrowStyle: "clipCounterclockwise",
        },
    },
    {
        from: { id: "boxE", posX: "middle", posY: "bottom" },
        to: { id: "boxO", posX: "middle", posY: "top" },
        spec: {
            width: 2,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "diamond",
        },
    },
    {
        from: { id: "boxA", posX: "middle", posY: "bottom" },
        to: { id: "boxR", posX: "left", posY: "middle" },
        spec: {
            width: 2,
            color: "#000000",
            arrowStyle: "corners",
            headStyle: "hollow",
        },
    },
];
exports.ramArrows = [
    {
        from: { id: "boxK", posX: "middle", posY: "middle" },
        to: { id: "boxA", posX: "middle", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxF", posX: "right", posY: "middle" },
        to: { id: "boxA", posX: "middle", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxK", posX: "right", posY: "middle" },
        to: { id: "boxF", posX: "middle", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxF", posX: "middle", posY: "middle" },
        to: { id: "boxF", posX: "right", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxL", posX: "middle", posY: "middle" },
        to: { id: "boxB", posX: "right", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxB", posX: "right", posY: "middle" },
        to: { id: "boxM", posX: "middle", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxG", posX: "middle", posY: "middle" },
        to: { id: "boxH", posX: "middle", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxN", posX: "left", posY: "middle" },
        to: { id: "boxD", posX: "middle", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxD", posX: "middle", posY: "middle" },
        to: { id: "boxO", posX: "left", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxN", posX: "right", posY: "middle" },
        to: { id: "boxE", posX: "middle", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
    {
        from: { id: "boxE", posX: "middle", posY: "middle" },
        to: { id: "boxO", posX: "right", posY: "middle" },
        spec: {
            width: 1,
            color: "#000000",
            arrowStyle: "none",
            headStyle: "default",
        },
    },
];
