"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { Folder, Plus, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { ResumeData } from "@/types/resume";
import { FormSection } from "../ui/FormSection";
import { InputGroup } from "../ui/inputGroup";

export function ProjectForm() {
  const { register, control } = useFormContext<ResumeData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  function addProject() {
    append({
      id: uuidv4(),
      name: "",
      type: "",
      technologies: "",
      link: "",
    });
  }

  return (
    <FormSection
      title="Projets"
      icon={Folder}
      defaultOpen={false}
      badge={fields.length}
    >
      <div className="flex flex-col gap-4">
        {fields.length === 0 && (
          <p className="text-xs text-slate-400 text-center py-6 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Aucun projet. Cliquez sur « Ajouter » pour commencer.
          </p>
        )}

        {fields.map((field, index) => (
          <div
            key={field.id}
            className="rounded-lg border border-slate-200 p-3 space-y-3 bg-slate-50"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Projet {index + 1}
              </span>
              <button
                type="button"
                onClick={() => remove(index)}
                className="btn-danger p-1 rounded-md"
              >
                <Trash2 size={14} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <InputGroup
                label="Nom du projet *"
                placeholder="CV Builder"
                {...register(`projects.${index}.name`)}
              />
              <InputGroup
                label="Type *"
                placeholder="Dev web, Data Science…"
                {...register(`projects.${index}.type`)}
              />
              <InputGroup
                label="Technologies utilisées"
                placeholder="React, Node.js, Python…"
                cols={true}
                {...register(`projects.${index}.technologies`)}
              />
              <InputGroup
                label="Lien (GitHub, démo…)"
                placeholder="https://github.com/username/project"
                cols={true}
                {...register(`projects.${index}.link`)}
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addProject}
          className="btn-secondary w-full justify-center text-xs"
        >
          <Plus size={14} />
          Ajouter un projet
        </button>
      </div>
    </FormSection>
  );
}
