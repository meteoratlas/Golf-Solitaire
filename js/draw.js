class Draw extends PIXI.Container {
    constructor(point, deck, backTexture) {
        super();

        this.position = point;
        this.spaceBetweenPiles = 96;
        this.deck = deck;
        this.discarded = [];

        this.drawPile = new PIXI.Sprite(backTexture);
        this.drawPile.anchor.set(0.5);
        this.drawPile.buttonMode = true;
        this.drawPile.interactive = true;
        this.drawPile.scale.set(0.75);

        this.drawPile.on("pointerdown", this.onDrawPileClicked);

        this.addChild(this.drawPile);

        this.discardPile = new PIXI.Sprite(this.deck.pop().image);
        this.discardPile.x = this.drawPile.x + this.spaceBetweenPiles;
        this.discardPile.anchor.set(0.5);
        this.addChild(this.discardPile);
    }

    onDrawPileClicked = (e) => {
        if (this.deck.length <= 0) return;

        this.discarded.push(this.deck.pop());
    };
}
