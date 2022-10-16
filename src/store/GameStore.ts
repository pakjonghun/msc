import { makeAutoObservable } from "mobx";
import { RootStore } from ".";

class GameStore {
  stage: number;
  score: number;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.stage = 1;
    this.score = 0;
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  setGemeScore(addScore: number) {
    this.score += addScore;
  }

  setGemeStage(isUp: boolean) {
    if (isUp) this.stage += 1;
    else this.stage -= 1;
  }
}

export default GameStore;
