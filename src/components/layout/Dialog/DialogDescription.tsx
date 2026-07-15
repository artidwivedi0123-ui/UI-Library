// Supporting text displayed below the title.

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/cn";

const DialogDescription = React.forwardRef<
  React.ComponentRef<
    typeof DialogPrimitive.Description
  >,
  React.ComponentPropsWithoutRef<
    typeof DialogPrimitive.Description
  >
>(
  (
    {
      className,
      ...props
    },
    ref
  ) => (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(
        "text-[var(--cuix-font-size-sm)] text-[var(--cuix-muted-foreground)]",
        className
      )}
      {...props}
    />
  )
);

DialogDescription.displayName =
  "DialogDescription";

export { DialogDescription };