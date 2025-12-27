import React from 'react';
import Game2048 from '../components/Game2048';

const Lab = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-10 min-h-screen flex flex-col">
            <header className="page-header text-center md:translate-x-14">
                <h1 className="page-title">Digital Playground</h1>
                <p className="page-subtitle">Strategic challenges at the intersection of logic and creativity.</p>
            </header>

            <div className="flex-grow flex items-center justify-center md:translate-x-14">
                <Game2048 />
            </div>
        </div>
    );
};

export default Lab;
