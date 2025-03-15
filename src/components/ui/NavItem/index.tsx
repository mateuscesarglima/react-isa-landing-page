import { LiHTMLAttributes } from "react";

type NavItemType = LiHTMLAttributes<HTMLLIElement>;

export default function NavItem({ ...rest }: NavItemType) {
  return (
    <li
      className="hover:text-primary cursor-pointer transition duration-200 ease-in-out"
      {...rest}
    />
  );
}
