import { pluralizeDays } from "@/shared/libs/pluralize-days";

type StatVacationProps = {
  color?: string;
  label?: string;
  count?: number;
};

const StatVacation = ({
  color = "green",
  label = "Доступно сейчас",
  count = 0,
}: StatVacationProps) => {
  const colorVariants: { [K: string]: string } = {
    green: "bg-green",
    orange: "bg-orange",
    red: "bg-red",
  };

  return (
    <div className="px-2.5 py-3 flex items-center justify-between border border-border rounded-2xl hover:border-white">
      <div className="flex items-center gap-2">
        <div className={`size-1.5 rounded-full ${colorVariants[color]}`} />
        <p>{label}</p>
      </div>
      <p>
        {count} {pluralizeDays(count)}
      </p>
    </div>
  );
};

export default StatVacation;
