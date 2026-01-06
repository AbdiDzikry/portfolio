import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ id, title, category, description, tags, image, size = 'medium', viewMode = 'grid' }) => {
    // Only apply bento spans in grid mode, OR disable them entirely if requested. 
    // User asked to "ubah kembali menjadi card" implying standard uniform grid.
    // I will disable the bento spans for now to make it a uniform grid again.
    const sizeClasses = {
        large: '',
        medium: '',
        small: ''
    };

    const isList = viewMode === 'list';

    return (
        <Link
            to={`/projects/${id}`}
            className={`project-card group block h-full ${isList ? 'list-view flex-row items-center' : 'flex-col'}`}
        >
            {image && (
                <div className={`card-image-container relative overflow-hidden shrink-0 ${isList ? 'h-full w-48' : 'h-48 w-full'} bg-bg-secondary`}>
                    {/* Main Image Fitted (Cover - Fills area, may crop) */}
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-90 z-20"></div>
                </div>
            )}

            <div className={`card-content p-6 flex flex-col flex-1 ${isList ? 'justify-center' : ''}`}>
                <div className="card-header flex justify-between items-start mb-2">
                    <span className="category-tag mono text-[10px] text-accent-blue uppercase tracking-widest border border-accent-blue/20 px-2 py-1 rounded-md bg-accent-blue/5 backdrop-blur-sm group-hover:bg-accent-blue/10 group-hover:border-accent-blue/40 transition-colors">
                        {category}
                    </span>
                    <div className={`p-2 rounded-full bg-bg-secondary text-text-muted group-hover:text-accent-blue group-hover:bg-accent-blue/10 transition-all duration-300 group-hover:rotate-45 ${isList ? 'hidden md:block' : ''}`}>
                        <ArrowUpRight size={16} />
                    </div>
                </div>

                <div className="card-body flex-1">
                    <h3 className="text-2xl font-display font-bold text-text-primary mb-2 transition-colors group-hover:text-accent-blue">{title}</h3>
                    <p className={`text-text-secondary text-sm leading-relaxed mb-4 ${isList ? 'line-clamp-2 md:line-clamp-none' : 'line-clamp-3'}`}>{description}</p>
                </div>

                <div className={`card-footer ${isList ? 'mt-2' : 'mt-4 pt-4 border-t border-border/50 group-hover:border-accent-blue/30 transition-colors'}`}>
                    <div className="tags flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-mono text-text-muted bg-bg-secondary px-2 py-1 rounded border border-border/50 transition-all duration-300 group-hover:border-accent-blue/30 group-hover:text-accent-blue group-hover:bg-accent-blue/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
