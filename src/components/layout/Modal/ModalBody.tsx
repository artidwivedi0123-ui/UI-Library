import * as React from "react";
import { cn } from "@/utils/cn";

const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "py-[var(--cuix-spacing-lg)]",
      className
    )}
    {...props}
  />
));

ModalBody.displayName = "ModalBody";

export { ModalBody };