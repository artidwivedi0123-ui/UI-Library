import type * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { InputVariants } from "@/components/primitives/Input/Input.variant";

export type InputProps = React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof InputVariants> & {
    asChild?: boolean;
  };
