import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2, Mail, Lock, Shield, Chrome } from 'lucide-react';
import { AfricanPattern } from './AfricanPattern';

interface LoginProps {
  userType: 'investor' | 'benefactor';
  onLogin: (userType: 'investor' | 'benefactor') => void;
  onNavigate: (page: string) => void;
}

export const Login = ({ userType, onLogin, onNavigate }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, this would call Firebase Authentication
    onLogin(userType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-10">
        <AfricanPattern className="w-full h-full text-[#0C7B47]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-[#0C7B47] p-3 rounded-xl mb-4 cursor-pointer" onClick={() => onNavigate('welcome')}>
            <Building2 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl mb-2">
            Welcome to <span className="text-[#0C7B47]">PropStock</span>
          </h1>
          <p className="text-gray-600">
            {userType === 'investor' ? 'Investor Portal' : 'Benefactor Portal'}
          </p>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your {userType} dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-[#0C7B47] hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#0C7B47] hover:bg-[#0C7B47]/90 py-6"
              >
                Sign In to Dashboard
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onLogin(userType)}
                  className="w-full"
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onLogin(userType)}
                  className="w-full"
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Apple
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center text-sm text-gray-600 mt-4">
                Don't have an account?{' '}
                <a href="#" className="text-[#0C7B47] hover:underline">
                  Sign up
                </a>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md text-sm">
            <Shield className="h-4 w-4 text-[#0C7B47] mr-2" />
            <span className="text-gray-600">
              FSCA-Compliant | Your data is secure
            </span>
          </div>
        </div>

        {/* Privacy Notice */}
        <p className="mt-4 text-xs text-center text-gray-500 max-w-sm mx-auto">
          By signing in, you agree to our Terms of Service and Privacy Policy. 
          We are committed to protecting your data and ensuring compliance with South African financial regulations.
        </p>
      </div>
    </div>
  );
};
