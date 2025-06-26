import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Smile, Paperclip, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MessageInputBarProps {
  onSendMessage: (message: string) => void;
  className?: string;
}

const MessageInputBar: React.FC<MessageInputBarProps> = ({ onSendMessage, className }) => {
  const [message, setMessage] = useState('');

  console.log('MessageInputBar loaded');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      onSendMessage(trimmedMessage);
      setMessage('');
    }
  };

  const handleEmojiClick = () => {
    // Placeholder for emoji picker logic
    console.log('Emoji button clicked');
    alert("Emoji picker functionality is not yet implemented.");
  };
  
  const handleAttachmentClick = () => {
    // Placeholder for file attachment logic
    console.log('Attachment button clicked');
    alert("File attachment functionality is not yet implemented.");
  };

  return (
    <div className={cn("p-4 bg-background border-t", className)}>
      <form onSubmit={handleSendMessage} className="flex items-center gap-2 md:gap-4">
        <div className="flex">
            <Button type="button" variant="ghost" size="icon" onClick={handleEmojiClick} className="text-muted-foreground">
              <Smile className="h-6 w-6" />
              <span className="sr-only">Open emoji picker</span>
            </Button>
            <Button type="button" variant="ghost" size="icon" onClick={handleAttachmentClick} className="text-muted-foreground">
              <Paperclip className="h-6 w-6" />
              <span className="sr-only">Attach file</span>
            </Button>
        </div>
        
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow resize-none rounded-2xl border-input bg-gray-100 dark:bg-gray-800 focus-visible:ring-1 focus-visible:ring-ring"
          rows={1}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
            }
          }}
        />
        
        <Button type="submit" size="icon" disabled={!message.trim()}>
          <Send className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
  );
};

export default MessageInputBar;