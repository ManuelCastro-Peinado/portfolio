import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Java",
    "Kotlin",
    "Python",
    "JavaScript",
    "TypeScript",
    "Angular",
    "HTML5",
    "CSS3",
    "XML",
    "Android Studio",
    "MySQL",
    "MariaDB",
    "MongoDB",
    "Hibernate",
    "Maven",
    "Git",
    "GitHub",
    "Node.js",
    "SCRUM",
    "Responsive Design"
  ];

  return (
    <section id="skills" className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-300 uppercase tracking-[6px] font-semibold">
            TECHNICAL SKILLS
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Technologies I use.
          </h2>

          <p className="text-slate-300 mt-6 max-w-3xl leading-8">
            These are the technologies and tools I have worked with during my
            studies and personal projects. I am always learning new frameworks
            and improving my development skills.
          </p>

        </motion.div>

        <div className="flex flex-wrap gap-4 mt-14">

          {skills.map((skill, index) => (

            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:bg-slate-800 hover:-translate-y-1 transition duration-300 cursor-default"
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;