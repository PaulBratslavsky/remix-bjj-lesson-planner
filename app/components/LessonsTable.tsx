import { Link } from "@remix-run/react";

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

function Row({ item }: { item: any }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        <div className="text-gray-900">{item.title}</div>
        <div className="mt-1 text-gray-500">{item.description}</div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        <LessonType type={item.__component.split(".")[1]} />
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {item.duration} min
      </td>
      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <Link to={"#"} className="text-indigo-600 hover:text-indigo-900">
          View<span className="sr-only">, {item.name}</span>
        </Link>
      </td>
    </tr>
  );
}

export default function LessonsTable({ outline }: { outline: any[] }) {
  if (outline.length == 0) return <p>no lessons found</p>;
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Lesson
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Duration
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {outline.map((item, index) => (
                  <Row key={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
// <div className="font-medium text-gray-900">{project.name}</div>
// <div className="mt-1 truncate text-gray-500">{project.description}</div>
// </td>
