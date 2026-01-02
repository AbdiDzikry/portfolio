import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, ArrowRightLeft, BarChart3, Wallet } from 'lucide-react';
import { projectsData } from '../data/projects';
import { useLanguage } from '../context/LanguageContext'; // Optional if we translate later

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');

    // Auto-slideshow
    useEffect(() => {
        if (!project || !project.showcaseImages || project.showcaseImages.length <= 1) return;

        const interval = setInterval(() => {
            setSelectedImage((prev) => (prev + 1) % project.showcaseImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-text-primary">
                <h2>Project not found</h2>
                <Link to="/projects" className="ml-4 text-accent-blue underline">Back to Projects</Link>
            </div>
        );
    }

    const showcaseImages = project.showcaseImages || [project.image];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-bg-primary min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 transition-colors duration-300"
        >
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link to="/projects" className="inline-flex items-center gap-2 text-text-muted hover:text-accent-blue transition-colors mb-8 group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-mono">Back to Projects</span>
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full border border-accent-pink/30 text-accent-pink text-xs font-mono uppercase tracking-widest bg-accent-pink/5">
                            {project.category}
                        </span>
                        {project.size === 'large' && (
                            <span className="px-3 py-1 rounded-full border border-accent-blue/30 text-accent-blue text-xs font-mono uppercase tracking-widest bg-accent-blue/5">
                                Featured
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                        {project.description}
                    </p>
                </header>

                {/* Image Gallery */}
                <div className="mb-16">
                    {/* Main Image */}
                    <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-4 shadow-2xl border border-border/50 bg-bg-card relative group">
                        {/* 1. Blurred Background Layer for "Fill" effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-40 dark:opacity-20"
                            style={{ backgroundImage: `url(${showcaseImages[selectedImage]})` }}
                        />

                        {/* 2. Main Image (Fitted) */}
                        <img
                            src={showcaseImages[selectedImage]}
                            alt={`${project.title} - Image ${selectedImage + 1}`}
                            className="w-full h-full object-contain relative z-10 transition-transform duration-500"
                        />

                        {/* Gradient Overlay (Subtle) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 to-transparent pointer-events-none z-20"></div>
                    </div>

                    {/* Thumbnail Gallery */}
                    {showcaseImages.length > 1 && (
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                            {showcaseImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx
                                        ? 'border-accent-blue shadow-lg scale-105'
                                        : 'border-border/30 hover:border-accent-blue/50 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Tech Stack */}
                <div className="mb-16 border-y border-border/50 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">Role</h3>
                        <p className="text-text-primary font-medium">UI/UX & Frontend</p>
                    </div>
                    <div>
                        <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">Timeline</h3>
                        <p className="text-text-primary font-medium">2024 - Present</p>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-text-primary text-sm font-medium bg-bg-secondary px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Case Study Content */}

                {/* PRD Section */}
                <div className="border border-border/50 rounded-2xl bg-bg-card overflow-hidden shadow-sm">
                    {/* PRD Header */}
                    <div className="bg-bg-secondary/50 border-b border-border/50 p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                                <FileText size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-text-primary">Product Requirement Document</h2>
                                <p className="text-xs text-text-muted font-mono uppercase tracking-wider">Internal Reference: {project.id.toUpperCase()}-V1.0</p>
                            </div>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs font-bold border border-green-500/20">APPROVED</span>
                            <span className="px-2 py-1 rounded bg-bg-primary border border-border text-text-secondary text-xs">Public Access</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex overflow-x-auto border-b border-border/50 no-scrollbar">
                        <TabButton
                            active={activeTab === 'overview'}
                            onClick={() => setActiveTab('overview')}
                            label="1. Overview"
                        />
                        <TabButton
                            active={activeTab === 'users'}
                            onClick={() => setActiveTab('users')}
                            label="2. Users & Target"
                        />
                        <TabButton
                            active={activeTab === 'strategy'}
                            onClick={() => setActiveTab('strategy')}
                            label="3. Strategy & Impact"
                        />
                        <TabButton
                            active={activeTab === 'roadmap'}
                            onClick={() => setActiveTab('roadmap')}
                            label="4. Roadmap"
                        />
                        <TabButton
                            active={activeTab === 'risks'}
                            onClick={() => setActiveTab('risks')}
                            label="5. Risks"
                        />
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 md:p-8 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-8"
                                >
                                    <Section title="The Problem" icon={<ShieldAlert size={18} className="text-red-400" />}>
                                        <p className="text-text-secondary leading-relaxed">{project.problem}</p>
                                        {project.problemMap && (
                                            <div className="grid gap-3 mt-4">
                                                {project.problemMap.map((item, idx) => (
                                                    <div key={idx} className="bg-bg-primary p-3 rounded-lg border border-border/50 text-sm">
                                                        <div className="font-semibold text-text-primary mb-1">{item.problem}</div>
                                                        <div className="text-text-muted italic">"{item.context}"</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </Section>

                                    <Section title="The Solution" icon={<CheckCircle2 size={18} className="text-green-400" />}>
                                        <p className="text-text-secondary leading-relaxed">{project.solution}</p>
                                    </Section>

                                    {project.beforeAfter && (
                                        <Section title="Before vs After" icon={<ArrowRightLeft size={18} className="text-blue-400" />}>
                                            <div className="grid md:grid-cols-2 gap-4 mt-2">
                                                <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/10">
                                                    <h4 className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3">Before</h4>
                                                    <ul className="space-y-3">
                                                        {project.beforeAfter.map((item, idx) => (
                                                            <li key={idx} className="text-sm text-text-secondary">
                                                                <span className="block text-xs text-text-muted mb-1">{item.aspect}</span>
                                                                "{item.before}"
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                                                    <h4 className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3">After</h4>
                                                    <ul className="space-y-3">
                                                        {project.beforeAfter.map((item, idx) => (
                                                            <li key={idx} className="text-sm text-text-primary font-medium">
                                                                <span className="block text-xs text-text-muted mb-1">{item.aspect}</span>
                                                                {item.after}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </Section>
                                    )}
                                </motion.div>
                            )}

                            {activeTab === 'users' && (
                                <motion.div
                                    key="users"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="grid md:grid-cols-2 gap-6"
                                >
                                    {project.personas?.map((persona, idx) => (
                                        <div key={idx} className="bg-bg-primary border border-border/60 p-5 rounded-xl">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl">
                                                    👤
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-text-primary">{persona.role}</h4>
                                                    <span className="text-xs text-text-muted">Primary Persona</span>
                                                </div>
                                            </div>
                                            <div className="space-y-3 text-sm">
                                                <div>
                                                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Pain Points</span>
                                                    <p className="text-text-secondary mt-1">{persona.pain}</p>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Goals</span>
                                                    <p className="text-text-secondary mt-1">{persona.goal}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'strategy' && (
                                <motion.div
                                    key="strategy"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-8"
                                >
                                    <Section title="Key Success Metrics (KPIs)" icon={<BarChart3 size={18} className="text-accent-blue" />}>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {project.stats?.map((stat, idx) => (
                                                <div key={idx} className="bg-bg-primary p-4 rounded-xl border border-border/50 text-center">
                                                    <div className="text-2xl font-bold text-text-primary mb-1">{stat.value}</div>
                                                    <div className="text-xs text-text-muted uppercase tracking-wider mb-2">{stat.label}</div>
                                                    <p className="text-xs text-text-secondary">{stat.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </Section>

                                    <Section title="Business Value Proposition" icon={<Wallet size={18} className="text-yellow-500" />}>
                                        <div className="space-y-3">
                                            {project.businessModel?.map((model, idx) => (
                                                <div key={idx} className="flex gap-4 items-start bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/10">
                                                    <div className="min-w-[120px] font-mono text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-tighter mt-1">
                                                        {model.type}
                                                    </div>
                                                    <p className="text-sm text-text-secondary">{model.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </Section>
                                </motion.div>
                            )}

                            {activeTab === 'roadmap' && (
                                <motion.div
                                    key="roadmap"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="space-y-6 border-l-2 border-border/50 ml-3 pl-8 py-2">
                                        {project.timeline?.map((phase, idx) => (
                                            <div key={idx} className="relative">
                                                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-bg-card border-4 border-accent-blue/50"></div>
                                                <h4 className="font-bold text-text-primary text-lg">{phase.phase}</h4>
                                                <span className="text-xs font-mono text-accent-blue mb-3 block">{phase.period}</span>
                                                <ul className="space-y-2">
                                                    {phase.activities.map((act, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-border"></div>
                                                            {act}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'risks' && (
                                <motion.div
                                    key="risks"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="grid gap-4"
                                >
                                    {project.mitigationPlans?.map((plan, idx) => (
                                        <div key={idx} className="bg-bg-primary border border-orange-500/20 p-5 rounded-xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-3 opacity-10 text-orange-500">
                                                <ShieldAlert size={64} />
                                            </div>
                                            <div className="relative z-10">
                                                <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                                                    <span className="text-orange-500">Risk:</span> {plan.risk}
                                                </h4>
                                                <p className="text-sm text-text-secondary leading-relaxed">
                                                    <span className="font-semibold text-green-500">Mitigation: </span>
                                                    {plan.action}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Sub-components for cleaner code
const TabButton = ({ active, onClick, label }) => (
    <button
        onClick={onClick}
        className={`px-6 py-4 text-sm font-medium transition-all relative whitespace-nowrap
        ${active ? 'text-accent-blue' : 'text-text-muted hover:text-text-primary hover:bg-bg-secondary/50'}`}
    >
        {label}
        {active && (
            <motion.div
                layoutId="activeTabLine"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue"
            />
        )}
    </button>
);

const Section = ({ title, icon, children }) => (
    <div>
        <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2 uppercase tracking-wide">
            {icon}
            {title}
        </h3>
        {children}
    </div>
);


export default ProjectDetail;
