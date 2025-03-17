import { ProjectCard } from "../commons/ProjectCard";
import { TotalVisits } from "../commons/TotalVisits";
import { UserCard } from "../commons/user-card/UserCard";
import { Button } from "./ui/Button";
import { CreateNow } from "./ui/CreateNow";
import { TextInput } from "./ui/TextInput";

export function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes <br /> sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe eles com o mundo.
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>
        <CreateNow />
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4b2dbb,transparent_55%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -bottom-[7%] -right-[45%]">
            <TotalVisits totalVisits={12345} />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-9">
            <ProjectCard
              name="Projeto 1"
              description="Descrição do projeto 1"
              img="/project1.jpg"
            />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard
              name="Projeto 2"
              description="Descrição do projeto 2"
              img="/project2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
