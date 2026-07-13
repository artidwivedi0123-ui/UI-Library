import * as Dialog from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";

import { modalVariants } from "@/components/layout/Modal/Modal.variant";
import { HTMLAttributes } from "react";

export interface ModalProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {}
