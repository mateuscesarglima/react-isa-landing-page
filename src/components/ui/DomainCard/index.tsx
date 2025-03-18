import { HTMLAttributes, ReactNode } from "react";

type DomainCardType = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function DomainCard({ children, ...rest }: DomainCardType) {
  return (
    <div
      className="border-primary flex h-75 w-80 flex-col gap-2 rounded-lg border bg-[#F3F3F3] px-4 py-6"
      {...rest}
    >
      {children}
    </div>
  );
}
