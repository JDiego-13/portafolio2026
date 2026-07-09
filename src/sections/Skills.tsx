import { skills } from "../data/skills";
import { motion, type Variants } from "framer-motion";


const titleVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const carVariant: Variants = {
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24 px-26"
    >
      <div className="mx-auto max-w-7xl">

        {/* TITULO */}
        <motion.div
          className="mb-16 text-center"
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <p className="font-medium text-blue-500">
            Tecnologías
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Skills
          </h2>
        </motion.div>


        {/* TARJETAS */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((group) => (
            <motion.div
              key={group.title}
              variants={carVariant}
              whileHover={{ y: -8, scale: 1.02,}}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="mb-5 text-xl font-semibold text-blue-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "#2563eb",
                        color: "#fff"
                      }}
                      className="flex items-center gap-2 rounden-lg bg-slate-800 px-4 py-2"
                    >
                      <Icon size={18} />
                      <span>{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills;