import { Dom } from "@/core/dom";
import { EPath } from "@/types/enum";

export class NotFound {
  static className = "not_found";
  public $root;

  constructor($root: Dom) {
    this.$root = $root;
  }

  toHtml() {
    return `
      <main class="flex-shrink-0">
        <div class="container">
          <div class="container">
            <h1 class="mt-5">Данной страницы не существует.</h1>
            <p class="lead">Вы можете перейте на главную страницу нажав на ссылку снизу или выбрать пункт меню в панели сверху.</p>
            <p>Нажмите на ссылку <a class="link-opacity-10-hover" href="${EPath.home}">главную  </a>, чтобы перейти</p>
          </div>
        </div>
      </main>
    `;
  }

  init() {}
}
