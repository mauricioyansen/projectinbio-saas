import { ProjectCard } from "@/app/components/commons/ProjectCard";
import { TotalVisits } from "@/app/components/commons/TotalVisits";
import { UserCard } from "@/app/components/commons/user-card/UserCard";
import { auth } from "@/app/lib/auth";
import {
  getProfileData,
  getProfileProjects,
} from "@/app/server/get-profile-data";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { NewProject } from "./new-project";
import { getDownloadUrlFromPath } from "@/app/lib/firebase";
import { increaseProfileVisits } from "@/app/actions/increase-profile-visits";
import { Metadata } from "next";
import { getSEOTags } from "@/app/lib/seo";

export const metadata: Metadata = getSEOTags({
  appName: "ProjectInBio",
  appDescription: "Seus projetos e redes sociais em um único link",
  keywords: ["ProjectInBio", "Portfólio", "SaaS"],
  appDomain: "https://projectinbio-saas.vercel.app/",
  canonicalUrlRelative: "/",
});

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await params;

  const profileData = await getProfileData(profileId);

  if (!profileData) return notFound();

  const projects = await getProfileProjects(profileId);

  const session = await auth();

  const isOwner = profileData.userId === session?.user?.id;

  if (!isOwner) {
    await increaseProfileVisits(profileId);
  }

  if (isOwner && !session?.user.isSubscribed && !session?.user.isTrial)
    redirect(`/${profileId}/upgrade`);
  //To do: add page view

  //To do: not trial => redirect to upgrade

  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      {session?.user.isTrial && !session.user.isSubscribed && (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-[var(--background-tertiary)]">
          <span>Você está usando a versão trial.</span>
          <Link href={`/${profileId}/upgrade`}>
            <button className="text-[var(--accent-green)] font-bold cursor-pointer">
              Faça o upgrade agora!
            </button>
          </Link>
        </div>
      )}

      <div className="w-1/2 flex justify-center h-min">
        <UserCard profileData={profileData} isOwner={isOwner} />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        {projects.map(async (project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isOwner={isOwner}
            img={(await getDownloadUrlFromPath(project.imagePath)) || ""}
          />
        ))}

        {isOwner && <NewProject profileId={profileId} />}
      </div>
      {isOwner && (
        <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
          <TotalVisits
            totalVisits={profileData.totalVisits}
            showPortalAndExitBtn
          />
        </div>
      )}
    </div>
  );
}
