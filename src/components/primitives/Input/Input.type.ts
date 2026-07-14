import type * as React from "react";
import type { VariantProps } from "class-variance-authority";

import { InputVariants } from "./Input.variant";

export type InputProps = React.ComponentPropsWithRef<"input"> & 
    VariantProps<typeof InputVariants> & {
  asChild?: boolean;
}
