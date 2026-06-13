import { motion } from "framer-motion";
import hero from "../../assets/hero1-r.png";

const Hero = () => {
    return (
        <section className="min-h-screen bg-[#020617] text-white overflow-hidden pt-40">

            {/* Glow Effect */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px]
      bg-cyan-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-100px] right-[100px] w-[300px] h-[300px]
      bg-purple-500/20 blur-[120px] rounded-full"></div>

            <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 items-center gap-16">

                {/* Left */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >

                    <p className="text-cyan-400 tracking-[5px] uppercase mb-5">
                        Hello, I'm Zaheer Ali
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Frontend{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500
            text-transparent bg-clip-text">
                            Developer
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-9 max-w-lg">
                        I build modern, responsive and high-performance
                        websites with smooth user experiences.
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-6 mt-10">

                        <button
                            className="hidden md:block px-15 py-3 rounded-full
                    border border-cyan-400 text-white
                    hover:scale-105 duration-300
                    bg-gradient-to-r from-cyan-500/20 to-purple-500/20
                    hover:shadow-[0_0_30px_#06b6d4]"
                        >
                            Projects
                        </button>

                        <a
                            href="https://drive.google.com/file/d/13dss4UW5KnbMNvJC3LvDh0B-DOmNmtQt/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="border-b border-cyan-400 text-cyan-400 pb-1 cursor-pointer">
                                Download CV
                            </button>
                        </a>

                    </div>

                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >

                    <img
                        src={hero}
                        alt=""
                        className="w-full max-w-[600px] animate-float"
                    />

                </motion.div>

            </div>

        </section>
    );
};

export default Hero;