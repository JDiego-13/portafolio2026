import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

const textVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
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
    y: 30,
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

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-medium text-blue-500">
            Trabajemos juntos
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Contacto
          </h2>
        </motion.div>


        <div className="grid gap-12 md:grid-cols-2">
          {/* TEXTO */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white">
              ¿Tienes un proyecto en mente?
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Actualmente trabajo como desarrollador Frontend & Backend,
              pero también estoy disponible para colaborar en proyectos
              freelance relacionados con el desarrollo web, integración de APIs
              y aplicaciones empresariales.
            </p>

            <p className="mt-6 text-slate-500">
              Si crees que puedo aportar en tu proyecto,
              estoy abierto a discutir ideas y explorar
              oportunidades de colaboración.
            </p>
          </motion.div>

          {/* INFORMACION */}
          <motion.div 
            className="space-y-5"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}  
          >
            <motion.a
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2,}}
              href="mailto:diegozack6@gmail.com"
              className="group flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6 hover:border-blue-500"
            >
              <motion.div whileHover={{ rotate: 12, scale: 1.2 }}>
                <Mail className="text-blue-500" size={28} />
              </motion.div>
              

              <div>
                <h4 className="font-semibold text-white">
                  Correo
                </h4>

                <p className="text-slate-400">
                  diegozack6@gmail.com
                </p>
              </div>
            </motion.a>

            <a
              href="https://linkedin.com/in/jdiego13"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <motion.div whileHover={{ rotate: 12, scale: 1.2 }}>
                <FaLinkedin className="text-blue-500" size={28} />
              </motion.div>

              <div>
                <h4 className="font-semibold text-white">
                  LinkedIn
                </h4>

                <p className="text-slate-400">
                  linkedin.com/in/jdiego13
                </p>
              </div>
            </a>

            <a
              href="https://github.com/JDiego-13"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <motion.div whileHover={{ rotate: 12, scale: 1.2 }}>
                <FaGithub className="text-blue-500" size={28} />
              </motion.div>

              <div>
                <h4 className="font-semibold text-white">
                  GitHub
                </h4>

                <p className="text-slate-400">
                  github.com/JDiego-13
                </p>
              </div>
            </a>

            <motion.a
              href="mailto:diegozack6@gmail.com"
              whileHover={{ scale: 1.05, y:-3 }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 inline-flex rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white"
            >
              Enviar correo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact;