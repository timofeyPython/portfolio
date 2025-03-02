/* eslint-disable @typescript-eslint/no-explicit-any */
import { utils } from "@core/utils/utils";
import { Store } from "./Store";

const { isEqual } = utils();

export class StoreSubscriber {
  store;
  sub: any;
  prevState;

  constructor(store: Store) {
    this.store = store;
    this.sub = null;
    this.prevState = {};
  }

  subscribeComponents(components: Array<any>) {
    if (this?.store) {
      this.prevState = this.store.getState();
      this.sub = this.store.subscribe((state) => {
        Object.keys(state).forEach((key) => {
          if (!isEqual(this.prevState, state[key]))
            components.forEach((component: any) => {
              if (component.isWatching(key)) {
                const changes = { [key]: state[key] };
                component.storeChanged(changes);
              }
            });
        });
        this.prevState = this.store.getState();
      });
    }
  }

  unsubscribeFromStore() {
    this.sub.unsubscribe();
  }
}
