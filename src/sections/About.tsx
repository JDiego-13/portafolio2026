import {
  Code2,
  Database,
  MonitorSmartphone,
  BriefcaseBusiness
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const textVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* TITULO */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          <p className="font-medium text-blue-500">
            Conóceme
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Sobre mí
          </h2>
        </motion.div>

        <div className="grid items-start gap-12 sm:grid-cols-2">
          {/* TEXTO */}
          <motion.div
            className="space-y-6"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >

            <p className="text-lg leading-8 text-slate-300">
              Soy ingeniero en Sistemas Computacionales con experiencia en el
              desarrollo de aplicaciones empresariales. Actualmente desarrollo
              APIs REST con C#  y .NET, además de integrar soluciones completas
              utilizando React, TypeScript, Tailwind CSS y Oracle.
            </p>

            <p>
              Me gusta participar en todas las etapas de desarrollo de
              software: desde el análisis de requerimientos y diseño de bases
              de datos hasta el desarrollo de interfaces modernas enfocadas en
              la experiencia del usuario.
            </p>
          </motion.div>

          {/* TARJETAS */}
          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={cardVariant}
              whileHover={{
                y: -8, scale: 1.03, transition: {
                  duration: 0.2,
                },
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
              >
                <Code2 className="mb-4 text-blue-500" size={32} />
              </motion.div>


              <h3 className="mb-2 text-xl font-semibold text-white">
                Backend
              </h3>

              <p className="text-slate-400">
                APIs REST con C#, .NET y Swagger.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariant}
              whileHover={{
                y: -8, scale: 1.03, transition: {
                  duration: 0.2,
                },
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
              >
                <MonitorSmartphone className="mb-4 text-blue-500" size={32} />
              </motion.div>


              <h3 className="mb-2 text-xl font-semibold text-white">
                Frontend
              </h3>

              <p className="text-slate-400">
                React, TypeScript, Tailwind CSS y Axios
              </p>
            </motion.div>

            <motion.div
              variants={cardVariant}
              whileHover={{
                y: -8, scale: 1.03, transition: {
                  duration: 0.2,
                },
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.15 }}>
                <Database className="mb-4 text-blue-500" size={32} />
              </motion.div>


              <h3 className="mb-2 text-xl font-semibold text-white">
                Base de datos
              </h3>

              <p className="text-slate-400">
                Oracle, TOAD y diseño de tablas relacionales.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariant}
              whileHover={{
                y: -8, scale: 1.03, transition: {
                  duration: 0.2,
                },
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.15 }}>
                <BriefcaseBusiness className="mb-4 text-blue-500" size={32} />
              </motion.div>


              <h3 className="mb-2 text-xl font-semibold text-white">
                Actualmente
              </h3>

              <p>
                Desarrollo soluciones Full Stack en Global DMS.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About