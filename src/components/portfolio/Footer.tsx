import { ArrowUp, Code2, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-lg bg-gradient-primary grid place-items-center glow">
                <Code2 className="w-5 h-5" />
              </span>
              <span className="font-display font-bold text-lg">Amila.Dev </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Web Developer crafting modern, performant, and beautiful digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Skills", "Services", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <a href={` #${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="https://github.com/JannatRahman"
                  className="w-10 h-10 rounded-lg glass grid place-items-center hover:bg-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">jannatrahman1290@gmail.com</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amila Rahman. Crafted with care.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            Back to top
            <span className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center group-hover:-translate-y-1 transition-transform glow">
              <ArrowUp className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
