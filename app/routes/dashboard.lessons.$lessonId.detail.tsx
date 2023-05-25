import { useMatches } from "@remix-run/react"

export const useRouteData = (routeId: string) => {
  const matches = useMatches()
  console.log(matches)
  const data = matches.find((match) => match.id === routeId)?.data
  return data;
}

export default function Details() {
  const test = useRouteData("routes/dashboard.lessons.$lessonId")
  console.log(test)
  return (
    <div>Details</div>
  )
}
