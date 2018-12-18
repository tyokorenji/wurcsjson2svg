//@flow
"use strict";

import {Glycan} from "../class/Glycan";
import {Sugar} from "../class/Sugar";
import {Fragment} from "../class/Fragment";
import {FragmentBracket} from "../class/FragmentBracket";

class vSugar extends Sugar {
    constructor(props) {
        super(props);

    }

}

export const setYLayer = (glycanArray: Array<Glycan>): Array<FragmentBracket> => {
    let fragmentBrackets: Array<FragmentBracket> = [];
    let mainGlycan: Glycan = new Glycan();
    for(let glycan: Glycan of glycanArray){
        if(glycan instanceof Fragment) continue;
        else {
            fragmentBrackets = serchFragmentBracket(glycan, fragmentBrackets);
            mainGlycan = glycan;
        }
    }
    for(let bracket: FragmentBracket of fragmentBrackets) {
        let vNode: vSugar = new vSugar("");
        let fragments: Array<Fragment> = bracket.getChildGlycans();
        for(let fragment: Fragment of fragments) {
            vNode.setChildSugars(fragment.getRootNode());
            fragment.getRootNode().setParentSugars(vNode);
        }
        setEndFragmentYLayer(vNode, 0);
    }
    setEndFragmentYLayer(mainGlycan.getRootNode(), 0);
    fragmentBrackets.reverse();
    for(let bracket: FragmentBracket of fragmentBrackets) {
        if(bracket.isEmptyParentGlycan()){
            let parentSugars: Array<Sugar> = bracket.getParentSugars();
            let minY: number = 100;
            let maxY: number = 0;
            for(let parentSugar: Sugar of parentSugars) {
                if(minY > parentSugar.getYLayer()) minY = parentSugar.getYLayer();
                if(maxY < parentSugar.getYLayer()) maxY = parentSugar.getYLayer();
            }
            let vNode: vSugar = bracket.getChildGlycans()[0].getRootNode().getParentSugars()[0];
            let middleLayer: number = Math.floor((maxY + minY) / 2);
            bracket.getChildGlycans()[0].culcPlucYLayer(vNode.getYLayer() - middleLayer + 1);

        }
        else {
            let parentGlycan: Glycan = bracket.getParentGlycan();
            parentGlycan.recversiveCulcMaxMinYLayer(parentGlycan.getRootNode());
            let vNode: vSugar = bracket.getChildGlycans()[0].getRootNode().getParentSugars()[0];
            let middleLayer: number = Math.floor((parentGlycan.maxXLayer + parentGlycan.minYLayer) / 2);
            bracket.getChildGlycans()[0].culcPlucYLayer(vNode.getYLayer() - middleLayer + 1);
        }
    }
    return fragmentBrackets.reverse();
};



const serchFragmentBracket = (glycan: Glycan, fragmentBrackets: Array<FragmentBracket>): Array<FragmentBracket> => {
    if(glycan.isFragmentBracketEmpty()) {
        let nonReductionSugars: Array<Sugar> = [];
        nonReductionSugars = recuversiveNonReductionSugar(glycan.getRootNode(), nonReductionSugars);
        let counter: number = 0;
        for(let reductionSugar: Sugar of nonReductionSugars) {
            if(reductionSugar.isFragmentBracketEmpty()) {
                counter += 1;
            }
            else{
                counter += 1;
                for(let fragment: Fragment of reductionSugar.getFragmentBracket().getChildGlycans()) {
                    fragmentBrackets = serchFragmentBracket(fragment, fragmentBrackets);
                }
                let same_FLAG: boolean =false;
                for(let fragmentBracket: FragmentBracket of fragmentBrackets) {
                    if(fragmentBracket === glycan.getFragmentBracket()) {
                        same_FLAG = true;
                    }
                }
                if(!same_FLAG) {
                    fragmentBrackets.push(glycan.getFragmentBracket());
                }
            }
        }
        if(counter === nonReductionSugars.length) {
            return fragmentBrackets;
        }
    }
    else {
        for(let fragmentBracket: FragmentBracket of fragmentBrackets) {
            if(fragmentBracket === glycan.getFragmentBracket()) {
                return  fragmentBrackets;
            }
        }
        for(let fragment: Fragment of glycan.getFragmentBracket().getChildGlycans()) {
            fragmentBrackets = serchFragmentBracket(fragment, fragmentBrackets);
        }
        let same_FLAG: boolean = false;
        for(let fragmentBracket: FragmentBracket of fragmentBrackets) {
            if(fragmentBracket === glycan.getFragmentBracket()) {
                same_FLAG = true;
            }
        }
        if(!same_FLAG) {
            fragmentBrackets.push(glycan.getFragmentBracket());
        }
        return fragmentBrackets;

    }
    return fragmentBrackets;
};

const recuversiveNonReductionSugar = (sugar: Sugar, nonReductionSugars: Array<Sugar>): Array<Sugar> => {
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()){
            for(let child: Sugar of sugar.getChildSugars()) {
                nonReductionSugars = recuversiveNonReductionSugar(child, nonReductionSugars);
            }
        }
        else {
            if(sugar.getChildSugars().length === 1) {
                nonReductionSugars.push(sugar);
            }
            else {
                for(let child: Sugar of sugar.getChildSugars()) {
                    if(child === sugar.getChildCyclic().getReductionSugar()) continue;
                    else {
                        nonReductionSugars = recuversiveNonReductionSugar(child, nonReductionSugars);
                    }
                }
            }
        }
    }
    else {
        nonReductionSugars.push(sugar);
        return nonReductionSugars;
    }
    return nonReductionSugars;
};



//普通の糖鎖構造のYLayerのソート
const setEndFragmentYLayer = (sugar: Sugar, most_layer: number): number => {
    if(sugar.hasChildSugars()) {
        if(sugar.isChildCyclicEmpty()) {
            switch(sugar.getChildSugars().length % 2) {
                case 0: {
                    for(let child: Sugar of sugar.getChildSugars()) {
                        setEndFragmentYLayer(child, most_layer);
                        if(child === sugar.getChildSugars()[Math.floor(sugar.getChildSugars().length / 2) - 1]){
                            most_layer += 2;
                        }
                        else {
                            most_layer += 1;
                        }
                    }
                    sugar.setYLayer(sugar.getChildSugars()[sugar.getChildSugars().length / 2].getYLayer() - 1);
                    break;
                }
                case 1: {
                    for(let child: Sugar of sugar.getChildSugars()) {
                        setEndFragmentYLayer(child, most_layer);
                        most_layer += 1;
                    }
                    sugar.setYLayer(sugar.getChildSugars()[Math.floor(sugar.getChildSugars().length / 2)].getYLayer());
                    break;
                }
            }
        }
        else {
            let cyclicSugar: Sugar = sugar.getChildCyclic().getReductionSugar();
            let counter = 0;
            let maxY = 0;
            let minY = 100;
            switch((sugar.getChildSugars().length - 1) % 2) {
                case 0: {
                    for(let child: Sugar of sugar.getChildSugars()) {
                        if(child === cyclicSugar) continue;
                        if(maxY < most_layer) maxY = most_layer;
                        if(minY > most_layer) minY = most_layer;
                        setEndFragmentYLayer(child, most_layer);
                        counter += 1;
                        if(counter === (sugar.getChildSugars().length - 1) / 2){
                            most_layer += 2;
                        }
                        else {
                            most_layer += 1;
                        }
                    }
                    sugar.setYLayer((maxY + minY) / 2);
                    break;
                }
                case 1: {
                    let maxY = 0;
                    let minY = 100;
                    for(let child: Sugar of sugar.getChildSugars()) {
                        if(child === cyclicSugar) continue;
                        if(maxY < most_layer) maxY = most_layer;
                        if(minY > most_layer) minY = most_layer;
                        setEndFragmentYLayer(child, most_layer);
                        most_layer += 1;
                    }
                    sugar.setYLayer((maxY + minY) / 2);
                    break;
                }
            }
            return most_layer;
        }
    }
    else {
        sugar.setYLayer(most_layer);
        return most_layer;
    }
    return most_layer;
};








