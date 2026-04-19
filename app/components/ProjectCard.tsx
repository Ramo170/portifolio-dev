import { FaGithub } from "react-icons/fa";

type ProjectProps = {
  title: string;
  description: string;
  techs: string[];
  github: string;
};

export default function ProjectCard({
  title,
  description,
  techs,
  github,
}: ProjectProps) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition space-y-4">
      <h3 className="text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="text-xs text-black bg-zinc-50 px-2 py-1 rounded-md font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        className="text-black dark:text-lime-50 hover:underline flex w-max"
      >
        <FaGithub size={25} />
      </a>
    </div>
  );
}
