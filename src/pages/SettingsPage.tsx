import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

const SettingsPage = () => {
  console.log('SettingsPage loaded');

  // Placeholder states for interactive switches
  const [desktopNotifications, setDesktopNotifications] = useState(true);
  const [messageSounds, setMessageSounds] = useState(false);
  const [readReceipts, setReadReceipts] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>
          
          {/* Account Tab */}
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Manage your account settings. Click the button to update your public profile.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" disabled />
                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button variant="outline" asChild>
                  <Link to="/profile">Edit Profile</Link>
                </Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>
                  Configure how you receive notifications from ChatSphere.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <Label htmlFor="desktop-notifications">Desktop Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications on your computer.</p>
                  </div>
                  <Switch
                    id="desktop-notifications"
                    checked={desktopNotifications}
                    onCheckedChange={setDesktopNotifications}
                  />
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <Label htmlFor="message-sounds">Message Sounds</Label>
                    <p className="text-sm text-muted-foreground">Play a sound for new messages.</p>
                  </div>
                  <Switch
                    id="message-sounds"
                    checked={messageSounds}
                    onCheckedChange={setMessageSounds}
                  />
                </div>
              </CardContent>
              <CardFooter>
                  <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy</CardTitle>
                <CardDescription>
                  Control your privacy settings within the application.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div>
                    <Label htmlFor="read-receipts">Read Receipts</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow others to see when you have read their messages.
                    </p>
                  </div>
                  <Switch
                    id="read-receipts"
                    checked={readReceipts}
                    onCheckedChange={setReadReceipts}
                  />
                </div>
                <Separator />
                <div>
                  <Label>Blocked Contacts</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Manage users you have blocked.
                  </p>
                  <Button variant="secondary">View Blocked Users</Button>
                </div>
              </CardContent>
               <CardFooter>
                  <Button>Save Privacy Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;