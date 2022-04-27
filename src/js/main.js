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

// new GameEngine($bb, $bc);

window.ctx = $bb.getContext("2d");

let canvasStack = {};

const RATIO = 1;

const stepX = 64 * RATIO;
const stepY = 32 * RATIO;
const newY = 111 * RATIO;

const loadImg = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = (e) => {
      const oc = document.createElement("canvas");
      const octx = oc.getContext("2d");
      oc.width = img.width * RATIO;
      oc.height = img.height * RATIO;
      octx.drawImage(img, 0, 0, oc.width, oc.height);
      canvasStack[src] = oc;
      resolve();
    };
    img.src = `./img/${src}.png`;
  });
};

let promises = [];

["cliff_block_rock_SE", "cliff_block_stone_SE", "rock_largeD_SW"].forEach(
  (i) => {
    promises.push(loadImg(i));
  }
);

Promise.all(promises).then(() => {
  window.ctx.drawImage(canvasStack["cliff_block_rock_SE"], 0, 0);
  window.ctx.drawImage(canvasStack["cliff_block_rock_SE"], stepX, newY);
  //window.ctx.drawImage(canvasStack["cliff_block_rock_SE"], stepX, stepY);
  window.ctx.drawImage(canvasStack["rock_largeD_SW"], stepX, stepY);
});
