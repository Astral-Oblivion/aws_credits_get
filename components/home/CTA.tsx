import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Optimize Your Building?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our early access program and be among the first to experience
            next-generation energy management.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                Get Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="mailto:contact@voltedge-systems.com">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Questions? Reach out at{" "}
            <a
              href="mailto:contact@alpine-energy-systems.com"
              className="text-accent hover:underline"
            >
              contact@alpine-energy-systems.com
            </a>
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-primary-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
