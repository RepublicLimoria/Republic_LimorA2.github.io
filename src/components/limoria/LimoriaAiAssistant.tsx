import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X, Sparkles, Minimize2, Maximize2, RotateCcw } from 'lucide-react';
import { Language } from '../../types/limoria.ts';
import { askLimoriaAssistant } from '../../services/limoriaAi.ts';

interface LimoriaAiAssistantProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onTriggerService?: (serviceId: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const LimoriaAiAssistant: React.FC<LimoriaAiAssistantProps> = ({
  currentLang,
  isOpen,
  onClose,
  onOpen,
  onTriggerService,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text:
        currentLang === 'bn'
          ? 'নমস্কার! আমি লিমোরিয়া সরকারের এআই সহকারী। পাসপোর্ট, কর, ৮টি অঞ্চল বা নাগরিক সেবা সংক্রান্ত যেকোনো তথ্য জানতে জিজ্ঞেস করতে পারেন।'
          : 'Welcome! I am the Limoria AI Citizen Assistant. How can I assist you today with government services, permits, or regional information?',
      timestamp: 'Just now',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const quickChips = [
    { label: currentLang === 'bn' ? 'সরকারি সেবা' : 'Government Services', query: 'What government services are available?' },
    { label: currentLang === 'bn' ? 'সর্বশেষ সংবাদ' : 'Latest News', query: 'What is the latest news in Limoria?' },
    { label: currentLang === 'bn' ? '৪ নম্বর অঞ্চল কোথায়?' : 'Where is Region 4?', query: 'Where is Region 4 located?' },
    { label: currentLang === 'bn' ? 'পর্যটন তথ্য' : 'Tourism Information', query: 'Tell me about tourism in Limoria' },
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await askLimoriaAssistant(text, currentLang);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: currentLang === 'bn' 
          ? 'দুঃখিত, বর্তমানে সংযোগে সমস্যা হচ্ছে। অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন অথবা ৩১১ নাম্বারে ফোন করুন।'
          : 'I apologize, an error occurred communicating with the state neural registry. Please try again or dial 311 for telephone assistance.',
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onOpen}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#114b32] to-[#0a2e1e] hover:from-[#185e40] hover:to-[#0f3d28] border-2 border-[#e2b43b] text-white shadow-2xl hover:scale-105 transition-all cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-full bg-[#082418] border border-[#f5c518] flex items-center justify-center text-[#f5c518]">
          <Bot className="w-4 h-4" />
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-xs font-bold text-[#f5c518] leading-tight">Limoria AI Assistant</div>
          <div className="text-[10px] text-emerald-200">
            {currentLang === 'bn' ? 'অনলাইন সহায়তা' : 'Ask Anything'}
          </div>
        </div>
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 flex flex-col rounded-2xl border-2 border-[#e2b43b] bg-gradient-to-b from-[#092b1d] via-[#062015] to-[#04170f] text-white shadow-2xl transition-all ${
        isExpanded ? 'w-[95vw] sm:w-[480px] h-[640px]' : 'w-[92vw] sm:w-[380px] h-[480px]'
      }`}
    >
      {/* Header matching screenshot */}
      <div className="p-3 bg-[#0a2f20] border-b border-[#1b5a3e] rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#12422f] to-[#062217] border border-[#ffd700] flex items-center justify-center text-[#f5c518] shadow">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#ffd700] flex items-center gap-1.5">
              <span>Limoria AI Assistant</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-[10px] text-emerald-200/80">
              {currentLang === 'bn' ? 'আজ আপনাকে কিভাবে সাহায্য করতে পারি?' : 'How can I help you today?'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded text-emerald-300 hover:text-white"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 rounded text-emerald-300 hover:text-white"
            title="Close Assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Action Chips (Matches screenshot: [Government Services] [Latest News] [Where is Region 4?] [Tourism Information]) */}
      <div className="px-3 py-2 bg-[#062217] border-b border-[#12422d] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(chip.query)}
            className="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#0b3322] hover:bg-[#124b33] border border-[#1d6346] hover:border-[#f5c518] text-emerald-100 hover:text-[#f5c518] transition-colors cursor-pointer"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-2.5 leading-relaxed shadow ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-[#13593b] to-[#0f442d] text-white border border-[#e2b43b]/40 rounded-br-xs'
                  : 'bg-[#072418] text-emerald-100 border border-[#174e37] rounded-bl-xs'
              }`}
            >
              {msg.text}
            </div>
            <span className="text-[9px] text-emerald-500/80 mt-1 px-1">{msg.timestamp}</span>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 p-2 rounded-xl bg-[#072418] border border-[#174e37] text-xs text-emerald-300 w-max">
            <Sparkles className="w-3.5 h-3.5 animate-spin text-[#f5c518]" />
            <span>{currentLang === 'bn' ? 'উত্তর তৈরি হচ্ছে...' : 'Consulting Sovereign Registry...'}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Row matching screenshot (Type your message... + green send icon) */}
      <div className="p-2.5 bg-[#061e15] border-t border-[#144732] rounded-b-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder={currentLang === 'bn' ? 'বার্তা লিখুন...' : 'Type your message...'}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 bg-[#09291c] border border-[#19563c] focus:border-[#f5c518] rounded-xl px-3 py-2 text-xs text-white placeholder-emerald-400/60 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#155a3b] to-[#0f442d] hover:from-[#1c734b] hover:to-[#145738] border border-[#e2b43b] text-[#ffd700] disabled:opacity-40 flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
