import { Github, Instagram, Linkedin, Twitter, Plus } from "lucide-react";
import { Button } from "../../landing-page/ui/Button";
import { EditSocialLinks } from "./EditSocialLinks";
import Link from "next/link";
import { ProfileDataType } from "@/app/server/get-profile-data";
import LinkedIn from "next-auth/providers/linkedin";

export function UserCard({ profileData }: { profileData?: ProfileDataType }) {
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white/10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          src="https://github.com/mauricioyansen.png"
          alt=""
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Mauricio Yansen
          </h3>
        </div>
        <p className="opacity-40">"Eu faço produtos para a internet"</p>
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

          {/* {icons.map((Icon, index) => (
            <Button
              key={index}
              className="p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e] transition cursor-pointer"
            >
              <Icon />
            </Button>
          ))} */}
          <EditSocialLinks socialMedias={profileData?.socialMedias} />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          <Button className="w-full cursor-pointer">
            Template SaaS - Compre Agora
          </Button>
          <Button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E] cursor-pointer">
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
