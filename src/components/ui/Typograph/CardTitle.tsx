import { HTMLAttributes } from "react";

type CardTitleType = HTMLAttributes<HTMLHeadingElement>;

export function CardTitle({ ...rest }: CardTitleType) {
  return <h1 className="text-[1.5rem] font-semibold" {...rest} />;
}
