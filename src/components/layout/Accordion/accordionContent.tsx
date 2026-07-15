import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/utils/cn";
import { accordionContentVariants } from "@/components/layout/Accordion/accordion.variants";
import type { AccordionContentProps } from "@/components/layout/Accordion/accordion.types";

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, padding, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      accordionContentVariants({ padding }),
      className
    )}
    {...props}
  >
    <div>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = "AccordionContent";

export { AccordionContent };