import { cn } from "@/app/lib/utils";

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        `
    w-full p-3 bg-[var(--background-secondary)] text-white placeholder:text-[var(--content-placeholder)] rounded-xl border border-transparent hover:border-[var(--border-secondary)] hover:text-[var(--content-body)] active:border-[var(--border-tertiary)]`,
        props.className
      )}
    />
  );
}
