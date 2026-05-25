import { motion } from "motion/react";
import { Code, Layout, Smartphone, Rocket, Bug, Plug, Gauge, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", desc: "End-to-end web apps with modern stacks — from database to UI." },
  { icon: Layout, title: "Frontend Development", desc: "Pixel-perfect, accessible React & Next.js interfaces." },
  { icon: Smartphone, title: "Responsive Design", desc: "Sites that feel native on every screen size and device." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting landing pages built for speed and clarity." },
  { icon: Sparkles, title: "Portfolio Sites", desc: "Premium portfolio experiences that get you hired." },
  { icon: Bug, title: "Bug Fixing", desc: "Diagnosing and squashing tricky issues in existing codebases." },
  { icon: Gauge, title: "Performance", desc: "Core Web Vitals tuning, bundle optimization, lazy loading." },
  { icon: Plug, title: "API Integration", desc: "REST, GraphQL, third-party services — wired up cleanly." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Services <span className="text-gradient-primary">designed to ship</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center mb-4 glow">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
