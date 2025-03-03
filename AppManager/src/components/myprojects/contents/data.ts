import iconTS from "@assets/icon/ts.png";
import iconSCSS from "@assets/icon/scss.png";
import iconWP from "@assets/icon/webpack.png";
import iconReact from "@assets/icon/react.png";
import iconVue from "@assets/icon/vue.png";
import iconVite from "@assets/icon/vite.png";
import iconBoostraps from "@assets/icon/boostraps.png";
import iconNodeJS from "@assets/icon/nodejs.png";
import iconNestJS from "@assets/icon/nestjs.png";
import iconJS from "@assets/icon/js.png";
import iconPinia from "@assets/icon/pinia.svg";
import iconRedux from "@assets/icon/redux.svg";
import { EPath } from "@/types/enum";

export const listsJob = [
  {
    href: EPath.questions,
    title: "Тестирование",
    description: `
        В данном тесте представлены вопросы по ЯП JavaScript, в создании теста использовались такие технологии, 
        как Webpack, Typescript, SCSS. Данный модуль был написан без использования фреймворков и сторонних библиотек, главная задача была создать свой фреймворк, чтобы понять 
        принципы работы современных технологий.
      `,
    linkDescription: "Ниже представлен код приложения из Github",
    linkGit:
      "https://github.com/timofeyPython/portfolio/tree/main/AppManager/src/components/questionnaire",
    imgs: [iconTS, iconSCSS, iconWP],
  },
  {
    href: EPath.excel,
    title: "Online Excel",
    description: `
      Данное приложение позволяет создавать электронные таблицы, записывать значения в ячейки, редактировать, присваивать стили,    
      вычеслять , кроме   того приложение запоминает своё состояние и хранит его в localStorage, 
      что позволяет вернуться к редактирование таблицы после закрытия вкладки.
      `,
    linkDescription: "Ниже представлен код приложения из Github",
    linkGit:
      "https://github.com/timofeyPython/portfolio/tree/main/AppManager/src/components/excel",
    imgs: [iconTS, iconSCSS, iconWP],
  },
  {
    href: "shop",
    title: "Магазин MyMirror",
    description: `
        Сайт MyMirror - это интернет магазин по продаже зеркал, пользователь может ознакомиться с богатым ассортиментом гримерных зеркал на любой вкус, на 
        сайте имееться возможность оформить заказ или заказать обратный звонок консультанта, который поможет с вобором товара.
      `,
    linkDescription: "Ниже представлен код приложения из Github",
    linkGit: "https://github.com/timofeyPython/portfolio/tree/main/Shop",
    imgs: [iconTS, iconVue, iconPinia, iconNodeJS, iconVite, iconBoostraps],
  },
  {
    href: EPath.monitoring,
    title: "Мониторинг отдела",
    linkDescription: "Ниже представлен код приложения из Github",
    description:
      "Данное ПО создано для управления задачами внутри IT отделов, которое помогает планировать выполнение задач, назначать и отслеживать их, выгружать в форме отчёта.",
    linkGit: "https://github.com/timofeyPython/portfolio/tree/main/Monitoring",
    imgs: [iconTS, iconRedux, iconReact, iconNestJS, iconBoostraps],
  },
  {
    href: EPath.pingpong,
    title: "Игра в пинг-понг",
    description: `
        Данная игра написана на чистом JavaScript с использованием canvas, управление реализовано стрелоками вверх и вниз, удачной игры !`,
    linkDescription: "Ниже представлен код приложения из Github",
    linkGit: "https://github.com/timofeyPython/portfolio/tree/main/PingPong",
    imgs: [iconJS],
  },
];
