import { fabric } from "fabric";
import { DASHBOARD } from "../../model/constants";

class CanvasFactory {
  backgroundColor = "green";
  width: number;
  height: number;

  constructor() {
    this.width = DASHBOARD.WIDTH;
    this.height = DASHBOARD.HEIGHT;
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
