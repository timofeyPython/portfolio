import { Page } from "@/pages/Page";

export class About extends Page {
  toHtml() {
    return `
            <div class='ab_block'>
                <div class='ab__header'>
                    <div></div>
                    <h1>О программе</h1>
  
                    <div class="exit">
                        <a href="/excel" >
                          <i class="material-icons" data-button="exit">logout</i>
                        </a>
                    <div class="button" data-button="exit">
 
            </div>
                    </div>  
                </div>
                <div class="ab__new">
                <div class="ab__view">
                    <div>
                        <h4>Приложение "Создаем Excel без фреймворков"</h4>
                        <hr>
                        <p class="ab__about">
                            Главной задачей проекта являлось воссоздать функционал электронной таблицы Excel, закрепить и улучшить навыки владения 
                            с современными технологиями.
                        </p>
                        <p class="ab__about">
                            Данное приложение позволяет создавать электронные таблицы, записывать значения в ячейки,  редактировать, присваивать стили, вычеслять значение по формулам, 
                            кроме того приложение запоминает своё состояние и хранит его в localStorage, что позволяет вернуться к редактирование таблицы после закрытия вкладки.
                        </p>
                        <p class="ab__about">
                            Стэк технологий:
                        </p>
                        <ul>
                            <li>TS</li>
                            <li>SCSS(Mixins)</li>
                            <li>Webpack</li>
                            <li>Eslint</li>
                            <li>Redux(parody)</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
  }

  init() {}
}
