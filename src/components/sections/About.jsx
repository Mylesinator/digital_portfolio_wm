import RevealOnScroll from "../RevealOnScroll";

export default function About() {
    const frontendSkills = ["React", "Tailwind", "Bootstrap"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB", "SQL", "Deno", "Laravel"];
	const languages = ["JavaScript", "TypeScript", "Lua", "Luau", "C", "PHP"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">i'm a certified geeker tweaker</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>

                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>

                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Languages</h3>

                            <div className="flex flex-wrap gap-2">
                                {languages.map((lang, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>

                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>West-MEC Coding Program (2023-2025)</strong>
                            </li>
                            <li>
                                Relevant Coursework: Web Development, Data Structures & Algorithms...
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>

                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Unemployed 4L ❤🤞</h4>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}
