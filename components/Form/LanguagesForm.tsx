"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { Globe, Plus, X, ChevronDown } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { ResumeData } from "@/types/resume";
import { FormSection } from "../ui/FormSection";
import { LANGUAGES } from "@/data/level";

export function LanguagesForm() {
  const { register, control } = useFormContext<ResumeData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages",
  });

  return (
    <FormSection
      title="Langues"
      icon={Globe}
      defaultOpen={false}
      badge={fields.length}
    >
      <div className="flex flex-col gap-3">
        {fields.length === 0 && (
          <p className="text-xs text-slate-400 text-center py-6 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Aucune langue. Cliquez sur « Ajouter » pour commencer.
          </p>
        )}

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2">
            <input
              placeholder="Anglais"
              className="input flex-1 text-xs"
              {...register(`languages.${index}.language`)}
            />
            <div className="relative w-44 shrink-0">
              <select
                className="input text-xs w-full appearance-none pr-8"
                {...register(`languages.${index}.level`)}
              >
                <option value="">Niveau…</option>
                {LANGUAGES.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronDown size={14} />
              </div>
            </div>
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-slate-300 hover:text-red-400 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ id: uuidv4(), language: "", level: "" })}
          className="btn-secondary w-full justify-center text-xs"
        >
          <Plus size={14} />
          Ajouter une langue
        </button>
      </div>
    </FormSection>
  );
}
