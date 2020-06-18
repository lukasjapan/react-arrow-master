"use strict";
exports.__esModule = true;
var wayPointLogic = function (from, to) {
    // is there some super smart way to do this?
    var dx = to.point[0] - from.point[0];
    var dy = to.point[1] - from.point[1];
    if (dx * from.direction[0] > 0 && dy * to.direction[1] < 0) {
        // single point (counter-clock)
        return [
            {
                absolute: true,
                x: { value: 100, unit: "%" },
                y: { value: 0, unit: "%" }
            },
        ];
    }
    else if (dy * from.direction[1] > 0 && dx * to.direction[0] < 0) {
        // single point (clock)
        return [
            {
                absolute: true,
                x: { value: 0, unit: "%" },
                y: { value: 100, unit: "%" }
            },
        ];
    }
    else if (dx * from.direction[0] > 0 && dx * to.direction[0] < 0) {
        // two points (horizontal)
        return [
            {
                absolute: true,
                x: { value: 50, unit: "%" },
                y: { value: 0, unit: "%" }
            },
            {
                absolute: true,
                x: { value: 50, unit: "%" },
                y: { value: 100, unit: "%" }
            },
        ];
    }
    else if (dy * from.direction[1] > 0 && dy * to.direction[1] < 0) {
        // two points (vertical)
        return [
            {
                absolute: true,
                x: { value: 0, unit: "%" },
                y: { value: 50, unit: "%" }
            },
            {
                absolute: true,
                x: { value: 100, unit: "%" },
                y: { value: 50, unit: "%" }
            },
        ];
    }
    else {
        // need some wrap around component logic... think about this later...
        return [];
    }
};
exports.headStyleAliases = {
    "default": {
        size: 10,
        adjust: 10,
        svgPath: "M0,2 L0,8 L10,5 z",
        hollow: false
    },
    hollow: {
        size: 13,
        adjust: 12,
        svgPath: "M1,3.5 L1,9.5 L11,6.5 z",
        hollow: true
    },
    diamond: {
        size: 12,
        adjust: 11,
        svgPath: "M6,3 L11,6 L6,9 L1,6 z",
        hollow: true
    },
    filledDiamond: {
        size: 10,
        adjust: 5,
        svgPath: "M5,2 L10,5 L5,8 L0,5 z",
        hollow: false
    },
    disk: {
        size: 10,
        adjust: 3,
        svgPath: "M 7 5 m -3, 0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0",
        hollow: false
    },
    circle: {
        size: 10,
        adjust: 7,
        svgPath: "M 6 5 m -3, 0 a 3,3 0 1,0 6,0 a 3,3 0 1,0 -6,0",
        hollow: true
    },
    none: null
};
exports.arrowStyleAliases = {
    none: { curved: false, points: [] },
    clipClockwise: {
        curved: false,
        points: [
            {
                absolute: false,
                x: { value: 0, unit: "%" },
                y: { value: 7.5, unit: "%" }
            },
            {
                absolute: false,
                x: { value: 100, unit: "%" },
                y: { value: 7.5, unit: "%" }
            },
        ]
    },
    clipCounterclockwise: {
        curved: false,
        points: [
            {
                absolute: false,
                x: { value: 0, unit: "%" },
                y: { value: -7.5, unit: "%" }
            },
            {
                absolute: false,
                x: { value: 100, unit: "%" },
                y: { value: -7.5, unit: "%" }
            },
        ]
    },
    arcClockwise: {
        curved: true,
        points: [
            {
                absolute: false,
                x: { value: 50, unit: "%" },
                y: { value: 20, unit: "%" }
            },
        ]
    },
    arcCounterclockwise: {
        curved: true,
        points: [
            {
                absolute: false,
                x: { value: 50, unit: "%" },
                y: { value: -20, unit: "%" }
            },
        ]
    },
    smooth: {
        curved: true,
        points: wayPointLogic
    },
    corners: {
        curved: false,
        points: wayPointLogic
    }
};
