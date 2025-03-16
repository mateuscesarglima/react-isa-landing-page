import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...rest }: ButtonType) {
  return (
    <button
      className="bg-primary hover:text-primary hover:border-primary cursor-pointer rounded-lg border-1 border-transparent p-2 font-light text-white transition duration-200 ease-in-out hover:border-1 hover:bg-transparent"
      {...rest}
    />
  );
}
