// types/resume.ts

export interface ContactInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  portfolio: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  startDate: string;
  endDate: string;
  current: boolean;
  honors: string;
}

export interface Project {
  id: string;
  name: string;
  type: string;
  technologies: string;
  link: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "technique" | "outil" | "soft";
}

export interface Language {
  id: string;
  language: string;
  level: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
}

export const defaultResumeData: ResumeData = {
  contact: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    portfolio: "",
  },
  summary: "",
  experiences: [],
  education: [],
  projects: [],
  skills: [],
  languages: [],
  certifications: [],
};
