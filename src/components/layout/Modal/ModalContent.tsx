import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { cn } from "@/utils/cn";
import { modalVariants } from "@/components/layout/Modal/Modal.variant";

const ModalContent = React.forwardRef<
  React.ComponentRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, ...props }, ref) => (
  <Dialog.Content
    ref={ref}
    className={cn(
      modalVariants(),
      className
    )}
    {...props}
  />
));

ModalContent.displayName = Dialog.Content.displayName;

export { ModalContent };