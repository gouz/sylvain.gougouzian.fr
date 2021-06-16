class Character {
  private _direction: string = "south";
  private _$el: HTMLDivElement;
  private _top: number;
  private _left: number;
  private _width: number;
  private _height: number;

  constructor(selector: string, width: number, height: number) {
    this._$el = document.querySelector(selector) as HTMLDivElement;
    this._width = width;
    this._height = height;
    this._$el.classList.add(this._direction);
    this._top = 0;
    this._left = 0;
    this._$el.style.top = `${this._top}px`;
    this._$el.style.left = `${this._left}px`;
  }

  walk(): void {
    this._$el.classList.add(`walk`);
    if (this._direction == "south") this._top += 10;
    else if (this._direction == "north") this._top -= 10;
    if (this._direction == "east") this._left += 10;
    else if (this._direction == "west") this._left -= 10;
    if (this._top < 0) this._top = 0;
    else if (this._top + this._height > window.outerHeight)
      this._top = window.outerHeight - this._height;
    if (this._left < 0) this._left = 0;
    else if (this._left + this._width > window.outerWidth)
      this._left = window.outerWidth - this._width;
    this._$el.style.top = `${this._top}px`;
    this._$el.style.left = `${this._left}px`;
  }

  go(direction: string): void {
    if (direction != this._direction) {
      this._$el.classList.remove(this._direction);
      this._direction = direction;
      this._$el.classList.add(this._direction);
    }
  }

  stop(): void {
    this._$el.classList.remove(`walk`);
  }
}

const _Character = Character;
export { _Character as Character };
