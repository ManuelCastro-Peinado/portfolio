import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-cyan-300 uppercase tracking-[6px] font-semibold">
          CONTACT
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          Let's Connect.
        </h2>

        <p className="text-slate-300 mt-6 max-w-3xl leading-8">
          I'm currently looking for internship and junior backend opportunities.
          If you'd like to discuss a project, collaborate or simply get in touch,
          I'd be happy to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-20 mt-20">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-slate-900 text-xl">
                <FaEnvelope />
              </div>

              <div>

                <h4 className="text-xl font-bold text-white">
                  Email
                </h4>

                <a
                  href="mailto:m.c.peinado2006@gmail.com"
                  className="text-slate-300 hover:text-cyan-300 transition"
                >
                  m.c.peinado2006@gmail.com
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-slate-900 text-xl">
                <FaPhoneAlt />
              </div>

              <div>

                <h4 className="text-xl font-bold text-white">
                  Phone
                </h4>

                <a
                  href="tel:+34622522592"
                  className="text-slate-300 hover:text-cyan-300 transition"
                >
                  🇪🇸 +34 622 52 25 92
                </a>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-slate-900 text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h4 className="text-xl font-bold text-white">
                  Location
                </h4>

                <p className="text-slate-300">
                  Seville, Spain
                </p>

              </div>

            </div>

          </div>

          {/* Contact Card */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">

            <h3 className="text-3xl font-bold text-white">
              Ready to work together?
            </h3>

            <p className="text-slate-300 mt-6 leading-8">
              Whether you have an internship opportunity, a junior position,
              or simply want to connect, feel free to reach out through any of
              the platforms below.
            </p>

            <div className="mt-10 space-y-5">

              <a
                href="mailto:m.c.peinado2006@gmail.com"
                className="flex justify-between items-center bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-4 rounded-xl transition"
              >
                Send me an Email
                <FaArrowRight />
              </a>

              <a
                href="https://www.linkedin.com/in/manuel-castro-peinado-87b153340"
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center border border-cyan-500 hover:bg-cyan-500 hover:text-slate-900 text-cyan-300 px-6 py-4 rounded-xl transition"
              >
                LinkedIn Profile
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/ManuelCastro-Peinado"
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 px-6 py-4 rounded-xl transition"
              >
                GitHub Profile
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;