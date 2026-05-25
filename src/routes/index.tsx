import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";


export const Route = createFileRoute("/")({
  
  component: Index,
  
  head: () => ({
    meta: [
      { title: "Amila Rahman —  Web Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Jannat Amila Rahman,  web developer building modern, interactive web experiences with React, Next.js, and JavaScript ES6, ExpressJs.",
      },
      { property: "og:title", content: "Amila Rahman — Web Developer" },
      { property: "og:description", content: "Modern, animated portfolio of a full web developer." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
