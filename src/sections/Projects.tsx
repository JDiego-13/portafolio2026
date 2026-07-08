import { projects } from "../data/projects";
import { motion, type Variants } from "framer-motion";

const titleVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-medium text-blue-500">
            Mi trabajo
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl   ">
            Proyecto destacado
          </h2>
        </motion.div>


        {projects.map((projects) => (
          <motion.article
           variants={cardVariant}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           whileHover={{
            y: -8,
            transition: {
              duration: 0.25,
            },
           }}
           className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="grid md:grid-cols-2">

              {/* IMAGEN */}
              <div className="overflow-hidden bg-slate-950">
                <motion.img
                  src={projects.image}
                  alt={projects.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
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
                    <motion.span
                      key={tech}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "#2563eb",
                        color: "#fff"
                      }}
                      transition={{ duration: 0.2 }}
                      className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* BOTONES */}
                <div className="mt-10 flex gap-4">
                  {projects.demo && (
                    <motion.a
                      href={projects.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
                      whileHover={{ y: -3, scale: 1.03, }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Ver proyecto
                    </motion.a>
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
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects;