"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import { Award, Plus, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { ResumeData } from "@/types/resume";
import { FormSection } from "../ui/FormSection";
import { InputGroup } from "../ui/inputGroup";

export function CertificationsForm() {
  const { register, control } = useFormContext<ResumeData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certifications",
  });

  function addCertification() {
    append({
      id: uuidv4(),
      name: "",
      issuer: "",
      date: "",
      expiryDate: "",
    });
  }

  return (
    <FormSection
      title="Certifications"
      icon={Award}
      defaultOpen={false}
      badge={fields.length}
    >
      <div className="flex flex-col gap-4">
        {fields.length === 0 && (
          <p className="text-xs text-slate-400 text-center py-6 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Aucune certification. Cliquez sur « Ajouter » pour commencer.
          </p>
        )}

        {fields.map((field, index) => (
          <div
            key={field.id}
            className="rounded-lg border border-slate-200 p-3 space-y-3 bg-slate-50"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Certification {index + 1}
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
                label="Intitulé *"
                placeholder="AWS Solutions Architect"
                cols={true}
                {...register(`certifications.${index}.name`)}
              />
              <InputGroup
                label="Organisme *"
                placeholder="Amazon Web Services"
                {...register(`certifications.${index}.issuer`)}
              />
              <InputGroup
                label="Date d'obtention *"
                type="month"
                {...register(`certifications.${index}.date`)}
              />
              <InputGroup
                label="Date d'expiration"
                type="month"
                {...register(`certifications.${index}.expiryDate`)}
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addCertification}
          className="btn-secondary w-full justify-center text-xs"
        >
          <Plus size={14} />
          Ajouter une certification
        </button>
      </div>
    </FormSection>
  );
}
