"use client";

import { formatUrl } from "@/app/lib/utils";
import { ProjectDataType } from "@/app/server/get-profile-data";
import Link from "next/link";

export function ProjectCard({
  project,
  isOwner,
  img,
}: {
  project: ProjectDataType;
  isOwner: boolean;
  img: string;
}) {
  const formattedUrl = formatUrl(project?.projectUrl || "");

  function handleLinkClick() {
    console.log("clicked");
  }

  return (
    <Link href={formattedUrl} target="_blank" onClick={handleLinkClick}>
      <div
        className="w-[340px] h-[132px] flex gap-5 bg-[var(--background-secondary)] p-3
     border border-transparent hover:border-[var(--border-secondary)] rounded-xl"
      >
        <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
          <img src={img} alt="projeto" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          {isOwner && (
            <span className="uppercase text-xs font-bold text-[var(--accent-green)]">
              {project.totalVisits || 0} Cliques
            </span>
          )}
          <div className="flex flex-col">
            <span className="text-white font-bold">{project.projectName}</span>
            <span className="text-[var(--content-body)] text-sm">
              {project.projectDescription}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
