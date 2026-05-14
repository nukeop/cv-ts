export type CvData = {
  name: {
    first: string;
    last: string;
  };
  title: string;
  contact: ContactItem[];
  summary: string;
  experienceYears?: string;
  experience: Job[];
  education: Education[];
  projects: Project[];
  skills: SkillGroup[];
  certifications: Certification[];
  publications: Publication[];
};

export type ContactItem = {
  label: string;
  text: string;
  href?: string;
};

export type Job = {
  company: string;
  role: string;
  url?: string;
  start: string;
  end?: string | null;
  promotedFrom?: string;
  description?: string;
  highlights?: string[];
};

export type Education = {
  start: string;
  end: string;
  degree: string;
  uni: string;
  note?: string;
};

export type Project = {
  name: string;
  tagline?: string;
  url?: string;
  description?: string;
  tech?: string[];
};

export type SkillGroup = {
  cat: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
};
