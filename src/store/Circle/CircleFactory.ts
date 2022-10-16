import RootStore from "..";
import { reaction } from "mobx";
import Circle from "./Circle";
import { getRandomColor, getRandomNum } from "./UIHelper";
import GameStore from "../GameStore";

export class CircleFactory {
  left = getRandomNum(0, window.innerWidth);
  top = getRandomNum(0, window.innerHeight);
  fill: string;
  size = 500;
  coefficient: number;

  constructor(gameStore: GameStore) {
    this.fill = getRandomColor(0, 255);
    this.coefficient = gameStore.stage;
    reaction(
      () => gameStore.stage,
      (cur) => {
        console.log(cur);
        this.coefficient = cur * 20;
      }
    );
  }

  private getSize() {
    return getRandomNum(
      30,
      this.size * this.coefficient < 30 ? 30 : this.size * this.coefficient
    );
  }

  makeCircle(circleID: string) {
    const size = this.coefficient;
    return new Circle(circleID, {
      left: getRandomNum(0, window.innerWidth),
      top: getRandomNum(0, window.innerHeight),
      backgroundColor: getRandomColor(0, 255),
      width: size,
      height: size,
    });
  }
}

export default CircleFactory;
