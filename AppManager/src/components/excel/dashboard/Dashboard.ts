import { Page } from "@/pages/Page";
import { createRecordsTable } from "./dashboardfunctions";

export class Dashboard extends Page {
  toHtml() {
    const now = Date.now().toString();
    return `
            <div class="db">
                <div class="db__header">
                    <h1>Excel Панель управления</h1>
                </div>
                <div class="db__new" style='display: flex'>
                    <div class="db__view">
                        <a href="excel/#${now}" class="db__create">
                            Новая <br> таблица
                        </a>
                    </div>
                    <div class="db__view">
                    <a href="excel/about" class="db__create">
                        О программе
                    </a>
                </div>
                </div>
                <div class="db__table db__view">
                     ${createRecordsTable()}
                </div>
            </div>
        `;
  }

  init() {
    console.log("initDash");
  }

  afterRender() {
    console.log("<afterRender> dashboard");
  }
}
