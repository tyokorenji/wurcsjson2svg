//@flow
"use strict";

import { Node } from "./Node";
import { MultipleModificationBind } from "./MultipleModificationBind";

export class MultipleModification extends Node {
    name: string;
    MultipleBind: Object;
    childCommaShape: Object;
    fuzzy: boolean;

    constructor(){
        super();
        this.name = "";
        this.MultipleBind = {};
        this.childCommaShape = {};
        this.fuzzy = false;
    }

    setName(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setMultipleBind(position: MultipleModificationBind) {
        this.MultipleBind = (position);
    }
    getMultipleBind(): MultipleModificationBind {
        return this.MultipleBind;
    }
    isChildCommaShapeEmpty(): boolean {
        return !Object.keys(this.childCommaShape).length;
    }
}