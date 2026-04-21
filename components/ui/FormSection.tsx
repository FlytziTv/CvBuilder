"use client";

import { useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormSectionProps {
  title: string;
  icon?: LucideIcon;
  defaultOpen?: boolean;
  badge?: number;
  children: React.ReactNode;
}

export function FormSection({
  title,
  icon,
  defaultOpen = true,
  badge,
  children,
}: FormSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = icon;

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} className="text-slate-400 shrink-0" />}
          <span className="text-sm font-semibold text-slate-800">{title}</span>
          {badge !== undefined && badge > 0 && (
            <span className="ml-1 text-xs bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded-full font-medium leading-none">
              {badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-slate-400 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && <div className="p-4 border-t border-slate-100">{children}</div>}
    </div>
  );
}
