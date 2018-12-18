//@flow
"use strict";

import { Glycan } from "../class/Glycan";
import { Sugar } from "../class/Sugar";
import {recuversive_set_YLayer} from "../drawGlycan/recuversiveSetYLayer";
import {basicData} from "../data/graphicsData";
import {culc_max_min_layer} from "../drawGlycan/culcMaxMinLayer";
import { culc_each_sugar_coordinate } from "./culcEachSugarCoordinate";
import { createSVGShape } from "./createSVGShape";
import { recuversiveSortChildSugar } from "../recuversiveSortChildSugar";

export const createSVG = (glycan: Glycan) => {
    // glycan.getRootNode().sortChildSugar(glycan.getRootNode());
    // for (let child: Sugar of glycan.getRootNode().getChildSugars()) {
    //     child.sortChildSugar(child);
    // }
    recuversiveSortChildSugar(glycan.getRootNode());
    recuversive_set_YLayer(glycan.getRootNode(), 1);
    let normalDistace: number = basicData.symbolDistance + basicData.symbolSize * 2;
    let maxMinLayer: Array<number> = culc_max_min_layer(glycan);
    let viewBox: Array<number> = culcViewBox(maxMinLayer, normalDistace);
    culc_each_sugar_coordinate(glycan.getRootNode(), maxMinLayer, normalDistace);
    recuversiveCreateSVgShapeImport(glycan.getRootNode());
    let resultSVGShape: string = "<?xml version = \"1.0\"?><svg viewbox = \""+ String(viewBox[0])+ " " + String(viewBox[1]) + " " + String(viewBox[2]) + " " + String(viewBox[3]) + "\" xmlns=\"http://www.w3.org/2000/svg\">";
    resultSVGShape = bindLineSting(glycan.getRootNode(), resultSVGShape);
    resultSVGShape = bindSvgString(glycan.getRootNode(), resultSVGShape);
    resultSVGShape += "</svg>";
    downloadData(resultSVGShape);

};


const downloadData = (content: string) => {
    let day: Date = new Date();
    let fileName: string = window.prompt("Please input SVG file name", "" + day.getFullYear() + day.getMonth() + day.getDate() + String(day.getHours()) + String(day.getMinutes()) + String(day.getSeconds()));
    if(!fileName) {
        alert("cancel download.");
        return;
    }
    let mimetype: string = "image/svg+xml .svg";

    var url = (window.URL || window.webkitURL).createObjectURL(new Blob([content], { "type": mimetype }));
    var a = document.createElement("a");

    a.target = "_blank";
    a.download = fileName || "";
    a.href = url;

    a.click();
};

const recuversiveCreateSVgShapeImport = (sugar: Sugar) => {
    createSVGShape(sugar);
    for(let child: Sugar of sugar.getChildSugars()) {
        recuversiveCreateSVgShapeImport(child);
    }
};

const bindSvgString = (sugar: Sugar, resultShape: string): string => {
    resultShape += sugar.getSvgShape();
    for(let child: Sugar of sugar.getChildSugars()) {
        resultShape = bindSvgString(child, resultShape);
    }
    return resultShape;
};

const bindLineSting = (sugar: Sugar, resultShape: string): string => {
    if(sugar.hasParentBond()) {
        resultShape += sugar.getParentBond()[0].getSvgLineShape() + sugar.getParentBond()[0].getSvgTextShape();
    }
    for(let child: Sugar of sugar.getChildSugars()) {
        resultShape = bindLineSting(child, resultShape);
    }
    return resultShape;
};

const culcViewBox = (maxMinLayer: Array<number>, normalDistance: number): Array<number> => {
    let viewBox: Array<number> = [0, 0];  //[x, y, 横の長さ, 縦の長さ]
    viewBox.push((maxMinLayer[0] - maxMinLayer[1] + 1) * normalDistance);
    viewBox.push((maxMinLayer[2] - maxMinLayer[3] + 1) * normalDistance);
    return viewBox;
};

