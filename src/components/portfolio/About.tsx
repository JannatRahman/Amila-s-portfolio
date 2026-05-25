import { motion } from "motion/react";
import { Award, Briefcase, Coffee, Users } from "lucide-react";
import aboutImg from "@/assets/main-about.jpeg";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Award, value: "60+", label: "Projects Delivered" },
  { icon: Users, value: "40+", label: "Happy Clients" },
  { icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Crafting <span className="text-gradient-primary">digital experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden glass">
              <img
                src={aboutImg}
                alt="About Amila Rahman"
                width={600}
                height={700}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              A passionate developer who loves clean code & beautiful design
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Web Developer with experience in building scalable web
              applications. I specialize in React, Next.js, Javascript ES6, and Node.js, ExpressJS — turning
              complex problems into simple, elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm driven by curiosity, design detail, and a relentless pursuit of better user
              experiences. When I'm not coding, you'll find me exploring design systems, contributing
              to open-source, or sketching new product ideas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 hover:border-primary/40 transition-colors"
                >
                  <s.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
