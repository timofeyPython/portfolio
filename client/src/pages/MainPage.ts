import { $ } from "../core/dom";
import { Page } from "./Page";
import { HLET } from "../types/interfaces";
import { Header } from "../components/main/header/Header";
import { ConstuctorPage } from "../core/ConstructorPage"
import { Contents } from "../components/main/contents/Contents";

export class MainPage extends Page {
    
    components: ConstuctorPage;

    getRoot() {
        this.components = new ConstuctorPage(
            {
              components: [
                    Header,
                    Contents
                ],
                root: 'main'
            }
        )

        return this.components.getRoot()
    }

    afterRender(): void {
        this.components.init()
    }
}
