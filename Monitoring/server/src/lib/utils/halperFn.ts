import { IGetHtmlMessage } from "@src/user/types/types";
import * as bcrypt from "bcrypt";

export function templateMap(el: {
  id: string;
  name: string;
  nameFull: string;
  description: string;
}) {
  return {
    id: el.id,
    name: el.name,
    nameFull: el.nameFull,
    description: el.description,
  };
}

export async function hashed(password: string) {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
}

export async function checkHash(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

export const translateError = function (err: number) {
  switch (err) {
    case 0:
      return "Успех";
    case 1:
      return "Ошибка операций";
    case 2:
      return "Ошибка протокола";
    case 3:
      return "Превышение ограничения времени";
    case 4:
      return "Превышение ограничения размера";
    case 5:
      return "Сравнение выявило ложь";
    case 6:
      return "Сравнение выявило истину";
    case 7:
      return "Метод аутентификации не поддерживается";
    case 8:
      return "Требуется более строгая аутентификация";
    case 10:
      return "Отсылка";
    case 11:
      return "Превышение административного ограничения";
    case 12:
      return "Недоступное критическое расширение";
    case 13:
      return "Требуется конфиденциальность";
    case 14:
      return "Выполняется подсоединение SASL";
    case 16:
      return "Нет такого атрибута";
    case 17:
      return "Неопределённый тип атрибута";
    case 18:
      return "Неподходящее соответствие";
    case 19:
      return "Нарушение ограничений";
    case 20:
      return "Атрибут или значение существует";
    case 21:
      return "Неверный синтаксис атрибута";
    case 32:
      return "Нет такого объекта";
    case 33:
      return "Проблема с псевдонимом";
    case 34:
      return "Неверный синтаксис DN";
    case 36:
      return "Проблема с разыменованием псевдонима";
    case 48:
      return "Несоответствующая аутентификация";
    case 49:
      return "Неверные учётные данные";
    case 50:
      return "Недостаточные права доступа";
    case 51:
      return "Занят";
    case 52:
      return "Недоступен";
    case 53:
      return "Не желают выполнять";
    case 54:
      return "Обнаружено зацикливание";
    case 64:
      return "Нарушение именования";
    case 65:
      return "Нарушение объектного класса";
    case 66:
      return "Не разрешено на нелистовой записи";
    case 67:
      return "Не разрешено на RDN";
    case 68:
      return "Запись уже существует";
    case 69:
      return "Изменение объектного класса запрещено";
    case 71:
      return "Оказывается влияние на несколько DSA";
    case 80:
      return "Другое";
  }
};

export function addDays(date: Date, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function findStatus(status: string) {
  const statuses = [
    {
      value: "0",
      description: "В паузе",
      htmlCode: "⏰",
    },
    {
      value: "1",
      description: "В работе",
      htmlCode: "💪",
    },
    {
      value: "2",
      description: "Тестирование",
      htmlCode: "🤖",
    },
    {
      value: "3",
      description: "Завершено",
      htmlCode: "😎",
    },
  ];

  return statuses.find((entry) => entry.value === status).description;
}

export function getHtmlMessage({
  title,
  userName,
  userName1,
  description,
  date1,
  date2,
  groupName,
}: IGetHtmlMessage) {
  return `
    <h1>${title}</h1>
    <p>Группа: ${groupName}</p>
    <p>Назначил: ${userName}</p>
    <p>Исполнитель: ${userName1}</p>
    <p>Описание задания: ${description}</p>
    <p>Срок: с ${new Date(date1).toLocaleDateString()} по ${new Date(date2).toLocaleDateString()}</p>
  `;
}

// `
// <h1>Вам назначено задание ${obj.name}</h1>
// <div>Назначил: ${user.name}</div>
// <p>Описание задания: ${obj.description}</p>
// <p>Срок: c ${new Date(obj.startTask).toLocaleDateString()} по ${new Date(obj.endTask).toLocaleDateString()}</p>
// `
