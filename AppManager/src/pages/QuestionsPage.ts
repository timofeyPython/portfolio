/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page } from "./Page";
import { ConstuctorPage } from "@core/ConstructorPage";
import { Store } from "@core/store/Store";
import { rootReducer } from "@/redux/questionnaire/rootReducer";
import { normalizeInitialState } from "@/redux/questionnaire/initialState";
import { utils } from "@core/utils/utils";
import { Emitter } from "@core/Emitter";
import { useRoutes } from "@/routes/questions";

const { storage, debounce } = utils();

export class QuestionsPage extends Page {
  components: ConstuctorPage;

  getRoot() {
    const params = window.location.pathname.split("/")?.[2];
    const state = storage(params);
    const initialState = normalizeInitialState(state);
    const store = new Store(rootReducer, initialState);
    const emitter = new Emitter();
    const stateListener = debounce((state: any) => storage(params, state), 300);
    store.subscribe(stateListener);
    this.components = new ConstuctorPage({
      components: useRoutes(state),
      store,
      root: params,
      emitter,
    });

    return this.components.getRoot();
  }

  afterRender() {
    this.components.init();
  }

  destroy() {
    this.components.destroy();
  }
}
