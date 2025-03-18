

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative ">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-transparent leading-right">
                    Hi, I'm Pedro Tech
                </h1>
                <p className="text-gray-400 text-2xl mb-8 max-w-300 p-3 mx-auto">
                I'm a full stack developer who loves crafting clean, scalable web applications. 
                My goal is to build solutions that offer both exceptional performance and a delightful user experience. 
                I thrive on challenges and enjoy learning new technologies to enhance my skill set. 
                With a strong foundation in both front-end and back-end development, I aim to create seamless integrations 
                that elevate user engagement. Collaboration and communication are key to my approach, 
                ensuring that I deliver high-quality results that meet client needs. 
                Let's build something amazing together!

                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition
                    relative overflow-hidden hover:-translate-y-0.5 hocer:shadow[0_0_15px_rgba(59,130,246,0.4)]">View project</a>

<a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all
 hover:-translate-y-0.5 hocer:shadow[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Contact me</a>
                </div>
            </div>
        </section>
    );
};
