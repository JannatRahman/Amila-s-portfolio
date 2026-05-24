import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "KinKeeper", desc: "A modern contact and interaction management application.", tags: ["JavaScript","Nextjs",'Reactjs',"Tailwind CSS"], category: "Frontend" },
  { img: p2, title: "Skillsphere", desc: "Modern online learning platform  to help users explore trending courses, discover top instructors.", tags: ["JavaScript","Nextjs", "Reactjs"], category: "Frontend" },
  { img: p3, title: "DigiTools", desc: "A modern and interactive e-commerce cart application  for shopping.", tags: ["JavaScript","ReactJs","Tailwind CSS", "HTML"], category: "Frontend" },
  { img: p4, title: "BookVibe", desc: "Place where you can browse books, and find your favourite to explore.", tags: ["JavaScript","ReactJs","Tailwind CSS", "HTML"], category: "Frontend" },

  { img: p5, title: "Playstore", desc: "Paystore is to install your favourite apps and browse for them.", tags: ["JavaScript","ReactJs","Tailwind CSS", "HTML"], category: "Frontend" },
  { img: p6, title: "Job Application Tracker", desc: "Keeps tracks of applications to keep up to date.", tags: ["JavaScript","ReactJs","Tailwind CSS", "HTML"], category: "Frontend" },
];

const filters = ["All", "Frontend", "Fullstack"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">Recent Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-primary text-primary-foreground glow"
                  : "glass hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="group glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-3 pb-6">
                    <a href="#" className="w-10 h-10 rounded-full bg-gradient-primary grid place-items-center glow">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full glass grid place-items-center">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
