import CanvasFactory from "./CanvasFactory";

//캔버스를 저장,반환,삭제 한다.
export class CanvasStore {
  canvasList: Map<string, fabric.Canvas>;
  canvasFactory: CanvasFactory;

  constructor() {
    this.canvasList = new Map();
    this.canvasFactory = new CanvasFactory();
  }

  private saveByID(canvasID: string) {
    const canvas = this.canvasFactory.makeCanvas(canvasID);
    this.canvasList.set(canvasID, canvas);
    return canvas;
  }

  findByID(canvasID: string) {
    const canvas = this.canvasList.get(canvasID);
    if (canvas) return canvas;
    else return this.saveByID(canvasID);
  }

  deleteByID(canvasID: string) {
    this.canvasList.delete(canvasID);
  }

  dispose() {
    this.canvasList.clear();
  }
}

export default CanvasStore;
