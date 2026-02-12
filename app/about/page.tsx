import type { Metadata } from "next";
import { Award, Users, Cpu, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us - VoltEdge Systems",
  description:
    "Learn about VoltEdge Systems, founded by ETH Zurich researchers to revolutionize building energy management through IoT and AI.",
};

const technologies = [
  {
    name: "IoT Sensor Network",
    description:
      "Custom-designed wireless sensors with ultra-low power consumption, long-range connectivity, and industrial-grade reliability.",
    icon: Zap,
  },
  {
    name: "Edge Computing",
    description:
      "On-premise processing units that analyze data locally for real-time decision making without cloud dependency.",
    icon: Cpu,
  },
  {
    name: "Machine Learning",
    description:
      "Deep learning models trained on millions of data points to predict consumption patterns and optimize energy usage.",
    icon: Award,
  },
  {
    name: "Cloud Platform",
    description:
      "Scalable AWS infrastructure for data storage, analytics, and remote monitoring accessible from anywhere.",
    icon: Users,
  },
];

export default function About() {
  return (
    <div className="py-24 sm:py-32">
      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
            About VoltEdge Systems
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We are on a mission to make buildings smarter, greener, and more
            efficient through intelligent energy management.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Buildings account for nearly 40% of global energy consumption, yet
              most waste 20-40% of that energy through inefficient systems and
              poor optimization. Our mission is to eliminate this waste by
              making intelligent energy management accessible to every
              commercial building.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Through cutting-edge IoT sensors and AI-powered optimization,
              we enable buildings to operate at peak efficiency while
              reducing costs and environmental impact.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where every building is an intelligent,
              self-optimizing system that minimizes energy waste, reduces
              carbon emissions, and operates in harmony with the power grid.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By 2030, we aim to help reduce global building energy consumption
              by 1%, preventing millions of tons of CO₂ emissions and saving
              businesses billions in energy costs.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="bg-muted/40 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Founded by ETH Zurich Research</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VoltEdge Systems was founded by{" "}
              <span className="font-semibold text-foreground">
                Richard Windesheim
              </span>
              , an Electrical Engineering student at ETH Zurich specializing in
              energy systems and IoT technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              During his research on smart grid technologies and building
              automation, Richard observed firsthand how much energy commercial
              buildings waste through outdated control systems and manual
              management. Existing solutions were either prohibitively
              expensive or lacked the intelligence needed for real optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This inspired the creation of VoltEdge Systems - a platform that
              combines affordable IoT hardware with sophisticated machine
              learning to make intelligent energy management accessible to
              buildings of all sizes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, VoltEdge is backed by research from ETH Zurich's Electrical
              Engineering Department and is being piloted in commercial
              buildings across Switzerland.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Building the future of energy management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Richard Windesheim</CardTitle>
              <CardDescription>Founder & CEO</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Electrical Engineering student at ETH Zurich. Specializes in
                IoT systems, energy efficiency, and machine learning.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>Engineering Lead</CardTitle>
              <CardDescription>We're Hiring</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Looking for an experienced embedded systems engineer to lead
                IoT sensor development.
              </p>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>ML Engineer</CardTitle>
              <CardDescription>We're Hiring</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Seeking a machine learning engineer passionate about
                sustainability and optimization algorithms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold">Our Technology</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built on cutting-edge IoT and AI infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech) => (
            <Card key={tech.name} className="border-2 hover:border-accent/50 transition-all">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <tech.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {tech.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary-200 bg-primary-50 px-6 py-3">
            <Award className="h-5 w-5 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Powered by AWS IoT Core, Lambda, SageMaker, and S3
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
