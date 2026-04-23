export async function exportDesignPdf(elementId = "resume-preview") {
  const element = document.getElementById(elementId);
  if (!element) return;

  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: false,
    onclone: (clonedDoc) => {
      const styles = clonedDoc.querySelectorAll("style");
      styles.forEach((style) => {
        if (
          style.textContent?.includes("oklch") ||
          style.textContent?.includes("lab(")
        ) {
          style.textContent = style.textContent
            .replace(/oklch\([^)]+\)/g, "#000000")
            .replace(/lab\([^)]+\)/g, "#000000");
        }
      });
    },
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("cv.pdf");
}
