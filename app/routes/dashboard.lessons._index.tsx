import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import LessonList from "~/components/LessonList";
import { fetchStrapiData } from "~/api/fetch-strapi-data.server";

export async function loader() {
  const data = await fetchStrapiData("/lessons");
  return json(data);
}

export default function LessonRouteRoute() {
  const data = useLoaderData();
  if (!data) return <h2>no data</h2>;
  const { data: lessons } = data;
  return <LessonList data={lessons} />;
}
