import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Placeholder data for contacts
const contacts = [
  { id: 1, name: 'Alice Johnson', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 2, name: 'Bob Williams', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
  { id: 3, name: 'Charlie Brown', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
  { id: 4, name: 'Diana Miller', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
  { id: 5, name: 'Ethan Davis', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708d' },
  { id: 6, name: 'Fiona Garcia', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026709d' },
  { id: 7, name: 'George Rodriguez', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026710d' },
  { id: 8, name: 'Hannah Wilson', avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026711d' },
];

const NewChatPage = () => {
  console.log('NewChatPage loaded');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContactSelect = (contact: { id: number; name: string; avatarUrl: string }) => {
    console.log(`Starting chat with ${contact.name}`);
    // As per user journey, navigate to the chat dashboard.
    // In a real app, you would also pass the contact ID or update global state.
    navigate('/chat-dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">New Chat</CardTitle>
            <CardDescription>Select a contact to start a conversation.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                type="search"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <ScrollArea className="h-72 pr-3">
              <div className="space-y-2">
                {filteredContacts.length > 0 ? (
                  filteredContacts.map((contact) => (
                    <div
                      key={contact.id}
                      onClick={() => handleContactSelect(contact)}
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleContactSelect(contact)}
                    >
                      <Avatar>
                        <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                        <AvatarFallback>{contact.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{contact.name}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-sm text-muted-foreground pt-4">No contacts found.</p>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default NewChatPage;