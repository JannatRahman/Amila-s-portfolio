import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, MessageCircle, Send, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/JannatRahman",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jannat-amila-rahman/",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/8801XXXXXXXXX",
  },
  ];

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's build <span className="text-gradient-primary">something great</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "jannatrahman1290@gmail.com" },
              { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
              { icon: MessageCircle, label: "WhatsApp", value: "+880  1602-161433" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-5">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Socials</div>
              <div className="flex gap-3">
                {socialLinks.map((item, i) => {
  const Icon = item.icon;

  return (
    <a
      key={i}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg glass grid place-items-center hover:bg-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
})}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                <Input required 
                placeholder="Jane Doe" 
                className="bg-background/40 border-border focus:border-primary" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <Input required 
                type="email" 
                placeholder="jane@example.com" 
                className="bg-background/40 border-border focus:border-primary" />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Subject</label>
              <Input required placeholder="Project inquiry" className="bg-background/40 border-border focus:border-primary" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Message</label>
              <Textarea required rows={5} placeholder="Tell me about your project..." className="bg-background/40 border-border focus:border-primary resize-none" />
            </div>
            <Button
              type="submit"
              disabled={loading || sent}
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 glow"
            >
              {sent ? (
                <><CheckCircle2 className="mr-2 w-4 h-4" /> Message Sent!</>
              ) : loading ? (
                <>Sending...</>
              ) : (
                <><Send className="mr-2 w-4 h-4" /> Send Message</>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
