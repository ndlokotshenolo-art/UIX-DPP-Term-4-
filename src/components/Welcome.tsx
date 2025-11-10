import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield, Users, TrendingUp, Building2 } from 'lucide-react';
import { AfricanPattern } from './AfricanPattern';

interface WelcomeProps {
  onNavigate: (page: string) => void;
}

export const Welcome = ({ onNavigate }: WelcomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <AfricanPattern className="w-full h-full text-[#0C7B47]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-[#0C7B47] p-4 rounded-2xl mb-6">
              <Building2 className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
            Building Wealth Together,{' '}
            <span className="text-[#0C7B47]">One Property at a Time</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Powered by PropStock — Trusted, FSCA-Compliant Property Crowdfunding for South Africans
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => onNavigate('login-investor')}
              className="bg-[#0C7B47] hover:bg-[#0C7B47]/90 text-white px-8 py-6 text-lg w-full sm:w-auto"
            >
              Join as Investor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => onNavigate('login-benefactor')}
              variant="outline"
              className="border-[#0C7B47] text-[#0C7B47] hover:bg-[#0C7B47]/10 px-8 py-6 text-lg w-full sm:w-auto"
            >
              Join as Benefactor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <Shield className="h-5 w-5 text-[#0C7B47] mr-2" />
            <span className="text-sm">FSCA-Compliant & Secure</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F5F5F5] p-8 rounded-2xl">
              <div className="bg-[#0C7B47] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Community Investment</h3>
              <p className="text-gray-600">
                Join investment groups and co-own rental properties with fellow South Africans. Build wealth together through the power of community.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#F5F5F5] p-8 rounded-2xl">
              <div className="bg-[#0C7B47] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Start from R500</h3>
              <p className="text-gray-600">
                Low minimum investment makes property ownership accessible to everyone. Earn monthly rental income and watch your wealth grow.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#F5F5F5] p-8 rounded-2xl">
              <div className="bg-[#0C7B47] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Trusted & Transparent</h3>
              <p className="text-gray-600">
                FSCA-compliant platform with full transparency. Track your investments, earnings, and property performance in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0C7B47] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl mb-2">2,500+</div>
              <div className="text-green-100">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl mb-2">R45M+</div>
              <div className="text-green-100">Invested</div>
            </div>
            <div>
              <div className="text-4xl mb-2">120+</div>
              <div className="text-green-100">Properties</div>
            </div>
            <div>
              <div className="text-4xl mb-2">12.5%</div>
              <div className="text-green-100">Avg. Annual Return</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center mb-12">
            How <span className="text-[#0C7B47]">PropStock</span> Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#0C7B47] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-3">Sign Up & Browse</h3>
              <p className="text-gray-600">
                Create your account as an Investor or Benefactor and explore verified property opportunities across South Africa.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0C7B47] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-3">Invest Together</h3>
              <p className="text-gray-600">
                Choose properties and invest from R500. Join or create investment groups to co-own rental properties with others.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0C7B47] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-3">Earn & Grow</h3>
              <p className="text-gray-600">
                Receive monthly rental income, track your portfolio performance, and watch your wealth grow over time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#F5F5F5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of South Africans who are already investing in their future through PropStock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('login-investor')}
              className="bg-[#0C7B47] hover:bg-[#0C7B47]/90 text-white px-8 py-6 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
