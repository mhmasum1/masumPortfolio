import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* subtle background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 -top-30 h-85 w-85 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -right-30 top-55 h-65 w-65 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Navbar />

      <div className="mx-auto max-w-5xl px-5">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
