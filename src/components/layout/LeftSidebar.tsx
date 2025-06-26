import React from 'react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';
import ChatListItem from '@/components/ChatListItem'; // Assuming this component exists

// Mock data to simulate chat list from an API
const mockChatListData = [
  {
    id: '1',
    name: 'Alice',
    lastMessage: 'Hey, are you free for the meeting tomorrow?',
    timestamp: '10:42 AM',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Bob - Project Team',
    lastMessage: 'You: Just pushed the latest updates to the main branch.',
    timestamp: '9:30 AM',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    unreadCount: 0,
  },
  {
    id: '3',
    name: 'Charlie',
    lastMessage: 'Can you send me the file?',
    timestamp: 'Yesterday',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    unreadCount: 0,
  },
  {
    id: '4',
    name: 'Marketing Updates',
    lastMessage: 'Sarah: New campaign launch next week!',
    timestamp: 'Yesterday',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    unreadCount: 5,
  },
];

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');
  return (
    <aside className="flex flex-col h-full w-full max-w-xs border-r bg-background">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search chats..." className="pl-8 w-full" />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-1 p-2">
          {mockChatListData.map((chat) => (
            <ChatListItem
              key={chat.id}
              name={chat.name}
              lastMessage={chat.lastMessage}
              timestamp={chat.timestamp}
              avatarUrl={chat.avatar}
              unreadCount={chat.unreadCount}
            />
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};

export default LeftSidebar;