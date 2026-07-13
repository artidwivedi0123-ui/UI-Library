import type * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { InputVariants } from "./Input.variant";

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  asChild?: boolean;
}