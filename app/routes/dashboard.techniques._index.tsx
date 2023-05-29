import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { fetchStrapiData } from "~/api/fetch-strapi-data.server";
import TechniqueList from "~/components/TechniqueList";

export async function loader() {
  const data = await fetchStrapiData("/techniques");
  return json(data);
}

export default function LessonRouteRoute() {
  const data = useLoaderData();
  console.log(data, "from techniques")
  if (!data) return <h2>no data</h2>;
  const { data: lessons } = data;
  return <TechniqueList data={lessons} />
}
