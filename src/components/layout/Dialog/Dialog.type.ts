import type * as DialogPrimitive from "@radix-ui/react-dialog";
import type { VariantProps } from "class-variance-authority";

import { dialogVariants } from "@/components/layout/Dialog/Dialog.variants";

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogVariants> {}