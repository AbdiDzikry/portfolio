import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';
import { useLanguage } from '../context/LanguageContext'; // Optional if we translate later

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(0);

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
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <div className="sticky top-32">
                            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">Overview</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                A detailed look into the problem, my systematic approach to the solution, and the measurable impact created by this project.
                            </p>
                            {/* Live Demo Removed */}
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-16">
                        <section>
                            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-accent-pink/10 text-accent-pink flex items-center justify-center text-sm font-bold">1</span>
                                The Challenge
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-text-secondary">
                                <p className="leading-relaxed mb-6">
                                    {project.problem}
                                </p>
                                {/* Rich Problem Map */}
                                {project.problemMap && (
                                    <div className="grid gap-4 mt-6">
                                        {project.problemMap.map((item, idx) => (
                                            <div key={idx} className="bg-bg-secondary/50 border border-border/50 rounded-xl p-4 hover:border-accent-pink/50 transition-colors">
                                                <h4 className="font-bold text-text-primary mb-1">{item.problem}</h4>
                                                <p className="text-sm text-text-muted italic mb-3">"{item.context}"</p>
                                                <div className="flex items-center gap-2 text-sm text-accent-pink">
                                                    <span className="font-semibold">Sol:</span>
                                                    <span>{item.solution}</span>
                                                </div>
                                                <p className="text-xs text-text-secondary mt-1 ml-8">{item.mitigation}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center text-sm font-bold">2</span>
                                The Solution
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-text-secondary">
                                <p className="leading-relaxed mb-6">
                                    {project.solution}
                                </p>

                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-accent-green/10 text-accent-green flex items-center justify-center text-sm font-bold">3</span>
                                The Impact
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-text-secondary">
                                <p className="leading-relaxed mb-6">
                                    {project.impact}
                                </p>

                                {/* Impact Stats */}
                                {project.stats && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                        {project.stats.map((stat, idx) => (
                                            <div key={idx} className="bg-bg-card border border-border rounded-xl p-5 text-center shadow-sm">
                                                <div className="text-2xl md:text-3xl font-bold text-accent-blue mb-1">{stat.value}</div>
                                                <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">{stat.label}</div>
                                                <p className="text-xs text-text-secondary">{stat.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Before vs After Comparison */}
                                {project.beforeAfter && (
                                    <div className="mt-8 overflow-hidden border border-border/50 rounded-xl">
                                        <div className="grid grid-cols-1 md:grid-cols-2">
                                            <div className="bg-red-500/5 p-6 border-b md:border-b-0 md:border-r border-border/50">
                                                <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                                                    Timeline: BEFORE ❌
                                                </h4>
                                                <ul className="space-y-4">
                                                    {project.beforeAfter.map((item, idx) => (
                                                        <li key={idx}>
                                                            <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{item.aspect}</div>
                                                            <div className="text-text-secondary text-sm italic">"{item.before}"</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-green-500/5 p-6">
                                                <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                                    Timeline: AFTER ✅
                                                </h4>
                                                <ul className="space-y-4">
                                                    {project.beforeAfter.map((item, idx) => (
                                                        <li key={idx}>
                                                            <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{item.aspect}</div>
                                                            <div className="text-text-primary text-sm font-medium">{item.after}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Target Audience / Personas */}
                        {project.personas && (
                            <section>
                                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center text-sm font-bold">4</span>
                                    Target Audience Analysis
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.personas.map((persona, idx) => (
                                        <div key={idx} className="bg-bg-card border border-border p-5 rounded-xl shadow-sm hover:border-teal-500/30 transition-colors">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-lg">👤</div>
                                                <h4 className="font-bold text-text-primary">{persona.role}</h4>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <p className="text-text-secondary"><span className="font-semibold text-red-400">Pain:</span> {persona.pain}</p>
                                                <p className="text-text-secondary"><span className="font-semibold text-green-400">Goal:</span> {persona.goal}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Business Value Proposition */}
                        {project.businessModel && (
                            <section>
                                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-400 flex items-center justify-center text-sm font-bold">5</span>
                                    Business Value Proposition
                                </h2>
                                <div className="grid gap-3">
                                    {project.businessModel.map((model, idx) => (
                                        <div key={idx} className="flex flex-col md:flex-row md:items-center gap-3 bg-yellow-500/5 p-4 rounded-lg border border-yellow-500/20">
                                            <div className="md:w-1/4 font-mono text-xs uppercase tracking-widest text-yellow-600 font-bold">{model.type}</div>
                                            <div className="md:w-3/4 text-text-secondary text-sm">{model.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Development Timeline */}
                        {project.timeline && (
                            <section>
                                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-sm font-bold">6</span>
                                    Development Timeline
                                </h2>
                                <div className="space-y-6 border-l-2 border-border/50 ml-4 pl-8 py-2">
                                    {project.timeline.map((phase, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-bg-primary border-4 border-purple-500/50"></div>
                                            <h4 className="font-bold text-text-primary text-lg">{phase.phase}</h4>
                                            <span className="text-xs font-mono text-purple-400 mb-2 block">{phase.period}</span>
                                            <ul className="list-disc list-inside text-sm text-text-secondary space-y-1">
                                                {phase.activities.map((act, i) => (
                                                    <li key={i}>{act}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Mitigation Plan */}
                        {project.mitigationPlans && (
                            <section>
                                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center text-sm font-bold">7</span>
                                    Risk Mitigation
                                </h2>
                                <div className="grid gap-4">
                                    {project.mitigationPlans.map((plan, idx) => (
                                        <div key={idx} className="bg-orange-100 dark:bg-orange-500/10 border border-orange-500/30 rounded-xl p-5">
                                            <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                                                ⚠️ {plan.risk}
                                            </h4>
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                <span className="font-semibold text-orange-600 dark:text-orange-400">Action: </span>
                                                {plan.action}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
