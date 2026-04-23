// lib/generateDesignPdf.tsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "@/types/resume";
import { formatDateRange } from "./formatDate";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#000000",
    flexDirection: "row",
    minHeight: "100%",
  },

  // ── Sidebar ──────────────────────────────────────
  sidebar: {
    width: 180,
    backgroundColor: "#1a3a5c",
    padding: 24,
    flexShrink: 0,
  },
  name: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    marginBottom: 4,
    lineHeight: 1.3,
  },
  jobTitle: {
    fontSize: 10,
    color: "#93b8d8",
    marginBottom: 20,
  },
  sideSection: {
    marginBottom: 16,
  },
  sideSectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    backgroundColor: "#2d5a8e",
    padding: "3 8",
    marginBottom: 8,
    marginLeft: -24,
    paddingLeft: 24,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  sideLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#93b8d8",
    textTransform: "uppercase",
    marginBottom: 1,
  },
  sideValue: {
    fontSize: 9,
    color: "#cbd5e1",
    marginBottom: 6,
  },
  skillItem: {
    fontSize: 9,
    color: "#cbd5e1",
    marginBottom: 4,
  },
  langRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  langName: {
    fontSize: 9,
    color: "#cbd5e1",
  },
  langLevel: {
    fontSize: 8,
    color: "#93b8d8",
  },

  // ── Contenu principal ─────────────────────────────
  main: {
    flex: 1,
    padding: 28,
  },
  summary: {
    fontSize: 10,
    color: "#475569",
    lineHeight: 1.6,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  mainSection: {
    marginBottom: 16,
  },
  mainSectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: "#1a3a5c",
    borderBottomWidth: 1.5,
    borderBottomColor: "#1a3a5c",
    paddingBottom: 3,
    marginBottom: 10,
  },
  entryRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  entryDate: {
    width: 75,
    fontSize: 9,
    color: "#64748b",
    lineHeight: 1.4,
    flexShrink: 0,
  },
  entryContent: {
    flex: 1,
  },
  entryTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    marginBottom: 2,
  },
  entryMeta: {
    fontSize: 9,
    color: "#1a3a5c",
    fontStyle: "italic",
    marginBottom: 4,
  },
  entryText: {
    fontSize: 9,
    color: "#475569",
    lineHeight: 1.5,
  },
  certName: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#cbd5e1",
    marginBottom: 1,
  },
  certMeta: {
    fontSize: 8,
    color: "#93b8d8",
    marginBottom: 6,
  },
});

export function DesignPdfDocument({ data }: { data: ResumeData }) {
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
    <Document title={`CV — ${contact.fullName}`}>
      <Page size="A4" style={styles.page}>
        {/* ── Sidebar ─────────────────────────────── */}
        <View style={styles.sidebar}>
          {/* Nom */}
          <Text style={styles.name}>{contact.fullName || "Votre Nom"}</Text>
          {experiences[0] && (
            <Text style={styles.jobTitle}>{contact.title}</Text>
          )}

          {/* Coordonnées */}
          <View style={styles.sideSection}>
            <Text style={styles.sideSectionTitle}>Coordonnées</Text>
            {contact.email && (
              <View>
                <Text style={styles.sideLabel}>e-mail</Text>
                <Text style={styles.sideValue}>{contact.email}</Text>
              </View>
            )}
            {contact.phone && (
              <View>
                <Text style={styles.sideLabel}>Téléphone</Text>
                <Text style={styles.sideValue}>{contact.phone}</Text>
              </View>
            )}
            {contact.location && (
              <View>
                <Text style={styles.sideLabel}>Localisation</Text>
                <Text style={styles.sideValue}>{contact.location}</Text>
              </View>
            )}
            {contact.linkedIn && (
              <View>
                <Text style={styles.sideLabel}>LinkedIn</Text>
                <Text style={styles.sideValue}>{contact.linkedIn}</Text>
              </View>
            )}
            {contact.portfolio && (
              <View>
                <Text style={styles.sideLabel}>Portfolio</Text>
                <Text style={styles.sideValue}>{contact.portfolio}</Text>
              </View>
            )}
          </View>

          {/* Compétences */}
          {skills.length > 0 && (
            <View style={styles.sideSection}>
              <Text style={styles.sideSectionTitle}>Compétences</Text>
              {(["technique", "outil", "soft"] as const).map((cat) => {
                const group = skills.filter((s) => s.category === cat);
                if (!group.length) return null;
                const labels = {
                  technique: "Techniques",
                  outil: "Outils",
                  soft: "Savoir-être",
                };
                return (
                  <View key={cat} style={{ marginBottom: 8 }}>
                    <Text
                      style={{
                        fontSize: 8,
                        color: "#93b8d8",
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                        marginBottom: 3,
                      }}
                    >
                      {labels[cat]}
                    </Text>
                    <View
                      style={{ flexDirection: "row", flexWrap: "wrap", gap: 3 }}
                    >
                      {group.map((s) => (
                        <Text
                          key={s.id}
                          style={{
                            fontSize: 8,
                            color: "#cbd5e1",
                            backgroundColor: "#2d5a8e",
                            padding: "2 6",
                            borderRadius: 3,
                          }}
                        >
                          {s.name}
                        </Text>
                      ))}
                    </View>
                  </View>
                );
              })}
            </View>
          )}

          {/* Langues */}
          {languages.length > 0 && (
            <View style={styles.sideSection}>
              <Text style={styles.sideSectionTitle}>Langues</Text>
              {languages.map((lang) => (
                <View key={lang.id} style={styles.langRow}>
                  <Text style={styles.langName}>{lang.language}</Text>
                  <Text style={styles.langLevel}>{lang.level}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <View style={styles.sideSection}>
              <Text style={styles.sideSectionTitle}>Certifications</Text>
              {certifications.map((cert) => (
                <View key={cert.id}>
                  <Text style={styles.certName}>{cert.name}</Text>
                  <Text style={styles.certMeta}>
                    {cert.issuer} · {cert.date}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* ── Contenu principal ────────────────────── */}
        <View style={styles.main}>
          {/* Accroche */}
          {summary && <Text style={styles.summary}>{summary}</Text>}

          {/* Expériences */}
          {experiences.length > 0 && (
            <View style={styles.mainSection}>
              <Text style={styles.mainSectionTitle}>Expérience</Text>
              {experiences.map((exp) => (
                <View key={exp.id} style={styles.entryRow}>
                  <Text style={styles.entryDate}>
                    {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                  </Text>
                  <View style={styles.entryContent}>
                    <Text style={styles.entryTitle}>{exp.title}</Text>
                    <Text style={styles.entryMeta}>
                      {exp.company}
                      {exp.location ? `, ${exp.location}` : ""}
                    </Text>
                    {exp.description && (
                      <Text style={styles.entryText}>{exp.description}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Formation */}
          {education.length > 0 && (
            <View style={styles.mainSection}>
              <Text style={styles.mainSectionTitle}>Études</Text>
              {education.map((edu) => (
                <View key={edu.id} style={styles.entryRow}>
                  <Text style={styles.entryDate}>
                    {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                  </Text>
                  <View style={styles.entryContent}>
                    <Text style={styles.entryTitle}>
                      {edu.degree} en {edu.field}
                    </Text>
                    <Text style={styles.entryMeta}>{edu.institution}</Text>
                    {edu.honors && (
                      <Text style={styles.entryText}>{edu.honors}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Projets */}
          {projects.length > 0 && (
            <View style={styles.mainSection}>
              <Text style={styles.mainSectionTitle}>Projets</Text>
              {projects.map((project) => (
                <View key={project.id} style={styles.entryRow}>
                  <Text style={styles.entryDate}>{project.type}</Text>
                  <View style={styles.entryContent}>
                    <Text style={styles.entryTitle}>{project.name}</Text>
                    {project.technologies && (
                      <Text style={styles.entryText}>
                        {project.technologies}
                      </Text>
                    )}
                    {project.link && (
                      <Text style={styles.entryMeta}>{project.link}</Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
}
