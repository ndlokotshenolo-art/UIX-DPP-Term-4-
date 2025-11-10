import React, { useState } from 'react';
import { Menu, X, Home, Users, Building2, Calendar, TrendingUp, User, LogOut, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { AfricanPattern } from './AfricanPattern';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  userType?: 'investor' | 'benefactor' | null;
  onLogout?: () => void;
}

export const Layout = ({ children, currentPage, onNavigate, userType, onLogout }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = userType
    ? [
        { name: 'Dashboard', icon: Home, page: userType === 'investor' ? 'investor-portal' : 'benefactor-portal' },
        { name: 'Properties', icon: Building2, page: 'properties' },
        { name: 'Community Hub', icon: Users, page: 'community' },
        { name: 'Transactions', icon: TrendingUp, page: 'transactions' },
        { name: 'Profile', icon: User, page: 'profile' },
      ]
    : [];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate('welcome')}>
              <div className="bg-[#0C7B47] p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-semibold">PropStock</span>
            </div>

            {/* Desktop Navigation */}
            {userType && (
              <nav className="hidden md:flex space-x-1">
                {navItems.map((item) => (
                  <Button
                    key={item.page}
                    variant={currentPage === item.page ? 'default' : 'ghost'}
                    onClick={() => onNavigate(item.page)}
                    className={currentPage === item.page ? 'bg-[#0C7B47] hover:bg-[#0C7B47]/90' : ''}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Button>
                ))}
              </nav>
            )}

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {userType && onLogout && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onLogout}
                  className="hidden md:flex rounded-full"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              )}

              {userType && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && userType && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-t`}>
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.page}
                  variant={currentPage === item.page ? 'default' : 'ghost'}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full justify-start ${currentPage === item.page ? 'bg-[#0C7B47] hover:bg-[#0C7B47]/90' : ''}`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </Button>
              ))}
              {onLogout && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full justify-start"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className={`relative mt-20 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-[#F5F5F5] border-gray-200'} border-t`}>
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <AfricanPattern className="w-full h-full text-[#0C7B47]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-[#0C7B47] p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-semibold">PropStock</span>
              </div>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                Where South Africans Invest, Connect, and Build Wealth Together.
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                FSCA-Compliant Property Crowdfunding
              </p>
            </div>

            {/* Team Credits */}
            <div>
              <h3 className={`${darkMode ? 'text-white' : 'text-black'} mb-4`}>Our Team</h3>
              <ul className="space-y-2">
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <span className="font-medium">Tshenolo</span> - Marketing & Branding
                </li>
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <span className="font-medium">Mase</span> - Strategy & Partnerships
                </li>
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <span className="font-medium">Lwazi</span> - UI/UX Design
                </li>
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <span className="font-medium">Dash</span> - Finance & Operations
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className={`${darkMode ? 'text-white' : 'text-black'} mb-4`}>Get in Touch</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                support@propstock.co.za
              </p>
              <div className="mt-6">
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  © 2025 PropStock. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
