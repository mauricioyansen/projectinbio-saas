"use client";

import { Button } from "@/app/components/landing-page/ui/Button";
import { Modal } from "@/app/components/landing-page/ui/Modal";
import { Textarea } from "@/app/components/landing-page/ui/Textarea";
import { TextInput } from "@/app/components/landing-page/ui/TextInput";
import { ArrowUpFromLine, Plus } from "lucide-react";
import { useState } from "react";

export function NewProject({ profileId }: { profileId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="w-[340px] h-[132px] rounded-[20px] bg-[var(--background-secondary)] flex items-center gap-2 justify-center hover:border border-dashed border-[var(--border-secondary)]"
      >
        <Plus className="size-10 text-[var(--accent-green)]" />
        <span>Novo projeto</span>
      </button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="bg-[var(--background-primary)] p-8 rounded-[20px] flex flex-col justify-between gap-10">
          <p className="text-white font-bold text-xl">Novo projeto</p>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-3 text-xs">
              <div className="w-[100px] h-[100px] rounded-xl bg-[var(--background-tertiary)] overflow-hidden">
                <button className="w-full h-full">100x100</button>
              </div>
              <button className="text-white flex items-center gap-2">
                <ArrowUpFromLine className="size-4" />
                <span>Adicionar imagem</span>
              </button>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
              />
            </div>
            <div className="flex flex-col gap-4 w-[293px]">
              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">
                  Título do projeto
                </label>
                <TextInput
                  id="project-name"
                  placeholder="Digite o nome do projeto"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="project-description"
                  className="text-white font-bold"
                >
                  Descrição
                </label>
                <Textarea
                  id="project-description"
                  placeholder="Dê uma breve descrição do seu projeto"
                  className="h-36"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">
                  URL do projeto
                </label>
                <TextInput
                  type="url"
                  id="project-url"
                  placeholder="Digite a URL do projeto"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button className="font-bold text-white cursor-pointer">Voltar</button>
            <Button>Salvar</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
