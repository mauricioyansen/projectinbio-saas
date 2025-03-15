export function ProjectCard() {
  return (
    <div
      className="w-[430px] h-[132px] flex gap-5 bg-[var(--background-secondary)] p-3
     border border-transparent hover:border-[var(--border-secondary)]"
    >
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img
          src="/project1.jpg"
          alt="projeto"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-[var(--accent-green)]">
          10 Cliques
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold">Projeto 1</span>
          <span className="text-[var(--content-body)] text-sm">
            Descrição detalhada do projeto
          </span>
        </div>
      </div>
    </div>
  );
}
