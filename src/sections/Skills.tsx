import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24 px-26"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="mb-5 text-xl font-semibold text-blue-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;