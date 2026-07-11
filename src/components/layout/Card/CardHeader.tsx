import * as React from "react";
import { cn } from "@/utils/cn";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-[var(--cuix-spacing-xs)]",
      className
    )}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

export { CardHeader };