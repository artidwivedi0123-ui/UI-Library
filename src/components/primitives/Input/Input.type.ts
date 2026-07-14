import type * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { InputVariants } from "./Input.variant";

type NativeInputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "size"
>;

export interface InputProps
  extends NativeInputProps,
    VariantProps<typeof InputVariants> {
  asChild?: boolean;
}