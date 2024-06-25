export const formattedDate = (date: Date) => {
  const newDate = new Date(date);
  const option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const result = new Intl.DateTimeFormat("ru-Ru", option).format(newDate);

  return result.split(" ").slice(0, 3).join(" ");
};
