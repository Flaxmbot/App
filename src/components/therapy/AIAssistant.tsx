import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    {
      text: "Hi, I'm your mental wellness assistant. How are you feeling today?",
      isUser: false
    }
  ]);
  
  const mockResponses: Record<string, string[]> = {
    anxious: [
      "I'm sorry you're feeling anxious. Try taking a few deep breaths with me.",
      "Anxiety is challenging. Let's focus on the present moment. What's one thing you can see right now?",
      "You're not alone in feeling this way. Would you like to try a quick grounding exercise?"
    ],
    sad: [
      "I hear that you're feeling sad. Remember that all emotions are valid and temporary.",
      "It's okay to feel sad sometimes. Would talking about what's causing these feelings help?",
      "I'm here for you. Sometimes doing a small activity you enjoy can help shift your mood a bit."
    ],
    stressed: [
      "Being stressed is tough. Let's take a moment to identify what's within your control right now.",
      "I understand stress can be overwhelming. Would a breathing exercise help?",
      "Your feelings are valid. Sometimes making a list of what's causing stress can help manage it."
    ],
    default: [
      "Thank you for sharing. How can I support you right now?",
      "I'm here to listen. Would you like to tell me more about that?",
      "I appreciate you expressing that. What would help you feel better at this moment?"
    ]
  };
  
  const getResponse = (message: string) => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('anxious') || lowerMsg.includes('anxiety') || lowerMsg.includes('nervous')) {
      return mockResponses.anxious[Math.floor(Math.random() * mockResponses.anxious.length)];
    } else if (lowerMsg.includes('sad') || lowerMsg.includes('depressed') || lowerMsg.includes('unhappy')) {
      return mockResponses.sad[Math.floor(Math.random() * mockResponses.sad.length)];
    } else if (lowerMsg.includes('stress') || lowerMsg.includes('overwhelmed') || lowerMsg.includes('pressure')) {
      return mockResponses.stressed[Math.floor(Math.random() * mockResponses.stressed.length)];
    } else {
      return mockResponses.default[Math.floor(Math.random() * mockResponses.default.length)];
    }
  };
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const updatedMessages = [...messages, { text: input, isUser: true }];
    setMessages(updatedMessages);
    setInput('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const botResponse = getResponse(input);
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };
  
  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow flex flex-col h-[600px]">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="p-2 bg-purple-100 rounded-full">
            <MessageSquare className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-3">
            <h2 className="text-lg font-semibold text-gray-900">AI Wellness Assistant</h2>
            <p className="text-sm text-gray-600">Available 24/7 to support you</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isUser 
                  ? 'bg-purple-600 text-white rounded-tr-none' 
                  : 'bg-white border border-gray-200 rounded-tl-none'
              }`}
            >
              <p className={message.isUser ? 'text-white' : 'text-gray-800'}>
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type how you're feeling..."
            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            rows={2}
          ></textarea>
          <button
            onClick={handleSend}
            className="p-4 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500 text-center">
          This is a simulated AI assistant for demonstration purposes only. 
          In a crisis, please call 988 or use the Emergency Support feature.
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;