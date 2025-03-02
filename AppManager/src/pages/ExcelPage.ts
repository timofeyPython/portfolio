/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConstuctorPage } from "@/core/ConstructorPage";
import { Page } from "./Page";
import { useRoutes } from "@/routes/excel";
import { utils } from "@/core/utils/utils";
import { normalizeInitialStateExcel } from "@/redux/excel/initialState";
import { Store } from "@/core/store/Store";
import { rootReducer } from "@/redux/excel/rootReducer";
import { Emitter } from "@/core/Emitter";
import { updateDate } from "@/redux/excel/action";

const storageName = (name: string) => `excel:${name}`;

export class ExcelPage extends Page {
  components: ConstuctorPage;

  getRoot() {
    const { getHash, getLocation, storage, debounce } = utils();

    const params = getHash();
    const location = getLocation(2);
    const state = storage(storageName(params));
    const initialState = normalizeInitialStateExcel(state);
    const store = new Store(rootReducer, initialState);
    const emitter = new Emitter();
    const stateListener = debounce(
      (state: any) => storage(storageName(params), state),
      300,
    );
    store.subscribe(stateListener);
    this.components = new ConstuctorPage({
      components: useRoutes(location, params),
      store,
      root: "excel",
      emitter,
    });

    if (params) store.dispatch(updateDate());
    return this.components.getRoot();
  }

  afterRender() {
    this.components.init();
  }

  destroy() {
    this.components.destroy();
  }
}
