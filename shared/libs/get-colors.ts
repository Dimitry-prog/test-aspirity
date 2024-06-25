import { COLORS_CHART, COLORS_DOTS } from "@/shared/utils/constants";

export const getFillColor = (
  label: "Доступно сейчас" | "Запланировано" | "Использовано/недоступно",
) => {
  const colorMap = {
    "Доступно сейчас": [COLORS_CHART[0], COLORS_DOTS[0]],
    Запланировано: [COLORS_CHART[1], COLORS_DOTS[1]],
    "Использовано/недоступно": [COLORS_CHART[2], COLORS_DOTS[2]],
  };

  const [chartColor, dotsColor] = colorMap[label];

  return {
    chartColor,
    dotsColor,
  };
};
