import React from 'react';
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText, Download } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Define the structure of a message object
export interface Message {
  id: string | number;
  content: string;
  contentType: 'text' | 'image' | 'file';
  timestamp: string;
  senderName: string;
  senderAvatarUrl?: string;
}

// Define the props for the component
interface ChatMessageBubbleProps {
  message: Message;
  isSender: boolean;
}

const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({ message, isSender }) => {
  console.log('ChatMessageBubble loaded for message ID:', message.id);

  const { content, contentType, timestamp, senderName, senderAvatarUrl } = message;

  // Helper function to get initials from a name for the Avatar fallback
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  };

  const renderContent = () => {
    switch (contentType) {
      case 'image':
        return (
          <a href={content} target="_blank" rel="noopener noreferrer">
            <img 
              src={content} 
              alt="Sent content" 
              className="rounded-lg max-w-xs md:max-w-sm h-auto object-cover cursor-pointer"
            />
          </a>
        );
      case 'file':
        const fileName = content.split('/').pop() || 'Attached File';
        return (
          <a 
            href={content} 
            download 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg min-w-[200px] transition-colors",
              isSender ? "bg-blue-400 hover:bg-blue-300" : "bg-gray-300 hover:bg-gray-400/80"
            )}
          >
            <FileText className="h-8 w-8 flex-shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <span className="font-semibold truncate">{fileName}</span>
              <span className="text-xs opacity-90">Click to download</span>
            </div>
          </a>
        );
      case 'text':
      default:
        return (
          <p className="whitespace-pre-wrap break-words">{content}</p>
        );
    }
  };

  const bubbleClasses = cn(
    "p-3 rounded-2xl max-w-lg lg:max-w-xl",
    isSender 
      ? "bg-blue-500 text-white rounded-br-md" 
      : "bg-gray-200 text-gray-900 rounded-bl-md"
  );
  
  // For images and files, we don't want the default padding/background from the bubble
  const isMediaContent = contentType === 'image' || contentType === 'file';

  return (
    <div className={cn("flex items-end gap-2 my-2 w-full", isSender ? "justify-end" : "justify-start")}>
      {!isSender && (
        <Avatar className="h-8 w-8 self-end mb-2">
          <AvatarImage src={senderAvatarUrl} alt={senderName} />
          <AvatarFallback>{getInitials(senderName)}</AvatarFallback>
        </Avatar>
      )}

      <div className={cn("flex flex-col", isSender ? "items-end" : "items-start")}>
        <div className={!isMediaContent ? bubbleClasses : ''}>
          {renderContent()}
        </div>
        <span className="text-xs text-gray-500 mt-1 px-1">{timestamp}</span>
      </div>
    </div>
  );
};

export default ChatMessageBubble;