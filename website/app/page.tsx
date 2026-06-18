import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import ResearchFocus from "./components/ResearchFocus";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-24">
          <Navbar />
          <Hero />

          <ResearchFocus />
          <Projects />
        </div>

        <footer className="py-16 text-gray-400 text-sm">
          <div className="flex justify-between">
            <p>© 2026 Your Name</p>

            <div className="space-x-4">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="mailto:you@email.com">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
