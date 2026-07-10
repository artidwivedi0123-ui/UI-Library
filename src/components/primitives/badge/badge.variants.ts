import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:size-3 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--cuix-colors-primary)] text-[var(--cuix-colors-primary-foreground)] shadow-[var(--cuix-shadow-sm)] hover:bg-[var(--cuix-colors-primary)]/90",
        destructive:
          "bg-[var(--cuix-colors-destructive)] text-[var(--cuix-colors-destructive-foreground)] shadow-[var(--cuix-shadow-sm)] hover:bg-[var(--cuix-colors-destructive)]/90 focus-visible:ring-[var(--cuix-colors-destructive)]/20",
        outline:
          "border border-[var(--cuix-colors-border)] bg-[var(--cuix-colors-background)] shadow-[var(--cuix-shadow-sm)] hover:bg-[var(--cuix-colors-accent)] hover:text-[var(--cuix-colors-accent-foreground)]",
        secondary:
          "bg-[var(--cuix-colors-secondary)] text-[var(--cuix-colors-secondary-foreground)] shadow-[var(--cuix-shadow-sm)] hover:bg-[var(--cuix-colors-secondary)]/80",
      },
      size: {
        default:
          "h-9 px-[var(--cuix-spacing-md)] py-[var(--cuix-spacing-sm)] has-[>svg]:px-3",
        sm: "h-8 rounded-[var(--cuix-radius-md)] gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-[var(--cuix-radius-md)] px-[var(--cuix-spacing-lg)] has-[>svg]:px-[var(--cuix-spacing-md)]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
