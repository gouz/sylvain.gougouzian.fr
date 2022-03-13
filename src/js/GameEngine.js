import Background from "./Background";
import { Character } from "./Character";

export class GameEngine {
  constructor($backgroundCanvas, $characterCanvas) {
    this.background = new Background($backgroundCanvas, "nyons");
    this.me = new Character($characterCanvas, "me", 0, 0);
    this.isWalking = false;
    this.lastCode = "";
    this.keyboardBindings();

    this.interval = setInterval(() => {
      this.manageAction();
    }, 100);
  }

  keyboardBindings() {
    document.addEventListener("keydown", (e) => {
      if (e.code != this.lastCode) {
        this.lastCode = e.code;
        switch (e.code) {
          case "ArrowDown":
            this.me.setDirection("south");
            this.isWalking = true;
            break;
          case "ArrowUp":
            this.me.setDirection("north");
            this.isWalking = true;
            break;
          case "ArrowLeft":
            this.me.setDirection("west");
            this.isWalking = true;
            break;
          case "ArrowRight":
            this.me.setDirection("east");
            this.isWalking = true;
            break;
        }
      }
    });
    document.addEventListener("keyup", (e) => {
      this.isWalking = false;
      this.lastCode = "";
    });
  }

  manageAction() {
    if (this.isWalking) this.me.walk();
  }
}
