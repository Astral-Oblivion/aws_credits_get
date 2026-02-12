import type { Metadata } from "next";
import {
  Activity,
  BarChart3,
  Bell,
  Building2,
  Cloud,
  Cpu,
  GraduationCap,
  Heart,
  Layers,
  Shield,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solution - VoltEdge Systems",
  description:
    "Discover how VoltEdge's IoT-powered energy management platform reduces building energy consumption by 20-40% through real-time monitoring and AI optimization.",
};

const features = [
  {
    name: "Real-Time Monitoring",
    description:
      "Monitor energy consumption across all systems with millisecond precision. Track HVAC, lighting, appliances, and electrical loads in real-time through an intuitive dashboard.",
    icon: Activity,
  },
  {
    name: "AI-Powered Analytics",
    description:
      "Machine learning algorithms analyze historical and real-time data to identify inefficiencies, predict consumption patterns, and recommend optimization strategies.",
    icon: BarChart3,
  },
  {
    name: "Automated Control",
    description:
      "Automatically adjust building systems based on occupancy, time of day, weather conditions, and energy pricing to maximize efficiency without manual intervention.",
    icon: Cpu,
  },
  {
    name: "Smart Alerts",
    description:
      "Receive instant notifications for anomalies, equipment malfunctions, excessive consumption, or optimization opportunities via email, SMS, or push notifications.",
    icon: Bell,
  },
  {
    name: "Cloud Dashboard",
    description:
      "Access your building's energy data from anywhere through our secure cloud platform. View reports, adjust settings, and monitor performance remotely.",
    icon: Cloud,
  },
  {
    name: "Enterprise Security",
    description:
      "Bank-grade encryption, secure data transmission, role-based access control, and compliance with GDPR and ISO 27001 standards.",
    icon: Shield,
  },
];

const useCases = [
  {
    name: "Office Buildings",
    description:
      "Optimize HVAC for occupancy patterns, reduce lighting costs with smart scheduling, and manage peak demand charges during business hours.",
    icon: Building2,
    savings: "25-35% average savings",
  },
  {
    name: "Retail Spaces",
    description:
      "Balance customer comfort with energy efficiency, optimize lighting based on natural light and foot traffic, and reduce costs during off-hours.",
    icon: ShoppingBag,
    savings: "20-30% average savings",
  },
  {
    name: "Educational Institutions",
    description:
      "Adapt energy usage to class schedules, optimize heating and cooling for student comfort, and reduce consumption during holidays and weekends.",
    icon: GraduationCap,
    savings: "30-40% average savings",
  },
  {
    name: "Healthcare Facilities",
    description:
      "Maintain critical system uptime, optimize non-critical areas, ensure patient comfort, and comply with healthcare facility regulations.",
    icon: Heart,
    savings: "15-25% average savings",
  },
];

const comingSoon = [
  {
    name: "Beta Program",
    description: "Join our early access program for pilot installations",
    status: "Applications Opening Q2 2025",
  },
  {
    name: "API Access",
    description: "RESTful API for custom integrations and automation",
    status: "In Development",
  },
  {
    name: "Mobile App",
    description: "iOS and Android apps for on-the-go monitoring",
    status: "Coming Q3 2025",
  },
];

export default function Solution() {
  return (
    <div className="py-24 sm:py-32">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
            The VoltEdge Solution
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A comprehensive IoT and AI platform that transforms buildings into
            intelligent, self-optimizing energy systems.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold">Platform Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need for intelligent energy management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.name}
              className="border-2 hover:border-accent/50 transition-all"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="bg-muted/40 rounded-2xl p-8 md:p-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Layers className="h-8 w-8 text-accent" />
              Technical Architecture
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. IoT Sensor Layer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wireless sensors deployed across your building monitor
                  energy consumption, temperature, humidity, occupancy, and
                  equipment status. Data is collected every second and
                  transmitted securely to edge computing nodes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Edge Computing Layer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  On-premise computing units process data locally for
                  real-time decision making. Critical optimization happens
                  instantly without cloud latency, ensuring immediate response
                  to changing conditions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Cloud Analytics Layer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Historical data is aggregated in AWS cloud infrastructure
                  (S3, SageMaker) where deep learning models identify
                  long-term patterns, seasonal trends, and optimization
                  opportunities. Accessible via web dashboard and API.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Control & Automation Layer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integration with building management systems (BMS),
                  thermostats, lighting controls, and electrical systems
                  enables automated optimization. Works with existing
                  infrastructure - no costly replacements needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold">Built for Your Industry</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tailored solutions for different building types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <Card
              key={useCase.name}
              className="border-2 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <useCase.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{useCase.name}</CardTitle>
                      <div className="text-sm text-accent font-medium mt-1">
                        {useCase.savings}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold">Seamless Integration</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Works with your existing building systems
          </p>
        </div>

        <div className="bg-muted/40 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-700">BACnet</div>
              <div className="text-sm text-muted-foreground mt-1">
                Building Automation
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-700">Modbus</div>
              <div className="text-sm text-muted-foreground mt-1">
                Industrial Protocol
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-700">MQTT</div>
              <div className="text-sm text-muted-foreground mt-1">
                IoT Messaging
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-700">REST API</div>
              <div className="text-sm text-muted-foreground mt-1">
                Custom Integration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold">Coming Soon</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Exciting features in development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comingSoon.map((item) => (
            <Card key={item.name} className="border-2 border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {item.description}
                </CardDescription>
                <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                  {item.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Building?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our early access program and start saving energy today
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Get Early Access
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
