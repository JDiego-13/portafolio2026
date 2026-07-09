import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-slate-800 bg-slate-950"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

        {/* TEXTO */}
        <div className="text-center md:text-left">
          <motion.h3
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="text-xl font-bold text-white"
          >
            Diego <span className="text-blue-500">Espinoza</span>
          </motion.h3>

          <p className="mt-2 text-sm text-slate-400">
            Frontend & Backend Developer
          </p>

          <p className="mt-1 text-sm text-slate-500">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* REDES */}
        <div className="flex items-center gap-6">
          <motion.a
            href="https://github.com/JDiego-13"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -4,
              scale: 1.15,
              color: "#3b82f6"
            }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-slate-400 transition hover:text-blue-500"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/jdiego13"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -4,
              scale: 1.15,
              color: "#3b82f6"
            }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-slate-400 transition hover:text-blue-500"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:tu_correo@gmail.com"
            whileHover={{
              y: -4,
              scale: 1.15,
              color: "#3b82f6"
            }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-slate-400 transition hover:text-blue-500"
          >
            <HiOutlineMail />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;