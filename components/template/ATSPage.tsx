// components/template/ATSPage.tsx
"use client";

import { useResumeStore } from "@/lib/store";
import { formatDateRange } from "@/lib/formatDate";

export function ATSPage() {
  const { data } = useResumeStore();
  const {
    contact,
    summary,
    experiences,
    education,
    projects,
    skills,
    languages,
    certifications,
  } = data;

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "11pt",
        lineHeight: 1.5,
        color: "#000000",
        backgroundColor: "#ffffff",
        padding: "0.75in",
        maxWidth: "816px",
        margin: "0 auto",
      }}
    >
      {/* ── En-tête ───────────────────────────────────── */}
      <div style={{ marginBottom: "12pt" }}>
        <h1
          style={{
            fontSize: "18pt",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            margin: "0 0 4pt 0",
          }}
        >
          {contact.fullName || "Votre Nom"}
        </h1>
        <p style={{ margin: "0 0 2pt 0", fontSize: "10pt" }}>
          {[contact.email, contact.phone, contact.location]
            .filter(Boolean)
            .join("  |  ")}
        </p>
        {(contact.linkedIn || contact.portfolio) && (
          <p style={{ margin: "0", fontSize: "10pt" }}>
            {[contact.linkedIn, contact.portfolio]
              .filter(Boolean)
              .join("  |  ")}
          </p>
        )}
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1.5pt solid #000",
          margin: "0 0 10pt 0",
        }}
      />

      {/* ── Accroche ──────────────────────────────────── */}
      {summary && (
        <AtsSection title="RÉSUMÉ PROFESSIONNEL">
          <p style={{ margin: 0 }}>{summary}</p>
        </AtsSection>
      )}

      {/* ── Expériences ───────────────────────────────── */}
      {experiences.length > 0 && (
        <AtsSection title="EXPÉRIENCES PROFESSIONNELLES">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              style={{ marginBottom: i < experiences.length - 1 ? "10pt" : 0 }}
            >
              <p style={{ fontWeight: "bold", margin: "0 0 1pt 0" }}>
                {exp.title}
              </p>
              <p style={{ margin: "0 0 1pt 0" }}>
                {exp.company}
                {exp.location ? ` — ${exp.location}` : ""}
              </p>
              <p
                style={{ fontSize: "10pt", color: "#444", margin: "0 0 4pt 0" }}
              >
                {formatDateRange(exp.startDate, exp.endDate, exp.current)}
              </p>
              {exp.description && (
                <p style={{ margin: 0 }}>{exp.description}</p>
              )}
            </div>
          ))}
        </AtsSection>
      )}

      {/* ── Formation ─────────────────────────────────── */}
      {education.length > 0 && (
        <AtsSection title="FORMATION">
          {education.map((edu, i) => (
            <div
              key={edu.id}
              style={{ marginBottom: i < education.length - 1 ? "8pt" : 0 }}
            >
              <p style={{ fontWeight: "bold", margin: "0 0 1pt 0" }}>
                {edu.degree} en {edu.field}
              </p>
              <p style={{ margin: "0 0 1pt 0" }}>{edu.institution}</p>
              <p style={{ fontSize: "10pt", color: "#444", margin: 0 }}>
                {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                {edu.honors ? ` — ${edu.honors}` : ""}
              </p>
            </div>
          ))}
        </AtsSection>
      )}

      {/* ── Projets ───────────────────────────────────── */}
      {projects.length > 0 && (
        <AtsSection title="PROJETS">
          {projects.map((project, i) => (
            <div
              key={project.id}
              style={{ marginBottom: i < projects.length - 1 ? "8pt" : 0 }}
            >
              <p style={{ fontWeight: "bold", margin: "0 0 1pt 0" }}>
                {project.name}
                {project.type ? ` — ${project.type}` : ""}
              </p>
              {project.technologies && (
                <p style={{ margin: "0 0 1pt 0" }}>
                  <strong>Technologies : </strong>
                  {project.technologies}
                </p>
              )}
              {project.link && (
                <p style={{ fontSize: "10pt", color: "#444", margin: 0 }}>
                  {project.link}
                </p>
              )}
            </div>
          ))}
        </AtsSection>
      )}

      {/* ── Compétences ───────────────────────────────── */}
      {skills.length > 0 && (
        <AtsSection title="COMPÉTENCES">
          {(["technique", "outil", "soft"] as const).map((cat) => {
            const group = skills.filter((s) => s.category === cat);
            if (!group.length) return null;
            const labels = {
              technique: "Techniques",
              outil: "Outils",
              soft: "Savoir-être",
            };
            return (
              <p key={cat} style={{ margin: "0 0 3pt 0" }}>
                <strong>{labels[cat]} : </strong>
                {group.map((s) => s.name).join(", ")}
              </p>
            );
          })}
        </AtsSection>
      )}

      {/* ── Langues ───────────────────────────────────── */}
      {languages.length > 0 && (
        <AtsSection title="LANGUES">
          <p style={{ margin: 0 }}>
            {languages.map((l) => `${l.language} : ${l.level}`).join("  |  ")}
          </p>
        </AtsSection>
      )}

      {/* ── Certifications ────────────────────────────── */}
      {certifications.length > 0 && (
        <AtsSection title="CERTIFICATIONS">
          {certifications.map((c) => (
            <p key={c.id} style={{ margin: "0 0 3pt 0" }}>
              <strong>{c.name}</strong> — {c.issuer} ({c.date})
              {c.expiryDate ? ` — expire : ${c.expiryDate}` : ""}
            </p>
          ))}
        </AtsSection>
      )}
    </div>
  );
}

function AtsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "12pt" }}>
      <h2
        style={{
          fontSize: "11pt",
          fontWeight: "bold",
          textTransform: "uppercase",
          borderBottom: "0.75pt solid #000",
          paddingBottom: "2pt",
          marginBottom: "6pt",
          marginTop: 0,
          letterSpacing: "0.03em",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
