"use client";

import { useFormContext } from "react-hook-form";
import { AlignLeft } from "lucide-react";
import { ResumeData } from "@/types/resume";
import { FormSection } from "../ui/FormSection";

export function SummaryFormSection() {
  const { register, watch } = useFormContext<ResumeData>();
  const value = watch("summary") ?? "";

  return (
    <FormSection title="Accroche" icon={AlignLeft} defaultOpen={false}>
      <div className="flex flex-col gap-1">
        <label className="label">
          Résumé professionnel{" "}
          <span className="text-slate-400 font-normal">
            ({value.length}/400 caractères)
          </span>
        </label>
        <textarea
          rows={4}
          maxLength={400}
          placeholder="Développeur fullstack avec 5 ans d'expérience..."
          className="input resize-none"
          {...register("summary")}
        />
        <p className="text-xs text-slate-400">
          2 à 3 phrases max. Mettez en avant votre valeur ajoutée et vos
          spécialités.
        </p>
      </div>
    </FormSection>
  );
}
