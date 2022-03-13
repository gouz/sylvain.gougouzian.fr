import "../less/main.less";
import { config } from "../json/config.json";
import { GameEngine } from "./GameEngine";

const $cw = document.getElementById("canvas-wrapper");
const $bb = document.getElementById("board-background");
const $bc = document.getElementById("board-character");
const width = config.bgTile.width * config.board.width;
const height = (config.bgTile.height / 2) * (config.board.height + 1);

$cw.style.width = `${width}px`;
$cw.style.height = `${height}px`;

[$bb, $bc].forEach((e) => {
  e.width = width;
  e.height = height;
});

new GameEngine($bb, $bc);
