// Header section used for title and description.

import * as React from "react";

import { cn } from "@/utils/cn";

const DialogHeader = React.forwardRef<
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
        "flex flex-col gap-2 text-center sm:text-left",
        className
      )}
      {...props}
    />
  )
);

DialogHeader.displayName = "DialogHeader";

export { DialogHeader };