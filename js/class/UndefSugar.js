//@flow
"use strict";

import { Sugar } from "./Sugar";
import {getColor} from "../data/getColor";
class UndefSugar extends Sugar  {
    constructor(name: string) {
        super(name);
    }

    setCoordinate(x: number, y: number) {
        this.x = x - this.children[1].getMeasuredWidth() / 2;
        this.y = y - this.children[1].getMeasuredHeight() / 2;
        this.xCoord = x;
        this.yCoord = y;
    }

}

export { UndefSugar };