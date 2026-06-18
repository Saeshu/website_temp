export default function ResearxhFocus() {
  return (
    <section className="py-20">
      <h2 className="text-xl font-semibold mb-8">Research Focus</h2>

      <div
        className="border border-gray-800 rounded-xl p-5 
                hover:border-gray-600 transition 
                h-full flex flex-col justify-between"
      >
        {[
          {
            title: "MRI Reconstruction",
            desc: "Recovering high-resolution volumes from sparse or degraded inputs.",
          },
          {
            title: "Diffusion Models",
            desc: "Leveraging generative priors for structured medical data synthesis.",
          },
          {
            title: "Spatial Conditioning",
            desc: "Enforcing anatomical consistency through localized denoising.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition"
          >
            <h3 className="text-white font-medium mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
