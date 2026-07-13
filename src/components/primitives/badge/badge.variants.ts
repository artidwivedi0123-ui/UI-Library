import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-[var(--cuix-radius-full)]",
    "border",
    "font-medium",
    "transition-colors",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-[var(--cuix-colors-primary)] text-[var(--cuix-colors-primary-foreground)] border-transparent",

        secondary:
          "bg-[var(--cuix-colors-secondary)] text-[var(--cuix-colors-secondary-foreground)] border-transparent",

        outline:
          "bg-transparent border-[var(--cuix-colors-border)] text-[var(--cuix-colors-foreground)]",

        destructive:
          "bg-[var(--cuix-colors-destructive)] text-[var(--cuix-colors-destructive-foreground)] border-transparent",

        success:
          "bg-[var(--cuix-colors-success)] text-[var(--cuix-colors-success-foreground)] border-transparent",

        warning:
          "bg-[var(--cuix-colors-warning)] text-[var(--cuix-colors-warning-foreground)] border-transparent",

        info: "bg-[var(--cuix-colors-info)] text-[var(--cuix-colors-info-foreground)] border-transparent",
      },
      size: {
        sm: "h-5 px-2 text-[var(--cuix-font-size-xs)]",
        md: "h-6 px-2.5 text-[var(--cuix-font-size-sm)]",
        lg: "h-7 px-3 text-[var(--cuix-font-size-md)]",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
