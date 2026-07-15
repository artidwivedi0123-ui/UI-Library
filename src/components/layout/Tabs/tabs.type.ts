import * as TabsPrimitive from "@radix-ui/react-tabs";
import { VariantProps } from "class-variance-authority";

import {
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
} from "@/components/layout/Tabs/tabs.variant";

export type TabsProps =
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
    VariantProps<typeof tabsContentVariants> {}