import oic from "@assets/img/oic.jpg";
import oic2 from "@assets/img/oic2.jpg";
import rcpo from "@assets/img/rcpo.jpg";
import rcpo2 from "@assets/img/rcpo2.jpg";

export const listsProjects2023 = [
  {
    title: "ОИК ПОМИР",
    description: `
      <strong>Оперативно информационный комплекс</strong> "Производственная аналитика, мониторинг и расчет",
      представляет собой веб приложение, которое визуализирует данные с производственных систем
      в режиме реального времени, с помощью дашбоардов, графиков, таблиц, мнемосхем  и отчётных форм.
      `,
    stack: {
      client: ["JavaScript", "Webix"],
      backend: ["PHP", "Python3", "NodeJS", "PostgreSQL"],
      server: "Ubuntu 22.04 LTS + Nginx",
    },
  },
  {
    title: "ОИК РЦПО",
    description: `
      <strong>Оперативно информационный комплекс РЦПО</strong> 
      целью данного ПО является визуализация данных из файлов excel для сотрудников подразделения РЦПО в виде графиков и круговых диаграмм.
      `,
    stack: {
      client: ["Vue.js3", "Typescript"],
      backend: ["Python3"],
      server: "Ubuntu 22.04 LTS + Nginx",
    },
  },
  {
    title: "Формирование подпитки ТС по данным АИИС ТиКУ",
    description: `
      Данное веб приложение имеет функционал расчёта подпитки по узлам учёта, в данном приложении реазилован функционал отчётов, графиков и корректировки формул для расчётов
    `,
    stack: {
      client: ["Vue.js3"],
      backend: ["PHP", "Python3", "PostgreSQL"],
      server: "Ubuntu 22.04 LTS + Nginx",
    },
  },
];

export const listsProjects2024 = [
  {
    title: "АСБОРЭ",
    description: `
      <strong>Автоматизированная система безопасной организации работ энергопредприятия </strong> 
      целью данного проекта является организация работы персонала в промышленных подразделениях предприятий энергетики, 
      данное ПО обеспечивает ведение журналов: учет работ распоряжений, 
      учет работ по нарядам-допускам, учет работы оборудования, создания заявок на обслуживание оборудования.
      `,
    stack: {
      client: ["Vue.js3", "Typescript"],
      backend: ["NodeJS", "Typescript", "Redis", "Python3", "PostgreSQL"],
      server: "Ubuntu 22.04 LTS",
    },
  },
  {
    title: "Персонал навигатор",
    description: `
     Данное ПО обеспечивает эффективность информирования сотрудников и его посетителей о новостях, 
     достижениях и предстоящих анонсах, кроме того модуль позволяет найти бланки заявлений кадрового блока и 
     и обратиться к сотрудникам кадрового отдела.
      `,
    stack: {
      client: ["React ", "Typescript"],
      backend: ["NestJS", "Typescript", "PostgreSQL"],
      server: "Ubuntu 22.04 LTS + Nginx",
    },
  },
  {
    title: "IT мониторинг (Task Manager)",
    description: `
      Данное ПО создано для управления задачами внутри IT отделов, которое помогает планировать выполнение задач, назначать и отслеживать их, выгружать в форме отчёта.
      `,
    stack: {
      client: ["React + Redux", "Typescript"],
      backend: ["NestJS", "Typescript", "PostgreSQL"],
      server: "Ubuntu 22.04 LTS",
    },
  },
];

export const listsCorousel = [
  {
    title: "ОИК",
    image: oic,
    active: true,
  },
  {
    title: "ОИК",
    image: oic2,
    active: false,
  },
  {
    title: "РЦПО",
    image: rcpo,
    active: false,
  },
  {
    title: "РЦПО",
    image: rcpo2,
    active: false,
  },
];
