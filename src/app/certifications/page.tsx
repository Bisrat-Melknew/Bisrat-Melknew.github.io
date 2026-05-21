import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CertCard } from "@/components/certifications/cert-card";
import { certifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Industry-recognized certifications in cloud architecture, security, networking, and infrastructure automation.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Certifications"
        description="Industry-recognized credentials validating expertise across cloud platforms, security, networking, and automation."
      />

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-4">
          {certifications.map((cert) => (
            <CertCard
              key={cert.name}
              name={cert.name}
              issuer={cert.issuer}
              date={cert.date}
              status={cert.status}
              verifyUrl={cert.verifyUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
