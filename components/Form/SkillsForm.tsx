"use client";

import { FormSection } from "@/components/ui/FormSection";
import { Plus, X, Zap } from "lucide-react";
import { InputGroup } from "../ui/inputGroup";
import { CATEGORIES } from "@/data/skillsCat";
import { cn } from "@/lib/utils";

export function SkillsForm() {
  return (
    <FormSection
      title="Compétences"
      icon={Zap}
      defaultOpen={false}
      // badge={fields.length}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              // onClick={() => addSkill(cat.value)}
              className={cn(
                "text-xs px-3 py-1.5 rounded-lg border flex items-center gap-1.5",
                "hover:opacity-80 transition-opacity",
                cat.color,
              )}
            >
              <Plus className="w-3 h-3" />
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </FormSection>
  );
}
