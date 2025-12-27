import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import NavbarVertical from './components/NavbarVertical';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import CaseStudies from './pages/CaseStudies';
import Lab from './pages/Lab';

function AppContent() {
  const location = useLocation();
  const isStoneBg = location.pathname === '/profile' || location.pathname === '/';

  return (
    <div className={`${isStoneBg ? 'bg-stone-200' : 'bg-white'} dark:bg-bg-primary min-h-screen text-text-primary transition-colors duration-300 font-sans flex flex-col md:pr-28 relative`}>
      <NavbarVertical />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
