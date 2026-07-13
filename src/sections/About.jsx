import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaLanguage } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaGraduationCap size={30} />,
      title: "Education",
      text: "Graduated in Multiplatform Application Development (DAM) and currently studying Computer Science Engineering at UNIR."
    },
    {
      icon: <FaCode size={30} />,
      title: "Backend Development",
      text: "Focused on Java, Hibernate, Node.js, SQL and scalable software architecture while continuously learning modern technologies."
    },
    {
      icon: <FaLanguage size={30} />,
      title: "Languages",
      text: "Spanish (Native), English (B2 Professional) and French (B1)."
    }
  ];

  return (
    <section
      id="about"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-400 uppercase tracking-[6px] font-semibold">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight text-white">
            Passionate about
            <span className="text-blue-400"> building software.</span>
          </h2>

          <p className="text-slate-400 mt-8 max-w-3xl leading-8">
            I enjoy solving problems and creating software that is clean,
            maintainable and scalable.

            My objective is to become a professional Backend Developer while
            continuing my Computer Science Engineering studies.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 duration-300"
            >

              <div className="text-blue-400 mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {card.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-8">
                {card.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default About;