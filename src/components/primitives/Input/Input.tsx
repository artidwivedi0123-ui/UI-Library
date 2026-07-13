import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";

import { InputVariants } from "@/components/primitives/Input/Input.variant";
import type { InputProps } from "@/components/primitives/Input/Input.type";

function Input({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: InputProps) {
  const Comp = asChild ? Slot : "input";

  return (
    <Comp
      data-slot="input"
      className={cn(
        InputVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}

export { Input };