import { NextRequest, NextResponse } from "next/server";
import { historyMock } from "@/shared/utils/constants";

export const GET = async (req: NextRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new NextResponse(JSON.stringify(historyMock));
};
