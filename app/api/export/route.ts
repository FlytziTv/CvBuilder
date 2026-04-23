import { NextRequest, NextResponse } from "next/server";
import { ResumeData } from "@/types/resume";

export async function POST(req: NextRequest) {
  try {
    const { data, variant }: { data: ResumeData; variant: string } =
      await req.json();

    const { renderToBuffer } = await import("@react-pdf/renderer");
    const React = await import("react");

    let element;

    if (variant === "ATS-Optimise") {
      const { ResumePdfDocument } = await import("@/lib/generatePdf");
      element = React.createElement(ResumePdfDocument, { data }) as any;
    } else {
      const { DesignPdfDocument } = await import("@/lib/generateDesignPdf");
      element = React.createElement(DesignPdfDocument, { data }) as any;
    }

    const buffer = await renderToBuffer(element);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="cv.pdf"',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur génération PDF" },
      { status: 500 },
    );
  }
}
