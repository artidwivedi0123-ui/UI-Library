import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";

const ModalDescription = React.forwardRef<
  React.ComponentRef<typeof Dialog.Description>,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => (
  <Dialog.Description
    ref={ref}
    className={cn(
      "text-sm text-[var(--cuix-colors-muted-foreground)]",
      className
    )}
    {...props}
  />
));

ModalDescription.displayName = Dialog.Description.displayName;

export { ModalDescription };