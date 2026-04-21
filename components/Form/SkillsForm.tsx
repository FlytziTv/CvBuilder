"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { Zap, Plus, X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { ResumeData, Skill } from "@/types/resume";
import { FormSection } from "../ui/FormSection";
import { CATEGORIES } from "@/data/skillsCat";
import { cn } from "@/lib/utils";

export function SkillsForm() {
  const { register, control } = useFormContext<ResumeData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  function addSkill(category: Skill["category"]) {
    append({
      id: uuidv4(),
      name: "",
      category,
    });
  }

  return (
    <FormSection
      title="Compétences"
      icon={Zap}
      defaultOpen={false}
      badge={fields.length}
    >
      <div className="flex flex-col gap-2">
        {fields.length === 0 && (
          <p className="text-xs text-slate-400 text-center py-6 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Aucune compétence. Utilisez les boutons ci-dessous.
          </p>
        )}

        {fields.map((field, index) => {
          const cat = CATEGORIES.find((c) => c.value === field.category);

          return (
            <div key={field.id} className="flex items-center gap-2">
              <span
                className={cn(
                  "text-xs px-2 py-1 rounded-md border shrink-0 w-20 text-center font-medium",
                  cat?.color,
                )}
              >
                {cat?.label}
              </span>
              <input
                placeholder={
                  field.category === "technique"
                    ? "React, TypeScript…"
                    : field.category === "outil"
                      ? "Figma, Jira…"
                      : "Leadership…"
                }
                className="input flex-1 text-xs"
                {...register(`skills.${index}.name`)}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-slate-300 hover:text-red-400 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}

        <div className="flex flex-wrap gap-2 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => addSkill(cat.value)}
              className={cn(
                "text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5",
                "hover:opacity-80 transition-opacity",
                cat.color,
              )}
            >
              <Plus className="w-3 h-3" />
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </FormSection>
  );
}
