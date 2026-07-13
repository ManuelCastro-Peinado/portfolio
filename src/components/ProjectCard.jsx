import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700 hover:border-cyan-400 shadow-xl hover:shadow-cyan-500/20 transition-all duration-500"
    >
      <div className="overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-contain bg-slate-950 p-4 hover:scale-105 duration-500"
        />

      </div>

      <div className="p-7">

        <span className="text-cyan-300 text-sm uppercase tracking-widest font-semibold">
          {project.tag}
        </span>

        <h3 className="text-3xl font-bold text-white mt-3">
          {project.title}
        </h3>

        <p className="text-slate-300 mt-5 leading-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-200"
            >
              {tech}
            </span>

          ))}

        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 text-cyan-300 hover:text-white duration-300"
        >
          <FaGithub />

          View Repository

        </a>

      </div>

    </motion.div>
  );
}

export default ProjectCard;