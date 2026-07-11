import * as React from "react";
import { cn } from "@/utils/cn";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-[var(--cuix-font-size-sm)] text-[var(--cuix-colors-muted-foreground)]",
      className
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

export { CardDescription };