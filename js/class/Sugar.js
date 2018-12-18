//@flow
"use strict";
import { Node } from "./Node";
import { getColor } from "../data/getColor";
import { Glycan } from "./Glycan";
import { RepeatBracket } from "./RepeatBracket";
import { Cyclic } from "./Cyclic";
import { Modification } from "./Modification";
import { MultipleModification } from "./MultipleModification";
import { Bridge } from "./Bridge";
import { FragmentBracket } from "./FragmentBracket";

class Sugar extends Node{
    name: string;  //単糖の名前
    anomeric: string;  //アノマーの位置（"alpha α a" or "beta β b" or "open o" or "undefined"）
    isomer: string;  //構造異性体("L" or "D" or "undefined")
    ring: string;  //フラノースかピラノースか("pyranose p" or "furanose f" or "undefined")
    glycan: Glycan;  //Sugarが所属するGlycanオブジェクト
    repeatBracket: Object;  //繰り返しのstartNodeの時、Bracketを持つ
    childCyclic: Object; //その糖鎖がCyclic構造を形成する単糖で、非還元末端側の場合
    parentCyclic: Object;  //還元末端側が持つサイクリック
    Xlayer: number;
    YLayer: number;
    childModifications: Array<Object>;
    childMultipleBind: Array<Object>;
    carbBone: number;
    childBridge: Array<Object>;
    fragmentBracket: Object;
    svgXCoord: number;
    svgYCoord: number;
    svgShape: string;


    constructor(name: string){
        super();
        this.name = name;
        this.anomeric = "undefined";
        this.isomer = "undefined";
        this.ring = "undefined";
        this.glycan;
        this.childCyclic = {};
        this.parentCyclic = {};
        this.Xlayer = 0;
        this.Ylayer = 0;
        this.childModifications = [];
        this.childMultipleBind = [];
        this.carbBone = NaN;
        this.repeatBracket = {};
        this.childBridge =[];
        this.fragmentBracket = {};
        this.svgXCoord = -1;
        this.svgYCoord = -1;
        this.svgShape = "";
    }


    changeName(name: string) {
        this.name = name;
    }
    getName(): string{
        return this.name;
    }

    getAnomeric(): string {
        return this.anomeric;
    }

    setAnomeric(anomeric: string) {
        this.anomeric = anomeric;
        return;
    }

    getIsomer(): string {
        return this.isomer;
    }

    setIsomer(isomer: string) {
        this.isomer = isomer;
        return;
    }

    getRing(): string {
        return this.ring;
    }

    setRing(ring: string) {
        this.ring = ring;
        return;
    }


    changeIsomerShape(isomer: string) {
        this.isomerShape.text = isomer;
    }


    //ringの変更時、ringShapeの内容を変更する
    changeRingSape(ring: string) {
        this.ringShape.text = ring;
    }

    //nodeShpaのハイライト
    highLight() {
        this.children[0].alpha = 0.5;
        this.children[0].graphics._stroke.style = getColor("red");
        liaise.stage.update();
    }

    //nodeShpaのオフライト
    offLight() {
        this.children[0].alpha = 1.0;
        this.children[0].graphics._stroke.style  = getColor("black");
        liaise.stage.update();
    }

    //nodeがハイライトされているかを判別
    checkHighLight(): boolean {
        switch (this.children[0].alpha) {
            case 0.5:
                return true;
            default:
                return false;
        }
    }

    //単糖の座標設定
    setCoordinate(x: number, y: number) {
        this.xCoord = x;
        this.yCoord = y;
        this.x = x;
        this.y = y;
    }

    setGlycan(glycan: Glycan) {
        this.glycan = glycan;
        return;
    }

    setChildGlycan(sugar: Sugar) {
        sugar.setGlycan(this.glycan);
        if (sugar.hasChildSugars()) {
            for(let child: Sugar of sugar.getChildSugars()) {
                if(!sugar.isChildCyclicEmpty()) {
                    if(child === sugar.getChildCyclic().getReductionSugar()){
                        continue;
                    }
                }
                this.setChildGlycan(child);
            }
            return;
        }
        else {
            return;
        }
    }

    getGlycan(): Glycan {
        return this.glycan;
    }

    initGlycan() {
        this.glycan = new Glycan();
    }

    setRepeatBracket(repeatBracket: RepeatBracket) {
        this.repeatBracket = repeatBracket;
        return;
    }

    getRepeatBracket(): RepeatBracket {
        return this.repeatBracket;
    }
    isRepeatBracketEmpty(): boolean {
        return !Object.keys(this.repeatBracket).length;
    }
    initRepeatBracket() {
        this.repeatBracket = {};
    }

    setChildCyclic(cyclic: Cyclic) {
        this.childCyclic = cyclic;
        return;
    }
    getChildCyclic(): Cyclic {
        return this.childCyclic;
    }
    isChildCyclicEmpty(): boolean {
        return !Object.keys(this.childCyclic).length;
    }
    initChildCyclic() {
        this.childCyclic = {};
    }

    setParentCyclic(cyclic: Cyclic) {
        this.parentCyclic = cyclic;
        return;
    }
    getParentCyclic(): Cyclic {
        return this.parentCyclic;
    }
    isParentCyclicEmpty(): boolean {
        return !Object.keys(this.parentCyclic).length;
    }
    initParentCyclic() {
        this.parentCyclic = {};
    }


    setXLayer(layer: number) {
        this.Xlayer = layer;
        return;
    }
    getXLayer(): number {
        return this.Xlayer;
    }

    setYLayer(layer: number) {
        this.YLayer = layer;
    }
    getYLayer(): number {
        return this.YLayer;
    }

    setChildModifications(modification: Modification) {
        this.childModifications.push(modification);
        return;
    }
    getChildModifications(): Array<Object> {
        return this.childModifications;
    }
    hasChildModificaiton(): boolean {
        if(this.childModifications.length === 0) return false;
        else return true;
    }

    setChildMultipleBind(bridge: MultipleModification) {
        this.childMultipleBind.push(bridge);
        return;
    }
    getChildMultipleBind(): Array<Object> {
        return this.childMultipleBind;
    }
    hasChildMultipleBind(): boolean {
        if (this.childMultipleBind.length === 0) return false;
        else return true;
    }

    setCarbBone(carbBone: number) {
        this.carbBone = carbBone;
    }

    getCarbBode(): number {
        return this.carbBone;
    }

    setChildBridge(bridge: Bridge) {
        this.childBridge.push(bridge);
    }
    getChildBridge(): Array<Bridge> {
        return this.childBridge;
    }
    hasChildBridge(): boolean {
        if(this.childBridge.length !== 0) return true;
        else return false;
    }

    setFragmentBracket(fragmentBracket: FragmentBracket) {
        this.fragmentBracket = fragmentBracket;
    }
    getFragmentBracket(): FragmentBracket {
        return this.fragmentBracket;
    }
    isFragmentBracketEmpty(): boolean {
        return !Object.keys(this.fragmentBracket).length;
    }

    setSvgXCoord(coord: number) {
        this.svgXCoord = coord;
    }
    getSvgXCoord(): number {
        return this.svgXCoord;
    }

    setSvgYCoord(coord: number) {
        this.svgYCoord = coord;
    }
    getSvgYCoord(): number {
        return this.svgYCoord;
    }

    setSvgShape(svg: string) {
        this.svgShape = svg;
    }
    getSvgShape(): string {
        return this.svgShape;
    }
    addSvgShape(addString: string) {
        this.svgShape += addString;
    }




}

export { Sugar };