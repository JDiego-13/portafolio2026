import { experience } from "../data/experience";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Experiencia Profesional
        </h2>

        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.company}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >

              {/* EMPRESA */}
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                {/* IZQUIERDA */}
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {job.position}
                  </h3>

                  <p className="mt-1 text-blue-400">
                    {job.company} · {job.location}
                  </p>

                  {/* DESCRIPCION */}
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-300">
                    {job.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* DERECHA */}
                <div className="flex flex-col items-center gap-4">
                  <span className="font-medium text-slate-400">
                    {job.period}
                  </span>

                  <motion.img
                    src={job.logo}
                    alt={job.company}
                    className="h-46 w-46 rounded-2xl border border-slate-700 bg-white object-contain p-4 shadow-lg"
                    animate={{ y: [0, -3, 0 ]}}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    
                  />
                </div>

              </div>

              {/* TECNOLOGIAS */}
              <div className="mt-8 flex flex-wrap gap-3">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;