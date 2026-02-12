import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Install IoT Sensors",
    description:
      "Our technicians install wireless sensors across your building - HVAC systems, lighting, major appliances, and electrical panels. Installation typically takes 1-2 days with minimal disruption.",
  },
  {
    number: "02",
    title: "AI Analyzes Patterns",
    description:
      "Over the first 2-4 weeks, our machine learning algorithms learn your building's unique usage patterns, peak hours, occupancy schedules, and energy profile to establish a baseline.",
  },
  {
    number: "03",
    title: "Automatic Optimization",
    description:
      "The system continuously optimizes energy usage in real-time - adjusting HVAC based on occupancy, dimming lights in unused areas, and scheduling high-consumption tasks during off-peak hours.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get up and running in three simple steps
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -translate-x-1/2" />
                )}

                <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4">
                    <div className="text-8xl font-bold text-accent/10">
                      {step.number}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
