import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ResumeData, defaultResumeData } from "@/types/resume";

interface ResumeStore {
  data: ResumeData;
  setData: (data: ResumeData) => void;
  updateData: (partial: Partial<ResumeData>) => void;
  resetData: () => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      data: defaultResumeData,

      setData: (data) => set({ data }),

      updateData: (partial) =>
        set((state) => ({
          data: { ...state.data, ...partial },
        })),

      resetData: () => set({ data: defaultResumeData }),
    }),
    {
      name: "cv-builder-storage",
    },
  ),
);
