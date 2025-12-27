import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Globe, Sun, Moon, FlaskConical } from 'lucide-react'; // Icons
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const NavbarVertical = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    // No scroll hide logic needed for side navbar usually, it stays visible

    const t = translations[language];

    return (
        <motion.nav
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed right-6 top-10 z-50 hidden md:flex" // Adjusted to top-10 per request
        >
            <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full py-6 px-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex flex-col items-center gap-6 transition-all duration-300 hover:bg-white/20 dark:hover:bg-black/30">

                {/* Logo / Brand (simplified to initial or dot) */}
                <NavLink to="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-green/10 text-accent-green font-bold text-lg mb-2 hover:scale-110 transition-transform">
                    S.
                </NavLink>

                {/* Navigation Links (Icons) */}
                <div className="flex flex-col gap-4 w-full">
                    <NavIcon to="/" icon={<Home size={20} />} label={t.nav.home} />
                    <NavIcon to="/profile" icon={<User size={20} />} label={t.nav.profile} />
                    <NavIcon to="/projects" icon={<Briefcase size={20} />} label={t.nav.projects} />
                    <NavIcon to="/case-studies" icon={<FileText size={20} />} label={t.nav.caseStudies} />
                    <NavIcon to="/lab" icon={<FlaskConical size={20} />} label={t.nav.lab} />
                </div>

                {/* Divider */}
                <div className="w-8 h-[1px] bg-white/20 dark:bg-white/10 my-1" />

                {/* Actions */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-text-primary/70 hover:text-text-primary relative group"
                    >
                        <Globe size={18} />
                        <span className="absolute right-12 top-1/2 -translate-y-1/2 text-[10px] bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {language === 'en' ? 'ID' : 'EN'}
                        </span>
                    </button>

                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-text-primary/70 hover:text-text-primary"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

// Nav Icon Component with Liquid Animation
const NavIcon = ({ to, icon, label }) => (
    <NavLink to={to} className="relative w-10 h-10 flex items-center justify-center rounded-full group">
        {({ isActive }) => (
            <>
                {/* Liquid Active Bubble */}
                {isActive && (
                    <motion.div
                        layoutId="active-nav-bubble"
                        className="absolute inset-0 bg-accent-green rounded-full shadow-lg shadow-accent-green/30"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                )}

                {/* Icon (z-10 to sit on top of bubble) */}
                <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-primary/60 group-hover:text-text-primary'}`}>
                    {icon}
                </span>

                {/* Tooltip on Left */}
                <span className="absolute right-14 top-1/2 -translate-y-1/2 text-xs font-medium bg-white/80 dark:bg-black/80 backdrop-blur-md text-text-primary px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-sm border border-white/20 pointer-events-none">
                    {label}
                </span>
            </>
        )}
    </NavLink>
);

export default NavbarVertical;
