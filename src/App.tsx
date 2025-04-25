import React, { useState, useEffect, createContext } from 'react';
import Dashboard from './pages/Dashboard';
import MoodPage from './pages/MoodPage';
import GamesPage from './pages/GamesPage';
import CommunityPage from './pages/CommunityPage';
import EmergencyPage from './pages/EmergencyPage';
import TherapyPage from './pages/TherapyPage';
import AuthPage from './components/auth/AuthPage';

// ✅ Create context
export const AuthContext = createContext({
  setIsAuthenticated: (auth: boolean) => {},
});

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    setIsAuthenticated(!!token);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'mood':
        return <MoodPage />;
      case 'games':
        return <GamesPage />;
      case 'community':
        return <CommunityPage />;
      case 'emergency':
        return <EmergencyPage />;
      case 'therapy':
        return <TherapyPage />;
      default:
        return <Dashboard />;
    }
  };

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navItem = target.closest('a');
      if (navItem) {
        e.preventDefault();
        const text = navItem.textContent?.trim().toLowerCase();
        if (text === 'dashboard' || text === 'home') setCurrentPage('dashboard');
        else if (text === 'mood tracker') setCurrentPage('mood');
        else if (text === 'games') setCurrentPage('games');
        else if (text === 'connect') setCurrentPage('community');
        else if (text === 'sessions') setCurrentPage('therapy');
        else if (text === 'profile') setCurrentPage('profile');
      }
    };

    const handleEmergencyClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const emergencyButton = target.closest('button');
      if (emergencyButton && emergencyButton.textContent?.includes('Emergency Support')) {
        e.preventDefault();
        setCurrentPage('emergency');
      }
    };

    document.addEventListener('click', handleNavClick);
    document.addEventListener('click', handleEmergencyClick);
    return () => {
      document.removeEventListener('click', handleNavClick);
      document.removeEventListener('click', handleEmergencyClick);
    };
  }, []);

  if (isAuthenticated === null) return null;

  return (
    <AuthContext.Provider value={{ setIsAuthenticated }}>
      {isAuthenticated ? renderPage() : <AuthPage />}
    </AuthContext.Provider>
  );
}

export default App;
