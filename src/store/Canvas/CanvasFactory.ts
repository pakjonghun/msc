import { fabric } from "fabric";

class CanvasFactory {
  backgroundColor = "green";
  width: number;
  height: number;

  constructor() {
    this.width = window.innerHeight;
    this.height = window.innerWidth;
  }

  makeCanvas(canvasID: string) {
    return new fabric.Canvas(canvasID, {
      backgroundColor: this.backgroundColor,
      width: this.width,
      height: this.height,
    });
  }
}

export default CanvasFactory;
