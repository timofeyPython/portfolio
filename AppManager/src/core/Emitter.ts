export class Emitter {
  public listeners: {
    [key: string]: Array<() => string | number>;
  };
  constructor() {
    this.listeners = {};
  }

  emit(event: string, ...args: Array<() => string | number>) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach(
      (listener: (...args: Array<() => string | number>) => void) =>
        listener(...args),
    );

    return true;
  }

  subscribe(event: string | number, fn: () => string | number) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== fn,
      );
    };
  }
}
