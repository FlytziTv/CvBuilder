"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { GraduationCap, Plus, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { ResumeData } from "@/types/resume";
import { FormSection } from "../ui/FormSection";
import { InputGroup } from "../ui/inputGroup";

export function EducationForm() {
  const { register, control, watch } = useFormContext<ResumeData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  function addEducation() {
    append({
      id: uuidv4(),
      degree: "",
      field: "",
      institution: "",
      startDate: "",
      endDate: "",
      current: false,
      honors: "",
    });
  }

  return (
    <FormSection
      title="Formations"
      icon={GraduationCap}
      defaultOpen={false}
      badge={fields.length}
    >
      <div className="flex flex-col gap-4">
        {fields.length === 0 && (
          <p className="text-xs text-slate-400 text-center py-6 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Aucune formation. Cliquez sur « Ajouter » pour commencer.
          </p>
        )}

        {fields.map((field, index) => {
          const isCurrent = watch(`education.${index}.current`);

          return (
            <div
              key={field.id}
              className="rounded-lg border border-slate-200 p-3 space-y-3 bg-slate-50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Formation {index + 1}
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
                  label="Diplôme *"
                  placeholder="BTS SIO"
                  {...register(`education.${index}.degree`)}
                />
                <InputGroup
                  label="Domaine *"
                  placeholder="Informatique"
                  {...register(`education.${index}.field`)}
                />
                <InputGroup
                  label="Établissement *"
                  placeholder="Université de Paris"
                  cols={true}
                  {...register(`education.${index}.institution`)}
                />
                <InputGroup
                  label="Début *"
                  type="month"
                  {...register(`education.${index}.startDate`)}
                />
                <InputGroup
                  label="Fin"
                  type="month"
                  disabled={isCurrent}
                  {...register(`education.${index}.endDate`)}
                />

                <label className="flex items-center gap-2 cursor-pointer my-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded accent-brand-600"
                    {...register(`education.${index}.current`)}
                  />
                  <span className="text-xs text-slate-600">En cours</span>
                </label>

                <InputGroup
                  label="Mention / Distinction"
                  placeholder="Mention Bien"
                  cols={true}
                  {...register(`education.${index}.honors`)}
                />
              </div>
            </div>
          );
        })}

        <button
          type="button"
          onClick={addEducation}
          className="btn-secondary w-full justify-center text-xs"
        >
          <Plus size={14} />
          Ajouter une formation
        </button>
      </div>
    </FormSection>
  );
}
