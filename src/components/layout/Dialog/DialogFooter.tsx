// Footer section used for action buttons.

import * as React from "react";

import { cn } from "@/utils/cn";

const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end gap-2",
        className
      )}
      {...props}
    />
  )
);

DialogFooter.displayName = "DialogFooter";

export { DialogFooter };