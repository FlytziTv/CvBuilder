import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  location: z.string().optional(),
  linkedIn: z.string().optional(),
  portfolio: z.string().optional(),
});

export const experienceSchema = z.object({
  id: z.string(),
  company: z.string().min(1, "Entreprise requise"),
  title: z.string().min(1, "Titre requis"),
  location: z.string().optional(),
  startDate: z.string().min(1, "Date de début requise"),
  endDate: z.string().optional(),
  current: z.boolean(),
  bullets: z.array(z.string()).min(1, "Au moins une ligne requise"),
});

export const educationSchema = z.object({
  id: z.string(),
  institution: z.string().min(1, "Institution requise"),
  degree: z.string().min(1, "Diplôme requis"),
  field: z.string().min(1, "Domaine requis"),
  startDate: z.string().min(1, "Date requise"),
  endDate: z.string().optional(),
  current: z.boolean(),
  honors: z.string().optional(),
});

export const skillSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Nom requis"),
  level: z.enum(["débutant", "intermédiaire", "avancé", "expert"]).optional(),
  category: z.enum(["technique", "soft", "langue", "outil"]),
});

export const certificationSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Nom requis"),
  issuer: z.string().min(1, "Émetteur requis"),
  date: z.string().min(1, "Date requise"),
  expiryDate: z.string().optional(),
});

export const languageSchema = z.object({
  id: z.string(),
  language: z.string().min(1, "Langue requise"),
  level: z.string().min(1, "Niveau requis"),
});

export const resumeSchema = z.object({
  contact: contactSchema,
  summary: z.string().optional(),
  experiences: z.array(experienceSchema),
  education: z.array(educationSchema),
  skills: z.array(skillSchema),
  certifications: z.array(certificationSchema),
  languages: z.array(languageSchema),
});

export type ResumeFormData = z.infer<typeof resumeSchema>;
