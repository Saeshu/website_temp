export default function About() {
  return (
    <section id="about" className="py-24 text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">About</h2>

        <p className="text-gray-400 leading-relaxed">
          I'm interested in developing generative models for medical imaging,
          particularly focusing on reconstructing high-quality MRI data from
          limited or degraded inputs. My work explores latent diffusion models,
          conditioning strategies, and spatially-aware denoising techniques.
        </p>
      </div>
    </section>
  );
}
