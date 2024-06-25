"use client";

import { Cell, Label, Pie, PieChart } from "recharts";
import { StatsVacationType } from "@/app/(pages)/vacations/_types";
import { pluralizeDays } from "@/shared/libs/pluralize-days";
import { getFillColor } from "@/shared/libs/get-colors";

type ChartProps = {
  stats: StatsVacationType[];
};

const Chart = ({ stats }: ChartProps) => {
  const hasNow = stats.find((item) => item.label === "Доступно сейчас")?.value;

  return (
    <PieChart width={160} height={160}>
      <Pie data={stats} innerRadius={50} outerRadius={60} dataKey="value">
        {stats.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={getFillColor(entry.label).chartColor}
            stroke="trasparent"
          />
        ))}
        <Label
          value={hasNow}
          position="centerBottom"
          fill="#E1E3E6"
          className="text-h4 text-white"
        />
        <Label
          value={pluralizeDays(hasNow as number)}
          position="centerTop"
          className="text-subtitle2 text-text-tertiary translate-y-4"
        />
      </Pie>
    </PieChart>
  );
};

export default Chart;
