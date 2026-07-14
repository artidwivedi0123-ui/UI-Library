// Main dialog container rendered inside a portal.

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/cn";

import { DialogPortal } from "@/components/layout/Dialog/Dialog";
import { DialogOverlay } from "@/components/layout/Dialog/DialogOverlay";

import { dialogVariants } from "./Dialog.variants";

import type { DialogContentProps } from "./Dialog.type";

import { X } from "lucide-react";

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(
  (
    {
      className,
      children,
      variant,
      size,
      ...props
    },
    ref
  ) => (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          dialogVariants({
            variant,
            size,
          }),
          className
        )}
        {...props}
      >
        {children}

        <DialogPrimitive.Close
          className={cn(
            "absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100"
          )}
        >
          <X className="h-4 w-4" />

          <span className="sr-only">
            Close
          </span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);

DialogContent.displayName = "DialogContent";

export { DialogContent };