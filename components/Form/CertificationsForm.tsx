"use client";

import { FormSection } from "@/components/ui/FormSection";
import { Briefcase, Plus, Trash2 } from "lucide-react";
import { InputGroup } from "../ui/inputGroup";

export function CertificationsForm() {
  return (
    <FormSection title="Certifications" icon={Briefcase} defaultOpen={false}>
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-slate-200 p-3 space-y-3 bg-slate-50">
          {/* Header de la carte */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Certification 1 {/*{index + 1} */}
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
              label="Intitulé de la certification *"
              value="certificationTitle"
              placeholder="Certification XYZ"
            />
            <InputGroup
              label="Organisme *"
              value="issuer"
              placeholder="SZ Teams"
            />
            <InputGroup label="Obtention *" value="startDate" type="month" />
            <InputGroup label="Expiration" value="endDate" type="month" />
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
