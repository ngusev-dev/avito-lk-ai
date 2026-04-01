import type { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../shared/lib/utils";

export const HeaderPageContainer = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"header">>) => {
  return (
    <header {...props} className={cn("flex flex-col", className)}>
      {children}
    </header>
  );
};
