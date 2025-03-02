import { Dom } from "@/core/dom";

export class Contacts {
  static className = "Contacts";
  public $root;

  constructor($root: Dom) {
    this.$root = $root;
  }

  toHtml() {
    return `
      <main class="flex-shrink-0">
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Связь со мной</h1>
              <br>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Почта - <strong>timofeywebdev@gmail.com</strong></li>
                <li class="list-group-item">Telegram - <strong>@timofeyweb</strong></li>
                <li class="list-group-item">GitHub - <strong><a href="https://github.com/timofeyPython/portfolio">Мои работы</a></strong></li>
                <li class="list-group-item">Ссылка на резюме - <strong><a href="https://vladimir.hh.ru/resume/9d60c27fff0cc559590039ed1f624358646474">Head Hunter</a></strong></li>
              </ul>
              </p>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  init() {}
}
