//@flow
"use strict";

import { basicData } from "./data/graphicsData";


export let getRelativeCoordinate = (mouseX: number, mouseY: number): Array<number> => {
    let normalDistace = basicData.symbolDistance + basicData.symbolSize * 2;
    let distace = basicData.symbolDistance + basicData.symbolSize * 2;
    let flagX = false;
    let flagY = false;
    while(distace < basicData.canvasSize + normalDistace) {
        if(distace - normalDistace < mouseX && distace > mouseX){
            mouseX = (distace - normalDistace) + (normalDistace / 2);
            flagX = true;
        }
        if(distace - normalDistace < mouseY && distace > mouseY){
            mouseY = (distace - normalDistace) + (normalDistace / 2);
            flagY = true;
        }
        distace = distace + normalDistace;
        if(distace > basicData.canvasSize - normalDistace) {
            if(!flagX && !flagY) {
                mouseX = 0;
                mouseY = 0;
            }
        }
    }

    return [mouseX, mouseY];
};


