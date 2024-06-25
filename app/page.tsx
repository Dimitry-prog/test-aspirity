import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full grid place-content-center">
      <Link href="/vacations">Отпуска</Link>
    </div>
  );
}
