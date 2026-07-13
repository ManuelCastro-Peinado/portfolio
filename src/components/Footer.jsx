import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

function Footer() {

  return (

<footer className="border-t border-slate-800 py-10 bg-[#020617]">

<div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

<div>

<h3 className="font-bold text-2xl">

Manuel Castro Peinado

</h3>

<p className="text-slate-400 mt-2">

Junior Backend Developer · Computer Science Engineering Student

</p>

</div>

<div className="flex gap-6 text-2xl mt-6 md:mt-0">

<a
href="https://github.com/ManuelCastro-Peinado"
target="_blank"
rel="noreferrer"
className="hover:text-cyan-300"
>

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/manuel-castro-peinado-87b153340/?locale=en-US"
target="_blank"
rel="noreferrer"
className="hover:text-cyan-300"
>

<FaLinkedin/>

</a>

</div>

</div>

<p className="text-center text-slate-500 mt-8">

© {new Date().getFullYear()} Manuel Castro Peinado. All rights reserved.

</p>

</footer>

  )

}

export default Footer;