import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-8 text-center flex justify-center pb-24 md:pb-8 md:translate-x-14"> {/* Added padding bottom for mobile if navbar is bottom, but navbar is vertical side now. Safe margin. */}
            <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] transition-shadow duration-300 inline-flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <p className="text-xs text-text-primary/70 font-mono">
                    &copy; 2026 Designed & Built by
                </p>
                <a
                    href="https://www.linkedin.com/in/sulthan-abdi-dzikry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-accent-green hover:text-accent-green/80 transition-colors px-3 py-1 bg-white/40 dark:bg-black/40 rounded-full"
                >
                    Sulthan A. Dzikry
                </a>
            </div>
        </footer>
    );
};

export default Footer;
