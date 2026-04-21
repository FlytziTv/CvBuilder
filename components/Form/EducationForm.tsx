"use client";

import { FormSection } from "@/components/ui/FormSection";
import { GraduationCap, Plus, Trash2 } from "lucide-react";
import { InputGroup } from "../ui/inputGroup";

export function EducationForm() {
  return (
    <FormSection title="Formations" icon={GraduationCap} defaultOpen={false}>
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-slate-200 p-3 space-y-3 bg-slate-50">
          {/* Header de la carte */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Formation 1 {/*{index + 1} */}
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
            <InputGroup label="Diplôme *" value="" placeholder="BTS SIO" />
            <InputGroup label="Domaine *" value="" placeholder="Informatique" />
            <InputGroup
              label="Établissement *"
              value="location"
              placeholder="Université de Paris"
              cols={true}
            />
            <InputGroup label="Début *" value="startDate" type="month" />
            <InputGroup label="Fin" value="endDate" type="month" />

            <label className="flex items-center gap-2 cursor-pointer my-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-brand-600"
              />

              <span className="text-xs text-slate-600">En cours</span>
            </label>

            <InputGroup
              label="Mention / Distinction"
              value="mention"
              type="text"
              cols={true}
              placeholder="Mention Bien"
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
