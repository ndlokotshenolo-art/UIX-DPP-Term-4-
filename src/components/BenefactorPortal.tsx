import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Users, DollarSign, TrendingUp, Calendar, MessageSquare, Plus, Video, Eye } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { AfricanPattern } from './AfricanPattern';

interface BenefactorPortalProps {
  onNavigate: (page: string) => void;
}

export const BenefactorPortal = ({ onNavigate }: BenefactorPortalProps) => {
  // Mock data
  const groupPools = [
    {
      id: 1,
      name: 'Cape Town Investment Circle',
      members: 12,
      totalContributions: 156000,
      targetAmount: 200000,
      properties: 2,
      monthlyReturn: 8500,
    },
    {
      id: 2,
      name: 'Gauteng Property Collective',
      members: 8,
      totalContributions: 98000,
      targetAmount: 150000,
      properties: 1,
      monthlyReturn: 5200,
    },
  ];

  const contributionData = [
    { name: 'Your Contribution', value: 45000, color: '#0C7B47' },
    { name: 'Other Members', value: 111000, color: '#E5E5E5' },
  ];

  const investorInsights = [
    { metric: 'Avg Portfolio Size', value: 'R118,500', trend: '+14.2%' },
    { metric: 'Avg Monthly Income', value: 'R4,200', trend: '+8.5%' },
    { metric: 'Avg ROI', value: '11.5%', trend: '+2.1%' },
    { metric: 'Active Investors', value: '2,547', trend: '+18%' },
  ];

  const monthlyGrowthData = [
    { month: 'Jul', amount: 12000 },
    { month: 'Aug', amount: 18000 },
    { month: 'Sep', amount: 25000 },
    { month: 'Oct', amount: 32000 },
    { month: 'Nov', amount: 38000 },
    { month: 'Dec', amount: 45000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2">Benefactor Dashboard</h1>
          <p className="text-gray-600">Manage your group investments and connect with fellow benefactors.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>Total Contributions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">R45,000</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Across 2 groups
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
              <CardDescription>Group Members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">20</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Total connections
                  </div>
                </div>
                <Users className="h-10 w-10 text-[#0C7B47] opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>Monthly Returns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">R2,800</div>
                  <div className="text-sm text-green-600 mt-1">
                    From group pools
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
              <CardDescription>Properties Owned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">3</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Through groups
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
              <CardTitle>Contribution Breakdown</CardTitle>
              <CardDescription>Your share in Cape Town Investment Circle</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={contributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {contributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`R${value}`, '']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                {contributionData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Growth Journey</CardTitle>
              <CardDescription>Total contributions over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    formatter={(value) => [`R${value}`, 'Contribution']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                  />
                  <Bar dataKey="amount" fill="#0C7B47" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="groups" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="groups">My Groups</TabsTrigger>
            <TabsTrigger value="insights">Investor Insights</TabsTrigger>
            <TabsTrigger value="webinar">Upcoming Webinar</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          {/* My Groups Tab */}
          <TabsContent value="groups" className="space-y-4">
            {groupPools.map((group) => (
              <Card key={group.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-xl">{group.name}</h3>
                        <Badge variant="outline">{group.members} members</Badge>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Progress to Target</span>
                            <span className="text-[#0C7B47]">
                              R{group.totalContributions.toLocaleString()} / R{group.targetAmount.toLocaleString()}
                            </span>
                          </div>
                          <Progress value={(group.totalContributions / group.targetAmount) * 100} className="h-2" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Properties</p>
                          <p className="text-lg text-[#0C7B47]">{group.properties}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly Return</p>
                          <p className="text-lg text-[#0C7B47]">R{group.monthlyReturn.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Completion</p>
                          <p className="text-lg">{Math.round((group.totalContributions / group.targetAmount) * 100)}%</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button 
                        variant="outline" 
                        className="border-[#0C7B47] text-[#0C7B47] hover:bg-[#0C7B47]/10"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Message Group
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => onNavigate('properties')}
                      >
                        View Properties
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button className="w-full bg-[#0C7B47] hover:bg-[#0C7B47]/90">
              <Plus className="mr-2 h-4 w-4" />
              Create New Group Pool
            </Button>
          </TabsContent>

          {/* Investor Insights Tab */}
          <TabsContent value="insights">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <AfricanPattern className="w-full h-full text-[#0C7B47]" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Investor Insights</CardTitle>
                    <CardDescription className="mt-2">
                      Anonymized data from our investor community to help you make informed decisions
                    </CardDescription>
                  </div>
                  <Badge className="bg-[#0C7B47]">
                    <Eye className="mr-1 h-3 w-3" />
                    Live Data
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {investorInsights.map((insight, index) => (
                    <div key={index} className="bg-[#F5F5F5] p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">{insight.metric}</p>
                      <p className="text-2xl mb-1 text-[#0C7B47]">{insight.value}</p>
                      <p className="text-sm text-green-600">{insight.trend} this year</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Trust & Transparency:</strong> This data comes from investors who have opted 
                    to share their anonymized portfolio insights with the benefactor community. 
                    Individual identities and specific investments remain private.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Webinar Tab */}
          <TabsContent value="webinar">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                <AfricanPattern className="w-full h-full text-[#0C7B47]" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Benefactor Webinar: Group Investment Strategies</CardTitle>
                    <CardDescription className="mt-2">
                      Learn how to maximize returns through collaborative property investment
                    </CardDescription>
                  </div>
                  <Badge className="bg-blue-600">Virtual</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-[#0C7B47]" />
                    <div>
                      <p className="text-sm text-gray-600">Date & Time</p>
                      <p>December 18, 2025 | 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-[#0C7B47]" />
                    <div>
                      <p className="text-sm text-gray-600">Platform</p>
                      <p>Zoom (Link will be sent)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[#0C7B47]" />
                    <div>
                      <p className="text-sm text-gray-600">Registered</p>
                      <p>187 attendees</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3">What You'll Learn</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#0C7B47] mr-2">•</span>
                      <span>How to build and manage successful investment groups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C7B47] mr-2">•</span>
                      <span>Property selection criteria for group investments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C7B47] mr-2">•</span>
                      <span>Legal and financial frameworks for benefactors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C7B47] mr-2">•</span>
                      <span>Case studies: Successful group investments in SA</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-[#0C7B47] hover:bg-[#0C7B47]/90">
                  <Calendar className="mr-2 h-4 w-4" />
                  Register for Webinar
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <Plus className="h-10 w-10 text-[#0C7B47] mb-4" />
                  <h3 className="text-lg mb-2">Create Investment Pool</h3>
                  <p className="text-sm text-gray-600">
                    Start a new group and invite members to co-invest in properties
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('properties')}>
                <CardContent className="pt-6">
                  <Eye className="h-10 w-10 text-[#0C7B47] mb-4" />
                  <h3 className="text-lg mb-2">Browse Properties</h3>
                  <p className="text-sm text-gray-600">
                    View verified property opportunities available for group investment
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <MessageSquare className="h-10 w-10 text-[#0C7B47] mb-4" />
                  <h3 className="text-lg mb-2">Investor Relations</h3>
                  <p className="text-sm text-gray-600">
                    Connect with our team for personalized investment guidance
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
