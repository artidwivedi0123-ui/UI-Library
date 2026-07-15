import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-[var(--cuix-radius-md)]",
    "bg-[var(--cuix-colors-muted)]",
    "p-1",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "",
        outline: "border border-[var(--cuix-colors-border)]",
        ghost: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const tabsTriggerVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-[var(--cuix-radius-sm)]",
    "transition-all",
    "focus-visible:outline-none",
    "data-[state=active]:bg-[var(--cuix-colors-background)]",
    "data-[state=active]:text-[var(--cuix-colors-foreground)]",
    "data-[state=active]:shadow-sm",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-2 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const tabsContentVariants = cva(
  "mt-4 outline-none",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  }
);