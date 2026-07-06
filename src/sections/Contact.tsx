import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <h2 mb-16 text-center text-4xl font-bold text-white>
          Contacto
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* TEXTO */}
          <div>
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
          </div>

          {/* INFORMACION */}
          <div className="space-y-5">
            <a 
              href="mailto:diegozack6@gmail.com"
              className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <Mail className="text-blue-500" size={28} />

              <div>
                <h4 className="font-semibold text-white">
                  Correo
                </h4>

                <p className="text-slate-400">
                  diegozack6@gmail.com
                </p>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/jdiego13"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500"
            >
              <FaLinkedin className="text-blue-500" size={28}/>

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
                <FaGithub className="text-blue-500" size={28} />

                <div>
                  <h4 className="font-semibold text-white">
                    GitHub
                  </h4>

                  <p className="text-slate-400">
                    github.com/JDiego-13
                  </p>
                </div>
            </a>

            <a 
              href="mailto:diegozack6@gmail.com"
              className="mt-8 inline-flex rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;