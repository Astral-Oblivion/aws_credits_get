import { Award, Leaf, TrendingDown, Zap } from "lucide-react";

const stats = [
  {
    name: "Energy Savings",
    value: "20-40%",
    description: "Average reduction in energy costs",
    icon: TrendingDown,
  },
  {
    name: "CO₂ Reduction",
    value: "30%+",
    description: "Lower carbon footprint per building",
    icon: Leaf,
  },
  {
    name: "ROI Timeline",
    value: "12-18mo",
    description: "Typical payback period",
    icon: Award,
  },
  {
    name: "Uptime",
    value: "99.9%",
    description: "System reliability guarantee",
    icon: Zap,
  },
];

export default function Trust() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Proven Results, Built for Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Designed and tested in real-world commercial buildings across
            Switzerland and Europe.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col items-center text-center p-6 rounded-lg border-2 border-border hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="text-4xl font-bold text-primary-700">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold">{stat.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
