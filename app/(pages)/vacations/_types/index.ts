export type HistoryVacationType = {
  type: "Отпуск" | "Отгул";
  date: {
    start: Date;
    end: Date;
  };
  days: number;
};

export type StatsVacationType = {
  label: "Доступно сейчас" | "Запланировано" | "Использовано/недоступно";
  value: number;
};
