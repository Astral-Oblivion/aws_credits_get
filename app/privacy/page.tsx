import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Zenith Energy Systems",
  description: "Zenith Energy Systems privacy policy and data protection practices.",
};

export default function Privacy() {
  const lastUpdated = "February 12, 2026";

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>

        <p className="text-sm text-muted-foreground mb-12">
          Last updated: {lastUpdated}
        </p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Zenith Energy Systems ("we", "our", or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Fill out our contact form</li>
              <li>Subscribe to our mailing list</li>
              <li>Request early access to our platform</li>
              <li>Communicate with us via email</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This information may include your name, email address, company
              name, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Building Energy Data
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When you use our IoT energy management platform, we collect energy
              consumption data, sensor readings, building occupancy patterns, and
              system performance metrics. This data is used solely for providing
              and improving our services.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Automatically Collected Information
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We may automatically collect certain information about your device
              when you visit our website, including IP address, browser type,
              operating system, and usage statistics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates about our products and services</li>
              <li>Analyze and optimize building energy consumption</li>
              <li>Improve our platform and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. Our platform uses:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>End-to-end encryption for data transmission</li>
              <li>Secure cloud infrastructure (AWS)</li>
              <li>Role-based access control</li>
              <li>Regular security audits and updates</li>
              <li>GDPR and ISO 27001 compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Amazon Web Services (AWS) for cloud infrastructure and data
              storage. AWS is compliant with industry-standard security
              certifications. We do not sell your personal information to third
              parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies to enhance user experience and analyze
              website traffic. You can configure your browser to refuse cookies,
              but this may limit your ability to use certain features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at:
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
        </div>
      </div>
    </div>
  );
}
