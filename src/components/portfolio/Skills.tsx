import { motion } from "motion/react";

const techs = [
  "React", "Next.js",  "JavaScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Tailwind", "Firebase", "GraphQL", "Git","GitHub",
  "Framer Motion", "Figma","HeroUi" ,"Docker",
];

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript ES6", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "UI / UX Implementation", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "REST & GraphQL APIs", level: 85 },
      { name: "MongoDB / PostgreSQL", level: 82 },
      { name: "Authentication", level: 85 },
    ],
  },
  {
    title: "Tooling",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Deployment / DevOps", level: 90 },
      { name: "HeroUi, DaisUI", level: 95 },
      { name: "Performance Optimization", level: 87 },
      { name: "SEO Fundamentals", level: 78 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
        </motion.div>

        {/* Tech marquee */}
        <div className="relative overflow-hidden mb-20 py-4" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex gap-4 animate-marquee w-max">
            {[...techs, ...techs].map((t, i) => (
              <div
                key={i}
                className="glass px-6 py-3 rounded-full whitespace-nowrap text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-6 text-gradient-primary">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
