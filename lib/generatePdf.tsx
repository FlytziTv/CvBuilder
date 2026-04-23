// lib/generatePdf.tsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "@/types/resume";
import { formatDateRange } from "./formatDate";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#000000",
    paddingTop: 54,
    paddingBottom: 54,
    paddingHorizontal: 54,
  },
  name: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    marginBottom: 3,
  },
  contactLine: {
    fontSize: 9,
    color: "#333333",
    marginBottom: 2,
  },
  divider: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#000000",
    marginTop: 6,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    borderBottomWidth: 0.75,
    borderBottomColor: "#000000",
    paddingBottom: 2,
    marginBottom: 5,
  },
  section: {
    marginBottom: 10,
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  row: {
    marginBottom: 8,
  },
  meta: {
    fontSize: 9,
    color: "#555555",
    marginBottom: 2,
  },
  text: {
    fontSize: 10,
  },
  skillLine: {
    fontSize: 10,
    marginBottom: 2,
  },
});

export function ResumePdfDocument({ data }: { data: ResumeData }) {
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
        {/* En-tête */}
        <Text style={styles.name}>{contact.fullName || "Nom Prénom"}</Text>
        <Text style={styles.contactLine}>
          {[contact.email, contact.phone, contact.location]
            .filter(Boolean)
            .join("  |  ")}
        </Text>
        {(contact.linkedIn || contact.portfolio) && (
          <Text style={styles.contactLine}>
            {[contact.linkedIn, contact.portfolio]
              .filter(Boolean)
              .join("  |  ")}
          </Text>
        )}
        <View style={styles.divider} />

        {/* Résumé */}
        {summary ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>RÉSUMÉ PROFESSIONNEL</Text>
            <Text style={styles.text}>{summary}</Text>
          </View>
        ) : null}

        {/* Expériences */}
        {experiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              EXPÉRIENCES PROFESSIONNELLES
            </Text>
            {experiences.map((exp) => (
              <View key={exp.id} style={styles.row}>
                <Text style={styles.bold}>{exp.title}</Text>
                <Text style={styles.meta}>
                  {exp.company}
                  {exp.location ? ` — ${exp.location}` : ""}
                </Text>
                <Text style={styles.meta}>
                  {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                </Text>
                {exp.description && (
                  <Text style={styles.text}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Formation */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FORMATION</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.row}>
                <Text style={styles.bold}>
                  {edu.degree} en {edu.field}
                </Text>
                <Text style={styles.meta}>{edu.institution}</Text>
                <Text style={styles.meta}>
                  {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                  {edu.honors ? ` — ${edu.honors}` : ""}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Projets */}
        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJETS</Text>
            {projects.map((project) => (
              <View key={project.id} style={styles.row}>
                <Text style={styles.bold}>{project.name}</Text>
                {project.technologies && (
                  <Text style={styles.meta}>
                    Technologies : {project.technologies}
                  </Text>
                )}
                {project.link && (
                  <Text style={styles.meta}>{project.link}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Compétences */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>COMPÉTENCES</Text>
            {(["technique", "outil", "soft"] as const).map((cat) => {
              const group = skills.filter((s) => s.category === cat);
              if (!group.length) return null;
              const labels = {
                technique: "Techniques",
                outil: "Outils",
                soft: "Savoir-être",
              };
              return (
                <Text key={cat} style={styles.skillLine}>
                  <Text style={styles.bold}>{labels[cat]} : </Text>
                  {group.map((s) => s.name).join(", ")}
                </Text>
              );
            })}
          </View>
        )}

        {/* Langues */}
        {languages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LANGUES</Text>
            <Text style={styles.text}>
              {languages.map((l) => `${l.language} : ${l.level}`).join("  |  ")}
            </Text>
          </View>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
            {certifications.map((c) => (
              <Text key={c.id} style={styles.skillLine}>
                <Text style={styles.bold}>{c.name}</Text>
                {` — ${c.issuer} (${c.date})`}
                {c.expiryDate ? ` — expire : ${c.expiryDate}` : ""}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
