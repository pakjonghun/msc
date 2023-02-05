import React, { useEffect, useState } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { CANVAS_ID } from './model/constants';
import RootStore from './store';
import { getID } from './store/Common/Helper';
import { fabric } from 'fabric';

const DashBoard = () => {
  const gameStore = useLocalObservable(() => RootStore.GameStore);
  const canvasStore = useLocalObservable(() => RootStore.CanvasStore);
  const circleStore = useLocalObservable(() => RootStore.CircleStore);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const imgPath = process.env.PUBLIC_URL + 'logo192.png';
  useEffect(() => {
    setCanvas(canvasStore.findByID(CANVAS_ID));
  }, [canvasStore]);

  const onClick = () => {
    const img = document.getElementById('img') as HTMLImageElement;
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = 'blue';
    fabric.Object.prototype.cornerStyle = 'circle';

    fabric.Object.prototype.setControlVisible('tl', false);
    fabric.Object.prototype.setControlVisible('tr', false);
    fabric.Object.prototype.setControlVisible('bl', false);
    fabric.Object.prototype.setControlVisible('br', false);
    fabric.Object.prototype.setControlVisible('ml', false);
    fabric.Object.prototype.setControlVisible('mb', false);
    fabric.Object.prototype.setControlVisible('mr', false);
    fabric.Object.prototype.setControlVisible('mt', false);
    fabric.Object.prototype.setControlVisible('mtr', false);

    if (canvas) {
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        width: 200,
        height: 200,
        fill: 'yellow',
        objectCaching: false,
        stroke: 'lightgrey',
        strokeWidth: 4,
      });

      // rect.hasControls = rect.hasBorders = false;
      canvas.add(rect);

      fabric.Object.prototype.controls.deleteControl = new fabric.Control({
        x: 0.5,
        y: -0.5,
        // offsetY: 50,
        cursorStyle: 'pointer',
        mouseUpHandler(eventData, transformData, x, y) {
          const t = transformData.target;

          if (t) {
            t?.canvas?.remove(t);
            t?.canvas?.renderAll();
          }
          return true;
        },

        render(ctx, left, top, styleOverride, fabricObject) {
          ctx.save();
          ctx.translate(left, top);

          ctx.drawImage(img, -50, -50, 100, 100);
          ctx.restore();
        },
      });

      // const imgEle = new fabric.Image(img, {
      //   left: 100,
      //   top: 100,
      // });
      // fabric.Image.fromURL(imgPath, function (imgEle) {
      //   canvas.add(imgEle);
      // });
    }
  };

  return (
    <div>
      <img id="img" src={imgPath} alt="icon" />
      <button
        onClick={() => {
          alert('hi');
        }}
      >
        hihiButton
      </button>
      <button onClick={onClick}>click</button>
      <canvas id={CANVAS_ID} />
    </div>
  );
};

export default observer(DashBoard);
