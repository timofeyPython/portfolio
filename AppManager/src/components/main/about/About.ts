import { Dom } from "@/core/dom";

export class About {
  static className = "about";
  public $root;

  constructor($root: Dom) {
    this.$root = $root;
  }

  toHtml() {
    return `
        <main class="flex-shrink-0">
            <div class="container">
                <h1 class="fw-light">О приложении.</h1>
                <p class="lead">
                    Данное приложение написано на нативном TS, без использования фреймворков и сторонних библиотек, 
                    главная цель приложения разработать свою JS-библиотеку, понять концепцию работы современных библиотек и фреймворков.
                </p>
                <p class="lead">
                    В данном приложении разработаны аналоги, как JS-библиотек фреймворков, так и подобие своего State Manager Redux для управления состоянием, так же для связи между компонентами 
                    реализован свой EventEmitter.
                </p>
                <p class="lead">
                    Технологии, которые были использованы при создании данного приложения : Typescript, SCSS, Bootstrap, Webpack.
                </p>
                <p class="lead">
                    Код приложения доступен <a href="https://github.com/timofeyPython/portfolio">GitHub</a>.
                </p>
            </div>
        </main>
    `;
  }

  init() {}
}
