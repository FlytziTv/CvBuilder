import { DesignPage } from "@/components/template/DesignPage";
import { ATSPage } from "@/components/template/ATSPage";
import { FileText, LucideIcon, Palette } from "lucide-react";
import React from "react";

interface CVTemplate {
  icon: LucideIcon;
  name: string;
  description: string;
  content: React.ComponentType;
}

export const cvTemplates: CVTemplate[] = [
  {
    icon: Palette,
    name: "Design",
    description: "A clean and modern CV template.",
    content: DesignPage, // On passe la référence sans les balises <>
  },
  {
    icon: FileText,
    name: "ATS-Optimise", // Évite les espaces/accents dans les "values" de Tabs si possible
    description: "A CV template optimized for ATS.",
    content: ATSPage,
  },
];
