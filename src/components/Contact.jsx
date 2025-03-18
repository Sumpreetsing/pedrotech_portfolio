

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center relative ">
                <div className="px-4 w-150">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-700 to-cyan-300
                bg-clip-text text-transparent text-center">
                        Get in Touch
                    </h2>
                    <form action="" className="space-y-6">
                        <div className="relative">
                            <input type="text"  id="name" name="name" required className="
                            w-full bg-white/5 border border-white/40 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Enter your name"
                            />
                        </div>

                        <div className="relative">
                            <input type="email"  id="email" name="email" required className="
                            w-full bg-white/5 border border-white/40 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Enter your email"
                            />
                        </div>

                        <div className="relative">
                            <textarea type="message"  id="message" name="message" required  rows={5} className="
                            w-full bg-white/5 border border-white/40 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message"
                            />
                        </div>
                        <button  type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded font-medium 
                        transition relative overflow-hidden hover:-translate-y-0.5 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition
                        ">
                            Send Message
                        </button>
                    </form>
                </div>
        </section>
    );
};
