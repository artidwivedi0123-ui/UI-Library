import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";

const ModalOverlay = React.forwardRef<
  React.ComponentRef<typeof Dialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
      className
    )}
    {...props}
  />
));

ModalOverlay.displayName = Dialog.Overlay.displayName;

export { ModalOverlay };