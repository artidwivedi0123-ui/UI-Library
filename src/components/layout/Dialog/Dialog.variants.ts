import { cva } from "class-variance-authority";

export const dialogVariants = cva(
  [
    "fixed",
    "left-1/2",
    "top-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "grid",
    "gap-4",
    "duration-200",
    "rounded-[var(--cuix-radius-lg)]",
    "border",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-[var(--cuix-colors-background)] border-[var(--cuix-colors-border)] shadow-[var(--cuix-shadow-lg)]",

        outline:
          "bg-transparent border-[var(--cuix-colors-border)]",

        filled:
          "bg-[var(--cuix-colors-muted)] border-transparent",

        ghost:
          "bg-transparent border-transparent shadow-none",
      },

      size: {
        sm: "max-w-sm p-[var(--cuix-spacing-md)]",

        md: "max-w-lg p-[var(--cuix-spacing-lg)]",

        lg: "max-w-2xl p-[var(--cuix-spacing-xl)]",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);