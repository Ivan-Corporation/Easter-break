// import Matter, { Composite } from "matter-js";

interface Config {
  canvas: HTMLCanvasElement;
  image: HTMLCanvasElement;
  slots: Matter.Body[][];
  options: {};
}

export default class Renderer {
  slotSize: number;
  constructor(private config: Config) {
    this.slotSize = config.canvas.width / config.slots[0].length;
  }

  run() {
    this.render();

    window.requestAnimationFrame(this.run.bind(this));
  }

  imageSliceBank: { [key: string]: HTMLCanvasElement } = {};

  getImageSlice(row: number, column: number) {
    const serialize = (row: number, column: number) => `${row}_${column}`;

    if (this.imageSliceBank[serialize(row, column)])
      return this.imageSliceBank[serialize(row, column)];

    const canvas = document.createElement("canvas");
    canvas.width = this.slotSize;
    canvas.height = this.slotSize;

    let ctx = canvas.getContext("2d");

    if (!ctx) throw new Error("2d Context not supported");


    ctx.drawImage(
      this.config.image,
      column * this.slotSize,
      row * this.slotSize,
      this.slotSize,
      this.slotSize,
      0,
      0,
      this.slotSize,
      this.slotSize
    );

    this.imageSliceBank[serialize(row, column)] = canvas;
    return canvas;
  }

  forEverySlot(
    callback: (
      slot: Matter.Body,
      location: { row: number; column: number }
    ) => void
  ) {
    let slots = this.config.slots;
    for (let row = 0; row < slots.length; row++) {
      for (let column = 0; column < slots[0].length; column++) {
        callback(slots[row][column], { row, column });
      }
    }
  }

  render() {
    let ctx = this.config.canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, this.config.canvas.width, this.config.canvas.height);

    ctx.beginPath();

    this.forEverySlot((slot, { row, column }) => {
      let imageSlice = this.getImageSlice(row, column);

      let { x, y } = slot.position;
      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(slot.angle);

      ctx.drawImage(imageSlice, -this.slotSize / 2, -this.slotSize / 2);

      ctx.restore();
    });

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#999";
    ctx.stroke();
  }
}
