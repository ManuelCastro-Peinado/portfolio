import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-cyan-300 uppercase tracking-[6px] font-semibold">
          FEATURED PROJECTS
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          Some things I've built.
        </h2>

        <p className="text-slate-300 mt-6 max-w-3xl leading-8">
          These projects represent my learning journey in backend development,
          Android applications and software engineering.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;