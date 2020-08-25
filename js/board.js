class Board extends PIXI.Container {
    constructor(tableaus) {
        this.tableaus = tableaus; // number of card stacks
        this.tableauGutter = app.renderer.width * 0.05;
    }
}
