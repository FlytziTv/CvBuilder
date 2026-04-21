import { Skill } from "@/types/resume";

interface Category {
  value: Skill["category"]; // ← 'technique' | 'outil' | 'soft'
  label: string;
  color: string;
}

export const CATEGORIES: Category[] = [
  {
    value: "technique",
    label: "Technique",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    value: "outil",
    label: "Outil",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    value: "soft",
    label: "Soft skill",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    value: "language",
    label: "Langage",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
];
