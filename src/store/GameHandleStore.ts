import { RootStore } from "./index";

class GameHandleStore {
  interval: number;
  colorMin: number;
  colorMax: number;
  circleDist: number;
  store: RootStore;

  constructor(rootStore: RootStore) {
    this.interval = 5;
    this.colorMin = 0;
    this.colorMax = 255;
    this.circleDist = 50;
    this.store = rootStore;
  }
}

export default GameHandleStore;
