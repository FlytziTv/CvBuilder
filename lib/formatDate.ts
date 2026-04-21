//Formate une date "YYYY-MM" en "mars 2022"
export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  if (!month) return year;
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
}

// Formate une plage de dates "mars 2022 – Présent" ou "mars 2022 – juin 2024"
export function formatDateRange(
  startDate: string,
  endDate?: string,
  current?: boolean,
): string {
  const start = formatDate(startDate);
  if (current || !endDate) return `${start} – Présent`;
  return `${start} – ${formatDate(endDate)}`;
}

// Calcule la durée entre deux dates
export function getDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate + "-01");
  const end = endDate ? new Date(endDate + "-01") : new Date();
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years === 0) return `${remainingMonths} mois`;
  if (remainingMonths === 0) return `${years} an${years > 1 ? "s" : ""}`;
  return `${years} an${years > 1 ? "s" : ""} ${remainingMonths} mois`;
}
