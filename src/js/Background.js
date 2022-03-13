import { config } from "../json/config.json";
import backgrounds from "../json/backgrounds.json";
import elements from "../json/elements.json";
import levels from "../json/levels.json";
import adjustments from "../json/adjustments.json";

const graphics = {
  backgrounds: backgrounds,
  elements: elements,
};

export default class Background {
  constructor($canvas, map) {
    this.ctx = $canvas.getContext("2d");

    const items = {
      backgrounds: "backgrounds",
      elements_bottom: "elements",
      elements_top: "elements",
    };

    for (const [key, value] of Object.entries(items)) {
      levels[map][key].forEach((row, y) => {
        row.forEach((col, x) => {
          const img = new Image();
          img.onload = () => {
            this.ctx.drawImage(
              img,
              x * config.bgTile.width,
              ((y - (adjustments[col] ? adjustments[col] : 0)) *
                config.bgTile.height) /
                2
            );
          };
          img.src = graphics[value][col];
        });
      });
    }
  }
}
