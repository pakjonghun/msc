import { fabric } from 'fabric';

interface Observer {
  update(subject: fabric.Object): void;
}

export class DragObserver implements Observer {
  constructor(private canvas: fabric.Canvas) {}

  update(subject: fabric.Object): void {
    this.canvas.forEachObject((o) => {
      if (o === subject) return;
      if (subject.intersectsWithObject(o)) {
        console.log(o.type, 'is drag over');
      }
    });
  }
}

export class Subject extends fabric.Circle {
  private observers: Observer[] = [];

  addObserver = (observer: Observer) => {
    this.observers.push(observer);
  };

  removeObserver = (observer: Observer) => {
    this.observers = this.observers.filter((o) => o !== observer);
  };

  notify = () => {
    this.observers.forEach((o) => {
      o.update(this);
    });
  };
}
