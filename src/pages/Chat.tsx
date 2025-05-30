import React from 'react';
import { useParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Chat() {
  const { userId } = useParams();
  const { user } = useAuthStore();
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // TODO: Implement message sending logic with Supabase
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Chat with User {userId}
          </h2>
        </div>

        {/* Messages Container */}
        <div className="h-[calc(100vh-300px)] overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.senderId === user?.id ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.senderId === user?.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <p>{msg.content}</p>
                <span className="text-xs opacity-75">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 input-field"
            />
            <button
              type="submit"
              className="btn-primary flex items-center justify-center px-4"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;