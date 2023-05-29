import { useState } from "react";
import RichText from "./RichText";

function LessonType({ type }: { type: string }) {
  let color;

  switch (type) {
    case "warm-up":
      color = "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20";
      break;
    case "lesson":
      color =
        "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20";
      break;
    case "training":
      color = "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20";
      break;
    default:
      color = "bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/20";
  }

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${color}`}
    >
      {type}
    </span>
  );
}

function ListItem({ item }: { item: any }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="py-5">
      <div className="flex items-center justify-between gap-x-6">
        <div className="min-w-0">
          <div className="flex items-start gap-x-3">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {item.title}
            </p>

            <LessonType type={item.__component.split(".")[1]} />
          </div>
          <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
            <p className="truncate">
              Duration:{" "}
              <span className="text-violet-500 font-bold">{item.duration}</span>{" "}
              min
            </p>
          </div>
          <p className="mt-1 text-gray-500">{item.description}</p>
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
          <RichText data={item.notes} />
        </div>
      )}
    </li>
  );
}

export default function LessonsTable({ outline }: { outline: any[] }) {
  return (
    <ul className="divide-y divide-gray-100">
      {outline.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}
