import * as React from "react";
import { cn } from "@/utils/cn";

import { cardVariants } from "@/components/layout/Card/Card.variants";
import type { CardProps } from "@/components/layout/Card/Card.type";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding }), className)}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };