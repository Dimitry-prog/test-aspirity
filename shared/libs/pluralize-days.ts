export const pluralizeDays = (day: number) => {
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "день";
    case 2:
    case 3:
    case 4:
      return "дня";
    default:
      return "дней";
  }
};
