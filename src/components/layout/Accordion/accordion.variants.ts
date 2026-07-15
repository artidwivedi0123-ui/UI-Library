import { cva } from "class-variance-authority";

export const accordionItemVariants = cva(
  "border-b border-[var(--cuix-colors-border)]",
  {
    variants: {
      variant: {
        default: "",
        outline: "border rounded-[var(--cuix-radius-md)] px-4",
        ghost: "border-none",
      }, 
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const accordionTriggerVariants = cva(
  [
    "flex",
    "w-full",
    "flex-1",
    "items-center",
    "justify-between",
    "py-4",
    "text-left",
    "transition-all",
    "hover:underline",
    "[&[data-state=open]>svg]:rotate-180",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const accordionContentVariants = cva(
  [
    "overflow-hidden",
    "data-[state=closed]:animate-accordion-up",
    "data-[state=open]:animate-accordion-down",
  ].join(" "),
  {
    variants: {
      padding: {
        sm: "pb-4",
        md: "pb-6",
        lg: "pb-8",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  }
);