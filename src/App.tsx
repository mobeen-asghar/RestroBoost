import React, { useState, useEffect } from 'react';
import { authUtils } from './utils/auth';
import { storageUtils } from './utils/storage';
import PublicLayout from './components/public/PublicLayout';
import LandingPage from './components/public/LandingPage';
import FeaturesPage from './components/public/FeaturesPage';
import PricingPage from './components/public/PricingPage';
import CaseStudiesPage from './components/public/CaseStudiesPage';
import AboutPage from './components/public/AboutPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import MenuOptimization from './components/MenuOptimization';
import CustomerFeedback from './components/CustomerFeedback';
import OnlineOrdering from './components/OnlineOrdering';
import Settings from './components/auth/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    // Check authentication status on app load
    setIsAuthenticated(authUtils.isAuthenticated());
    
    // Initialize sample data if user is authenticated and data doesn't exist
    if (authUtils.isAuthenticated()) {
      storageUtils.initializeSampleData();
      setCurrentPage('dashboard');
      setShowAuth(false);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    storageUtils.initializeSampleData();
    setCurrentPage('dashboard');
    setShowAuth(false);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    storageUtils.initializeSampleData();
    setCurrentPage('dashboard');
    setShowAuth(false);
  };

  const handleLogout = () => {
    authUtils.logout();
    setIsAuthenticated(false);
    setActiveTab('dashboard');
    setCurrentPage('landing');
    setShowAuth(false);
  };

  const handleGetStarted = () => {
    setShowAuth(true);
    setAuthMode('signup');
  };

  const handleNavigate = (page: string) => {
    if (page === 'login') {
      setShowAuth(true);
      setAuthMode('login');
    } else if (page === 'signup') {
      setShowAuth(true);
      setAuthMode('signup');
    } else {
      setCurrentPage(page);
      setShowAuth(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <Inventory />;
      case 'menu':
        return <MenuOptimization />;
      case 'feedback':
        return <CustomerFeedback />;
      case 'orders':
        return <OnlineOrdering />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  // If user is authenticated, show the dashboard app
  if (isAuthenticated) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          onLogout={handleLogout}
        />
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    );
  }

  // If showing auth, render auth components
  if (showAuth) {
    const authComponent = authMode === 'login' ? (
      <Login 
        onLogin={handleLogin}
        onSwitchToSignup={() => setAuthMode('signup')}
      />
    ) : (
      <Signup 
        onSignup={handleSignup}
        onSwitchToLogin={() => setAuthMode('login')}
      />
    );
    
    return authComponent;
  }

  // Render public pages
  const renderPublicPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'features':
        return <FeaturesPage onGetStarted={handleGetStarted} />;
      case 'pricing':
        return <PricingPage onGetStarted={handleGetStarted} />;
      case 'case-studies':
        return <CaseStudiesPage onGetStarted={handleGetStarted} />;
      case 'about':
        return <AboutPage onGetStarted={handleGetStarted} />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <PublicLayout
      currentPage={currentPage}
      onNavigate={handleNavigate}
      onGetStarted={handleGetStarted}
    >
      {renderPublicPage()}
    </PublicLayout>
  );
}

export default App;