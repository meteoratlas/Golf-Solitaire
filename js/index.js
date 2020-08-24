import * as PIXI from "pixi.js";

var app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

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
