import { cva } from "class-variance-authority";

export const modalVariants = cva(
  "fixed left-1/2 top-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-[var(--cuix-spacing-md)] border bg-[var(--cuix-colors-background)] shadow-[var(--cuix-shadow-lg)] duration-200 rounded-[var(--cuix-radius-lg)] outline-none",
  {
    variants: {
      variant: {
        default:
          "border-[var(--cuix-colors-border)]",

        elevated:
          "border-transparent shadow-[var(--cuix-shadow-xl)]",

        destructive:
          "border-[var(--cuix-colors-destructive)]",

        success:
          "border-green-500",

        warning:
          "border-yellow-500",
      },

      size: {
        sm: "max-w-sm",

        md: "max-w-md",

        lg: "max-w-lg",

        xl: "max-w-2xl",

        full:
          "max-w-[95vw] h-[95vh]",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);