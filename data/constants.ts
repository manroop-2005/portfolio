import {
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Terminal,
  Wrench
} from "lucide-react";
import portfolioData from "./portfolio.json";

const skillIcons = {
  cloud: Cloud,
  code: Code2,
  database: Database,
  smartphone: Smartphone,
  wrench: Wrench
};

export const portfolio = portfolioData;

export const profile = portfolioData.profile;

export const navItems = portfolioData.navItems;

export const stats = portfolioData.stats;

export const about = portfolioData.about;

export const skills = portfolioData.skills.map((group) => ({
  ...group,
  icon: skillIcons[group.icon as keyof typeof skillIcons] ?? Code2
}));

export const experience = portfolioData.experience;

export const projects = portfolioData.projects;

export const education = portfolioData.education;

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}`, icon: Terminal },
  { label: "GitHub", value: profile.githubLabel, href: profile.github, icon: Github },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, icon: Linkedin },
  { label: "Location", value: profile.location, href: "#contact", icon: MapPin }
];
