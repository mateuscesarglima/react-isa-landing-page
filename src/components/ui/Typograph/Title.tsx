import { HTMLAttributes } from "react";

type Title = HTMLAttributes<HTMLHeadingElement>;

export function Title({ ...rest }) {
  return <h1 className="text-6xl font-semibold" {...rest} />;
}
