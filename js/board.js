class Board extends PIXI.Container {
    constructor(tableausNumber, deck) {
        super();
        this.tableausNumber = tableausNumber; // number of card stacks
        this.tableauGutter = app.renderer.width * 0.02;
        this.cardYOffset = 48;
        this.tableaus = [];
        this.cardsToTable = 30;

        this.x += 96;
        this.y += 128;

        for (let i = 0; i < tableausNumber; i++) {
            this.tableaus.push([]);
        }
        let currentTableau = 0;
        let curY = 0;
        for (let i = 0; i < this.cardsToTable; i++) {
            const card = deck.pop();
            card.x = (card.width + this.tableauGutter) * currentTableau;
            card.y = currentTableau + curY * this.cardYOffset;
            this.tableaus[currentTableau].push(card);
            this.addChild(card);
            if (currentTableau >= tableausNumber - 1) {
                currentTableau = 0;
                curY++;
            } else currentTableau++;
        }
    }
}
