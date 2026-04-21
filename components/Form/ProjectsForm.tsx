"use client";

import { FormSection } from "@/components/ui/FormSection";
import { Folder, Plus, Trash2 } from "lucide-react";
import { InputGroup } from "../ui/inputGroup";

export function ProjectForm() {
  return (
    <FormSection title="Projets" icon={Folder} defaultOpen={false}>
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-slate-200 p-3 space-y-3 bg-slate-50">
          {/* Header de la carte */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Projet 1 {/*{index + 1} */}
            </span>
            <button
              type="button"
              // onClick={() => remove(index)}
              className="btn-danger p-1 rounded-md"
              title="Supprimer"
            >
              <Trash2 size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <InputGroup
              label="Nom du projet *"
              value="projectName"
              placeholder="Application de gestion de tâches"
            />
            <InputGroup
              label="Type *"
              value="projectType"
              placeholder="Dev web, Data Science, etc."
            />

            <InputGroup
              label="Technologies utilisées"
              value="technologies"
              placeholder="React, Node.js, Python, etc."
              cols={true}
            />
            <InputGroup
              label="Lien (GitHub, démo, etc.)"
              value="projectLink"
              placeholder="https://github.com/username/project"
              cols={true}
            />
          </div>
        </div>

        <button
          type="button"
          // onClick={addExperience}
          className="btn-secondary w-full justify-center text-xs"
        >
          <Plus size={14} />
          Ajouter une expérience
        </button>
      </div>
    </FormSection>
  );
}
