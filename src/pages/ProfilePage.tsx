import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const ProfilePage = () => {
  console.log('ProfilePage loaded');

  // State to hold profile data, pre-filled with placeholders
  const [displayName, setDisplayName] = useState('Jane Doe');
  const [aboutText, setAboutText] = useState("Hey there! I am using ChatSphere.");
  const [profileImage, setProfileImage] = useState("https://github.com/shadcn.png");

  const handleSaveChanges = () => {
    // In a real application, this would save the data to a backend.
    console.log("Saving changes:", { displayName, aboutText });
    alert("Profile changes saved!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
            <CardDescription>View and edit your public profile information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <div className="relative group">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileImage} alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <label
                  htmlFor="avatar-upload"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Camera className="h-6 w-6 text-white" />
                  <span className="sr-only">Change profile picture</span>
                  <input id="avatar-upload" type="file" className="sr-only" accept="image/*" />
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="aboutText">About</Label>
              <Textarea
                id="aboutText"
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                placeholder="Tell us a little bit about yourself"
                className="resize-none"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;