import React from 'react';
import { Link } from 'react-router-dom';

// Import Custom Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import ActiveChatHeader from '@/components/ActiveChatHeader';
import MessageInputBar from '@/components/MessageInputBar';
import ChatMessageBubble, { Message } from '@/components/ChatMessageBubble';

// Import shadcn/ui Components
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


// Placeholder data for the active chat and messages
const activeChatUser = {
  name: 'Alice',
  imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  status: 'Online',
  isOnline: true,
};

const sampleMessages: Message[] = [
  {
    id: 1,
    senderName: 'Alice',
    content: 'Hey, are you free for the meeting tomorrow?',
    contentType: 'text',
    timestamp: '10:40 AM',
    senderAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    id: 2,
    senderName: 'You',
    content: 'Yes, I am! What time works for you?',
    contentType: 'text',
    timestamp: '10:41 AM',
  },
  {
    id: 3,
    senderName: 'Alice',
    content: 'How about 2 PM? Also, here is the presentation draft.',
    contentType: 'text',
    timestamp: '10:41 AM',
    senderAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    id: 4,
    senderName: 'Alice',
    content: '/docs/presentation-draft-v1.pdf',
    contentType: 'file',
    timestamp: '10:42 AM',
    senderAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
   {
    id: 5,
    senderName: 'You',
    content: "Perfect, 2 PM works. I'll take a look at the draft. Thanks!",
    contentType: 'text',
    timestamp: '10:43 AM',
  },
  {
    id: 6,
    senderName: 'You',
    content: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=350',
    contentType: 'image',
    timestamp: '10:44 AM',
  },
];


const ChatDashboard = () => {
    console.log('ChatDashboard loaded');

    const handleSendMessage = (message: string) => {
        console.log('New message sent:', message);
        alert(`Message Sent: "${message}" (This is a mock-up)`);
    };

    return (
        <div className="flex flex-col h-screen bg-muted/40">
            <Header />
            <div className="grid md:grid-cols-[320px_1fr] flex-1 overflow-hidden">
                {/* Left Sidebar (Desktop) */}
                <aside className="hidden md:flex flex-col border-r">
                   <LeftSidebar />
                </aside>

                {/* Main Chat Panel */}
                <main className="flex flex-col h-full">
                    <div className="flex items-center gap-2 p-2 border-b md:hidden">
                       <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <PanelLeft className="h-5 w-5" />
                              <span className="sr-only">Open Chat List</span>
                            </Button>
                          </SheetTrigger>
                          <SheetContent side="left" className="p-0 w-80">
                            <LeftSidebar />
                          </SheetContent>
                        </Sheet>
                        <div className="flex-1">
                          <h2 className="font-semibold text-lg">Chats</h2>
                        </div>
                    </div>
                    
                    <ActiveChatHeader {...activeChatUser} />
                    
                    <ScrollArea className="flex-1 p-4">
                        <div className="flex flex-col gap-2 pr-2">
                            {sampleMessages.map((msg) => (
                                <ChatMessageBubble
                                    key={msg.id}
                                    message={msg}
                                    isSender={msg.senderName === 'You'}
                                />
                            ))}
                        </div>
                    </ScrollArea>
                    
                    <MessageInputBar onSendMessage={handleSendMessage} />
                </main>
            </div>
        </div>
    );
};

export default ChatDashboard;