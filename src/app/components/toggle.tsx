"use client";

import { SidebarIcon, X } from "lucide-react";
import { useState } from "react";
import Sidebar from "./sidebar";

const Toggle = ({
  page,
  data,
}: {
  page: string[];
  data: Record<string, string>;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="sm:hidden">
        <SidebarIcon className="size-4" />
      </button>
      {open && (
        <Sidebar
          page={page}
          data={data}
          className="h-screen w-full fixed left-0 top-0 bg-white z-10 flex flex-col items-center justify-center"
        />
      )}
      {open && (
        <X
          className="fixed top-6 right-6 z-20 size-4"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Toggle;
