"use client";
import { useResumeStore } from "@/lib/store";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cvTemplates } from "@/data/cvTemplate";

export default function Home() {
  const { setVariant } = useResumeStore();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Tabs
        defaultValue={cvTemplates[0].name}
        className="flex flex-col h-full"
        onValueChange={(value) =>
          setVariant(value as "Design" | "ATS-Optimise")
        }
      >
        <Header>
          <TabsList>
            {cvTemplates.map((template) => {
              const Icon = template.icon;

              return (
                <TabsTrigger key={template.name} value={template.name}>
                  <Icon className="size-4" />
                  {template.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Header>

        <div className="flex flex-1 overflow-hidden">
          <Sidebar />

          <main className="flex-1 overflow-y-auto p-4 bg-slate-100">
            {cvTemplates.map((template) => {
              const ContentComponent = template.content;

              return (
                <TabsContent key={template.name} value={template.name}>
                  <div id="resume-preview">
                    <ContentComponent />
                  </div>
                </TabsContent>
              );
            })}
          </main>
        </div>
      </Tabs>
    </div>
  );
}
