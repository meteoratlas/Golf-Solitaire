class Draw extends PIXI.Container {
    constructor(deck, backTexture) {
        super();

        this.spaceBetweenPiles = 96;

        const drawPile = new PIXI.Sprite(backTexture);
        drawPile.buttonMode = true;
        drawPile.interactive = true;
        drawPile.on("pointerdown", onDrawPileClicked);

        const discardPile = new PIXI.Sprite(deck.pop().image);
        discardPile.x = drawPile.x + this.spaceBetweenPiles;
    }

    onDrawPileClicked(e) {
        if (deck.length <= 0) return;

        discardPile.push(drawPile.pop());
    }
}
