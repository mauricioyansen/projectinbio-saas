import { Header } from "@/app/components/landing-page/Header";
import { Rocket } from "lucide-react";
import CreateLinkForm from "./create-link-form";
import { trackServerEvent } from "@/app/lib/mixpanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProjectInBio - Create",
  description: "Seus projetos e redes sociais em um único link",
};

export default function CreatePage() {
    trackServerEvent("page_view", {
      page: "create",
    });
    
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket className="size-10" />
        </div>
        <CreateLinkForm />
      </div>
    </div>
  );
}
