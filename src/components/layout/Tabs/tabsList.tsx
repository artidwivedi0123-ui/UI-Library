import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/cn";
import { tabsListVariants } from "@/components/layout/Tabs/tabs.variant";
import type { TabsListProps } from "@/components/layout/Tabs/tabs.type";

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
));

TabsList.displayName = "TabsList";

export { TabsList };