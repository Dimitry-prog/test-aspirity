import { HistoryVacationType } from "@/app/(pages)/vacations/_types";
import { formattedDate } from "@/shared/libs/formatted-date";
import ArrowRight from "@/shared/components/icons/arrow-right";
import { ARROW_VARIANTS } from "@/shared/utils/constants";

type HistoryVacationMobileProps = {
  history: HistoryVacationType[];
};

const HistoryVacationMobile = ({ history }: HistoryVacationMobileProps) => {
  return (
    <>
      {history.slice(0, 5).map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 pb-4 md:hidden border-b border-b-border"
        >
          <div className="flex flex-col gap-2">
            <p className="justify-self-start text-text-secondary">Тип</p>
            <p className="justify-self-start">{item.type}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="justify-self-start text-text-secondary">
              Даты отпуска
            </p>
            <div className="flex gap-2">
              <p>{formattedDate(item.date.start)}</p>
              <ArrowRight className={`${ARROW_VARIANTS[item.type]}`} />
              <p>{formattedDate(item.date.end)}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="justify-self-start text-text-secondary">
              Количество дней
            </p>
            <p className="justify-self-start">{item.days}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HistoryVacationMobile;
