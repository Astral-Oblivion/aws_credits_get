import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Zenith Energy Systems",
  description: "Zenith Energy Systems terms of service and usage agreement.",
};

export default function Terms() {
  const lastUpdated = "February 12, 2026";

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>

        <p className="text-sm text-muted-foreground mb-12">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Zenith Energy Systems' website and services, you
              accept and agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zenith Energy Systems provides IoT-based energy monitoring and
              optimization services for commercial buildings. Our platform uses
              sensors, edge computing, and machine learning to analyze and
              optimize energy consumption.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with all applicable laws</li>
              <li>Not interfere with or disrupt the service</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not use the service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to maintain 99.9% uptime, we do not guarantee
              uninterrupted access to our services. We may perform scheduled
              maintenance, updates, or experience technical difficulties that
              temporarily affect service availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Beta Program</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zenith Energy Systems is currently in beta testing. Beta participants
              acknowledge that the service may contain bugs, errors, or
              incomplete features. We appreciate feedback and will work to
              address issues as they arise.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Ownership</h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of all data collected from your building
              systems. Zenith Energy Systems is granted a license to process this
              data solely for the purpose of providing our services. We may use
              anonymized, aggregated data for research and service improvement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, features, and functionality of Zenith Energy Systems,
              including but not limited to software, algorithms, designs, and
              trademarks, are owned by Zenith Energy Systems and are protected by
              international copyright, trademark, and other intellectual property
              laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Zenith Energy Systems shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your use
              of or inability to use the service. Our total liability for any
              claims shall not exceed the amount you paid for the service in the
              12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. No Warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              The service is provided "as is" without warranties of any kind,
              either express or implied. We do not warrant that the service will
              be error-free, secure, or meet your specific requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Energy Savings Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              While Zenith Energy Systems aims to reduce energy consumption by 20-40%,
              actual savings vary based on building characteristics, usage
              patterns, and existing systems. We do not guarantee specific energy
              savings or cost reductions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Third-Party Integration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our service may integrate with third-party building management
              systems and equipment. We are not responsible for the performance,
              availability, or security of third-party systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate your access to the
              service at any time for violation of these terms or for any other
              reason. You may terminate your use of the service at any time by
              contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may modify these Terms of Service at any time. We will notify
              users of material changes via email or through the service.
              Continued use of the service after changes constitutes acceptance
              of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of Switzerland, without regard to its
              conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@zenith-energy.com"
                className="text-accent hover:underline"
              >
                contact@zenith-energy.com
              </a>
            </p>
            <p className="mt-2">
              <strong>Location:</strong> Zurich, Switzerland
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">16. Acknowledgment</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using Zenith Energy Systems, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service and our
              Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
