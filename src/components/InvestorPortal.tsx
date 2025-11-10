import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { TrendingUp, DollarSign, Home, Calendar, BookOpen, Eye, EyeOff, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AfricanPattern } from './AfricanPattern';

interface InvestorPortalProps {
  onNavigate: (page: string) => void;
}

export const InvestorPortal = ({ onNavigate }: InvestorPortalProps) => {
  const [allowBenefactorView, setAllowBenefactorView] = useState(false);

  // Mock data
  const monthlyIncomeData = [
    { month: 'Jul', income: 3200 },
    { month: 'Aug', income: 3450 },
    { month: 'Sep', income: 3800 },
    { month: 'Oct', income: 4100 },
    { month: 'Nov', income: 4350 },
    { month: 'Dec', income: 4200 },
  ];

  const portfolioGrowthData = [
    { month: 'Jul', value: 85000 },
    { month: 'Aug', value: 92000 },
    { month: 'Sep', value: 98000 },
    { month: 'Oct', value: 105000 },
    { month: 'Nov', value: 112000 },
    { month: 'Dec', value: 118500 },
  ];

  const activeProperties = [
    {
      id: 1,
      name: 'Sandton Executive Apartments',
      location: 'Sandton, Johannesburg',
      ownership: 8.5,
      monthlyReturn: 2100,
      totalInvested: 45000,
      roi: 11.2,
    },
    {
      id: 2,
      name: 'Sea Point Coastal Residences',
      location: 'Cape Town',
      ownership: 5.2,
      monthlyReturn: 1200,
      totalInvested: 28000,
      roi: 10.8,
    },
    {
      id: 3,
      name: 'Umhlanga Business Suites',
      location: 'Durban',
      ownership: 12.3,
      monthlyReturn: 1450,
      totalInvested: 35500,
      roi: 12.5,
    },
  ];

  const educationalResources = [
    { title: 'Property Investment 101', duration: '15 min read', category: 'Basics' },
    { title: 'Understanding ROI in Rental Properties', duration: '20 min read', category: 'Advanced' },
    { title: 'Smart Saving with Stokvels', duration: '12 min read', category: 'Community' },
    { title: 'Tax Benefits of Property Investment', duration: '18 min read', category: 'Finance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2">Investor Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your investment overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>Total Investment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">R118,500</div>
                  <div className="text-sm text-green-600 flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    +14.2% this year
                  </div>
                </div>
                <DollarSign className="h-10 w-10 text-[#0C7B47] opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>Monthly Income</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">R4,200</div>
                  <div className="text-sm text-green-600 flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    +8.5% vs last month
                  </div>
                </div>
                <TrendingUp className="h-10 w-10 text-[#0C7B47] opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>Active Properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">3</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Across 3 cities
                  </div>
                </div>
                <Home className="h-10 w-10 text-[#0C7B47] opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>Avg. ROI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">11.5%</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Annual return
                  </div>
                </div>
                <TrendingUp className="h-10 w-10 text-[#0C7B47] opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Income Trend</CardTitle>
              <CardDescription>Your rental income over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyIncomeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    formatter={(value) => [`R${value}`, 'Income']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                  />
                  <Bar dataKey="income" fill="#0C7B47" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Growth</CardTitle>
              <CardDescription>Total portfolio value over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={portfolioGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    formatter={(value) => [`R${value}`, 'Value']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#0C7B47" strokeWidth={3} dot={{ fill: '#0C7B47', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="properties">Active Properties</TabsTrigger>
            <TabsTrigger value="seminar">Upcoming Seminar</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Active Properties Tab */}
          <TabsContent value="properties" className="space-y-4">
            {activeProperties.map((property) => (
              <Card key={property.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl mb-1">{property.name}</h3>
                      <p className="text-gray-600 mb-4">{property.location}</p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Ownership</p>
                          <p className="text-lg text-[#0C7B47]">{property.ownership}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly Return</p>
                          <p className="text-lg text-[#0C7B47]">R{property.monthlyReturn}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Invested</p>
                          <p className="text-lg">R{property.totalInvested.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">ROI</p>
                          <p className="text-lg text-green-600">{property.roi}%</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="border-[#0C7B47] text-[#0C7B47] hover:bg-[#0C7B47]/10"
                      onClick={() => onNavigate('properties')}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button 
              onClick={() => onNavigate('properties')}
              className="w-full bg-[#0C7B47] hover:bg-[#0C7B47]/90"
            >
              Browse More Properties
            </Button>
          </TabsContent>

          {/* Seminar Tab */}
          <TabsContent value="seminar">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <AfricanPattern className="w-full h-full text-[#0C7B47]" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Investor Seminar: Property Market Insights 2025</CardTitle>
                    <CardDescription className="mt-2">
                      Join us for an in-depth discussion on South African property market trends
                    </CardDescription>
                  </div>
                  <Badge className="bg-[#0C7B47]">In-Person</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-[#0C7B47]" />
                    <div>
                      <p className="text-sm text-gray-600">Date & Time</p>
                      <p>December 15, 2025 | 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5 text-[#0C7B47]" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p>Sandton Convention Centre</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-[#0C7B47]" />
                    <div>
                      <p className="text-sm text-gray-600">Spots Available</p>
                      <p>45 / 100</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3">Agenda</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#0C7B47] mr-2">•</span>
                      <span>Market trends and predictions for 2025</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C7B47] mr-2">•</span>
                      <span>Maximizing returns in fractional property investment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C7B47] mr-2">•</span>
                      <span>Q&A with property experts and successful investors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C7B47] mr-2">•</span>
                      <span>Networking session with refreshments</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-[#0C7B47] hover:bg-[#0C7B47]/90">
                  <Calendar className="mr-2 h-4 w-4" />
                  RSVP Now
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationalResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <BookOpen className="h-8 w-8 text-[#0C7B47]" />
                      <Badge variant="outline">{resource.category}</Badge>
                    </div>
                    <h3 className="text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-600">{resource.duration}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Sharing Settings</CardTitle>
                <CardDescription>
                  Control how your investment data is shared with the PropStock community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1 flex-1">
                    <Label htmlFor="benefactor-view" className="flex items-center gap-2">
                      {allowBenefactorView ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      Allow Benefactors to View My Portfolio
                    </Label>
                    <p className="text-sm text-gray-600">
                      When enabled, Benefactors can see anonymized insights from your investment data, 
                      helping build trust and transparency in the community.
                    </p>
                  </div>
                  <Switch
                    id="benefactor-view"
                    checked={allowBenefactorView}
                    onCheckedChange={setAllowBenefactorView}
                  />
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    Your personal information and specific investment amounts will never be shared. 
                    Only aggregated, anonymized data is used for community insights.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
