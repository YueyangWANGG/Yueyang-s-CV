export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  logo?: string;
  details: string[];
}

export interface Project {
  title: string;
  tech: string;
  description: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  phone: string[];
  email: string;
  location: string;
  linkedin?: string;
}
