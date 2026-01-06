import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, FileText, Download, Target, Users, Calendar,
    CheckCircle2, AlertTriangle, Layers, PenTool, Smartphone,
    Lightbulb, Activity, Zap, ShieldCheck, BarChart3
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { generatePrdPdf } from '../utils/generatePrdPdf';
import SEO from '../components/SEO';

const ProjectDetail = () => {
    const { id } = useParams();
    const { language } = useLanguage();
    const rawProject = projectsData.find(p => p.id === id);

    const project = rawProject && language === 'id' && rawProject.translations?.id
        ? { ...rawProject, ...rawProject.translations.id }
        : rawProject;

    const t = translations[language].projectDetail;

    const [selectedImage, setSelectedImage] = useState(0);

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
                <h2>{t.notFound}</h2>
                <Link to="/projects" className="ml-4 text-accent-blue underline">{t.back}</Link>
            </div>
        );
    }

    const showcaseImages = project.showcaseImages || [project.image];

    // Helper for visual cards
    const InfoCard = ({ icon: Icon, label, value, className = "" }) => (
        <div className={`p-5 rounded-2xl bg-bg-card border border-border/50 hover:border-accent-blue/30 transition-all hover:shadow-lg ${className}`}>
            <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                    <Icon size={18} />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted">{label}</h4>
            </div>
            <div className="text-text-primary font-medium leading-relaxed">
                {value}
            </div>
        </div>
    );

    const SectionTitle = ({ children }) => (
        <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-accent-pink rounded-full"></span>
            {children}
        </h3>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-bg-primary min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 transition-colors duration-300"
        >
            <SEO
                title={project.title}
                description={project.description}
                ogImage={project.image}
            />
            <div className="max-w-5xl mx-auto">
                <Link to="/projects" className="inline-flex items-center gap-2 text-text-muted hover:text-accent-blue transition-colors mb-8 group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-mono">{t.back}</span>
                </Link>

                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full border border-accent-pink/30 text-accent-pink text-xs font-mono uppercase tracking-widest bg-accent-pink/5">
                            {project.category}
                        </span>
                        {project.size === 'large' && (
                            <span className="px-3 py-1 rounded-full border border-accent-blue/30 text-accent-blue text-xs font-mono uppercase tracking-widest bg-accent-blue/5">
                                {t.featured}
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

                <div className="mb-16">
                    <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-4 shadow-2xl border border-border/50 bg-bg-card relative group">
                        <div
                            className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-40 dark:opacity-20"
                            style={{ backgroundImage: `url(${showcaseImages[selectedImage]})` }}
                        />
                        <img
                            src={showcaseImages[selectedImage]}
                            alt={`${project.title} - Image ${selectedImage + 1}`}
                            className="w-full h-full object-contain relative z-10 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 to-transparent pointer-events-none z-20"></div>
                    </div>
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
                                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mb-16 border-y border-border/50 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">{t.role}</h3>
                        <p className="text-text-primary font-medium">Product Designer</p>
                    </div>
                    <div>
                        <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">{t.timeline}</h3>
                        <p className="text-text-primary font-medium">2024 - Present</p>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-2">{t.tech}</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-text-primary text-sm font-medium bg-bg-secondary px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* VISUAL PRD SECTION - PROFESSIONAL REDESIGN */}
                <div className="space-y-8">
                    {/* PRD Header - Professional & Clean */}
                    <div className="bg-bg-card border border-border rounded-xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-border pb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="font-mono text-xs text-text-muted uppercase tracking-widest">
                                            {t.ref}: {project.id.toUpperCase()}-V1.0
                                        </span>
                                        <div className={`px-2.5 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wide ${project.status === 'ON TRACK' || project.status === 'LIVE' || project.status === 'COMPLETED'
                                            ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                                            : 'bg-amber-500/10 text-amber-600 border-amber-500/20'}`}>
                                            {project.status || 'DRAFT'}
                                        </div>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-2">
                                        {t.prdTitle}
                                    </h2>
                                    <p className="text-text-secondary max-w-2xl leading-relaxed">
                                        <span className="font-semibold text-text-primary">{t.lblVision}:</span> {project.vision || "N/A"}
                                    </p>
                                </div>
                                <button
                                    onClick={() => generatePrdPdf(project)}
                                    className="px-5 py-2.5 rounded-lg bg-text-primary text-bg-primary hover:bg-text-secondary transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
                                >
                                    <Download size={16} />
                                    <span className="font-medium text-sm">{t.download}</span>
                                </button>
                            </div>

                            {/* Executive Summary Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <div className="text-xs font-mono text-text-muted uppercase mb-1">{t.lblTeam}</div>
                                    <div className="font-medium text-text-primary">{project.team}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-text-muted uppercase mb-1">{t.lblTiming}</div>
                                    <div className="font-medium text-text-primary">
                                        {project.timeline ? `${project.timeline[0]?.period} - ${project.timeline[project.timeline.length - 1]?.period}` : "TBD"}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-text-muted uppercase mb-1">{t.lblInvestment}</div>
                                    <div className="font-medium text-text-primary">{project.investmentRequired || "N/A"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Context & Strategic Fit - Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent-blue/30 transition-colors">
                            <SectionTitle icon={Target}>{t.lblBackground}</SectionTitle>
                            <p className="text-text-secondary leading-relaxed text-sm mt-3">
                                {project.background || project.problem}
                            </p>
                        </div>
                        <div className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent-blue/30 transition-colors">
                            <SectionTitle icon={Lightbulb}>{t.lblStrategy}</SectionTitle>
                            <p className="text-text-secondary leading-relaxed text-sm mt-3">
                                {project.strategicAlignment || "N/A"}
                            </p>
                        </div>
                    </div>

                    {/* Problem / Solution Table (Clean) */}
                    <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-border bg-bg-secondary/30">
                            <SectionTitle icon={AlertTriangle}>{t.lblUseCases}</SectionTitle>
                        </div>
                        <div className="divide-y divide-border">
                            {project.problemMap?.map((pm, i) => (
                                <div key={i} className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                                    <div className="md:col-span-4">
                                        <h4 className="font-bold text-text-primary text-sm mb-1">{pm.problem}</h4>
                                        <p className="text-xs text-text-muted italic">{pm.context}</p>
                                    </div>
                                    <div className="md:col-span-8">
                                        <div className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                <span className="font-medium text-text-primary">{pm.solution}</span> — {pm.mitigation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Metrics (KPIs) */}
                    <div className="bg-bg-card border border-border rounded-xl p-6">
                        <SectionTitle icon={BarChart3}>{t.lblMetrics}</SectionTitle>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-4 border border-border rounded-lg overflow-hidden">
                            {project.stats?.map((s, i) => (
                                <div key={i} className="bg-bg-card p-6 text-center hover:bg-bg-secondary/20 transition-colors">
                                    <div className="text-2xl font-bold text-text-primary mb-1 font-mono">{s.value}</div>
                                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2">{s.label}</div>
                                    <div className="text-xs text-text-secondary leading-tight">{s.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Features & Specs */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Features List */}
                        <div className="lg:col-span-2 bg-bg-card border border-border rounded-xl p-6">
                            <SectionTitle icon={Zap}>{t.lblFeatures}</SectionTitle>
                            <ul className="mt-4 space-y-4">
                                {project.coreFeatures?.map((f, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 group-hover:bg-accent-pink transition-colors"></div>
                                        <div>
                                            <h4 className="font-bold text-text-primary text-sm">{f.name}</h4>
                                            <p className="text-sm text-text-secondary mt-1">{f.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack / Architecture */}
                        <div className="bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-6">
                            <div>
                                <SectionTitle icon={Layers}>{t.lblArchitecture}</SectionTitle>
                                <p className="text-sm text-text-primary font-mono mt-3 p-3 bg-bg-secondary/30 rounded border border-border">
                                    {project.productArchitecture}
                                </p>
                            </div>

                            <div className="border-t border-border pt-6">
                                <SectionTitle icon={ShieldCheck}>{t.lblAssumptions}</SectionTitle>
                                <p className="text-xs text-text-secondary mt-3 whitespace-pre-line leading-relaxed">
                                    {project.assumptions}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Design System Footer */}
                    <div className="bg-gradient-to-r from-bg-card to-bg-secondary/30 border border-border rounded-xl p-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <SectionTitle icon={PenTool}>{t.lblDesignSys}</SectionTitle>
                                <p className="text-sm text-text-secondary mt-2">{project.designSystem}</p>
                            </div>
                            <div className="flex-1 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-8">
                                <div className="text-xs font-bold text-text-muted uppercase mb-3">{t.lblTools} & Methods</div>
                                <div className="flex flex-wrap gap-2">
                                    {project.designTools?.map((tool, i) => (
                                        <div key={i} className="px-2 py-1 bg-bg-primary border border-border rounded text-xs text-text-primary">
                                            {tool}
                                        </div>
                                    ))}
                                    {project.researchMethods?.map((method, i) => (
                                        <div key={`res-${i}`} className="px-2 py-1 bg-bg-primary border border-border rounded text-xs text-text-secondary italic">
                                            {method}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

const SectionTitle = ({ icon: Icon, children }) => (
    <h3 className="text-base font-bold text-text-primary flex items-center gap-2 uppercase tracking-wide">
        {Icon && <Icon size={16} className="text-text-muted" />}
        {children}
    </h3>
);

export default ProjectDetail;
