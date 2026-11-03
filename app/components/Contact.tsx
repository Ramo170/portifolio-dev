import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-30 py-20">
      <div className=" bg-zinc-200 border border-white/10 rounded-2xl p-10 grid md:grid-cols-2 gap-10 items-center">
        {/*LEFT*/}
        <div className="space-y-4">
          <h2 className="text-4xl italic text-black font-light">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-zinc-400">
            Aberto a projetos freelance e oportunidades Estágio/CLT.
          </p>
        </div>

        {/*RIGHT*/}
        <div className="space-y-4 text-zinc-300">
          <a
            href="mailto:icaro.editor170@gmail.com"
            className="flex items-center gap-2 w-max hover:text-gray-400 transition text-black"
          >
            <MdEmail size={22} />
            icaro.editor170@gmail.com
          </a>
          <a
            href="https://github.com/Ramo170"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-max hover:text-gray-400 transition text-black"
          >
            <FaGithub size={22} />
            github.com/Ramo170
          </a>
          <a
            href="https://www.linkedin.com/in/ícaro-bihum-9b9b62381"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-max hover:text-gray-400 transition text-black"
          >
            <FaLinkedin size={22} />
            linkedin.com/in/icaro-bihum
          </a>
        </div>
      </div>
    </div>
  );
}
