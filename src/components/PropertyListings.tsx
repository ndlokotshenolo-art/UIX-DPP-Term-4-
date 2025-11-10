import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { MapPin, TrendingUp, Users, DollarSign, Search, SlidersHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyListingsProps {
  userType: 'investor' | 'benefactor';
}

export const PropertyListings = ({ userType }: PropertyListingsProps) => {
  const [filterCity, setFilterCity] = useState('all');
  const [filterYield, setFilterYield] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const properties = [
    {
      id: 1,
      name: 'Sandton Executive Apartments',
      location: 'Sandton, Johannesburg',
      city: 'johannesburg',
      image: 'https://images.unsplash.com/photo-1704964888945-d6a88d0d3a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGpvaGFubmVzYnVyZ3xlbnwxfHx8fDE3NjI3MTYwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      minInvestment: 500,
      totalValue: 4500000,
      roi: 11.2,
      monthlyReturn: 850,
      slotsAvailable: 23,
      totalSlots: 100,
      type: 'investor',
      groupType: 'Individual Investors',
    },
    {
      id: 2,
      name: 'Sea Point Coastal Residences',
      location: 'Sea Point, Cape Town',
      city: 'capetown',
      image: 'https://images.unsplash.com/photo-1712952822700-c95cedab924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwY2FwZSUyMHRvd258ZW58MXx8fHwxNzYyNzE2MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      minInvestment: 1000,
      totalValue: 6200000,
      roi: 10.8,
      monthlyReturn: 1200,
      slotsAvailable: 12,
      totalSlots: 80,
      type: 'benefactor',
      groupType: 'Group Investment',
    },
    {
      id: 3,
      name: 'Umhlanga Business Suites',
      location: 'Umhlanga, Durban',
      city: 'durban',
      image: 'https://images.unsplash.com/photo-1711450998947-02c836bdd62e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGhvdXNlJTIwZHVyYmFuJTIwc291dGglMjBhZnJpY2F8ZW58MXx8fHwxNzYyNzE2MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      minInvestment: 750,
      totalValue: 3800000,
      roi: 12.5,
      monthlyReturn: 950,
      slotsAvailable: 34,
      totalSlots: 120,
      type: 'investor',
      groupType: 'Mixed Investment',
    },
    {
      id: 4,
      name: 'Pretoria Garden Estates',
      location: 'Menlyn, Pretoria',
      city: 'pretoria',
      image: 'https://images.unsplash.com/photo-1662309376204-8d6bef792ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0b3duaG91c2UlMjBwcmV0b3JpYXxlbnwxfHx8fDE3NjI3MTYwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      minInvestment: 500,
      totalValue: 2900000,
      roi: 9.8,
      monthlyReturn: 720,
      slotsAvailable: 45,
      totalSlots: 150,
      type: 'benefactor',
      groupType: 'Group Investment',
    },
    {
      id: 5,
      name: 'Rosebank Urban Living',
      location: 'Rosebank, Johannesburg',
      city: 'johannesburg',
      image: 'https://images.unsplash.com/photo-1762397794646-f19044bd0828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBjb21wbGV4JTIwcmVzaWRlbnRpYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI3MTYxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      minInvestment: 800,
      totalValue: 5100000,
      roi: 11.8,
      monthlyReturn: 1050,
      slotsAvailable: 18,
      totalSlots: 90,
      type: 'investor',
      groupType: 'Individual Investors',
    },
    {
      id: 6,
      name: 'Waterfront Marina Apartments',
      location: 'V&A Waterfront, Cape Town',
      city: 'capetown',
      image: 'https://images.unsplash.com/photo-1712952822700-c95cedab924d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHByb3BlcnR5JTIwY2FwZSUyMHRvd258ZW58MXx8fHwxNzYyNzE2MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      minInvestment: 1500,
      totalValue: 7800000,
      roi: 13.2,
      monthlyReturn: 1650,
      slotsAvailable: 8,
      totalSlots: 60,
      type: 'benefactor',
      groupType: 'Group Investment',
    },
  ];

  const filteredProperties = properties.filter((property) => {
    const matchesCity = filterCity === 'all' || property.city === filterCity;
    const matchesYield = filterYield === 'all' || 
      (filterYield === 'high' && property.roi >= 12) ||
      (filterYield === 'medium' && property.roi >= 10 && property.roi < 12) ||
      (filterYield === 'low' && property.roi < 10);
    const matchesType = filterType === 'all' || property.type === filterType;
    const matchesSearch = searchQuery === '' || 
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCity && matchesYield && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2">Property Listings</h1>
          <p className="text-gray-600">
            Browse verified properties across South Africa. Start investing from R500.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search properties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* City Filter */}
              <Select value={filterCity} onValueChange={setFilterCity}>
                <SelectTrigger>
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="johannesburg">Johannesburg</SelectItem>
                  <SelectItem value="capetown">Cape Town</SelectItem>
                  <SelectItem value="durban">Durban</SelectItem>
                  <SelectItem value="pretoria">Pretoria</SelectItem>
                </SelectContent>
              </Select>

              {/* Yield Filter */}
              <Select value={filterYield} onValueChange={setFilterYield}>
                <SelectTrigger>
                  <SelectValue placeholder="By Yield" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Yields</SelectItem>
                  <SelectItem value="high">High (12%+)</SelectItem>
                  <SelectItem value="medium">Medium (10-12%)</SelectItem>
                  <SelectItem value="low">Lower (&lt;10%)</SelectItem>
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="By Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="investor">Individual Investor</SelectItem>
                  <SelectItem value="benefactor">Group Investment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>Showing {filteredProperties.length} of {properties.length} properties</span>
              <Button variant="ghost" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
              {/* Property Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={property.roi >= 12 ? 'bg-green-600' : 'bg-[#0C7B47]'}>
                    {property.roi}% ROI
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary">
                    {property.groupType}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{property.name}</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Min. Investment</p>
                    <p className="text-[#0C7B47]">R{property.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Monthly Return</p>
                    <p className="text-[#0C7B47]">R{property.monthlyReturn}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Property Value</p>
                    <p>R{(property.totalValue / 1000000).toFixed(1)}M</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Slots Available</p>
                    <p>{property.slotsAvailable}/{property.totalSlots}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>Funding Progress</span>
                    <span>{Math.round(((property.totalSlots - property.slotsAvailable) / property.totalSlots) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#0C7B47] h-2 rounded-full transition-all" 
                      style={{ width: `${((property.totalSlots - property.slotsAvailable) / property.totalSlots) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-[#0C7B47] hover:bg-[#0C7B47]/90">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Invest Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <Card className="py-12">
            <CardContent className="text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl mb-2">No Properties Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to see more properties
              </p>
              <Button 
                onClick={() => {
                  setFilterCity('all');
                  setFilterYield('all');
                  setFilterType('all');
                  setSearchQuery('');
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
