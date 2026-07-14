import { cva } from "class-variance-authority";

export const InputVariants = cva(
  [
    "flex",
    "w-full",
    "rounded-[var(--cuix-radius-md)]",
    "border",
    "transition-colors",
    "outline-none",

    "placeholder:text-[var(--cuix-colors-muted-foreground)]",

    "disabled:cursor-not-allowed",
    "disabled:opacity-50",

    "focus-visible:ring-2",
    "focus-visible:ring-[var(--cuix-colors-ring)]",
    "focus-visible:border-[var(--cuix-colors-ring)]",

    "aria-invalid:border-[var(--cuix-colors-destructive)]",
    "aria-invalid:ring-2",
    "aria-invalid:ring-[var(--cuix-colors-destructive)]/20",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-[var(--cuix-colors-border)] bg-[var(--cuix-colors-background)] text-[var(--cuix-colors-foreground)]",

        outline:
          "border-[var(--cuix-colors-border)] bg-transparent text-[var(--cuix-colors-foreground)]",

        filled:
          "border-transparent bg-[var(--cuix-colors-muted)] text-[var(--cuix-colors-foreground)]",

        flushed:
          "rounded-none border-x-0 border-t-0 border-b border-[var(--cuix-colors-border)] bg-transparent px-0",

        ghost:
          "border-transparent bg-transparent shadow-none",

        unstyled:
          "border-0 rounded-none bg-transparent shadow-none p-0",
      },

      inputsize: {
        xs: "h-8 px-2 text-[var(--cuix-font-size-xs)]",
        sm: "h-9 px-3 text-[var(--cuix-font-size-sm)]",
        md: "h-10 px-3 text-[var(--cuix-font-size-md)]",
        lg: "h-11 px-4 text-[var(--cuix-font-size-lg)]",
        xl: "h-12 px-5 text-[var(--cuix-font-size-xl)]",
      },
    },

    defaultVariants: {
      variant: "default",
      inputsize: "md",
    },
  }
);