import {
  Network,
  Shield,
  Cloud,
  Server,
  Terminal,
  Monitor,
} from "lucide-react";

export const siteConfig = {
  name: "Bisrat Melknew",
  title: "IT Infrastructure & Security Engineer",
  tagline: "I design and secure scalable enterprise infrastructure.",
  description:
    "Portfolio of a IT Infrastructure & Security Engineer specializing in designing, deploying, and securing scalable enterprise infrastructure across cloud and on-prem environments.",
  url: "https://bisratm.github.io",
  email: "bisra.melknew@gmail.com",
  location: "Addis Ababa, Ethiopia",
  philosophy:
    "Building resilient IT Infrastructure through methodical engineering, rigorous security practices, and a commitment to operational excellence.",
  giscusConfig: {
    repo: "Bisrat-Melknew/Bisrat-Melknew.github.io",
    repoId: "R_kgDOOBhKvg", // Placeholder - user can replace if their repoId is different
    category: "Announcements",
    categoryId: "DIC_kwDOOBhKvs4Cny5z", // Placeholder - user can replace if their categoryId is different
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = {
  github: "https://github.com/Bisrat-Melknew?tab=repositories",
  linkedin: "https://linkedin.com/in/bisrat-melknew", // standard professional default format
};

export const expertiseCategories = [
  {
    title: "Networking and Security",
    icon: Shield,
    description: "Designing, Securing, and Optimizing Enterprise Network Infrastructure",
    skills: [
      "FortiGate Firewall Administration",
      "Cisco ASA Firewall Administration",
      "Cisco Meraki MX67 / MX84 / MX95",
      "pfSense Firewall Administration",
      "IDS / IPS",
      "SSL Inspection",
      "Web Filtering",
      "Application Control",
      "Geo-blocking",
      "ACLs",
      "NAC",
      "Zero Trust Architecture",
      "802.1X Authentication",
      "VPN Deployment & Secure Remote Access",
      "Network Segmentation & Security Hardening",
      "Firewall Policy Management",
      "Secure Enterprise Network Architecture",
      "Vulnerability Assessment",
      "Incident Response",
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    description: "Cloud identity, endpoint management, and secure access administration",
    skills: [
      "Microsoft 365 Administration",
      "Azure AD / Entra ID",
      "Microsoft Intune",
      "Hybrid Identity Management",
      "Multi-Factor Authentication (MFA)",
      "Conditional Access Policies",
      "Identity & Access Management (IAM)",
      "User & Device Management",
      "Endpoint Security Management",
      "Single Sign-On (SSO)",
      "Azure Tenant Administration",
      "Cloud Security & Compliance"
    ],
  },
  {
    title: "Infrastructure",
    icon: Server,
    description: "Scalable and resilient system design",
    skills: [
      "Linux Administration (RHEL, Ubuntu)",
      "Windows Server & Active Directory Administration",
      "DNS , DHCP , GPO , FILE SERVER , PRINT SERVER",
      "NPS / RADIUS Authentication",
      "Server Hardening",
      "Veeam Backup & Replication",
      "Disaster Recovery",
    ],
  },
  {
    title: "Automation",
    icon: Terminal,
    description: "Infrastructure as code and CI/CD",
    skills: [
      "Ansible",
      "Python & Bash Scripting",
    ],
  },
  {
    title: "Virtualization",
    icon: Monitor,
    description: "Enterprise virtualization platforms",
    skills: [
      "VMware vSphere / ESXi",
      "Proxmox VE",
      "Hyper-V",
      "Virtual Networking (NSX)",
      "Resource Optimization",
      "Migration Strategies",
    ],
  },
];

export const certifications = [
  {
    name: "CMSS | Cisco Meraki Solution Specialist",
    issuer: "Cisco Systems",
    date: "2026",
    status: "active" as const,
    verifyUrl: "https://cp.certmetrics.com/cisco/en/public/verify/credential/b79a501619bb467ab5f3863c2a6fda81",
    logo: "/images/certifications/cmss.png",
  },
  {
    name: "CCNA | Cisco Certified Network Associate",
    issuer: "Cisco Systems",
    date: "2025",
    status: "active" as const,
    verifyUrl: "https://cp.certmetrics.com/cisco/en/public/verify/credential/61d5e6cea8834be898e42ea6494de894",
    logo: "/images/certifications/ccna.png",
  },
  {
    name: "Cisco AI Technical Practitioner ",
    issuer: "Cisco Systems",
    date: "2026",
    status: "active" as const,
    verifyUrl: "https://www.credly.com/badges/a7de6a5f-4f61-454a-9f18-8a59a2b3479a",
    logo: "/images/certifications/caitp.png",
  },
];
