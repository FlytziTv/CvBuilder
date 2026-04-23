import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ResumeData, defaultResumeData } from "@/types/resume";

interface ResumeStore {
  data: ResumeData;
  variant: "Design" | "ATS-Optimise";
  setData: (data: ResumeData) => void;
  updateData: (partial: Partial<ResumeData>) => void;
  setVariant: (v: "Design" | "ATS-Optimise") => void;
  resetData: () => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      data: defaultResumeData,
      variant: "Design",

      setData: (data) => set({ data }),
      updateData: (partial) =>
        set((state) => ({ data: { ...state.data, ...partial } })),
      setVariant: (variant) => set({ variant }),
      resetData: () => {
        set({ data: defaultResumeData });
        window.location.reload();
      },
    }),
    { name: "cv-builder-storage" },
  ),
);
