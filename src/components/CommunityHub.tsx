import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Calendar, Video, MapPin, Users, MessageSquare, TrendingUp, BarChart3 } from 'lucide-react';
import { AfricanPattern } from './AfricanPattern';

interface CommunityHubProps {
  userType: 'investor' | 'benefactor';
}

export const CommunityHub = ({ userType }: CommunityHubProps) => {
  const [investorFormData, setInvestorFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
  });

  const [benefactorFormData, setBenefactorFormData] = useState({
    name: '',
    email: '',
    groupName: '',
    questions: '',
  });

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for registering! A confirmation email will be sent shortly.');
  };

  const handleBenefactorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration successful! Webinar link will be sent to your email.');
  };

  const communityInsights = [
    { metric: 'Total Community Members', value: '2,547', icon: Users },
    { metric: 'Active Investment Groups', value: '124', icon: TrendingUp },
    { metric: 'Community Events Hosted', value: '48', icon: Calendar },
    { metric: 'Total Properties Funded', value: '120+', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl mb-4">Community Learning Hub</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect, learn, and grow with fellow investors and benefactors. 
            Join our events to gain insights and build your property investment knowledge.
          </p>
        </div>

        {/* Community Insights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {communityInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="h-8 w-8 text-[#0C7B47] mx-auto mb-2" />
                  <div className="text-2xl mb-1 text-[#0C7B47]">{insight.value}</div>
                  <p className="text-sm text-gray-600">{insight.metric}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Events Section - Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Investor Seminar */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-[#0C7B47]">In-Person Event</Badge>
                <Badge variant="outline">Investors</Badge>
              </div>
              <CardTitle className="text-2xl">Investor Seminar</CardTitle>
              <CardDescription>
                Property Market Insights 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[#0C7B47] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p>December 15, 2025 | 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#0C7B47] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p>Sandton Convention Centre, Johannesburg</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#0C7B47] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Availability</p>
                    <p>45 spots remaining (100 total)</p>
                  </div>
                </div>
              </div>

              {/* Agenda */}
              <div>
                <h4 className="mb-3">Event Agenda</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#0C7B47] mr-2">•</span>
                    <span>Market trends and 2025 predictions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0C7B47] mr-2">•</span>
                    <span>Maximizing fractional property ROI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0C7B47] mr-2">•</span>
                    <span>Panel discussion with successful investors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0C7B47] mr-2">•</span>
                    <span>Networking lunch and Q&A session</span>
                  </li>
                </ul>
              </div>

              {/* Registration Form */}
              {userType === 'investor' && (
                <form onSubmit={handleInvestorSubmit} className="space-y-4 pt-4 border-t">
                  <h4>Register Now</h4>
                  <div className="space-y-2">
                    <Label htmlFor="investor-name">Full Name *</Label>
                    <Input
                      id="investor-name"
                      required
                      value={investorFormData.name}
                      onChange={(e) => setInvestorFormData({ ...investorFormData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="investor-email">Email Address *</Label>
                    <Input
                      id="investor-email"
                      type="email"
                      required
                      value={investorFormData.email}
                      onChange={(e) => setInvestorFormData({ ...investorFormData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="investor-phone">Phone Number</Label>
                    <Input
                      id="investor-phone"
                      value={investorFormData.phone}
                      onChange={(e) => setInvestorFormData({ ...investorFormData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="investor-interests">Areas of Interest</Label>
                    <Textarea
                      id="investor-interests"
                      placeholder="What topics would you like to learn more about?"
                      value={investorFormData.interests}
                      onChange={(e) => setInvestorFormData({ ...investorFormData, interests: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#0C7B47] hover:bg-[#0C7B47]/90">
                    <Calendar className="mr-2 h-4 w-4" />
                    Confirm RSVP
                  </Button>
                </form>
              )}

              {userType === 'benefactor' && (
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-4">
                    This event is for investors. Join our Benefactor Webinar to learn about group investment strategies.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    Investor Event Only
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Right Side - Benefactor Webinar */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-blue-600">Virtual Event</Badge>
                <Badge variant="outline">Benefactors</Badge>
              </div>
              <CardTitle className="text-2xl">Benefactor Webinar</CardTitle>
              <CardDescription>
                Group Investment Strategies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[#0C7B47] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Date & Time</p>
                    <p>December 18, 2025 | 6:00 PM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-[#0C7B47] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Platform</p>
                    <p>Zoom (Link sent upon registration)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#0C7B47] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Registered</p>
                    <p>187 attendees and counting</p>
                  </div>
                </div>
              </div>

              {/* Topics */}
              <div>
                <h4 className="mb-3">What You'll Learn</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#0C7B47] mr-2">•</span>
                    <span>Building successful investment groups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0C7B47] mr-2">•</span>
                    <span>Property selection for collective investing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0C7B47] mr-2">•</span>
                    <span>Legal frameworks and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0C7B47] mr-2">•</span>
                    <span>Case studies from successful SA groups</span>
                  </li>
                </ul>
              </div>

              {/* Registration Form */}
              {userType === 'benefactor' && (
                <form onSubmit={handleBenefactorSubmit} className="space-y-4 pt-4 border-t">
                  <h4>Register Now</h4>
                  <div className="space-y-2">
                    <Label htmlFor="benefactor-name">Full Name *</Label>
                    <Input
                      id="benefactor-name"
                      required
                      value={benefactorFormData.name}
                      onChange={(e) => setBenefactorFormData({ ...benefactorFormData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="benefactor-email">Email Address *</Label>
                    <Input
                      id="benefactor-email"
                      type="email"
                      required
                      value={benefactorFormData.email}
                      onChange={(e) => setBenefactorFormData({ ...benefactorFormData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="benefactor-group">Investment Group Name (if any)</Label>
                    <Input
                      id="benefactor-group"
                      value={benefactorFormData.groupName}
                      onChange={(e) => setBenefactorFormData({ ...benefactorFormData, groupName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="benefactor-questions">Questions for the Speakers</Label>
                    <Textarea
                      id="benefactor-questions"
                      placeholder="Any specific topics you'd like us to cover?"
                      value={benefactorFormData.questions}
                      onChange={(e) => setBenefactorFormData({ ...benefactorFormData, questions: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#0C7B47] hover:bg-[#0C7B47]/90">
                    <Video className="mr-2 h-4 w-4" />
                    Register for Webinar
                  </Button>
                </form>
              )}

              {userType === 'investor' && (
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-4">
                    This webinar is for benefactors. Check out the Investor Seminar for content tailored to your interests.
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    Benefactor Event Only
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Community Insights Dashboard */}
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <AfricanPattern className="w-full h-full text-[#0C7B47]" />
          </div>
          <CardHeader>
            <CardTitle>Community Insights Dashboard</CardTitle>
            <CardDescription>
              Aggregated feedback and market insights from our community events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <MessageSquare className="h-8 w-8 text-[#0C7B47] mb-3" />
                <h4 className="mb-2">Top Discussion Topics</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Cape Town market opportunities</li>
                  <li>• Risk management strategies</li>
                  <li>• Tax optimization</li>
                </ul>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <TrendingUp className="h-8 w-8 text-[#0C7B47] mb-3" />
                <h4 className="mb-2">Market Sentiment</h4>
                <p className="text-sm text-gray-600 mb-2">
                  87% of attendees are bullish on SA property market for 2025
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-[#0C7B47] h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <BarChart3 className="h-8 w-8 text-[#0C7B47] mb-3" />
                <h4 className="mb-2">Popular Cities</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Johannesburg (42%)</li>
                  <li>• Cape Town (35%)</li>
                  <li>• Durban (23%)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>About Community Insights:</strong> This data is collected from event feedback forms, 
                anonymous surveys, and community discussions. It helps both investors and benefactors make 
                informed decisions based on real market sentiment and peer experiences.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
