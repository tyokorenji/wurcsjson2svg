//@flow
"use strict";

import { Node } from "./Node";
import { Modificationbond } from "./Modificationbond";

class Modification extends Node {
    name: string;  //名前
    modificationBond: Modificationbond;
    childCommaShape: Object;

    constructor(){
        super();
        this.name = "";
        this.modificationBond;
        this.childCommaShape = {};
    }

    setName(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setModificationBond(position: Modificationbond) {
        this.modificationBond = position;
    }
    getModificationBond(): Modificationbond {
        return this.modificationBond;
    }

    isChildCommaShapeEmpty(): boolean {
        return !Object.keys(this.childCommaShape).length;
    }

}

export { Modification };