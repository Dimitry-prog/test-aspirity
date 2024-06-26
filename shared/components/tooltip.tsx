"use client";

import { ReactNode, useState } from "react";

type TooltipProps = {
  trigger: ReactNode;
  children: ReactNode;
};
const Tooltip = ({ trigger, children }: TooltipProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="relative flex"
    >
      {trigger}

      <div
        className={`w-full py-1.5 px-2.5 text-subtitle2 bg-bg-modal rounded absolute z-50 translate-x-[50%] left-[125%] ${
          show ? "visible opacity-100 block" : "invisible opacity-0 hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
