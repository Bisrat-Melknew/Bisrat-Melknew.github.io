import {
  Network,
  Shield,
  Cloud,
  Server,
  Terminal,
  Monitor,
} from "lucide-react";

export const siteConfig = {
  name: "Bisrat M.",
  title: "Senior Infrastructure & Security Engineer",
  tagline: "I design and secure scalable enterprise infrastructure.",
  description:
    "Portfolio of a Senior Infrastructure & Security Engineer specializing in designing, deploying, and securing scalable enterprise infrastructure across cloud and on-prem environments.",
  url: "https://bisratm.github.io",
  email: "contact@example.com",
  location: "Available Worldwide",
  philosophy:
    "Building resilient systems through methodical engineering, rigorous security practices, and a commitment to operational excellence.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const expertiseCategories = [
  {
    title: "Networking",
    icon: Network,
    description: "Enterprise network design and optimization",
    skills: [
      "TCP/IP & OSI Model",
      "VLANs & Subnetting",
      "BGP / OSPF / EIGRP",
      "SD-WAN",
      "Cisco IOS / NX-OS",
      "Palo Alto Networks",
      "Wireshark & Packet Analysis",
      "Load Balancing (F5, HAProxy)",
    ],
  },
  {
    title: "Security",
    icon: Shield,
    description: "Defense-in-depth security architecture",
    skills: [
      "Zero Trust Architecture",
      "SIEM (Splunk, Elastic)",
      "IDS/IPS (Snort, Suricata)",
      "Firewall Policy Design",
      "PKI & Certificate Management",
      "Vulnerability Assessment",
      "Incident Response",
      "Compliance (SOC 2, ISO 27001)",
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    description: "Multi-cloud architecture and operations",
    skills: [
      "AWS (VPC, IAM, EKS, CloudTrail)",
      "Azure (AD, Sentinel, AKS)",
      "GCP (GKE, Cloud Armor)",
      "Cloud Security Posture",
      "Cost Optimization",
      "Landing Zone Design",
      "Multi-Cloud Networking",
      "Cloud-Native Security",
    ],
  },
  {
    title: "Infrastructure",
    icon: Server,
    description: "Scalable and resilient system design",
    skills: [
      "Linux Administration (RHEL, Ubuntu)",
      "Windows Server & Active Directory",
      "Storage (SAN, NAS, Ceph)",
      "DNS & DHCP",
      "High Availability & DR",
      "Capacity Planning",
      "Data Center Operations",
      "Hardware Lifecycle Management",
    ],
  },
  {
    title: "Automation",
    icon: Terminal,
    description: "Infrastructure as code and CI/CD",
    skills: [
      "Terraform",
      "Ansible",
      "Python & Bash Scripting",
      "CI/CD (GitHub Actions, GitLab)",
      "Docker & Kubernetes",
      "Helm Charts",
      "GitOps (ArgoCD, Flux)",
      "Configuration Management",
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
      "KVM / QEMU",
      "Container Orchestration",
      "Virtual Networking (NSX)",
      "Resource Optimization",
      "Migration Strategies",
    ],
  },
];

export const certifications = [
  {
    name: "AWS Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    status: "active" as const,
    verifyUrl: "#",
    logo: "/images/certifications/aws-sap.png",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    status: "active" as const,
    verifyUrl: "#",
    logo: "/images/certifications/cka.png",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2023",
    status: "active" as const,
    verifyUrl: "#",
    logo: "/images/certifications/secplus.png",
  },
  {
    name: "Cisco CCNP Enterprise",
    issuer: "Cisco Systems",
    date: "2023",
    status: "active" as const,
    verifyUrl: "#",
    logo: "/images/certifications/ccnp.png",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2024",
    status: "active" as const,
    verifyUrl: "#",
    logo: "/images/certifications/terraform.png",
  },
  {
    name: "Azure Security Engineer Associate",
    issuer: "Microsoft",
    date: "2024",
    status: "active" as const,
    verifyUrl: "#",
    logo: "/images/certifications/azure-sec.png",
  },
];
