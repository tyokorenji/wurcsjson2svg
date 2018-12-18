//@flow
"use strict";

import { Sugar } from "./Sugar";

class Cyclic{
    reductionSugar: Sugar;
    nonReductionSugar: Sugar;

    constructor(){
    }

    setReductionSugar(sugar: Sugar) {
        this.reductionSugar = sugar;
        return;
    }
    getReductionSugar(): Sugar {
        return this.reductionSugar;
    }

    setNonReductionSugar(sugar: Sugar) {
        this.nonReductionSugar = sugar;
        return;
    }
    getNonReductionSugar(): Sugar {
        return this.nonReductionSugar;
    }
}

export { Cyclic };