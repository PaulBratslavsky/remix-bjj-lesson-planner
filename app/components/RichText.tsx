import * as React from "react";
import { renderers, parse, transform } from "@markdoc/markdoc";

// TODO: FIGURE OUT TYPES FOR MARKDOC

export function markdown(markdown: any, config: any) {
  return transform(parse(markdown, config));
}

export default function Markdown({
  data,
  config = {},
}: {
  data: string;
  config?: any;
}) {
  return (
    <div className="my-6 p-4 rounded-lg rich-text py-6 text-gray-900 bg-white ">
      {renderers.react(markdown(data, config), React)}
    </div>
  );
}
