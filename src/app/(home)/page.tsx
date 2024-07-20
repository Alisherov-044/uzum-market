"use client";

import { Button } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <main className="w-full h-full flex flex-col gap-y-3 container py-10">
      <Button
        variant="contained"
        className="w-fit"
        onClick={() => setOpen(!open)}
      >
        katalog
      </Button>

      <div
        className={clsx(
          "flex w-full flex-auto border border-red-500 transition-all p-3 gap-x-3",
          open ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="w-[200px] h-full border border-blue-500">
          <ul className="flex flex-col gap-y-3 p-2">
            {[...Array(10).keys()].map((item) => (
              <li
                key={item}
                className="w-full px-4 py-2 bg-gray-200 hover:bg-green-500 transition-all"
                onMouseOver={() => {
                  setTimeout(() => {
                    setActive(item);
                  }, 500);
                }}
              >
                {item + 1}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-auto h-full border border-green-500">
          {active + 1}
        </div>
      </div>
    </main>
  );
}
