import { Header } from "@/app/components/landing-page/Header";
import { PlanButtons } from "./plan-buttons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProjectInBio - Upgrade",
  description: "Seus projetos e redes sociais em um único link",
};

export default function UpgradePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Header />
      <h2 className="text-2xl font-bold">Escolha o plano</h2>
      <PlanButtons />
    </div>
  );
}
