class Background {
  private _$el: HTMLDivElement;

  constructor(selector: string, data: string) {
    this._$el = document.querySelector(selector);
    data["level_1"].forEach((rows: string[]) => {
      rows.forEach((tile: string) => {
        this._$el.innerHTML += `<div class="tile ${tile}"></div>`;
      });
    });
  }
}

let _Background = Background;
export { _Background as Background };
