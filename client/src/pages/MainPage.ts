import { $ } from "../core/dom";
import { Page } from "../core/Page";
import { HLET } from "../types/interfaces";
import { Header } from "../components/main/header/Header";
import { Main } from "../components/main/Main";

export class MainPage extends Page {
    
    components: Main;

    getRoot() {
        this.components = new Main([
            Header
        ])

        return this.components.getRoot()
    }

    afterRender(): void {
        this.components.init()
    }
}
