import { Dom } from "@/core/dom";
import { listsCorousel, listsProjects2023, listsProjects2024 } from "./data";
import templateProject from "./listsProject";
import corousel from "./corousel";
import footer from "./footer";
import cross from "@assets/icon/cross.svg";
import modal from "@/components/UI/modal";

export class Home {
  static className = "home";
  public $root;

  constructor($root: Dom) {
    this.$root = $root;
  }

  toHtml() {
    return `
      <div class="container marketing">
        <div class="row featurette">
          <div class="col-md-12">
            <h2 class="display-6">Обо мне.</h2>
            <p class="lead">
              Мой путь разработчика начался в 2021 на теплоэнергостанции, 
              в должности главного специалиста отдела разработки ПО до 2023 года, за этот период я приобрёл навыки работы с такими технологиями, как: 
            </p>
            <ul class="borderLi">
              <li>JavaScript</li> 
              <li>TypeScript</li> 
              <li>NodeJS</li> 
              <li>NestJS</li> 
              <li>React</li>
              <li>VueJS</li>
              <li>Webix</li> 
            </ul>
            <p class="lead">Имею опыт работы с Linux-системами, владею навыками развертывания приложений на сервере с помощью Docker и Docker Compose, настройки nginx, а также умею работать с системами контроля версий Git и GitLab.</p>
            <h3 class="display-6">
              За период работ с 2021 по 2023 были разработаны приложения для энергопредприятий, такие как: 
            </h3>
            <br/>
            ${listsProjects2023.map((list) => templateProject(list)).join("")}
            <hr class="featurette-divider" style="margin: 5rem 0">
            <h3 class="display-6">
              Начиная с 2023 года и по текущий момент я нахожусь в должности начальника отдела ПО, за этот период было разработано и ввёдено в работу:
            </h3>
            <p class="lead">
              ${listsProjects2024.map((list) => templateProject(list)).join("")}
            </p>
          </div>
          <h3 class="display-6">
            На слайдах представлены скрины разработанного ПО 
          </h3>
        </div>
        ${corousel(listsCorousel)}
        <hr class="featurette-divider" style="margin: 5rem 0">
        ${footer()}
      </div>
    `;
  }

  init() {
    this.$root._findAll("img").forEach((el) =>
      el.addEventListener(
        "click",
        (img: Event & { target: HTMLImageElement }) => {
          modal(
            `
          <div class="modal_imgs">
            <div style="position: fixed;right: 2%;">
              <img src="${cross}" id="close" style="cursor: pointer;">
            </div>
            <img 
              class="img"
              src="${img.target.src}" 
              alt="${img.target.alt}"
            >
          </div>
        `,
            this.$root,
          );
        },
      ),
    );
  }
}
