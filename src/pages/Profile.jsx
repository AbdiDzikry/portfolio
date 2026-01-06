import React from 'react';
import Dashboard from '../components/Dashboard';
import SEO from '../components/SEO';

const Profile = () => {
    return (
        <>
            <SEO
                title="Profile"
                description="Learn more about Sulthan Abdi Dzikry - Experience, Education, Skills, and Certifications"
            />
            <div className="min-h-screen">
                <Dashboard />
            </div>
        </>
    );
};

export default Profile;
