export default function Hero() {
  return (
    <section className="py-32">
      <h2 className="text-xl font-semibold mb-10"></h2>
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Building intelligent systems for
        <span className="text-gray-400"> medical imaging</span>
      </h1>

      <p className="mt-6 text-lg text-gray-400 max-w-2xl">
        Undergraduate researcher working on MRI super-resolution, diffusion
        models, and spatially-aware reconstruction.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-400 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
