import { FC, ReactNode } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md";
}

const Button: FC<ButtonProps> = ({ children, className, size, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        size === "sm" ? "px-6 py-2" : "px-9 py-3"
      } bg-primary rounded-[8px] text-[16px] text-white hover:opacity-90 duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
