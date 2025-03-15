import { Play } from "lucide-react";

export function VideoExplanation() {
  return (
    <div className="border rounded-2xl border-[var(--border-primary)] aspect-video flex items-center justify-center my-20">
      <Play className="text-[var(--accent-purple)] size-16" />
    </div>
  );
}
