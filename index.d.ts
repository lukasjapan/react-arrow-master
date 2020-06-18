import * as React from "react";
interface Props {
    arrows: Arrow[];
    defaultArrowSpec?: Partial<ArrowSpec>;
    children: React.ReactNode;
}
export declare type Point = [number, number];
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
    points: ExtraPoint[] | ((from: DirectedPoint, to: DirectedPoint) => ExtraPoint[]);
}
export interface HeadPointSpec {
    size: number;
    adjust: number;
    hollow: boolean;
    svgPath: string;
}
export declare type ArrowStyleAlias = "none" | "clipClockwise" | "clipCounterclockwise" | "arcClockwise" | "arcCounterclockwise" | "corners" | "smooth";
export declare type HeadStyleAlias = "default" | "hollow" | "filledDiamond" | "diamond" | "disk" | "circle" | "none";
export interface ArrowSpec {
    width: number;
    color: string;
    arrowStyle: ArrowStyleAlias | MidPointSpec;
    headStyle: HeadStyleAlias;
}
export declare type PosXLocation = "left" | "middle" | "right";
export declare type PosYLocation = "top" | "middle" | "bottom";
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
export declare const ArrowArea: ({ arrows, children, defaultArrowSpec, }: Props) => JSX.Element;
export default ArrowArea;
