import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowDownRight, ArrowUpRight, Calendar, Download, TrendingUp, DollarSign } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AfricanPattern } from './AfricanPattern';

export const Transactions = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  // Mock transaction data
  const transactions = [
    {
      id: 1,
      date: '2025-01-05',
      type: 'income',
      description: 'Rental Income - Sandton Executive Apartments',
      amount: 2100,
      property: 'Sandton Executive Apartments',
      status: 'completed',
    },
    {
      id: 2,
      date: '2025-01-02',
      type: 'income',
      description: 'Rental Income - Sea Point Coastal Residences',
      amount: 1200,
      property: 'Sea Point Coastal Residences',
      status: 'completed',
    },
    {
      id: 3,
      date: '2024-12-20',
      type: 'investment',
      description: 'Investment - Umhlanga Business Suites',
      amount: -5000,
      property: 'Umhlanga Business Suites',
      status: 'completed',
    },
    {
      id: 4,
      date: '2024-12-05',
      type: 'income',
      description: 'Rental Income - Sandton Executive Apartments',
      amount: 2100,
      property: 'Sandton Executive Apartments',
      status: 'completed',
    },
    {
      id: 5,
      date: '2024-12-02',
      type: 'dividend',
      description: 'Quarterly Dividend - Sea Point Coastal Residences',
      amount: 850,
      property: 'Sea Point Coastal Residences',
      status: 'completed',
    },
    {
      id: 6,
      date: '2024-11-15',
      type: 'investment',
      description: 'Additional Investment - Sandton Executive Apartments',
      amount: -10000,
      property: 'Sandton Executive Apartments',
      status: 'completed',
    },
    {
      id: 7,
      date: '2024-11-05',
      type: 'income',
      description: 'Rental Income - Umhlanga Business Suites',
      amount: 1450,
      property: 'Umhlanga Business Suites',
      status: 'completed',
    },
    {
      id: 8,
      date: '2024-11-02',
      type: 'income',
      description: 'Rental Income - Sea Point Coastal Residences',
      amount: 1200,
      property: 'Sea Point Coastal Residences',
      status: 'completed',
    },
  ];

  const monthlyData = [
    { month: 'Jul', income: 3200, expenses: 200 },
    { month: 'Aug', income: 3450, expenses: 150 },
    { month: 'Sep', income: 3800, expenses: 300 },
    { month: 'Oct', income: 4100, expenses: 250 },
    { month: 'Nov', income: 4350, expenses: 200 },
    { month: 'Dec', income: 4200, expenses: 180 },
  ];

  const cumulativeReturns = [
    { month: 'Jul', value: 3000 },
    { month: 'Aug', value: 6300 },
    { month: 'Sep', value: 9800 },
    { month: 'Oct', value: 13650 },
    { month: 'Nov', value: 18000 },
    { month: 'Dec', value: 22020 },
  ];

  const incomeByProperty = [
    { name: 'Sandton Executive', value: 12600, color: '#0C7B47' },
    { name: 'Sea Point Coastal', value: 7200, color: '#10B981' },
    { name: 'Umhlanga Business', value: 4350, color: '#34D399' },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-ZA', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatCurrency = (amount: number) => {
    return `R${Math.abs(amount).toLocaleString()}`;
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income' || t.type === 'dividend')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalInvestments = Math.abs(
    transactions
      .filter(t => t.type === 'investment')
      .reduce((sum, t) => sum + t.amount, 0)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl mb-2">Transactions & Earnings</h1>
            <p className="text-gray-600">Track your investment performance and earnings history</p>
          </div>
          <Button className="mt-4 sm:mt-0 bg-[#0C7B47] hover:bg-[#0C7B47]/90">
            <Download className="mr-2 h-4 w-4" />
            Export Statement
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>Total Income (YTD)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">{formatCurrency(totalIncome)}</div>
                  <div className="text-sm text-green-600 flex items-center mt-1">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    +18.5% vs last year
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
              <CardDescription>Total Investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl">{formatCurrency(totalInvestments)}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Across 3 properties
                  </div>
                </div>
                <DollarSign className="h-10 w-10 text-gray-400 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-[#0C7B47]">R4,200</div>
                  <div className="text-sm text-gray-600 mt-1">
                    January 2025
                  </div>
                </div>
                <Calendar className="h-10 w-10 text-[#0C7B47] opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
              <AfricanPattern className="w-full h-full text-[#0C7B47]" />
            </div>
            <CardHeader className="pb-2">
              <CardDescription>Net Returns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl text-green-600">+R22,020</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Last 6 months
                  </div>
                </div>
                <ArrowUpRight className="h-10 w-10 text-green-600 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Income & Expenses</CardTitle>
              <CardDescription>Monthly breakdown of your earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    formatter={(value) => [`R${value}`, '']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                  />
                  <Bar dataKey="income" fill="#0C7B47" radius={[8, 8, 0, 0]} name="Income" />
                  <Bar dataKey="expenses" fill="#EF4444" radius={[8, 8, 0, 0]} name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Income by Property</CardTitle>
              <CardDescription>Distribution of earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={incomeByProperty}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {incomeByProperty.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`R${value}`, '']}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {incomeByProperty.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-[#0C7B47]">R{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cumulative Returns Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cumulative Returns</CardTitle>
            <CardDescription>Your total earnings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={cumulativeReturns}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  formatter={(value) => [`R${value}`, 'Total Returns']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e5e5' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0C7B47" 
                  strokeWidth={3} 
                  dot={{ fill: '#0C7B47', r: 5 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Complete record of all your transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All Transactions</TabsTrigger>
                <TabsTrigger value="income">Income</TabsTrigger>
                <TabsTrigger value="investments">Investments</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-3">
                {transactions.map((transaction) => (
                  <div 
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`p-2 rounded-lg ${
                        transaction.amount > 0 ? 'bg-green-100' : 'bg-gray-200'
                      }`}>
                        {transaction.amount > 0 ? (
                          <ArrowDownRight className="h-5 w-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-gray-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="mb-1">{transaction.description}</p>
                        <p className="text-sm text-gray-600">{formatDate(transaction.date)}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg ${
                          transaction.amount > 0 ? 'text-green-600' : 'text-gray-900'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                        </p>
                        <Badge variant="outline" className="mt-1">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="income" className="space-y-3">
                {transactions
                  .filter(t => t.type === 'income' || t.type === 'dividend')
                  .map((transaction) => (
                    <div 
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="p-2 rounded-lg bg-green-100">
                          <ArrowDownRight className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="mb-1">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{formatDate(transaction.date)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg text-green-600">
                            +{formatCurrency(transaction.amount)}
                          </p>
                          <Badge variant="outline" className="mt-1">
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>

              <TabsContent value="investments" className="space-y-3">
                {transactions
                  .filter(t => t.type === 'investment')
                  .map((transaction) => (
                    <div 
                      key={transaction.id}
                      className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="p-2 rounded-lg bg-gray-200">
                          <ArrowUpRight className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <p className="mb-1">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{formatDate(transaction.date)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg text-gray-900">
                            {formatCurrency(transaction.amount)}
                          </p>
                          <Badge variant="outline" className="mt-1">
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
