import WarmUp from "~/components/WarmUp";
import Lesson from "~/components/Lesson";
import Training from "~/components/Training";

export function outlineRenderer(item: any, index: number) {
  switch (item.__component) {
    case "lessons.warm-up":
      return <WarmUp key={index} data={item} />;
    case "lessons.lesson":
      return <Lesson key={index} data={item} />;
    case "lessons.training":
      return <Training key={index} data={item} />;
    default:
      return null;
  }
}
