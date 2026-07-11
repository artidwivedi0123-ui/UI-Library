import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cardVariants } from "@/components/layout/Card/Card.variants";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}