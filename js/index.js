const app = new PIXI.Application({
    width: 640 * 2,
    height: 640 * 2,
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
    const deck = initDeck();
    const board = new Board(7, deck);
    app.stage.addChild(board);
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

function initDeck() {
    const deck = [];

    SUITES.forEach((suite) => {
        RANKS.forEach((rank) => {
            const abbrRank = rank.length > 2 ? rank[0] : rank;
            const imageKey = abbrRank + suite[0] + ".png";
            deck.push(new Card(suite, rank, sheet.textures[imageKey]));
        });
    });
    shuffle(deck);
    return deck;
}

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
