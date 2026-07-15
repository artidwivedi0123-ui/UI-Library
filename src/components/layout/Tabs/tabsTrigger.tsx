import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/cn";
import { tabsTriggerVariants } from "@/components/layout/Tabs/tabs.variant";
import type { TabsTriggerProps } from "@/components/layout/Tabs/tabs.type";

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      tabsTriggerVariants({ size }),
      className
    )}
    {...props}
  />
));

TabsTrigger.displayName = "TabsTrigger";

export { TabsTrigger };