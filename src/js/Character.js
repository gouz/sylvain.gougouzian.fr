import characters from "../json/characters.json";
import { config } from "../json/config.json";

const directions = {
  south: 0,
  west: 1,
  east: 2,
  north: 3,
};

export class Character {
  constructor($canvas, who, posX, posY) {
    this.ctx = $canvas.getContext("2d");
    this.image = new Image();
    this.direction = "south";
    this.step = 0;
    this.image.onload = () => {
      this.x = posX;
      this.y = posY;
      this.position();
    };
    this.image.src = characters[who];
  }

  position() {
    this.ctx.drawImage(
      this.image,
      this.step * config.character.width,
      directions[this.direction] * config.character.height,
      config.character.width,
      config.character.height,
      this.x,
      this.y,
      config.character.width,
      config.character.height
    );
  }

  setDirection(direction) {
    this.direction = direction;
    this.step = 0;
    this.walk();
  }

  walk() {
    this.ctx.clearRect(
      this.x,
      this.y,
      config.character.width,
      config.character.height
    );
    this.step++;
    if (this.step >= 4) this.step = 0;
    this.position();
  }
}
