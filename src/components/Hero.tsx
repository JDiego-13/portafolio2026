import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import meImg from "../assets/images/me.jpg"

const Hero = () => {
  return (
    <section
        id="hero"
        className="flex min-h-screen items-center bg-slate-950 px-6 pt-28"
    >
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between md:flex-row">
            {/* INFORMACION */}
            <div className="flex-1 text-center md:text-left">
                <p className="mb-4 text-blue-500 font-medium">
                    👋 Hola, soy
                </p>
                <h1 className="mb-5 text-5xl font-extrabold text-white md:text-7xl">
                    Diego <span className="text-blue-500"> Espinoza</span>
                </h1>

                <h2 className="mt-5 text-2xl font-semibold text-slate-300 mb-6">
                    Frontend & Backend Developer
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                    Desarrollo aplicaciones web modernas, APIs REST e interfaces
                    enfocadas en experiencia de usuarios utilizando React,
                    TypeScript, C#, .NET y Oracle.
                </p>

                {/* BOTONES */}
                <div className="mt-8 flex flex-wrap justify-center gap-8 md:justify-start">
                    <a 
                        href="$projects"
                        className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transtion hover:bg-blue-600"
                    >
                    Ver proyectos
                    </a>

                    <a 
                        href="/CV_Diego_Espinoza.pdf"
                        className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-blue-500 hover:text-blue-500"                    
                    >
                        Descargar CV

                        <HiOutlineDocumentArrowDown size={20} />
                    </a>
                </div>

                {/* REDES */}
                <div className="mt-10 flex justify-center gap-6 md:justify-start">
                    <a 
                        href="https://github.com/JDiego-13"
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl text-slate-400 transition hover:text-blue-500"
                    >
                        <FaGithub />
                    </a>

                    <a 
                        href="https://linkedin.com/in/jdiego13"
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl text-slate-400 transition hover:text-blue-500"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            {/* IMAGEN */}
            <div className="flex flex-1 justify-center">
                <img 
                    src={meImg} 
                    alt="Diego" 
                    className="w-[420px] rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30"
                />
            </div>
        </div>
    </section>
  )
}

export default Hero