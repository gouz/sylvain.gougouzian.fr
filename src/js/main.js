import "../globals.css";

import "nes.css/css/nes.min.css";
import "@fontsource/press-start-2p";

import "../less/main.less";

import jsonUrl from "url:../json/levels.json";
import { Background, Background } from "../ts/Background";

fetch(jsonUrl).then((response) => {
  return response.json().then((json) => {
    let bg = new Background("#background", json);
  });
});

import { Character } from "../ts/Character";

let gouz = new Character("#character", 64, 96);

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowDown") gouz.go("south");
  else if (event.key == "ArrowUp") gouz.go("north");
  else if (event.key == "ArrowLeft") gouz.go("west");
  else if (event.key == "ArrowRight") gouz.go("east");
  gouz.walk();
});

document.addEventListener("keyup", () => {
  gouz.stop();
});
