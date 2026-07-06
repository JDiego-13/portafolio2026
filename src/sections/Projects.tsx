import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Proyecto destacado
        </h2>

        {projects.map((projects) => (
          <article
            key={projects.title}
            className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="grid md:grid-cols-2">

              {/* IMAGEN */}
              <div className="overflow-hidden bg-slate-950">
                <img 
                  src={projects.image}
                  alt={projects.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* INFORMACION */}
              <div className="flex flex-col justify-center p-10">
                <span className="mb-4 w-fit rounded-full bg-blue-500/15 px-4 py-1 text-sm font-medium text-blue-400">
                  Proyecto profesional
                </span>

                <h3 className="text-4xl font-bold text-white">
                  {projects.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {projects.company}
                </p>

                <p className="mb-8 text-sm text-slate-500">
                  {projects.period}
                </p>

                <p className="leading-8 text-slate-300">
                  {projects.description}
                </p>

                {/* TECNOLOGIAS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {projects.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BOTONES */}
                <div className="mt-10 flex gap-4">
                  {projects.demo && (
                    <a 
                      href={projects.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
                    >
                      Ver proyecto
                    </a>
                  )}
                  
                  {projects.github && (
                    <a 
                      href={projects.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
                    
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects;