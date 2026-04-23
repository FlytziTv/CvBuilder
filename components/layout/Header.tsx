"use client";

import { Download, RotateCcw, Upload } from "lucide-react";
import { useResumeStore } from "@/lib/store";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Header({ children }: { children?: React.ReactNode }) {
  const { resetData, data, setData, variant } = useResumeStore();
  const [exporting, setExporting] = useState(false);

  function handleExportJson() {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cv.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImportJson() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target?.result as string);
          setData(json);
          window.dispatchEvent(new CustomEvent("cv:import", { detail: json }));
        } catch {
          alert("Fichier JSON invalide");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  async function handleExportPdf() {
    setExporting(true);
    try {
      const response = await fetch("/api/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, variant }),
      });

      if (!response.ok) throw new Error("Erreur");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "cv.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la génération du PDF");
    } finally {
      setExporting(false);
    }
  }

  return (
    <header className="bg-background border-b border-gray-200 px-6 py-2 shrink-0 grid grid-cols-3 items-center">
      <h1 className="text-xl font-bold">CV Builder</h1>
      <div className="justify-self-center">{children}</div>
      <div className="justify-self-end gap-2 flex">
        <button
          onClick={resetData}
          className="btn-ghost text-xs"
          title="Réinitialiser"
        >
          <RotateCcw size={14} />
          Reset
        </button>

        <button
          onClick={handleImportJson}
          className="btn-ghost text-xs"
          title="Importer JSON"
        >
          <Upload size={14} />
          Importer JSON
        </button>

        <button
          onClick={handleExportJson}
          className="btn-ghost text-xs"
          title="Exporter JSON"
        >
          <Download size={14} />
          Exporter JSON
        </button>

        <button
          onClick={handleExportPdf}
          disabled={exporting}
          className="btn-primary text-xs"
          title="Exporter PDF"
        >
          {exporting ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <Download size={14} />
          )}
          Exporter PDF
        </button>
      </div>
    </header>
  );
}
