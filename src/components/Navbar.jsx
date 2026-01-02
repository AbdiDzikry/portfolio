import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const t = translations[language];

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsMenuOpen(false);
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

    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2 }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, staggerChildren: 0.1 }
        }
    };

    return (
        <motion.nav
            variants={navbarVariants}
            initial="visible"
            animate={hidden ? "hidden" : "visible"}
            className="fixed top-6 left-1/2 z-50 w-full max-w-[900px] -translate-x-1/2 px-4 md:hidden"
        >
            <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-[2rem] px-4 py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex flex-col transition-all duration-300">
                <div className="flex items-center justify-between w-full">
                    <NavLink to="/" className="text-sm font-normal tracking-wide text-text-primary opacity-80 hover:opacity-100 transition-opacity">
                        <span className="font-mono hidden sm:inline">Sulthan Abdi Dzikry</span>
                        <span className="font-mono sm:hidden">S.A.D</span>.
                    </NavLink>

                    <div className="flex items-center gap-1">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors relative group"
                            aria-label="Toggle Language"
                        >
                            <Globe className="w-5 h-5 text-text-primary opacity-60 group-hover:opacity-100" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity bg-bg-card px-2 py-1 rounded shadow text-text-primary whitespace-nowrap">
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

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-text-primary" />
                            ) : (
                                <Menu className="w-6 h-6 text-text-primary opacity-60" />
                            )}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="pt-4 pb-2 flex flex-col gap-1 border-t border-white/10 mt-3"
                        >
                            <MobileNavItem to="/">{t.nav.home}</MobileNavItem>
                            <MobileNavItem to="/profile">{t.nav.profile}</MobileNavItem>
                            <MobileNavItem to="/projects">{t.nav.projects}</MobileNavItem>
                            <MobileNavItem to="/case-studies">{t.nav.caseStudies}</MobileNavItem>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

const MobileNavItem = ({ to, children }) => (
    <NavLink to={to} className={({ isActive }) =>
        `px-4 py-3 rounded-xl text-base font-normal transition-all duration-300 
        ${isActive ? 'bg-navbar-text text-navbar-bg' : 'text-text-primary opacity-60 hover:opacity-100 hover:bg-white/5'}`
    }>
        {children}
    </NavLink>
);

export default Navbar;
