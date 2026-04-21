"use client";

import { FormSection } from "@/components/ui/FormSection";
import { Briefcase, Plus, Trash2 } from "lucide-react";
import { InputGroup, TextareaGroup } from "../ui/inputGroup";

export function ExperienceForm() {
  return (
    <FormSection title="Expériences" icon={Briefcase} defaultOpen={false}>
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-slate-200 p-3 space-y-3 bg-slate-50">
          {/* Header de la carte */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Expérience 1 {/*{index + 1} */}
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
              label="Intitulé du poste *"
              value="jobTitle"
              placeholder="Développeur Fullstack"
            />
            <InputGroup
              label="Entreprise *"
              value="company"
              placeholder="SZ Teams"
            />
            <InputGroup
              label="Lieu *"
              value="location"
              placeholder="Paris, France"
              cols={true}
            />
            <InputGroup label="Début *" value="startDate" type="month" />
            <InputGroup label="Fin" value="endDate" type="month" />

            <label className="flex items-center gap-2 cursor-pointer my-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-brand-600"
              />

              <span className="text-xs text-slate-600">
                En poste actuellement
              </span>
            </label>

            <TextareaGroup
              label="Réalisations *"
              placeholder="Développement d'une application de gestion de projet en React et Node.js, améliorant la productivité de 30%..."
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
