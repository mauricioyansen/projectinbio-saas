import { cn } from "@/app/lib/utils";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        `
    w-full p-3 bg-[var(--background-secondary)] text-white placeholder:text-[var(--content-placeholder)] rounded-xl border border-transparent hover:border-[var(--border-secondary)] hover:text-[var(--content-body)] focus:border-[var(--border-tertiary)] focus:outline-none`,
        props.className
      )}
    />
  );
}
