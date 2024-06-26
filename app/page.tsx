import Link from "next/link";
import Tooltip from "@/shared/components/tooltip";
import Info from "@/shared/components/icons/info";

export default function Home() {
  return (
    <div className="h-screen w-full grid place-content-center">
      <Link href="/vacations">Отпуска</Link>
      <Tooltip trigger={<Info />}>
        <p className="text-subtitle2">1 раб. месяц = 3 дня отпуска</p>
      </Tooltip>
    </div>
  );
}
