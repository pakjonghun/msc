import React, { useEffect, useState } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { CANVAS_ID } from "./model/constants";
import RootStore from "./store";
import { getID } from "./store/Common/Helper";
import { fabric } from "fabric";

const DashBoard = () => {
  const gameStore = useLocalObservable(() => RootStore.GameStore);
  const canvasStore = useLocalObservable(() => RootStore.CanvasStore);
  const circleStore = useLocalObservable(() => RootStore.CircleStore);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    setCanvas(canvasStore.findByID(CANVAS_ID));
  }, [canvasStore]);

  const onClick = () => {
    gameStore.setGemeStage(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timer;

    if (!canvas) return;
    timer = setInterval(() => {
      const circle1 = circleStore.findByID(getID());
      const circle2 = circleStore.findByID(getID());
      canvas.add(circle1, circle2);
      canvas.renderAll();
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [canvas, circleStore]);

  return (
    <div>
      <button onClick={onClick}>click</button>
      <canvas id={CANVAS_ID} />
    </div>
  );
};

export default observer(DashBoard);
