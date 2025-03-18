import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)]
    backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        {""}
                        pedro<span className="text-blue-500">.tech</span>{""}
                    </a>
                    <div
                        className="w-4 h-5 relative cursor-pointer z-40 lg:hidden xl:hidden hidden md:block sm:block"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-10 ">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                            {" "}
                            Home
                            {" "}
                        </a>

                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            {" "}
                            About
                            {" "}
                        </a>

                        <a href="#project" className="text-gray-300 hover:text-white transition-colors">
                            {" "}
                           Projects
                            {" "}
                        </a>

                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            {" "}
                            Contact
                            {" "}
                        </a>
                    </div>

                </div>

            </div>
        </nav>
    );
}