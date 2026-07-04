import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import type { services } from "@/lib/data";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <GlassCard className="group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
        <service.icon size={23} />
      </div>
      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-white/60">{service.description}</p>
      <LinkButton href={`/services/${service.slug}`} variant="secondary" size="sm" className="mt-6 self-start">
        Learn More <ArrowRight size={16} />
      </LinkButton>
    </GlassCard>
  );
}
