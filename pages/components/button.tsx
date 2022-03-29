import { cls } from "../libs/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "w-full bg-slate-700 hover:bg-slate-800 text-slate-100  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-slate-600 focus:outline-none",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
    >
      {text}
    </button>
  );
}