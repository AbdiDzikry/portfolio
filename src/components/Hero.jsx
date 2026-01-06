import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Activity, Zap } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "> Initiating system...\n> Loading modules: Analysis, Design, Strategy...\n> Status: NEED A JOB";

    // Word rotation logic
    const [textIndex, setTextIndex] = useState(0);
    const words = ["Structure", "Strategy", "Action", "Impact"];

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % words.length);
        }, 2000); // Change word every 2 seconds
        return () => clearInterval(wordInterval);
    }, []);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-16 pt-10 pb-20 overflow-hidden bg-bg-primary/50">
            {/* Background Elements - Simplified / Lightweight */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Static Gradient Blurs (Performance Safe) - EARTH TONES */}
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-stone-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-accent-green/10 rounded-full blur-[100px]" />

                {/* Lightweight Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Panel: Intro */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 text-text-secondary font-mono text-xs tracking-[0.2em] uppercase"
                        >
                            <span className="w-2 h-2 relative">
                                <span className="absolute inset-0 rounded-full bg-accent-green animate-ping opacity-75"></span>
                                <span className="relative block w-2 h-2 rounded-full bg-accent-green"></span>
                            </span>
                            System Status: NEED A JOB
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display tracking-tight">
                            I Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">Entropy</span> <br />
                            Into <span className="inline-flex h-[1.1em] overflow-hidden align-bottom">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={textIndex}
                                        initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                        exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                                        transition={{ duration: 0.4 }}
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-stone-400 to-accent-green block drop-shadow-sm"
                                    >
                                        {words[textIndex]}.
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h1>

                        <p className="text-text-secondary text-lg max-w-lg leading-relaxed relative pl-4 border-l-2 border-stone-500/30">
                            Product Designer architecting digital ecosystems. Merging <span className="text-stone-500 font-medium">data-logic</span> with <span className="text-accent-green font-medium">human-centric</span> design.
                        </p>
                    </div>

                    {/* Cyber Terminal - Refined */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full max-w-lg bg-black/90 rounded-lg overflow-hidden border border-white/10 shadow-2xl relative group"
                    >
                        {/* Animated Border Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 via-accent-green/20 to-stone-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5 relative z-10">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex-1 text-center text-[10px] text-zinc-500 font-mono tracking-widest uppercase">terminal_v2.0</div>
                        </div>
                        <div className="p-5 min-h-[120px] font-mono text-sm relative z-10">
                            {text.split('\n').map((line, index) => (
                                <div key={index} className={`mb-1 ${index === 0 ? 'text-accent-green' :
                                    index === 1 ? 'text-zinc-400' :
                                        'text-stone-300'
                                    }`}>
                                    <span className="opacity-30 mr-2">$</span>
                                    {line}
                                    {index === text.split('\n').length - 1 && (
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.8 }}
                                            className="inline-block w-2 h-4 bg-accent-green ml-2 align-middle"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Panel: Liquid Glass Dashboard */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative grid gap-6"
                >
                    {/* Decorative Elements - Subtle & Clean */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-green/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-stone-300/20 rounded-full blur-3xl pointer-events-none" />

                    {/* Main Holographic Card - Liquid Glass Style */}
                    <div className="p-8 rounded-[2rem] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-xl border border-accent-green/50 shadow-sm relative overflow-hidden group hover:shadow-[inset_0_0_30px_rgba(86,94,62,0.15)] transition-all duration-500">
                        <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity text-accent-green">
                            <Activity size={100} />
                        </div>

                        {/* Shimmer Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 dark:from-white/0 dark:via-white/5 dark:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'skewX(-20deg) translateX(-150%)', transition: 'transform 0.5s' }} />

                        <h3 className="text-accent-green text-xs tracking-[0.2em] font-mono mb-8 uppercase flex items-center gap-2 font-bold">
                            <Zap size={14} className="text-amber-500" />
                            Years of Experience
                        </h3>

                        <div className="relative flex items-center justify-center py-8">
                            <div className="text-center">
                                <motion.span
                                    className="text-7xl font-display font-bold block text-text-primary"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.5, type: "spring" }}
                                >
                                    2.5<span className="text-3xl align-top text-accent-green ml-1">Yrs</span>
                                </motion.span>
                                <span className="text-[10px] text-stone-500 font-mono uppercase tracking-widest font-semibold mt-2 block">Years Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Grid of Mini Glass Cards */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* Projects Card */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-[1.5rem] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-xl border border-accent-green/40 relative group hover:shadow-[inset_0_0_20px_rgba(86,94,62,0.1)] transition-all duration-300"
                        >
                            <div className="absolute top-4 right-4 text-accent-green/20 group-hover:text-accent-green/100 transition-colors duration-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /></svg>
                            </div>
                            <div className="text-4xl font-display font-bold mb-2 text-text-primary">5+</div>
                            <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold font-mono">Projects<br />Completed</div>
                            <div className="absolute bottom-4 left-6 h-0.5 bg-accent-green/20 w-8 group-hover:w-[calc(100%-3rem)] transition-all duration-500" />
                        </motion.div>

                        {/* Coding Hours Card */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-[1.5rem] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-xl border border-accent-green/40 relative group hover:shadow-[inset_0_0_20px_rgba(86,94,62,0.1)] transition-all duration-300"
                        >
                            <div className="absolute top-4 right-4 flex gap-1">
                                <div className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse" />
                            </div>
                            <div className="text-4xl font-display font-bold mb-2 text-text-primary">6</div>
                            <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold font-mono">Companies<br />Worked</div>
                            <div className="absolute bottom-4 left-6 h-0.5 bg-accent-green/20 w-8 group-hover:w-[calc(100%-3rem)] transition-all duration-500" />
                        </motion.div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
