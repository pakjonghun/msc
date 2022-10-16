import GameHandleStore from "./GameHandleStore";
import GameStore from "./GameStore";
import CircleStore from "./Circle/CircleStore";
import CanvasStore, {
  CanvasStore as CanvasStoreType,
} from "./Canvas/CanvasStore";

export class RootStore {
  CircleStore: CircleStore;
  CanvasStore: CanvasStoreType;
  GameHandleStore: GameHandleStore;
  GameStore: GameStore;

  constructor() {
    this.GameStore = new GameStore(this);
    this.GameHandleStore = new GameHandleStore(this);
    this.CanvasStore = new CanvasStore();
    this.CircleStore = new CircleStore(this);
  }
}

export default new RootStore();
