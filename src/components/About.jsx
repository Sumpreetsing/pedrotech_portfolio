

export const About = () => {
    const FrontendSkills = [
        "React",
        "Vue",
        "Typescript",
        "Tailwindcss",
        "Svelte"
    ];

    const BackendSkills = [
        "Node.js",
        "Python",
        "AWS",
        "MongoDB",
        "GraphQL"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-16">
            
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-cyan-300
                bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/40 border hover:-translate-y-1  transition-all">
                    <p className="text-gray-400 text-2xl mb-8 max-w-lg mx-auto">
                        Passionate developer with expertise in building scalable
                        web applications and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {FrontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {BackendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/40 border hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl text-bold mb-4 ">
                            Education
                        </h3>
                        <ul className="list-disc list-inside text-gray-400 text-lg mb-8 max-w-lg mx-auto space-y-2">
                            <li><strong>B.S. in Computer science</strong>-Patna University 2016-2022</li>
                            <li>Relevant CourseWork : Data structure, Internet of Things,Data science,AIML</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/40 border hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl text-bold mb-4">
                            Work Experience
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                                <h4>
                                    <strong>Software Engineer</strong> at <strong>ABC Company</strong> (2020-Present)
                                </h4>
                                <p>
                                    Developed and maintained microservices for cloud based applications.
                                </p>
                            </div>

                            <div className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                                <h4>
                                    <strong>Intern at</strong> at <strong>DEF startups</strong> (2019)
                                </h4>
                                <p>
                                    Assisted in building front-end compponents and integration REST APIs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};