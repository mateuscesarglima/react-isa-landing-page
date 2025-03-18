import { HTMLAttributes } from "react";

type Paragraph = HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ ...rest }: Paragraph) {
  return <p className="text-justify font-light" {...rest} />;
}
