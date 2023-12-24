import { FC, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={`max-w-[1355px] mx-auto vlg:px-3 md:px-9 px-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
