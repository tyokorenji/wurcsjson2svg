//@flow
"use strict";


import { Sugar } from "../class/Sugar";
import {basicData} from "../data/graphicsData";


const recuversiveCulcAlreadyGlycanArewaLength = (sugar: Sugar, glycanLength: Object): Object => {
    if(glycanLength.minX > sugar.getXCoord()) {
        glycanLength.minX = sugar.getXCoord();
    }
    if(glycanLength.maxX < sugar.getXCoord()) {
        glycanLength.maxX = sugar.getXCoord();
    }
    if(glycanLength.minY > sugar.getYCoord()) {
        glycanLength.minY = sugar.getYCoord();
    }
    if(glycanLength.maxY < sugar.getYCoord()) {
        glycanLength.maxY = sugar.getYCoord();
    }
    for(let child: Sugar of sugar.getChildSugars()) {
        glycanLength = recuversiveCulcAlreadyGlycanArewaLength(child, glycanLength);
    }
    return glycanLength;
};

const recuversiveCulcNewGlycanLength = (sugar: Sugar, glycanLength: Object) => {
    let normalDistace: number = basicData.symbolDistance + basicData.symbolSize * 2;
    if(glycanLength.minX > (sugar.getXLayer() * normalDistace)) {
        glycanLength.minX = sugar.getXLayer() * normalDistace;
    }
    if(glycanLength.maxX < sugar.getXLayer() * normalDistace) {
        glycanLength.maxX = sugar.getXLayer() * normalDistace;
    }
    if(glycanLength.minY > sugar.getYLayer() * normalDistace) {
        glycanLength.minY = sugar.getYLayer() * normalDistace;
    }
    if(glycanLength.maxY < sugar.getYLayer() * normalDistace) {
        glycanLength.maxY = sugar.getYLayer() * normalDistace;
    }
    for(let child: Sugar of sugar.getChildSugars()) {
        glycanLength = recuversiveCulcNewGlycanLength(child, glycanLength);
    }
    return glycanLength;
};



