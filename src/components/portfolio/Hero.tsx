import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAvatar from "@/assets/main-hero.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/30 blur-[120px] animate-glow-pulse" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            Available for freelance work
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            <span className="block text-muted-foreground text-2xl md:text-3xl font-normal mb-3">
              Hi, I'm
            </span>
            <span className="text-gradient">Jannat Amila Rahman</span>
            <span className="block mt-2 text-gradient-primary">Full Stack Developer</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            I craft modern, interactive, and performant web experiences using React, Next.js, and
            cutting-edge tools — turning ideas into pixel-perfect products.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 glow group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border glass">
              <a href="#contact">
                <Download className="mr-1 w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow me</span>
            <div className="h-px w-12 bg-border" />
            {[
              { icon: Github, href: "https://github.com/JannatRahman" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/jannat-amila-rahman/" },
              { icon: Twitter, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-10 h-10 rounded-full glass grid place-items-center hover:bg-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-40 animate-glow-pulse" />
          <div className="relative animate-float">
            <div className="absolute -inset-2 bg-gradient-primary rounded-3xl opacity-60 blur-xl" />
            <img
              src={heroAvatar}
              alt="Alex Carter — Full Stack Developer"
              width={500}
              height={500}
              className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] object-cover rounded-3xl border border-border glass"
            />
          </div>

          {[
            { label: "React", top: "10%", left: "-10%", delay: 0 },
            { label: "TypeScript", top: "70%", left: "-15%", delay: 1 },
            { label: "Next.js", top: "20%", right: "-10%", delay: 0.5 },
            { label: "Node.js", top: "80%", right: "-5%", delay: 1.5 },
          ].map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              style={{ top: tag.top, left: tag.left, right: tag.right }}
              className="absolute glass px-3 py-1.5 rounded-full text-xs font-medium animate-float"
            >
              {tag.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
