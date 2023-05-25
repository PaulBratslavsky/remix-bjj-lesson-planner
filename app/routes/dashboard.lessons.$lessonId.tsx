import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import LessonView from "~/components/LessonView";
import { fetchStrapiData } from "~/api/fetch-strapi-data.server";

import { useRouteError, isRouteErrorResponse } from "@remix-run/react";

export async function loader({ params }: LoaderArgs) {
  const lessonId = params.lessonId;
  const urlParams = {
    populate: "*",
  }
  const data = await fetchStrapiData("/lessons/" + lessonId, urlParams);
  return json(data);
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Oops</h1>
        <h1>Error: {(error as any).message}</h1>
      </div>
    );
  }
}

export default function LessonRoute() {
  const data = useLoaderData<typeof loader>();
  if (!data) return <h1>no data</h1>
  return <LessonView data={data}/>;
}
