import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

        {/* TEXTO */}
        <div className="text-center md:text-left">
          <h3>
            Diego <span className="text-blue-500">Espinoza</span>
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Frontend & Backend Developer
          </p>

          <p className="mt-1 text-sm text-slate-500">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* REDES */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/JDiego-13"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-slate-400 transition hover:text-blue-500"
          >
            <FaGithub />
          </a>

          <a 
            href="https://linkedin.com/in/jdiego13"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-slate-400 transition hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          <a 
            href="mailto:tu_correo@gmail.com"
            className="text-2xl text-slate-400 transition hover:text-blue-500"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;