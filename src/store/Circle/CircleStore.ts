import { RootStore } from "../index";
import CircleFactory from "./CircleFactory";

export class CircleStore {
  rootStore: RootStore;
  circleList: Map<string, fabric.Circle>;
  circleFactory: CircleFactory;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.circleList = new Map();
    this.circleFactory = new CircleFactory(rootStore.GameStore);
  }

  private saveByID(circleID: string) {
    const circle = this.circleFactory.makeCircle(circleID);
    this.circleList.set(circleID, circle);
    return circle;
  }

  findByID(circleID: string) {
    const circle = this.circleList.get(circleID);
    if (circle) return circle;
    else return this.saveByID(circleID);
  }
}

export default CircleStore;
