import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { VariantProps } from "class-variance-authority";

import {
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
} from "@/components/layout/Accordion/accordion.variants";

export type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
>;

export interface AccordionItemProps
  extends
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {}

export interface AccordionTriggerProps
  extends
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {}

export interface AccordionContentProps
  extends
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
    VariantProps<typeof accordionContentVariants> {}
