import type { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../shared/lib/utils";

export const PageContainer = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<"div">>) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col gap-4 bg-background px-8 py-2 h-full min-h-svh",
        className,
      )}
    >
      {children}
    </div>
  );
};
