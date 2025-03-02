import { Dom } from "@/core/dom";
import Link from "./Link";

export class Navbar {
  static className = "navbar_home";
  public $root;

  constructor($root: Dom) {
    this.$root = $root;
  }

  toHtml() {
    const links = [
      {
        title: "Главная",
        path: "home",
      },
      {
        title: "Мои работы",
        path: "myprojects",
      },
      {
        title: "Контакты",
        path: "contacts",
      },
      {
        title: "О приложении",
        path: "about",
      },
    ];

    return `
      <nav class="navbar navbar-expand-lg bg-body-tertiary "  data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TimofeyWeb</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              ${links.map((link) => Link(link)).join("")}
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  init() {}
}
