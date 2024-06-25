import Chart from "@/app/(pages)/vacations/_components/chart";
import HistoryVacation from "@/app/(pages)/vacations/_components/history-vacation";
import {
  HistoryVacationType,
  StatsVacationType,
} from "@/app/(pages)/vacations/_types";
import Link from "next/link";
import Info from "@/shared/components/icons/info";
import StatList from "@/app/(pages)/vacations/_components/stat-list";

const VacationsPage = async () => {
  const historyResponse = await fetch("http://localhost:3000/api/vacations");
  const history: HistoryVacationType[] = await historyResponse.json();
  const statsResponse = await fetch("http://localhost:3000/api/stats");
  const stats: StatsVacationType[] = await statsResponse.json();

  return (
    <div className="flex flex-col gap-4">
      <section className="pt-10 px-10 pb-5 bg-bg-secondary rounded-xl">
        <div className="w-fit flex border-b border-border">
          <Link href="/" className="px-4 py-2.5 uppercase hover:opacity-80">
            Главная
          </Link>
          <Link
            href="/"
            className="px-4 py-2.5 uppercase border-b-2 border-blue hover:opacity-80"
          >
            Отпуск
          </Link>
        </div>
      </section>

      <div className="flex gap-4">
        <section className="w-full max-w-[516px] flex flex-col gap-4 p-[30px] rounded-xl bg-bg-secondary">
          <div className="flex items-center gap-2">
            <h5>Статистика</h5>
            <Info />
          </div>

          <div className="self-center">
            <Chart stats={stats} />
          </div>

          <StatList stats={stats} />
        </section>

        <section className="w-full h-fit p-[30px] space-y-4 rounded-xl bg-bg-secondary">
          <div className="flex items-center justify-between">
            <h5>История отпусков</h5>
            <p className="text-subtitle2 text-text-tertiary">Посмотреть все</p>
          </div>

          <HistoryVacation history={history} />
        </section>
      </div>
    </div>
  );
};

export default VacationsPage;
