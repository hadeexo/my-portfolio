import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ACCENT_DARK = "from-cyan-400 via-blue-400 to-violet-500";
const ACCENT_LIGHT = "from-orange-400 via-rose-400 to-pink-400";

const sampleProjects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    tag: "Fullstack",
    desc: "An AI-powered tool that evaluates resumes and gives structured feedback on strengths and areas to improve.",
    tech: ["React", "TailwindCSS", "Typescript", "Puter.js"],
    live: "https://puter.com/app/resume-analyzer-19",
    repo: "https://github.com/hadeexo/Resume-analyzer",
  },
  {
    id: 2,
    title: "Fanrong Website",
    tag: "Frontend",
    desc: "A modern corporate website for an investment firm, featuring responsive layouts and sleek UI components.",
    tech: ["React", "TailwindCSS"],
    live: "https://fanrong.vercel.app/",
    repo: "https://github.com/hadeexo/Fanrong-Holdings",
  },
  {
    id: 3,
    title: "E-commerce Website",
    tag: "Frontend",
    desc: "An online sneaker store with product listings, search, and a cart flow — designed for a smooth shopping experience.",
    tech: ["React", "SketchFab", "TailwindCSS", "OpenAI"],
    live: "https://sneakers-sable-nine.vercel.app/",
    repo: "https://github.com/hadeexo/Sneakers",
  },
];

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React", level: 95 },
  { name: "Tailwind CSS", level: 98 },
  { name: "Node.js", level: 77 },
  { name: "Typescript", level: 85 },
  { name: "NextJs", level: 95 },
  { name: "Wordpress", level: 91 },
  { name: "Mongo DB", level: 77 },
];

export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch (e) {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filters = ["All", "Fullstack", "Frontend", "Backend"];

  const filtered = sampleProjects.filter(
    (p) =>
      filter === "All" ||
      p.tag === filter ||
      (filter === "Backend" && p.tag === "Backend")
  );

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        theme === "dark"
          ? "bg-[#08080b] text-slate-100"
          : "bg-gradient-to-b from-white to-slate-50 text-slate-900"
      )}
    >
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={clsx(
              "font-extrabold text-2xl tracking-tight rounded-md px-3 py-1",
              theme === "dark"
                ? `bg-gradient-to-r ${ACCENT_DARK} bg-clip-text text-transparent`
                : `bg-gradient-to-r ${ACCENT_LIGHT} bg-clip-text text-transparent`
            )}
          >
            ᕼλᕲƐ
          </div>

          <nav className="hidden md:flex gap-6 text-sm opacity-80">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className={clsx(
              "px-3 py-2 rounded-full border",
              theme === "dark" ? "border-slate-700" : "border-slate-200"
            )}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <a
            href="#contact"
            className={clsx(
              "hidden md:inline-block rounded-md px-4 py-2 font-medium shadow-sm",
              theme === "dark"
                ? "bg-white/5 hover:bg-white/7"
                : "bg-slate-900 text-white hover:opacity-90"
            )}
          >
            Hire Me
          </a>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hey, I'm{" "}
              <span
                className={clsx(
                  "bg-clip-text text-transparent",
                  theme === "dark"
                    ? `bg-gradient-to-r ${ACCENT_DARK}`
                    : `bg-gradient-to-r ${ACCENT_LIGHT}`
                )}
              >
                Adekunle
              </span>
            </h1>

            <p className="mt-4 text-lg opacity-80">
              I build modern, responsive websites for brands and growing
              businesses focused on growth and visibility.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className={clsx(
                  "rounded-md px-4 py-2 font-medium ring-1 ring-offset-1",
                  theme === "dark" ? "ring-white/6" : "ring-slate-200"
                )}
              >
                View Work
              </a>

              <a
                href="#contact"
                className={clsx(
                  "rounded-md px-4 py-2 font-medium shadow-md",
                  theme === "dark" ? "bg-white/10" : "bg-slate-900 text-white"
                )}
              >
                Hire Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm opacity-80">
              <span>Open to:</span>
              <span className="inline-flex items-center gap-2">Full-time</span>
              <span className="inline-flex items-center gap-2">Freelance</span>
              <span className="inline-flex items-center gap-2">
                Collaborations
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-96 h-96 rounded-full overflow-hidden flex items-center justify-center">
              <div
                className={clsx(
                  "",
                  theme === "dark"
                    ? `bg-gradient-to-bl ${ACCENT_DARK}`
                    : `bg-gradient-to-bl ${ACCENT_LIGHT}`
                )}
              >
                <img
                  src="/images/my3.png"
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-lg"
                />
              </div>
              <div className="absolute inset-0 backdrop-blur-lg opacity-20 rounded-full"></div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 text-lg opacity-80">
              I’m a web developer passionate about transforming ideas into fast,
              interactive, and visually polished web experiences. I write clean,
              efficient code and craft smooth, user-focused designs. Beyond
              coding, I’m constantly exploring design inspiration, sketching UI
              concepts, or unwinding on the basketball court. 🏀
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className={clsx(
                  "p-4 rounded-lg border",
                  theme === "dark" ? "border-slate-800" : "border-slate-200"
                )}
              >
                <h4 className="font-semibold">Background</h4>
                <p className="mt-2 text-sm opacity-80">
                  Blending code and creativity — from building responsive UIs to
                  optimizing performance. Always chasing clean logic and
                  smoother user experiences.
                </p>
              </div>

              <div
                className={clsx(
                  "p-4 rounded-lg border",
                  theme === "dark" ? "border-slate-800" : "border-slate-200"
                )}
              >
                <h4 className="font-semibold">What I Value</h4>
                <ul className="mt-2 text-sm opacity-80 space-y-1 list-disc list-inside">
                  <li>Clean, readable code — like a perfect assist</li>
                  <li>Seamless, intuitive UX that just flows</li>
                  <li>Performance & reliability, even in overtime</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={clsx(
              "p-6 rounded-xl border",
              theme === "dark" ? "border-slate-800" : "border-slate-200"
            )}
          >
            <h3 className="font-bold">Quick facts</h3>
            <ul className="mt-4 text-sm space-y-2 opacity-90">
              <li>📍 Lagos, Nigeria</li>
              <li>🎓 Learning Computer Engineering</li>
              <li>💼 Open to remote & on-site roles</li>
            </ul>
          </motion.aside>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold mr-2">My Projects</h2>

            <div className="hidden md:flex gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={clsx(
                    "px-3 py-1 rounded-full text-sm ring-1",
                    filter === f
                      ? theme === "dark"
                        ? "bg-white/6 ring-white/8"
                        : "bg-slate-900 text-white"
                      : "bg-transparent ring-slate-200/30 text-white/50"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className={clsx(
                  "rounded-xl p-4 cursor-pointer border overflow-hidden group",
                  theme === "dark" ? "border-slate-800" : "border-slate-200"
                )}
                onClick={() => setSelected(p)}
              >
                {/* Project Screenshot */}
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <img
                    src={`/images/${p.id}.png`} // <- save images like project-1.png, project-2.png etc.
                    alt={p.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                    {p.tag}
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-3">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm opacity-80 mt-1">{p.desc}</p>
                </div>

                {/* Tech Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full ring-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-20">
          <h2 className="text-3xl font-bold">Skills</h2>

          {(() => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.5 });

            return (
              <div
                ref={ref}
                className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
              >
                {skills.map((s) => (
                  <motion.div
                    key={s.name}
                    className={clsx(
                      "flex flex-col items-center transition-all duration-300",
                      theme === "dark"
                        ? "hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                        : "hover:drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]"
                    )}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      scale: isInView ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative w-28 h-28">
                      {/* Background circle */}
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="56"
                          cy="56"
                          r="50"
                          stroke={theme === "dark" ? "#1e293b" : "#e2e8f0"}
                          strokeWidth="5"
                          fill="transparent"
                        />
                        {/* Animated progress circle */}
                        <motion.circle
                          cx="56"
                          cy="56"
                          r="50"
                          strokeWidth="5"
                          strokeLinecap="round"
                          fill="transparent"
                          stroke={
                            theme === "dark"
                              ? "url(#gradDark)"
                              : "url(#gradLight)"
                          }
                          strokeDasharray={2 * Math.PI * 50}
                          strokeDashoffset={
                            isInView
                              ? 2 * Math.PI * 50 * (1 - s.level / 100)
                              : 2 * Math.PI * 50
                          }
                          transition={{ duration: 3.8, ease: "easeOut" }}
                        />
                        {/* Gradients */}
                        <defs>
                          <linearGradient
                            id="gradDark"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                          <linearGradient
                            id="gradLight"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#fb923c" />
                            <stop offset="50%" stopColor="#f43f5e" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {/* Text inside circle */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold">{s.level}%</span>
                        <span className="text-xs opacity-70">{s.name}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          })()}
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          <div>
            <h2 className="text-3xl font-bold">Let’s Work Together 🚀</h2>
            <p className="mt-4 text-lg opacity-80">
              If you like my work, let’s talk. I’m open to full-time roles,
              freelance projects, and collaborations.
            </p>

            <div className="mt-6 space-y-3 text-sm opacity-90">
              <div>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a
                  href="mailto:adekunletayo824@gmail.com"
                  className="ml-1 hover:underline"
                >
                  adekunletayo824@gmail.com
                </a>
              </div>

              <div>
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                <a
                  href="https://instagram.com/hadee.xo"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 hover:underline"
                >
                  @hadee.xo
                </a>
              </div>

              <div>
                <FontAwesomeIcon icon={faXTwitter} className="mr-2" />
                <a
                  href="https://x.com/hade_xo"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 hover:underline"
                >
                  @hade_xo
                </a>
              </div>

              <div>
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                <a
                  href="https://github.com/hadeexo"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 hover:underline"
                >
                  github.com/hadeexo
                </a>
              </div>
            </div>
          </div>

          <form
            className={clsx(
              "p-6 rounded-xl border",
              theme === "dark" ? "border-slate-800" : "border-slate-200"
            )}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I will get back to you.");
            }}
          >
            <label className="block text-sm font-medium">Name</label>
            <input
              className={clsx(
                "mt-2 w-full rounded-md p-3 ring-1 focus:outline-none",
                theme === "dark" ? "ring-slate-800" : "ring-slate-200"
              )}
              placeholder="Your name"
            />

            <label className="block text-sm font-medium mt-4">Email</label>
            <input
              className={clsx(
                "mt-2 w-full rounded-md p-3 ring-1 focus:outline-none",
                theme === "dark" ? "ring-slate-800" : "ring-slate-200"
              )}
              placeholder="you@example.com"
            />

            <label className="block text-sm font-medium mt-4">Message</label>
            <textarea
              className={clsx(
                "mt-2 w-full rounded-md p-3 ring-1 focus:outline-none",
                theme === "dark" ? "ring-slate-800" : "ring-slate-200"
              )}
              rows={5}
              placeholder="Tell me about your project..."
            />

            <button
              type="submit"
              className={clsx("mt-4 px-4 py-2 rounded-md font-medium")}
            >
              Send
            </button>
          </form>
        </section>

        <footer className="mt-20 text-sm opacity-70 text-center">
          © {new Date().getFullYear()} Adekunle
        </footer>
      </main>
      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className={clsx(
                "relative max-w-2xl w-full rounded-xl p-6 z-10",
                theme === "dark" ? "bg-[#0b0b0d]" : "bg-white"
              )}
            >
              <button
                className="absolute right-2 top-3 text-sm"
                onClick={() => setSelected(null)}
              >
                ⓧ
              </button>

              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <p className="mt-3 opacity-80">{selected.desc}</p>

              <div className="mt-4 flex gap-2 flex-wrap">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full ring-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md ring-1"
                >
                  Live
                </a>
                <a
                  href={selected.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-md ring-1"
                >
                  Repo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
