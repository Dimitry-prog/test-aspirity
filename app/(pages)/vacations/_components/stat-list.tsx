import { StatsVacationType } from "@/app/(pages)/vacations/_types";
import StatVacation from "@/app/(pages)/vacations/_components/stat-vacation";
import { getFillColor } from "@/shared/libs/get-colors";

type StatListProps = {
  stats: StatsVacationType[];
};

const StatList = ({ stats }: StatListProps) => {
  return (
    <div className="space-y-2">
      {stats.map((stat) => (
        <StatVacation
          key={stat.label}
          label={stat.label}
          count={stat.value}
          color={getFillColor(stat.label).dotsColor}
        />
      ))}
    </div>
  );
};

export default StatList;
