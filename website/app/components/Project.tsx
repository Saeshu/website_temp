import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MRI Super-Resolution with Latent Diffusion",
    description:
      "Reconstructing high-resolution 3D MRI volumes from sparse slices using latent diffusion with anatomical conditioning.",
    tech: ["PyTorch", "MONAI", "Diffusion"],
    highlight: "Research",
  },
  {
    title: "Spatially-Aware Denoising",
    description:
      "Investigating spatial conditioning mechanisms to enforce structural consistency in generative MRI reconstruction.",
    tech: ["3D CNN", "Attention", "MRI"],
    highlight: "Ongoing",
  },
  {
    title: "Autoencoder-based Artifact Modeling",
    description:
      "Learning realistic MRI artifacts using 3D autoencoders to improve downstream reconstruction quality.",
    tech: ["Autoencoders", "3D CNN"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <h2 className="text-xl font-semibold mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
