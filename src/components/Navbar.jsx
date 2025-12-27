import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    const t = translations[language];

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navbarVariants = {
        visible: {
            y: 0,
            x: "-50%",
            opacity: 1,
            transition: { duration: 0.35, ease: "easeInOut" }
        },
        hidden: {
            y: -100,
            x: "-50%",
            opacity: 0,
            transition: { duration: 0.35, ease: "easeInOut" }
        }
    };

    return (
        <motion.nav
            variants={navbarVariants}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            className="fixed top-6 left-1/2 z-50 w-full max-w-[900px] -translate-x-1/2" // Constrain width here
        >
            <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-8 py-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex items-center justify-between transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/10 dark:hover:bg-black/10">  {/* Glassmorphism Classes */}
                <div className="flex items-center justify-between w-full gap-8">
                    <NavLink to="/" className="text-sm font-normal tracking-wide text-text-primary opacity-80 hover:opacity-100 transition-opacity">
                        <span className="font-mono">Sulthan Abdi Dzikry</span>.
                    </NavLink>

                    <div className="flex gap-2">
                        <NavItem to="/">{t.nav.home}</NavItem>
                        <NavItem to="/profile">{t.nav.profile}</NavItem>
                        <NavItem to="/projects">{t.nav.projects}</NavItem>
                        <NavItem to="/case-studies">{t.nav.caseStudies}</NavItem>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors relative group"
                            aria-label="Toggle Language"
                        >
                            <Globe className="w-5 h-5 text-text-primary opacity-60 group-hover:opacity-100" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-bg-card px-2 py-1 rounded shadow text-text-primary">
                                {language === 'en' ? 'ID' : 'EN'}
                            </span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-text-primary opacity-60" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

const NavItem = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) =>
        `relative px-4 py-2 rounded-full text-sm font-normal transition-all duration-300 
        ${isActive ? 'opacity-100' : 'text-navbar-text opacity-60 hover:opacity-100'}`
    }>
        {({ isActive }) => (
            <>
                {isActive && (
                    <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-navbar-text rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                <span className={`relative z-10 ${isActive ? 'text-navbar-bg' : ''}`}>
                    {children}
                </span>
            </>
        )}
    </NavLink>
);

export default Navbar;
// Force refresh for CSS updates
