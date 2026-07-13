function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold">
          <span className="text-blue-400">M</span>C
        </h1>

        <nav>
          <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;