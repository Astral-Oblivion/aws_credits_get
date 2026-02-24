import { Activity, Brain, Plug, TrendingDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    name: "Real-Time Monitoring",
    description:
      "Track energy consumption across all building systems with millisecond precision. Get instant alerts when anomalies are detected.",
    icon: Activity,
  },
  {
    name: "AI-Powered Optimization",
    description:
      "Machine learning algorithms analyze usage patterns and automatically adjust systems for maximum efficiency without sacrificing comfort.",
    icon: Brain,
  },
  {
    name: "Easy Integration",
    description:
      "Plug-and-play IoT sensors work with existing HVAC, lighting, and electrical systems. No costly infrastructure overhauls required.",
    icon: Plug,
  },
  {
    name: "Significant Cost Savings",
    description:
      "Projected to reduce energy bills by 20-40% based on industry benchmarks. Target payback period of 12-18 months through energy savings alone.",
    icon: TrendingDown,
  },
];

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to optimize energy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform combines cutting-edge IoT hardware with intelligent
            software to deliver measurable results.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.name}
                className="border-2 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
