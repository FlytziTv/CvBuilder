"use client";

import { useFormContext } from "react-hook-form";
import { User } from "lucide-react";
import { ResumeData } from "@/types/resume";
import { FormSection } from "../ui/FormSection";
import { InputGroup } from "../ui/inputGroup";

export function AboutForm() {
  const { register } = useFormContext<ResumeData>();

  return (
    <FormSection
      title="Informations personnelles"
      icon={User}
      defaultOpen={false}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputGroup
          label="Nom complet"
          placeholder="Jean Dupont"
          cols={true}
          {...register("contact.fullName")}
        />
        <InputGroup
          label="Email"
          type="email"
          placeholder="jean.dupont@example.com"
          cols={true}
          {...register("contact.email")}
        />
        <InputGroup
          label="Téléphone"
          type="tel"
          placeholder="+33 6 12 34 56 78"
          {...register("contact.phone")}
        />
        <InputGroup
          label="Localisation"
          placeholder="Paris, France"
          {...register("contact.location")}
        />
        <InputGroup
          label="LinkedIn"
          type="url"
          placeholder="https://linkedin.com/in/jeandupont"
          {...register("contact.linkedIn")}
        />
        <InputGroup
          label="Portfolio"
          type="url"
          placeholder="https://jeandupont.com"
          {...register("contact.portfolio")}
        />
      </div>
    </FormSection>
  );
}
