import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-[var(--cuix-radius-lg)]",
    "border",
    "transition-all",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-[var(--cuix-colors-background)] border-[var(--cuix-colors-border)] shadow-[var(--cuix-shadow-sm)]",

        outline:
          "bg-transparent border-[var(--cuix-colors-border)]",

        elevated:
          "bg-[var(--cuix-colors-background)] border-transparent shadow-[var(--cuix-shadow-lg)]",

        filled:
          "bg-[var(--cuix-colors-muted)] border-transparent",

        ghost:
          "bg-transparent border-transparent shadow-none",
      },

      padding: {
        none: "p-0",
        sm: "p-[var(--cuix-spacing-sm)]",
        md: "p-[var(--cuix-spacing-md)]",
        lg: "p-[var(--cuix-spacing-lg)]",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);