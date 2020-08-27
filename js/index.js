const app = new PIXI.Application({
    width: 640,
    height: 360,
    backgroundColor: 0x40a940,
    resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);
let sheet;
function setup() {
    sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;
}

PIXI.Loader.shared.onComplete.add(function (loader, resources) {
    let sprite = new PIXI.Sprite(sheet.textures["10C.png"]);
    app.stage.addChild(sprite);
});

PIXI.Loader.shared.load();

const SUITES = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
];

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
