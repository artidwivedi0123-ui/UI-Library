import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";

const ModalTitle = React.forwardRef<
  React.ComponentRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => (
  <Dialog.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));

ModalTitle.displayName = Dialog.Title.displayName;

export { ModalTitle };