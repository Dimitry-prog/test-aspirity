export const historyMock = [
  {
    type: "Отпуск",
    date: {
      start: "2023-12-24T16:37:06.246Z",
      end: "2023-12-30T16:37:06.246Z",
    },
    days: 6,
  },
  {
    type: "Отгул",
    date: {
      start: "2023-12-28T16:37:06.246Z",
      end: "2023-12-30T16:37:06.246Z",
    },
    days: 2,
  },
  {
    type: "Отпуск",
    date: {
      start: "2023-12-10T16:37:06.246Z",
      end: "2023-12-30T16:37:06.246Z",
    },
    days: 20,
  },
];

export const statMock = [
  {
    label: "Доступно сейчас",
    value: 32,
  },
  {
    label: "Запланировано",
    value: 8,
  },
  {
    label: "Использовано/недоступно",
    value: 4,
  },
];

export const COLORS_CHART = ["#25824F", "#FFB649", "#DB4546"];
export const COLORS_DOTS = ["green", "orange", "red"];

export const ARROW_VARIANTS = {
  Отпуск: "fill-orange",
  Отгул: "fill-red",
};
