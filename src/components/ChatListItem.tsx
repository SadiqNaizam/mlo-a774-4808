import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // Assuming cn utility from shadcn/ui setup

export interface ChatListItemProps {
  id: string;
  avatarUrl?: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isActive?: boolean;
  onClick: (id: string) => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({
  id,
  avatarUrl,
  name,
  lastMessage,
  timestamp,
  unreadCount = 0,
  isActive = false,
  onClick,
}) => {
  console.log(`ChatListItem loaded for: ${name}`);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('');
  };

  return (
    <button
      onClick={() => onClick(id)}
      className={cn(
        "flex items-center w-full p-3 text-left transition-colors duration-200 rounded-lg",
        "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isActive ? "bg-muted" : "bg-transparent"
      )}
    >
      <div className="relative mr-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={`${name}'s avatar`} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-grow overflow-hidden">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-base truncate">{name}</p>
        </div>
        <p className="text-sm text-muted-foreground truncate">{lastMessage}</p>
      </div>
      
      <div className="flex flex-col items-end ml-4 space-y-1 self-start pt-1">
          <p className="text-xs text-muted-foreground whitespace-nowrap">{timestamp}</p>
          {unreadCount > 0 && (
            <Badge className="h-5 w-5 flex items-center justify-center p-0 text-xs">
              {unreadCount}
            </Badge>
          )}
      </div>
    </button>
  );
};

export default ChatListItem;