import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/api-helpers";
import { outlineRenderer } from "~/utils/outline-renderer";
import LessonsTable
 from "./LessonsTable";
export default function LessonView({ data }: { data: any }) {
  const { title, description, publishedAt, outline } = data.data.attributes;
  return (
    <div className="">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {formatDate(publishedAt)}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <div className="mt-10 text-base leading-7 text-gray-700 lg:max-w-none">
          <div>
            <p>{description} </p>
          </div>
        </div>
        <div className="mt-10 flex">
          <Link
            to="/dashboard/lessons"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back To Lessons
          </Link>
        </div>
      </div>   
      <LessonsTable outline={outline} />
    </div>
  );
}
