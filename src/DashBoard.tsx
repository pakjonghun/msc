import React, { useEffect, useState } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { CANVAS_ID } from './model/constants';
import RootStore from './store';
import { getID } from './store/Common/Helper';
import { fabric } from 'fabric';
import { DragObserver, Subject } from './DragObserver';
import { PubSub } from './Pubsub';

const DashBoard = () => {
  const gameStore = useLocalObservable(() => RootStore.GameStore);
  const canvasStore = useLocalObservable(() => RootStore.CanvasStore);
  const circleStore = useLocalObservable(() => RootStore.CircleStore);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const imgPath = process.env.PUBLIC_URL + 'logo192.png';
  useEffect(() => {
    setCanvas(canvasStore.findByID(CANVAS_ID));
  }, [canvasStore]);

  useEffect(() => {
    if (!canvas) return;

    const pin1 = new Subject({
      width: 50,
      height: 50,
      radius: 25,
      stroke: 'black',
      type: 'pin1',
    });

    const pin2 = new Subject({
      width: 50,
      height: 50,
      radius: 25,
      left: 100,
      top: 500,
      stroke: 'black',
      type: 'pin2',
    });

    const pubsub = new PubSub();
    canvas.on('object:moving', (e) => {
      if (e.target) {
        canvas.forEachObject((o) => {
          if (o === e.target) return;
          const subject = e.target as Subject;
          if (o.intersectsWithObject(subject)) {
            pubsub.publish('dragover', {
              target: subject.type,
              intersect: o.type,
            });
          }
        });
      }
    });

    pubsub.subscribe('dragover', (data: any) => console.log(data));

    canvas.add(pin1, pin2);
  }, [canvas]);

  return (
    <div>
      <canvas id={CANVAS_ID} />
    </div>
  );
};

export default observer(DashBoard);
