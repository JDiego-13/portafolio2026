import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header 
      initial={{ y:-80, opacity: 0}}
      animate={{ y:0, opacity:1}}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      className="fixed top-0 left-0 w-full z-50 border-b border-slate-800 bg-[#0B1120]/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold tracking-tight text-white"
        >
          Diego <span className="text-blue-500">Espinoza</span>
        </motion.a>

        {/* NAVEGACION */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="transition hover:text-blue-400">
            Sobre mí
          </a>
          <a href="#experience" className="transition hover:text-blue-400">
            Experiencia
          </a>
          <a href="#skills" className="transition hover:text-blue-400">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-blue-400">
            Proyectos
          </a>
          <a href="#contact" className="transition hover:text-blue-400">
            Contacto
          </a>
        </nav>

        {/* REDES */}
        <div className="hidden items-center gap-5 md:flex">
          <motion.a 
            href="https://github.com/JDiego-13"
            whileHover={{ scale: 1.2, rotate: 8}}
            target="_blank"
            rel="noreferrer"
            className="text-xl transition-all duration-300 hover:text-blue-400"
          >
            <FaGithub />
          </motion.a>

          <motion.a 
            href="https://linkedin.com/in/jdiego13"
            whileHover={{ scale: 1.2, rotate: 8}}
            target="_blank"
            rel="noreferrer"
            className="text-xl transition-all duration-300 hover:text-blue-400"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a 
            href="/CV_Diego_Espinoza.pdf"
            whileHover={{ scale: 1.05, y: -2}}
            whileTap={{ scale: 1.0 }}
            className="flex items-center gap-2 rounded-xl border border-blue-500 px-4 py-2 font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
          >
            CV
            <HiOutlineDocumentArrowDown />
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}

export default Header