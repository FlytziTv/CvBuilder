"use client";

import { FormSection } from "@/components/ui/FormSection";
import { User } from "lucide-react";
import { InputGroup } from "../ui/inputGroup";

export function AboutForm() {
  return (
    <FormSection
      title="Informations personnelles"
      icon={User}
      defaultOpen={false}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputGroup
          label="Nom complet"
          value="fullName"
          placeholder="Jean Dupont"
          cols={true}
        />
        <InputGroup
          label="Email"
          type="email"
          value="email"
          placeholder="jean.dupont@example.com  "
          cols={true}
        />
        <InputGroup
          label="Téléphone"
          type="tel"
          value="phone"
          placeholder="+33 6 12 34 56 78"
        />
        <InputGroup
          label="Localisation"
          value="location"
          placeholder="Paris, France"
        />
        <InputGroup
          label="LinkedIn"
          type="url"
          value="linkedin"
          placeholder="https://www.linkedin.com/in/jeandupont"
        />
        <InputGroup
          label="Portfolio"
          type="url"
          value="portfolio"
          placeholder="https://www.jeandupont.com"
        />
      </div>
    </FormSection>
  );
}
