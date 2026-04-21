import { Download, RotateCcw } from "lucide-react";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="bg-background border-b border-gray-200 px-6 py-2 shrink-0 grid grid-cols-3 items-center">
      <h1 className="text-xl font-bold">CV Builder</h1>
      <div className="justify-self-center">{children}</div>
      <div className="justify-self-end gap-2 flex">
        <button className="btn-ghost text-xs" title="Réinitialiser">
          <RotateCcw size={14} />
          Reset
        </button>
        <button className="btn-primary text-xs" title="Menu">
          <Download size={14} />
          Exporter PDF
        </button>
      </div>
    </header>
  );
}
