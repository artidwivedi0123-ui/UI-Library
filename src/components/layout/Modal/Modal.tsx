import * as React from "react";
import { cn } from "@/utils/cn";

import   {modalVariants} from "@/components/layout/Modal/Modal.variant";

import type { ModalProps } from "@/components/layout/Modal/Modal.type";

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modalVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Modal.displayName = "Modal";

export { Modal };