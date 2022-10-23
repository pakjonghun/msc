import { reaction } from "mobx";
import Circle from "./Circle";
import { getRandomColor, getRandomNum } from "./UIHelper";
import GameStore from "../GameStore";
import { CIRCLE, DASHBOARD } from "../../model/constants";

export class CircleFactory {
  left = getRandomNum(0, window.innerWidth);
  top = getRandomNum(0, window.innerHeight);
  fill: string;
  size = 500;
  coefficient: number;
  gameStore: GameStore;

  constructor(gameStore: GameStore) {
    this.gameStore = gameStore;
    this.fill = getRandomColor(0, 255);
    this.coefficient = gameStore.stage;
    reaction(
      () => gameStore.stage,
      (cur) => {
        this.coefficient = cur * 0.03;
      }
    );
  }

  makeCircle(circleID: string) {
    const size =
      this.gameStore.stage === 1
        ? CIRCLE.RADIUS
        : CIRCLE.RADIUS - CIRCLE.RADIUS * this.coefficient;
    const radius = size > CIRCLE.MINRADIUS ? size : CIRCLE.MINRADIUS;
    const left = this.getPosition(radius, DASHBOARD.WIDTH);
    const top = this.getPosition(radius, DASHBOARD.HEIGHT);
    return new Circle(circleID, {
      left,
      top,
      backgroundColor: getRandomColor(0, 255),
      fill: getRandomColor(0, 255),
      radius,
      width: radius,
      height: radius,
    });
  }

  private getPosition(radius: number, maxSize: number) {
    const size = getRandomNum(0, maxSize);
    return size < maxSize / 2 ? size + radius * 2 : size - radius * 2;
  }
}

export default CircleFactory;
