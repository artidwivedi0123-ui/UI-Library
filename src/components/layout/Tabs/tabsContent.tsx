import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/cn";
import { tabsContentVariants } from "@/components/layout/Tabs/tabs.variant";
import type { TabsContentProps } from "@/components/layout/Tabs/tabs.type";

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, padding, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      tabsContentVariants({ padding }),
      className
    )}
    {...props}
  />
));

TabsContent.displayName = "TabsContent";

export { TabsContent };