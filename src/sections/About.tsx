import {
  Code2,
  Database,
  MonitorSmartphone,
  BriefcaseBusiness
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* TITULO */}
        <div className="mb-16">
          <p className="font-medium text-blue-500">
            Conóceme
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Sobre mí
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* TEXTO */}
          <div className="space-y-6">
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
          </div>

          {/* TARJETAS */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500">
              <Code2 className="mb-4 text-blue-500" size={32} />

              <h3 className="mb-2 text-xl font-semibold text-white">
                Backend
              </h3>

              <p className="text-slate-400">
                APIs REST con C#, .NET y Swagger.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500">
              <MonitorSmartphone className="mb-4 text-blue-500" size={32} />

              <h3 className="mb-2 text-xl font-semibold text-white">
                Frontend
              </h3>

              <p className="text-slate-400">
                React, TypeScript, Tailwind CSS y Axios
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500">
              <Database className="mb-4 text-blue-500" size={32} />

              <h3 className="mb-2 text-xl font-semibold text-white">
                Base de datos
              </h3>

              <p className="text-slate-400">
                Oracle, TOAD y diseño de tablas relacionales.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-blue-500">
              <BriefcaseBusiness className="mb-4 text-blue-500" size={32} />

              <h3 className="mb-2 text-xl font-semibold text-white">
                Actualmente
              </h3>

              <p>
                Desarrollo soluciones Full Stack en Global DMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About