import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TailwindCss",
    "Bootstrap",
    "Html",
    "Css",
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59.130.246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Staged Chess Game</h3>
              <p className="text-gray-400 mb-4">
                Simple stage game with some buttons and a board that shows the
                next move
              </p>
              <div>
                {["Html", "Css", "JavaScript"].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blur-500/20 hover:shadow-[0_2px_8px_rgba(59.130.246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://arlindi3.github.io/stagged-chess-game/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59.130.246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Bar App</h3>
              <p className="text-gray-400 mb-4">
                Simple bar application with React components
              </p>
              <div>
                {["Html", "Css", "JavaScript", "React js"].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blur-500/20 hover:shadow-[0_2px_8px_rgba(59.130.246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://arlindi3.github.io/bar-app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59.130.246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Ios Dashboard Example</h3>
              <p className="text-gray-400 mb-4">
                Simple Ios Dashboard Example with some applications made with
                React components
              </p>
              <div>
                {["Html", "Css", "JavaScript", "React js"].map((tech, key) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blur-500/20 hover:shadow-[0_2px_8px_rgba(59.130.246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://arlindi3.github.io/dashboard-example"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
