"use client";

import { useForm, FormProvider, useWatch } from "react-hook-form";
import { useResumeStore } from "@/lib/store";
import { ResumeData, defaultResumeData } from "@/types/resume";
import { useEffect } from "react";

import { AboutForm } from "@/components/Form/AboutForm";
import { CertificationsForm } from "@/components/Form/CertificationsForm";
import { EducationForm } from "@/components/Form/EducationForm";
import { ExperienceForm } from "@/components/Form/ExperienceForm";
import { LanguagesForm } from "@/components/Form/LanguagesForm";
import { ProjectForm } from "@/components/Form/ProjectsForm";
import { SkillsForm } from "@/components/Form/SkillsForm";
import { SummaryFormSection } from "@/components/Form/SummaryForm";

export default function Sidebar() {
  const { data, setData } = useResumeStore();

  const methods = useForm<ResumeData>({
    defaultValues: data ?? defaultResumeData,
    mode: "onChange",
  });

  const watchedValues = useWatch({ control: methods.control });

  useEffect(() => {
    setData(watchedValues as ResumeData);
  }, [watchedValues, setData]);

  return (
    <aside className="w-110 h-screen sticky top-0 shrink-0 overflow-y-auto bg-background p-4 border-r border-gray-200">
      <FormProvider {...methods}>
        <div className="flex flex-col gap-2">
          <AboutForm />
          <SummaryFormSection />
          <ExperienceForm />
          <EducationForm />
          <ProjectForm />
          <SkillsForm />
          <LanguagesForm />
          <CertificationsForm />
          <div className="h-10" />
        </div>
      </FormProvider>
    </aside>
  );
}
