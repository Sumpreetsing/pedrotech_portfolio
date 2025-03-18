export const Projects = () => {
    return (
        <section id="project" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-cyan-300
                bg-clip-text text-transparent text-center">Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/40 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                    ">
                        <h3 className="text-xl font-bold mb-2">Cloud platform</h3>
                        <p className="text-gray-400 text-lg mb-8  mx-auto">Cloud platform is a web application that allows users to create, manage, and deploy
                            cloud resources. It provides a user-friendly interface for users to create and manage
                            virtual machines, storage, and networking resources.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node", "AWS", "Docker"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-1 
                            rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {" "}
                                    {tech}
                                    {" "}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/40 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                    ">
                        <h3 className="text-xl font-bold mb-2">AI Analytics Dashboard</h3>
                        <p className="text-gray-400 text-lg mb-8  mx-auto">A comprehensive visual interface that tracks AI model performance metrics in real-time.
                        Displays key indicators like accuracy rates, processing speed, and usage patterns with interactive charts.actionable insights to optimize AI system performance.
                        </p>
                        <div className="rounded-xl p-1 hover:-translate-y-1 transition-all">
                            {["React", "Node", "AWS", "Docker"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-1 
                            rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {" "}
                                    {tech}
                                    {" "}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/40 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                    ">
                        <h3 className="text-xl font-bold mb-2">E-Commerce Web-App</h3>
                        <p className="text-gray-400 text-lg mb-8  mx-auto">A responsive online shopping platform that showcases products with seamless browsing and purchasing capabilities.
                        Integrates secure payment processing, personalized recommendations, and inventory management for a complete retail experience.</p>
                        <div className="rounded-xl p-1 hover:-translate-y-1 transition-all">
                            {["React", "Node", "AWS", "Docker"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-1 
                            rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {" "}
                                    {tech}
                                    {" "}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/40 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition
                    ">
                        <h3 className="text-xl font-bold mb-2">Real-Time Chat-Box</h3>
                        <p className="text-gray-400 text-lg mb-8  mx-auto">An interactive messaging system that enables instant communication between users and support agents or AI assistants.
                        Features typing indicators, read receipts, and multimedia sharing capabilities for enhanced conversation flow.</p>
                        <div className="rounded-xl p-1 hover:-translate-y-1 transition-all">
                            {["React", "Node", "AWS", "Docker"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-1 
                            rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {" "}
                                    {tech}
                                    {" "}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};