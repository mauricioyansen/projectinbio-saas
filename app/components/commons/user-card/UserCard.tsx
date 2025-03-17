import { Github, Instagram, Linkedin, Plus, Twitter } from "lucide-react";
import { Button } from "../../landing-page/ui/Button";
import { EditSocialLinks } from "./EditSocialLinks";
import Link from "next/link";
import { ProfileDataType } from "@/app/server/get-profile-data";
import { AddCustomLink } from "./AddCustomLink";
import { formatUrl } from "@/app/lib/utils";
import { EditUserCard } from "./EditUserCard";
import { getDownloadUrlFromPath } from "@/app/lib/firebase";

export async function UserCard({
  profileData,
  isOwner,
}: {
  profileData?: ProfileDataType;
  isOwner?: boolean;
}) {
  const icons = [Github, Instagram, Linkedin, Twitter, Plus];

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white/10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          src={
            (await getDownloadUrlFromPath(profileData?.imagePath)) ||
            "https://github.com/mauricioyansen.png"
          }
          alt=""
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            {profileData?.name || "Mauricio Yansen"}
          </h3>
          {isOwner && <EditUserCard profileData={profileData} />}
        </div>
        <p className="opacity-40">
          {profileData?.description || "Eu faço produtos para a Internet"}
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3 border-b border-[#1e1e1e] pb-5">
          {profileData?.socialMedias?.github && (
            <Link
              href={profileData.socialMedias.github}
              target="_blank"
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]"
            >
              <Github />
            </Link>
          )}

          {profileData?.socialMedias?.instagram && (
            <Link
              href={profileData.socialMedias.instagram}
              target="_blank"
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]"
            >
              <Instagram />
            </Link>
          )}

          {profileData?.socialMedias?.linkedin && (
            <Link
              href={profileData.socialMedias.linkedin}
              target="_blank"
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]"
            >
              <Linkedin />
            </Link>
          )}

          {profileData?.socialMedias?.twitter && (
            <Link
              href={profileData.socialMedias.twitter}
              target="_blank"
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]"
            >
              <Twitter />
            </Link>
          )}

          {!profileData &&
            icons.map((Icon, index) => (
              <button
                key={index}
                className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]"
              >
                <Icon />
              </button>
            ))}

          {isOwner && (
            <EditSocialLinks socialMedias={profileData?.socialMedias} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="w-full flex flex-col items-center gap-3">
          {profileData?.link1?.title && (
            <Link
              href={formatUrl(profileData.link1.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full cursor-pointer">
                {profileData.link1.title}
              </Button>
            </Link>
          )}

          {profileData?.link2?.title && (
            <Link
              href={formatUrl(profileData.link2.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full cursor-pointer">
                {profileData.link2.title}
              </Button>
            </Link>
          )}

          {profileData?.link3?.title && (
            <Link
              href={formatUrl(profileData.link3.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full cursor-pointer">
                {profileData.link3.title}
              </Button>
            </Link>
          )}
        </div>
      </div>
      {isOwner && <AddCustomLink />}
    </div>
  );
}
