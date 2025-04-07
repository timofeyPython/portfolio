import { EUserRights } from "@/types/general";

export const API = import.meta.env.VITE_API;
export const statuses = [
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

export const transitionConfig = () => {
  const duration = 300;
  return {
    duration,
    defaultStyle: {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    },
    transitionStyles: {
      entering: { opacity: 0 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 },
    } as { [key: string]: React.CSSProperties },
  };
};

export const DEFAULT_RIGHTS = [
  EUserRights.EDITOR,
  EUserRights.ADMIN,
  EUserRights.USER,
];
