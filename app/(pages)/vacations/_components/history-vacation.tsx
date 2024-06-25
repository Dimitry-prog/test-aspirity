import ArrowRight from "@/shared/components/icons/arrow-right";
import { HistoryVacationType } from "@/app/(pages)/vacations/_types";
import { formattedDate } from "@/shared/libs/formatted-date";

type HistoryVacationProps = {
  history: HistoryVacationType[];
};

const HistoryVacation = ({ history }: HistoryVacationProps) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-table border-b-border border-b">
        <p className="px-2 py-4 justify-self-start text-text-secondary">Тип</p>
        <p className="px-2 py-4 text-text-secondary">Даты отпуска</p>
        <p className="px-2 py-4 justify-self-end text-text-secondary">
          Количество дней
        </p>
      </div>

      {history?.slice(0, 5).map((item, index) => {
        const arrowVariants = {
          Отпуск: "fill-orange",
          Отгул: "fill-red",
        };

        return (
          <div
            key={index}
            className="grid grid-cols-table justify-between border-b-border border-b"
          >
            <p className="px-2 py-4 justify-self-start">{item.type}</p>
            <div className="px-2 py-4 flex gap-2">
              <p>{formattedDate(item.date.start)}</p>
              <ArrowRight className={`${arrowVariants[item.type]}`} />
              <p>{formattedDate(item.date.end)}</p>
            </div>
            <p className="px-2 py-4 justify-self-end">{item.days}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryVacation;
