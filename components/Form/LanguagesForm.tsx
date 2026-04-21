"use client";

import { FormSection } from "@/components/ui/FormSection";
import { LANGUAGES } from "@/data/level";
import { ChevronDown, Globe, Plus, X } from "lucide-react";

export function LanguagesForm() {
  return (
    <FormSection title="Langues" icon={Globe} defaultOpen={false}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-2 w-full">
          <input placeholder="Anglais" className="input flex-1 text-xs" />
          <div className="relative w-44 shrink-0">
            <select className="input text-xs w-full appearance-none pr-8">
              <option value="">Niveau…</option>
              {LANGUAGES.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>

            {/* Le chevron positionné par rapport au bord du conteneur */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown size={14} />
            </div>
          </div>
          <button
            type="button"
            // onClick={() => remove(index)}
            className="text-slate-300 hover:text-red-400 transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="button"
            // onClick={addLanguage}
            className="btn-secondary w-full justify-center text-xs"
          >
            <Plus size={14} />
            Ajouter une langue
          </button>
        </div>
      </div>
    </FormSection>
  );
}
