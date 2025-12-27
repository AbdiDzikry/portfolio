import { useState } from 'react';
import './CaseStudies.css';

const studies = [
    {
        id: 1,
        title: "Keliling Dunia",
        category: "Life Goal",
        status: "Visionary",
        color: "var(--accent-blue)",
        description: "Exploring every corner of the planet to understand diverse cultures, landscapes, and human stories."
    },
    {
        id: 2,
        title: "Menjadi Orang Baik",
        category: "Philosophy",
        status: "Daily Pursuit",
        color: "var(--accent-green)",
        description: "Living a life rooted in empathy, kindness, and integrity to create a ripple effect of positivity."
    },
    {
        id: 3,
        title: "Hidup Tenang",
        category: "State of Mind",
        status: "Essential",
        color: "var(--accent-pink)",
        description: "Achieving mental clarity and peace by prioritizing what truly matters and letting go of the noise."
    },
    {
        id: 4,
        title: "Organisasi Gelap",
        category: "Extreme Idea",
        status: "Classified",
        color: "var(--accent-yellow)",
        description: "Membangun organisasi strategis untuk menciptakan perubahan sistemik dan menggulingkan struktur yang korup dengan cara apapun."
    }
];

const CaseStudies = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-10 min-h-screen flex flex-col">
            <header className="page-header text-center md:translate-x-14">
                <h1 className="page-title">Ideas</h1>
                <p className="page-subtitle">Creative concepts, life philosophies, and experimental projects.</p>
            </header>

            <div className="bookshelf">
                {studies.map((study) => (
                    <div
                        key={study.id}
                        className={`book-spine ${activeId === study.id ? 'active' : ''}`}
                        onClick={() => setActiveId(study.id)}
                        style={{ '--spine-color': study.color }}
                    >
                        <div className="spine-content">
                            <span className="spine-title mono">{study.title}</span>
                            <span className="spine-number">0{study.id}</span>
                        </div>

                        <div className="book-cover">
                            <div className="cover-content">
                                <h2 className="cover-title">{study.title}</h2>
                                <h3 className="cover-client">{study.category}</h3>
                                <div className="metric-badge" style={{ color: study.color, borderColor: study.color }}>
                                    {study.status}
                                </div>
                                <p className="cover-desc">{study.description}</p>
                                <button className="read-more-btn">Explore Idea →</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
