type Props = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  highlight?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  highlight,
}: Props) {
  return (
    <div
      className="border border-gray-800 rounded-xl p-6 
                 hover:border-gray-500 hover:-translate-y-1 
                 transition-all duration-300"
    >
      {/* Title + highlight */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-white max-w-[80%]">
          {title}
        </h3>

        {highlight && (
          <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md">
            {highlight}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-400 mt-3 text-sm leading-relaxed">
        {description}
      </p>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-gray-900 text-gray-300 px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          className="inline-block mt-4 text-sm text-blue-400 hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
