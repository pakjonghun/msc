import { fabric } from "fabric";
import { ICircleOptions } from "fabric/fabric-impl";

class Circle extends fabric.Circle {
  id: string;

  constructor(id: string, options?: ICircleOptions) {
    super(options);
    this.id = id;
  }
}

export default Circle;
