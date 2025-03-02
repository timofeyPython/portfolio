import { utils } from "@/core/utils/utils";

const { storage } = utils();

export function toHTML(key: string) {
  const model = storage(key);
  const id = key.split(":")[1];
  const dateOpen = new Date(model.openedDate).toLocaleDateString();
  const date = new Date(model.openedDate).toLocaleTimeString();
  return `
                <li class="db__record">
                    <a href="/excel/${id}">${model.title}</a>
                    <strong>${dateOpen}
                            ${date}
                    </strong>
                </li>
            
            `;
}

// excel:123
function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes("excel")) {
      continue;
    }
    keys.push(key);
  }
  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();
  if (!keys.length) {
    return `<p>Вы пока не создали ни одной таблиц</p>`;
  }
  const result = keys.map(toHTML).join("");
  return `
            <div class="db__list-header">
                <span>Название</span>
                <span>Дата открытия</span>
            </div>
                <ul class="db__list">
                   ${result}
                </ul>
            `;
}
