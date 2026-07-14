import * as DialogPrimitive from "@radix-ui/react-dialog";

// Root dialog provider.
const Dialog = DialogPrimitive.Root;

// Opens the dialog.
const DialogTrigger = DialogPrimitive.Trigger;

// Renders dialog into a portal.
const DialogPortal = DialogPrimitive.Portal;

// Closes the dialog.
const DialogClose = DialogPrimitive.Close;

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
};