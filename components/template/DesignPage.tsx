// components/template/DesignPage.tsx
"use client";

import { useResumeStore } from "@/lib/store";
import { formatDateRange } from "@/lib/formatDate";

export function DesignPage() {
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
      id="resume-preview"
      style={{
        fontFamily: 'var(--font-body, "DM Sans", sans-serif)',
        backgroundColor: "#ffffff",
        maxWidth: "816px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        minHeight: "1123px",
      }}
    >
      {/* ── Sidebar gauche ───────────────────────────── */}
      <aside
        style={{
          backgroundColor: "#1a3a5c",
          color: "#ffffff",
          padding: "32px 20px",
        }}
      >
        {/* Nom + titre */}
        <div style={{ marginBottom: "28px" }}>
          <h1
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              lineHeight: 1.2,
              margin: "0 0 8px 0",
              color: "#ffffff",
            }}
          >
            {contact.fullName || "Votre Nom"}
          </h1>
          {contact.title[0] && (
            <p style={{ fontSize: "13px", color: "#93b8d8", margin: 0 }}>
              {contact.title}
            </p>
          )}
        </div>

        {/* Coordonnées */}
        <SideSection title="Coordonnées">
          {contact.email && <SideInfo label="e-mail">{contact.email}</SideInfo>}
          {contact.phone && (
            <SideInfo label="Téléphone">{contact.phone}</SideInfo>
          )}
          {contact.location && (
            <SideInfo label="Localisation">{contact.location}</SideInfo>
          )}
          {contact.linkedIn && (
            <SideInfo label="LinkedIn">{contact.linkedIn}</SideInfo>
          )}
          {contact.portfolio && (
            <SideInfo label="Portfolio">{contact.portfolio}</SideInfo>
          )}
        </SideSection>

        {skills.length > 0 && (
          <SideSection title="Compétences">
            {(["technique", "outil", "soft"] as const).map((cat) => {
              const group = skills.filter((s) => s.category === cat);
              if (!group.length) return null;
              const labels = {
                technique: "Techniques",
                outil: "Outils",
                soft: "Savoir-être",
              };
              return (
                <div key={cat} style={{ marginBottom: "10px" }}>
                  <p
                    style={{
                      fontSize: "9px",
                      color: "#93b8d8",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      margin: "0 0 4px 0",
                    }}
                  >
                    {labels[cat]}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}
                  >
                    {group.map((s) => (
                      <span
                        key={s.id}
                        style={{
                          fontSize: "10px",
                          color: "#cbd5e1",
                          backgroundColor: "#2d5a8e",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </SideSection>
        )}

        {/* Langues */}
        {languages.length > 0 && (
          <SideSection title="Langues">
            {languages.map((lang) => (
              <div
                key={lang.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <span style={{ fontSize: "12px", color: "#cbd5e1" }}>
                  {lang.language}
                </span>
                <span style={{ fontSize: "11px", color: "#93b8d8" }}>
                  {lang.level}
                </span>
              </div>
            ))}
          </SideSection>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <SideSection title="Certifications">
            {certifications.map((cert) => (
              <div key={cert.id} style={{ marginBottom: "8px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#cbd5e1",
                    margin: "0 0 2px 0",
                    fontWeight: 600,
                  }}
                >
                  {cert.name}
                </p>
                <p style={{ fontSize: "11px", color: "#93b8d8", margin: 0 }}>
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            ))}
          </SideSection>
        )}
      </aside>

      {/* ── Contenu principal ─────────────────────────── */}
      <main style={{ padding: "32px 36px" }}>
        {/* Accroche */}
        {summary && (
          <p
            style={{
              fontSize: "12px",
              color: "#475569",
              lineHeight: 1.7,
              marginBottom: "24px",
              paddingBottom: "24px",
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            {summary}
          </p>
        )}

        {/* Expériences */}
        {experiences.length > 0 && (
          <MainSection title="Expérience">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr",
                  gap: "0 16px",
                  marginBottom: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    color: "#64748b",
                    margin: 0,
                    paddingTop: "2px",
                    lineHeight: 1.5,
                  }}
                >
                  {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                </p>
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "13px",
                      margin: "0 0 2px 0",
                      color: "#0f172a",
                    }}
                  >
                    {exp.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#1a3a5c",
                      fontStyle: "italic",
                      margin: "0 0 6px 0",
                    }}
                  >
                    {exp.company}
                    {exp.location ? `, ${exp.location}` : ""}
                  </p>
                  {exp.description && (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#475569",
                        margin: 0,
                        lineHeight: 1.6,
                      }}
                    >
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </MainSection>
        )}

        {/* Formation */}
        {education.length > 0 && (
          <MainSection title="Études">
            {education.map((edu) => (
              <div
                key={edu.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr",
                  gap: "0 16px",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    color: "#64748b",
                    margin: 0,
                    paddingTop: "2px",
                    lineHeight: 1.5,
                  }}
                >
                  {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                </p>
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "13px",
                      margin: "0 0 2px 0",
                      color: "#0f172a",
                    }}
                  >
                    {edu.degree} en {edu.field}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#1a3a5c",
                      fontStyle: "italic",
                      margin: "0 0 4px 0",
                    }}
                  >
                    {edu.institution}
                  </p>
                  {edu.honors && (
                    <p
                      style={{ fontSize: "12px", color: "#475569", margin: 0 }}
                    >
                      {edu.honors}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </MainSection>
        )}

        {/* Projets */}
        {projects.length > 0 && (
          <MainSection title="Projets">
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "90px 1fr",
                  gap: "0 16px",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    color: "#64748b",
                    margin: 0,
                    paddingTop: "2px",
                  }}
                >
                  {project.type}
                </p>
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "13px",
                      margin: "0 0 2px 0",
                      color: "#0f172a",
                    }}
                  >
                    {project.name}
                  </p>
                  {project.technologies && (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#475569",
                        margin: "0 0 2px 0",
                      }}
                    >
                      {project.technologies}
                    </p>
                  )}
                  {project.link && (
                    <p
                      style={{ fontSize: "11px", color: "#1a3a5c", margin: 0 }}
                    >
                      {project.link}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </MainSection>
        )}
      </main>
    </div>
  );
}

/* ── Sous-composants sidebar ──────────────────────── */
function SideSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2
        style={{
          fontSize: "13px",
          fontWeight: "bold",
          color: "#ffffff",
          backgroundColor: "#2d5a8e",
          padding: "4px 8px",
          margin: "0 0 10px -20px",
          paddingLeft: "20px",
          letterSpacing: "0.03em",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function SideInfo({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <p
        style={{
          fontSize: "10px",
          fontWeight: "bold",
          color: "#93b8d8",
          margin: "0 0 1px 0",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "12px",
          color: "#cbd5e1",
          margin: 0,
          wordBreak: "break-all",
        }}
      >
        {children}
      </p>
    </div>
  );
}

/* ── Sous-composants main ─────────────────────────── */
function MainSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "24px" }}>
      <h2
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          color: "#1a3a5c",
          borderBottom: "2px solid #1a3a5c",
          paddingBottom: "4px",
          marginBottom: "14px",
          marginTop: 0,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
