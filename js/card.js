class Card extends PIXI.Sprite {
    constructor(suite, rank, image, onClick) {
        super(image);
        this.suite = suite;
        this.rank = rank;
        this.allowMove = true;
        this.allowClick = true;
        this.onClick = onClick;

        this.interactive = true;
        this.buttonMode = true;
        this.anchor.set(0.5);
        this.scale.set(0.75);

        this.on("pointerdown", this.onClick);

        // Uncomment for drag and drop controls

        // this.on("pointerdown", this.onDragStart)
        //     .on("pointerup", this.onDragEnd)
        //     .on("pointerupoutside", this.onDragEnd)
        //     .on("pointermove", this.onDragMove);
    }

    onClick(e) {
        if (!this.allowClick) return;
        this.onClick();
    }
    // Uncomment for drag and drop controls

    // onDragStart(e) {
    //     if (this.allowMove) {
    //         this.data = e.data;
    //         this.dragging = true;
    //     }
    // }
    // onDragEnd() {
    //     this.dragging = false;
    //     // set the interaction data to null
    //     this.data = null;
    // }
    // onDragMove(e) {
    //     if (this.dragging) {
    //         const newPosition = this.data.getLocalPosition(this.parent);
    //         this.x += e.data.originalEvent.movementX;
    //         this.y += e.data.originalEvent.movementY;
    //     }
    // }
}
