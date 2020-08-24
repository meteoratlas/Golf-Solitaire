import * as PIXI from "pixi.js";

class Card extends PIXI.Sprite {
    constructor(suite, rank) {
        this.suite = suite;
        this.rank = rank;
    }
}
