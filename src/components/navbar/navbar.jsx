import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import "../../App.css";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (

        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed top-0 left-0 w-full px-4 md:px-10 pt-5"
            style={{ zIndex: 9999 }}
        >

            {/* Main Navbar */}

            <div
                className="max-w-7xl  mx-auto flex items-center justify-between
                bg-white/5 border border-white/10
                backdrop-blur-xl rounded-4xl
                px-6 py-4 font-mono"
                style={{ position: "relative", zIndex: 9999 }}
            >

                {/* Logo */}

                <h1 className="text-3xl font-bold text-white">
                    <span className="text-cyan-400">Z</span>aheer.
                </h1>

                {/* Desktop Menu */}

                <ul className="hidden md:flex items-center gap-10 text-white">

                    <li className="text-cyan-400 relative cursor-pointer">
                        Home
                        <div
                            className="absolute left-0 top-7 w-full h-[2px]
                            bg-cyan-400"
                        ></div>
                    </li>

                    <li className="hover:text-cyan-400 duration-300 cursor-pointer hover:-translate-y-1">
                        About
                    </li>

                    <li className="hover:text-cyan-400 duration-300 cursor-pointer hover:-translate-y-1">
                        Skills
                    </li>

                    <li className="hover:text-cyan-400 duration-300 cursor-pointer hover:-translate-y-1">
                        Projects
                    </li>

                    <li className="hover:text-cyan-400 duration-300 cursor-pointer hover:-translate-y-1">
                        Contact
                    </li>

                </ul>

                {/* Desktop Button */}

                <button
                    className="hidden md:block px-7 py-1.5 rounded-full
                    border border-cyan-400 text-white
                    hover:scale-105 duration-300
                    bg-gradient-to-r from-cyan-500/20 to-purple-500/20
                    hover:shadow-[0_0_30px_#06b6d4]"
                >
                    Contact Me
                </button>

                {/* Mobile Icon - style se z-index fix kiya */}

                <div
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-3xl cursor-pointer"
                    style={{ position: "relative", zIndex: 9999 }}
                >
                    {open ? <HiX /> : <HiOutlineMenuAlt3 />}
                </div>

            </div>

            {/* Mobile Menu */}

            <AnimatePresence>

                {open && (

                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        transition={{ duration: 0.5 }}
                        className="fixed top-0 right-0 w-[80%] h-screen
                        bg-[#020617]/95 backdrop-blur-2xl
                        border-l border-white/10
                        flex flex-col items-center justify-center gap-7
                        text-white text-2xl md:hidden"
                        style={{ zIndex: 999 }}
                    >

                        <a
                            href="#home"
                            onClick={() => setOpen(false)}
                            className="text-cyan-400 hover:scale-110 duration-300"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            onClick={() => setOpen(false)}
                            className="hover:text-cyan-400 hover:scale-110 duration-300"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            onClick={() => setOpen(false)}
                            className="hover:text-cyan-400 hover:scale-110 duration-300"
                        >
                            Skills
                        </a>

                        <a
                            href="#projects"
                            onClick={() => setOpen(false)}
                            className="hover:text-cyan-400 hover:scale-110 duration-300"
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="hover:text-cyan-400 hover:scale-110 duration-300"
                        >
                            Contact
                        </a>

                        <button
                            onClick={() => setOpen(false)}
                            className="mt-5 px-6 py-1 rounded-full
                            bg-gradient-to-r from-cyan-500 to-purple-500
                            hover:scale-105 duration-300"
                        >
                            Contact Me
                        </button>

                    </motion.div>

                )}

            </AnimatePresence>

        </motion.nav>
    );
};

export default Navbar;