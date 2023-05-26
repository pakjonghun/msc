export class PubSub {
  private events: Record<string, Function[]> = {};

  subscribe = (event: string, callback: Function) => {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }

    return this.events[event].push(callback);
  };

  publish = (event: string, data: any = {}) => {
    return this.events.hasOwnProperty(event) //
      ? this.events[event].map((callback) => callback(data))
      : [];
  };
}
