import { useState } from "react";
export default function Accordion({ children, title }: { children: React.ReactNode, title: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between gap-x-6">
        <div className="min-w-0">
          <div className="flex items-start gap-x-3">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {title}
            </p>
          </div>
        </div>
        <div className="flex flex-none items-center gap-x-4">
          <button
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-bold text-gray-violet shadow-sm ring-1 ring-inset ring-violet-300 hover:bg-violet-50 sm:block"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            {open ? "-" : "+"}
            <span className="sr-only">,{open ? "hide" : "show"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="py-6">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}
