import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { User, Mail, Phone, MapPin, Upload, Bell, Shield, CreditCard, FileText } from 'lucide-react';
import { AfricanPattern } from './AfricanPattern';

interface ProfileProps {
  userType: 'investor' | 'benefactor';
}

export const Profile = ({ userType }: ProfileProps) => {
  const [profileData, setProfileData] = useState({
    name: 'Thabo Nkosi',
    email: 'thabo.nkosi@example.com',
    phone: '+27 82 123 4567',
    address: '123 Market Street, Sandton, Johannesburg',
    idNumber: '8505***********',
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    propertyUpdates: true,
    communityEvents: true,
    monthlyReports: true,
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2">Profile & Settings</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Profile Summary */}
          <div className="lg:col-span-1">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <AfricanPattern className="w-full h-full text-[#0C7B47]" />
              </div>
              <CardContent className="pt-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1688302529084-767fbc296565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDF8fHx8MTc2MjcxNjEwMHww&ixlib=rb-4.1.0&q=80&w=200" />
                  <AvatarFallback className="bg-[#0C7B47] text-white text-2xl">TN</AvatarFallback>
                </Avatar>
                <h3 className="text-xl mb-1">{profileData.name}</h3>
                <p className="text-sm text-gray-600 mb-4 capitalize">{userType} Account</p>
                <Button variant="outline" className="w-full" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-base">Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">KYC Verification</span>
                  <span className="text-sm text-green-600">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Payment Method</span>
                  <span className="text-sm text-green-600">✓ Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="text-sm">Jan 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="bg-white border">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              {/* Personal Info Tab */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="name"
                              value={profileData.name}
                              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              value={profileData.email}
                              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              value={profileData.phone}
                              onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="id">ID Number</Label>
                          <div className="relative">
                            <Shield className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="id"
                              value={profileData.idNumber}
                              disabled
                              className="pl-10 bg-gray-50"
                            />
                          </div>
                          <p className="text-xs text-gray-500">Contact support to update this field</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="address"
                            value={profileData.address}
                            onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-3">
                        <Button type="button" variant="outline">
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-[#0C7B47] hover:bg-[#0C7B47]/90">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>KYC Documents</CardTitle>
                    <CardDescription>
                      Upload and manage your verification documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-[#0C7B47] transition-colors cursor-pointer">
                        <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                        <p className="mb-2">ID Document</p>
                        <p className="text-sm text-green-600 mb-3">✓ Verified</p>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Re-upload
                        </Button>
                      </div>

                      <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-[#0C7B47] transition-colors cursor-pointer">
                        <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                        <p className="mb-2">Proof of Address</p>
                        <p className="text-sm text-green-600 mb-3">✓ Verified</p>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Re-upload
                        </Button>
                      </div>

                      <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-[#0C7B47] transition-colors cursor-pointer">
                        <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                        <p className="mb-2">Bank Statement</p>
                        <p className="text-sm text-gray-600 mb-3">Optional</p>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload
                        </Button>
                      </div>

                      <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-[#0C7B47] transition-colors cursor-pointer">
                        <FileText className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                        <p className="mb-2">Tax Certificate</p>
                        <p className="text-sm text-gray-600 mb-3">Optional</p>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <p className="text-sm text-gray-700">
                        <strong>Document Requirements:</strong> All documents must be clear, valid, and not expired. 
                        Accepted formats: PDF, JPG, PNG. Maximum file size: 5MB per document.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Choose how you want to receive updates from PropStock
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="email-alerts" className="flex items-center gap-2">
                          <Bell className="h-4 w-4" />
                          Email Alerts
                        </Label>
                        <p className="text-sm text-gray-600">
                          Receive important updates and notifications via email
                        </p>
                      </div>
                      <Switch
                        id="email-alerts"
                        checked={notifications.emailAlerts}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, emailAlerts: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="sms-alerts" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          SMS Alerts
                        </Label>
                        <p className="text-sm text-gray-600">
                          Get text messages for critical account activities
                        </p>
                      </div>
                      <Switch
                        id="sms-alerts"
                        checked={notifications.smsAlerts}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, smsAlerts: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="property-updates">Property Updates</Label>
                        <p className="text-sm text-gray-600">
                          News and updates about your investment properties
                        </p>
                      </div>
                      <Switch
                        id="property-updates"
                        checked={notifications.propertyUpdates}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, propertyUpdates: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="community-events">Community Events</Label>
                        <p className="text-sm text-gray-600">
                          Invitations to seminars, webinars, and community events
                        </p>
                      </div>
                      <Switch
                        id="community-events"
                        checked={notifications.communityEvents}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, communityEvents: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="monthly-reports">Monthly Reports</Label>
                        <p className="text-sm text-gray-600">
                          Detailed investment performance and earnings reports
                        </p>
                      </div>
                      <Switch
                        id="monthly-reports"
                        checked={notifications.monthlyReports}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, monthlyReports: checked })}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payment Tab */}
              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>
                      Manage your linked bank accounts and payment methods
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#0C7B47] p-3 rounded-lg">
                          <CreditCard className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="mb-1">Standard Bank</p>
                          <p className="text-sm text-gray-600">****1234 (Primary)</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>

                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-200 p-3 rounded-lg">
                          <CreditCard className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <p className="mb-1">FNB</p>
                          <p className="text-sm text-gray-600">****5678</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>

                    <Button className="w-full bg-[#0C7B47] hover:bg-[#0C7B47]/90">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Add Payment Method
                    </Button>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <p className="text-sm text-gray-700">
                        <strong>Secure Payments:</strong> All payment information is encrypted and processed through 
                        secure banking channels. PropStock never stores your full banking details.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your password and account security
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="mb-4">Change Password</h4>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button className="bg-[#0C7B47] hover:bg-[#0C7B47]/90">
                          Update Password
                        </Button>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h4 className="mb-4">Two-Factor Authentication</h4>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="mb-1">SMS Authentication</p>
                          <p className="text-sm text-gray-600">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch />
                      </div>
                      <Button variant="outline">
                        Configure 2FA
                      </Button>
                    </div>

                    <div className="pt-6 border-t">
                      <h4 className="mb-4">Active Sessions</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-[#F5F5F5] rounded-lg">
                          <div>
                            <p className="mb-1">Chrome on Windows</p>
                            <p className="text-sm text-gray-600">Johannesburg • Active now</p>
                          </div>
                          <Badge className="bg-green-600">Current</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-[#F5F5F5] rounded-lg">
                          <div>
                            <p className="mb-1">Mobile App on iPhone</p>
                            <p className="text-sm text-gray-600">Last active 2 hours ago</p>
                          </div>
                          <Button variant="ghost" size="sm">End Session</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
