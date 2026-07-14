// Background overlay displayed behind the dialog.

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/utils/cn";

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-gray/80",
      "data-[state=open]:animate-in",
      "data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0",
      "data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
  />
));

DialogOverlay.displayName = "DialogOverlay";

export { DialogOverlay };