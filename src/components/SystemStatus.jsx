import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SystemStatus = ({ className = '' }) => {
    const location = useLocation();
    const { language } = useLanguage();

    const getStatusText = () => {
        const path = location.pathname;

        if (path === '/') {
            return language === 'en' ? 'NEED A JOB' : 'BUTUH PEKERJAAN';
        } else if (path === '/profile') {
            return 'PROFILE';
        } else if (path.startsWith('/projects')) {
            return 'PROJECTS';
        } else if (path === '/case-studies') {
            return 'IDEAS';
        }
        return 'ONLINE';
    };

    return (
        <div className={`font-mono ${className}`}>
            <span className="text-stone-500 dark:text-stone-400 text-sm">System Status:</span>{' '}
            <span className="font-bold text-accent-green text-2xl md:text-4xl">{getStatusText()}</span>
        </div>
    );
};

export default SystemStatus;
