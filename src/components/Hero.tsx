import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import meImg from "../assets/images/me.jpg";
import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const leftVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const rightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-28"
    >
      {/* GRADIANTE IZQUIERDO */}
      <motion.div
        className="absolute left-[-120px] top-40 h-96 rounded-full bg-blue-500/20 blur-[140px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GRADIENTE DERECHO */}
      <motion.div
        className="absolute right-[-120px] bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between md:flex-row">
        {/* INFORMACION */}
        <motion.div
          className="flex-1 pb-12 text-center md:pb-20 md:text-left"
          variants={leftVariant}
          initial="hidden"
          animate="visible"
        >
          <p className="mb-4 flex items-center justify-center gap-2 font-medium text-blue-500 md:justify-start">
            <motion.span
            className="text-3xl md:text-4xl"
              animate={{
                rotate: [0, 20, -10, 20, 0],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              style={{ originX: 0.7, originY: 0.7 }}
              
            >
              👋
            </motion.span>
            <span>Hola, soy</span>
          </p>
          <h1 className="mb-5 text-5xl font-extrabold text-white md:text-7xl">
            Diego <span className="text-blue-500"> Espinoza</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1500,
              "Backend Developer",
              1500,
              "Full Stack Developer",
              1500,
            ]}
            wrapper="h2"
            speed={45}
            repeat={Infinity}
            className="mt-5 mb-6 text-2xl font-semibold text-slate-300"
          />
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Desarrollo aplicaciones web modernas, APIs REST e interfaces
            enfocadas en experiencia de usuarios utilizando React, TypeScript,
            C#, .NET y Oracle.
          </p>

          {/* BOTONES */}
          <motion.div className="mt-8 flex flex-wrap justify-center gap-8 md:justify-start">
            <motion.a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Ver proyectos
            </motion.a>

            <motion.a
              href="/portafolio2026/CV_Diego_Espinoza.pdf"
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-blue-500 hover:text-blue-500"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              Descargar CV
              <HiOutlineDocumentArrowDown size={20} />
            </motion.a>
          </motion.div>

          {/* REDES */}
          <div className="mt-10 flex justify-center gap-6 md:justify-start">
            <motion.a
              href="https://github.com/JDiego-13"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-slate-400 transition hover:text-blue-500"
              whileHover={{ y: -4, rotate: 8, scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/jdiego13"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-slate-400 transition hover:text-blue-500"
              whileHover={{ y: -4, rotate: 8, scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          className="flex flex-1 justify-center"
          variants={rightVariant}
        >
          <motion.img
            src={meImg}
            alt="Diego"
            className="w-[420px] rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
