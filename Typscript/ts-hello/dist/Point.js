"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointC = void 0;
class PointC {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log('Value of x = ' + this._x + '\nvalue of y = ' + this._y);
    }
    getDistance(another) {
    }
    get_x() {
        return this._x;
    }
    set_x(value) {
        if (value < 0)
            throw new Error("value cannot be less than 0..");
        this._x = value;
    }
    get x() {
        return this._x;
    }
    set x(value_x) {
        if (value_x !== undefined && value_x < 0)
            throw new Error("value cannot be less than 0..");
        this._x = value_x;
    }
}
exports.PointC = PointC;
//# sourceMappingURL=Point.js.map