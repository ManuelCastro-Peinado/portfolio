function Button({ children, primary = false }) {
  return (
    <button
      className={`px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
        primary
          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/40"
          : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/40ue-500 shadow-slate-900/40"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;