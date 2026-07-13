import { motion } from "framer-motion";

function Education() {

  const studies = [

    {
      title:"Computer Science Engineering",
      school:"UNIR",
      date:"2026 - Present",
      description:"Currently studying Computer Science Engineering to deepen my knowledge of software engineering, systems and computer architecture."
    },

    {
      title:"Higher National Diploma in Multiplatform Application Development",
      school:"Grupo Studium Formación",
      date:"2024 - 2026",
      description:"Graduated with practical experience in Java, Python, Android, databases, web development and agile methodologies."
    }

  ];

  return (

    <section
      id="education"
      className="py-28 bg-[#020617]"
    >

      <div className="max-w-6xl mx-auto px-8">

        <p className="text-cyan-300 uppercase tracking-[6px] font-semibold">
          Academic Journey
        </p>

        <h2 className="text-5xl font-bold text-white mt-4 mb-16">
          Education
        </h2>

        <div className="border-l-2 border-cyan-400 pl-8">

          {studies.map((study,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,x:-40}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{delay:index*0.2}}
              className="mb-16 relative"
            >

              <div className="absolute -left-[42px] top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>

              <h3 className="text-2xl font-bold text-white">
                {study.title}
              </h3>

              <p className="text-cyan-300 font-semibold mt-2">
                {study.school}
              </p>

              <p className="text-slate-300 mb-4">
                {study.date}
              </p>

              <p className="text-slate-200 leading-8">
                {study.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Education;