import { cn } from "@/app/lib/utils";

export function Button({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "p-3 text-white rounded-xl font-bond whitespace-nowrap hover:opacity-95 disabled:opacity-70 cursor-pointer",
        variant === "primary" && "bg-[var(--accent-purple)]",
        variant === "secondary" && "bg-[var(--background-tertiary)]",
        variant === "ghost" && "border-[var(--border-primary)]]",
        props.className
      )}
    >
      {children}
    </button>
  );
}
