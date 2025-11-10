import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { InvestorPortal } from './components/InvestorPortal';
import { BenefactorPortal } from './components/BenefactorPortal';
import { CommunityHub } from './components/CommunityHub';
import { PropertyListings } from './components/PropertyListings';
import { Transactions } from './components/Transactions';
import { Profile } from './components/Profile';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('welcome');
  const [userType, setUserType] = useState<'investor' | 'benefactor' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleLogin = (type: 'investor' | 'benefactor') => {
    setUserType(type);
    setIsAuthenticated(true);
    // Navigate to appropriate portal
    if (type === 'investor') {
      setCurrentPage('investor-portal');
    } else {
      setCurrentPage('benefactor-portal');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setCurrentPage('welcome');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <Welcome onNavigate={handleNavigate} />;
      
      case 'login-investor':
        return <Login userType="investor" onLogin={handleLogin} onNavigate={handleNavigate} />;
      
      case 'login-benefactor':
        return <Login userType="benefactor" onLogin={handleLogin} onNavigate={handleNavigate} />;
      
      case 'investor-portal':
        return isAuthenticated && userType === 'investor' ? (
          <InvestorPortal onNavigate={handleNavigate} />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );
      
      case 'benefactor-portal':
        return isAuthenticated && userType === 'benefactor' ? (
          <BenefactorPortal onNavigate={handleNavigate} />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );
      
      case 'community':
        return isAuthenticated && userType ? (
          <CommunityHub userType={userType} />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );
      
      case 'properties':
        return isAuthenticated && userType ? (
          <PropertyListings userType={userType} />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );
      
      case 'transactions':
        return isAuthenticated ? (
          <Transactions />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );
      
      case 'profile':
        return isAuthenticated && userType ? (
          <Profile userType={userType} />
        ) : (
          <Welcome onNavigate={handleNavigate} />
        );
      
      default:
        return <Welcome onNavigate={handleNavigate} />;
    }
  };

  // For welcome and login pages, don't show the layout
  if (currentPage === 'welcome' || currentPage === 'login-investor' || currentPage === 'login-benefactor') {
    return (
      <>
        {renderPage()}
        <Toaster />
      </>
    );
  }

  // For authenticated pages, show the layout with navigation
  return (
    <>
      <Layout
        currentPage={currentPage}
        onNavigate={handleNavigate}
        userType={userType}
        onLogout={handleLogout}
      >
        {renderPage()}
      </Layout>
      <Toaster />
    </>
  );
}
