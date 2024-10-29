import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <div className={clsx(className, "container mx-auto")}>{children}</div>;
};
