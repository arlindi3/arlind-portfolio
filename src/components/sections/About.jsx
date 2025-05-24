import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
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
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="flex items-center justify-center">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                <h3 className="text-xl font-bold mb-8 text-white text-center">
                  Frontend Skills
                </h3>
                <div className="flex flex-wrap gap-2 justify-center ">
                  {frontendSkills.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-sm hover:bg-blur-500/20 hover:shadow-[0_2px_8px_rgba(59.130.2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 📚 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - Aleksander
                  Moisiu
                </li>
                <li>Frontend Development and React js</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏢 Work Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Assisstent Instructor at an education front end course</li>
                <li>Social media designer</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
