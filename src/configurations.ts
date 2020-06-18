import { Arrow } from "../lib";

export const initialArrows: Arrow[] = [
  {
    from: { id: "boxA", posX: "middle", posY: "bottom" },
    to: { id: "boxN", posX: "middle", posY: "top" },
    style: {
      width: 2,
      color: "#000000",
      arrow: "smooth",
      head: "default",
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
    style: {
      width: 2,
      color: "#000000",
      head: "disk",
      arrow: "clipCounterclockwise",
    },
  },
  {
    from: { id: "boxE", posX: "middle", posY: "bottom" },
    to: { id: "boxO", posX: "middle", posY: "top" },
    style: {
      width: 2,
      color: "#000000",
      arrow: "none",
      head: "diamond",
    },
  },
  {
    from: { id: "boxA", posX: "middle", posY: "bottom" },
    to: { id: "boxR", posX: "left", posY: "middle" },
    style: {
      width: 2,
      color: "#000000",
      arrow: "corners",
      head: "hollow",
    },
  },
];

export const ramArrows: Arrow[] = [
  {
    from: { id: "boxK", posX: "middle", posY: "middle" },
    to: { id: "boxA", posX: "middle", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxF", posX: "right", posY: "middle" },
    to: { id: "boxA", posX: "middle", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxK", posX: "right", posY: "middle" },
    to: { id: "boxF", posX: "middle", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxF", posX: "middle", posY: "middle" },
    to: { id: "boxF", posX: "right", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxL", posX: "middle", posY: "middle" },
    to: { id: "boxB", posX: "right", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxB", posX: "right", posY: "middle" },
    to: { id: "boxM", posX: "middle", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxG", posX: "middle", posY: "middle" },
    to: { id: "boxH", posX: "middle", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxN", posX: "left", posY: "middle" },
    to: { id: "boxD", posX: "middle", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxD", posX: "middle", posY: "middle" },
    to: { id: "boxO", posX: "left", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxN", posX: "right", posY: "middle" },
    to: { id: "boxE", posX: "middle", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
  {
    from: { id: "boxE", posX: "middle", posY: "middle" },
    to: { id: "boxO", posX: "right", posY: "middle" },
    style: {
      width: 1,
      color: "#000000",
      arrow: "none",
      head: "default",
    },
  },
];
