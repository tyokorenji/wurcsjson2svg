//@flow
"use strict";
import { JSONParser } from "./js/class/ParserClass/JSONParser";
import {Glycan} from "./js/class/Glycan";
import { createSVGMain } from "./js/createSVG/createSVGMain";


export const SVG_convert = (json) => {
    let jsonObejct: Object = JSON.parse(json);
    let parser: JSONParser = new JSONParser(jsonObejct);
    let glycoJSON: boolean = parser.checkJson();
    if(!glycoJSON) return false;
    let glycans: Array<Glycan> = parser.assignData();
    return createSVGMain(glycans);
};