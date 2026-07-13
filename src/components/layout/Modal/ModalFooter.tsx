import * as React from "react";
import { cn } from "@/utils/cn";

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end gap-[var(--cuix-spacing-sm)]",
      className
    )}
    {...props}
  />
));

ModalFooter.displayName = "ModalFooter";

export { ModalFooter };