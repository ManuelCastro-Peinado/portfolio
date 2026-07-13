import profile from "../assets/images/profile.jpg";

import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center"
    >
      {/* Glow */}
      <div className="absolute -top-52 -left-40 w-[550px] h-[550px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-300 uppercase tracking-[5px] font-semibold">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-black text-white mt-5 leading-tight">
            Manuel
            <br />
            Castro Peinado
          </h1>

          <div className="text-3xl font-bold text-cyan-300 mt-8 h-12">

            <TypeAnimation
              sequence={[
                "Junior Backend Developer",
                1800,
                "Android Developer",
                1800,
                "Computer Science Student",
                1800,
                "Multiplatform Developer",
                1800
              ]}
              wrapper="span"
              repeat={Infinity}
            />

          </div>

          <p className="text-slate-300 text-lg leading-8 mt-8 max-w-xl">

            Passionate about backend development, Android applications and software engineering.
            Currently studying Computer Science Engineering while continuing to build projects and
            expand my knowledge every day.

          </p>

          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "Java",
              "Python",
              "Android",
              "SQL",
              "Hibernate",
              "Angular",
              "Git",
              "GitHub"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 duration-300"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="flex gap-5 mt-12">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-xl duration-300 shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </a>

            <a
              href="/cv/Manuel_Castro_Peinado_CV.pdf"
              download
              className="border border-cyan-500 hover:bg-cyan-500 hover:text-slate-900 px-8 py-4 rounded-xl duration-300 font-semibold"
            >
              Download CV
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/ManuelCastro-Peinado"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/manuel-castro-peinado-87b153340"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[80px] opacity-30"></div>

            <img
              src={profile}
              alt="Manuel Castro Peinado"
              className="relative w-64 lg:w-72 rounded-full border-4 border-cyan-400 shadow-[0_0_80px_rgba(34,211,238,.45)] hover:scale-105 transition duration-500"
            />

          </div>

        </motion.div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-300 text-3xl">

        <a href="#about">

          <FaArrowDown />

        </a>

      </div>

    </section>
  );
}

export default Hero;