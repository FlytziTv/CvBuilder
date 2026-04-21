"use client";

import { AlignLeft } from "lucide-react";
import { useState } from "react";
import { FormSection } from "../ui/FormSection";

export function SummaryFormSection() {
  const [value, setValue] = useState("");

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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Développeur fullstack avec 5 ans d'expérience en React et Node.js, spécialisé dans les architectures cloud-native..."
          className="input resize-none"
        />
        <p className="text-xs text-description-slate-400">
          2 à 3 phrases max. Mettez en avant votre valeur ajoutée et vos
          spécialités.
        </p>
      </div>
    </FormSection>
  );
}
