"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { Briefcase, Plus, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { ResumeData } from "@/types/resume";
import { FormSection } from "../ui/FormSection";
import { InputGroup, TextareaGroup } from "../ui/inputGroup";

export function ExperienceForm() {
  const { register, control, watch } = useFormContext<ResumeData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  function addExperience() {
    append({
      id: uuidv4(),
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
  }

  return (
    <FormSection
      title="Expériences"
      icon={Briefcase}
      defaultOpen={false}
      badge={fields.length}
    >
      <div className="flex flex-col gap-4">
        {fields.length === 0 && (
          <p className="text-xs text-slate-400 text-center py-6 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Aucune expérience. Cliquez sur « Ajouter » pour commencer.
          </p>
        )}

        {fields.map((field, index) => {
          const isCurrent = watch(`experiences.${index}.current`);

          return (
            <div
              key={field.id}
              className="rounded-lg border border-slate-200 p-3 space-y-3 bg-slate-50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Expérience {index + 1}
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
                  label="Intitulé du poste *"
                  placeholder="Développeur Fullstack"
                  {...register(`experiences.${index}.title`)}
                />
                <InputGroup
                  label="Entreprise *"
                  placeholder="ACME Corp"
                  {...register(`experiences.${index}.company`)}
                />
                <InputGroup
                  label="Lieu"
                  placeholder="Paris, France"
                  cols={true}
                  {...register(`experiences.${index}.location`)}
                />
                <InputGroup
                  label="Début *"
                  type="month"
                  {...register(`experiences.${index}.startDate`)}
                />
                <InputGroup
                  label="Fin"
                  type="month"
                  disabled={isCurrent}
                  {...register(`experiences.${index}.endDate`)}
                />

                <label className="flex items-center gap-2 cursor-pointer my-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded accent-brand-600"
                    {...register(`experiences.${index}.current`)}
                  />
                  <span className="text-xs text-slate-600">
                    En poste actuellement
                  </span>
                </label>

                <TextareaGroup
                  label="Réalisations *"
                  placeholder="Développement d'une application React/Node.js, amélioration de la performance de 30%..."
                  fullWidth={true}
                  {...register(`experiences.${index}.description`)}
                />
              </div>
            </div>
          );
        })}

        <button
          type="button"
          onClick={addExperience}
          className="btn-secondary w-full justify-center text-xs"
        >
          <Plus size={14} />
          Ajouter une expérience
        </button>
      </div>
    </FormSection>
  );
}
