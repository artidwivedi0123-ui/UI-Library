import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/utils/cn";
import { accordionItemVariants } from "@/components/layout/Accordion/accordion.variants";
import type { AccordionItemProps } from "@/components/layout/Accordion/accordion.types";

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant, ...props }, ref ) =>  (
  <AccordionPrimitive.Item  
    ref={ref}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export { AccordionItem };