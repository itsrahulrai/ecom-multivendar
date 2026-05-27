import React, { useState, useRef, useEffect } from "react";
import {
  Search, Send, Phone, Video, MoreVertical,
  Paperclip, Smile, CheckCheck, ArrowLeft, X
} from "lucide-react";

const CHATS = [
  {
    id: 1, name: "Rahul Sharma", lastMsg: "Need product delivery update",
    time: "2m ago", unread: 2, online: true,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    messages: [
      { id: 1, sender: "other", text: "Hello 👋", time: "10:20 AM" },
      { id: 2, sender: "other", text: "I want delivery update for my product.", time: "10:21 AM" },
      { id: 3, sender: "me", text: "Sure, your order will arrive tomorrow.", time: "10:22 AM" },
      { id: 4, sender: "me", text: "Tracking details shared on email.", time: "10:23 AM" },
    ],
  },
  {
    id: 2, name: "Priya Singh", lastMsg: "Order payment completed",
    time: "10m ago", unread: 0, online: false,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    messages: [
      { id: 1, sender: "other", text: "Hi! Just wanted to confirm my payment went through.", time: "9:10 AM" },
      { id: 2, sender: "me", text: "Yes, payment received. Order #4821 confirmed!", time: "9:12 AM" },
      { id: 3, sender: "other", text: "Order payment completed", time: "9:13 AM" },
    ],
  },
  {
    id: 3, name: "Aman Verma", lastMsg: "Can I return this item?",
    time: "25m ago", unread: 1, online: true,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    messages: [
      { id: 1, sender: "other", text: "Can I return this item?", time: "8:45 AM" },
      { id: 2, sender: "me", text: "Sure! Returns accepted within 7 days.", time: "8:50 AM" },
    ],
  },
];

const LiveChat = () => {
  const [chats, setChats] = useState(CHATS);
  const [activeId, setActiveId] = useState(1);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [showMobile, setShowMobile] = useState(false);
  const messagesEndRef = useRef(null);

  const active = chats.find(c => c.id === activeId);

  const filtered = chats.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.lastMsg.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [active?.messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setChats(prev => prev.map(c =>
      c.id === activeId
        ? { ...c, lastMsg: text, messages: [...c.messages, { id: Date.now(), sender: "me", text, time }] }
        : c
    ));
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const selectChat = (id) => {
    setActiveId(id);
    setChats(prev => prev.map(c => c.id === id ? { ...c, unread: 0 } : c));
    setShowMobile(true);
  };

  return (
    <div className="p-3 sm:p-5 flex items-center justify-center font-sans">

      <div className="w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl shadow-slate-200/80 overflow-hidden flex border border-slate-100">

        {/* ─── SIDEBAR ─── */}
        <div className={`flex flex-col bg-white border-r border-slate-100 w-full sm:w-[320px] flex-shrink-0 ${showMobile ? "hidden sm:flex" : "flex"}`}>

          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b border-slate-100">
            <div className="flex items-center justify-between mb-1">
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Live Chat</h1>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">
                {chats.reduce((s, c) => s + c.unread, 0)} new
              </span>
            </div>
            <p className="text-[13px] text-slate-400 font-medium">Customer conversations</p>

            {/* Search */}
            <div className="mt-4 flex items-center gap-2.5 h-11 px-4 rounded-2xl bg-slate-50 border border-slate-200 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all duration-200">
              <Search size={15} className="text-slate-400 shrink-0" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search conversations…"
                className="bg-transparent outline-none text-[13px] text-slate-700 placeholder:text-slate-400 w-full"
              />
              {search && (
                <button onClick={() => setSearch("")} className="text-slate-400 hover:text-slate-600 transition">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Chat list */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 [scrollbar-width:thin] [scrollbar-color:#e2e8f0_transparent]">
            {filtered.length === 0 && (
              <div className="text-center py-12 text-slate-400 text-sm">No conversations found</div>
            )}
            {filtered.map(chat => (
              <button
                key={chat.id}
                onClick={() => selectChat(chat.id)}
                className={`w-full flex items-center gap-3.5 p-3 rounded-2xl border text-left transition-all duration-150 hover:translate-x-1 ${
                  activeId === chat.id ? "bg-orange-50 border-orange-100" : "border-transparent hover:bg-slate-50"
                }`}
              >
                <div className="relative shrink-0">
                  <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100" />
                  {chat.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[14px] font-semibold text-slate-800 truncate">{chat.name}</span>
                    <span className="text-[11px] text-slate-400 shrink-0">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5 gap-1">
                    <span className="text-[12px] text-slate-500 truncate">{chat.lastMsg}</span>
                    {chat.unread > 0 && (
                      <span className="shrink-0 min-w-[20px] h-5 rounded-full bg-gradient-to-r from-[#F54900] to-orange-400 text-white text-[10px] font-bold flex items-center justify-center px-1">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ─── CHAT PANE ─── */}
        <div className={`flex-1 flex flex-col min-w-0 ${showMobile ? "flex" : "hidden sm:flex"}`}>

          {/* Chat header */}
          <div className="h-[72px] px-5 bg-white border-b border-slate-100 flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3.5">
              <button
                className="sm:hidden w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-50 transition"
                onClick={() => setShowMobile(false)}
              >
                <ArrowLeft size={17} />
              </button>
              <div className="relative shrink-0">
                <img src={active?.avatar} alt={active?.name} className="w-11 h-11 rounded-2xl object-cover ring-2 ring-slate-100" />
                {active?.online && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                )}
              </div>
              <div>
                <div className="text-[15px] font-bold text-slate-800 leading-tight">{active?.name}</div>
                <div className={`text-[12px] font-medium mt-0.5 ${active?.online ? "text-emerald-500" : "text-slate-400"}`}>
                  {active?.online ? "● Active now" : "● Offline"}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[Phone, Video, MoreVertical].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-[#F54900] hover:text-white hover:scale-105 transition-all duration-200">
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-4 bg-gradient-to-b from-white to-slate-50/60 [scrollbar-width:thin] [scrollbar-color:#e2e8f0_transparent]">
            {active?.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end gap-2.5 animate-[bubbleIn_.22s_cubic-bezier(.34,1.4,.64,1)_both] ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "other" && (
                  <img src={active.avatar} alt="" className="w-8 h-8 rounded-xl object-cover shrink-0 mb-0.5" />
                )}
                <div className={`max-w-[72%] sm:max-w-[420px] px-4 py-3 rounded-2xl ${
                  msg.sender === "me"
                    ? "bg-gradient-to-br from-[#F54900] to-orange-400 text-white rounded-br-sm shadow-lg shadow-orange-200/50"
                    : "bg-white border border-slate-100 text-slate-700 rounded-bl-sm shadow-sm"
                }`}>
                  <p className="text-[13.5px] leading-[1.55] font-medium break-words">{msg.text}</p>
                  <div className={`flex items-center gap-1 mt-1.5 text-[11px] ${msg.sender === "me" ? "text-orange-100 justify-end" : "text-slate-400"}`}>
                    <span>{msg.time}</span>
                    {msg.sender === "me" && <CheckCheck size={12} />}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <div className="p-4 sm:p-5 bg-white border-t border-slate-100 shrink-0">
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-2xl px-4 h-14 focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-100 transition-all duration-200">
              <button className="text-slate-400 hover:text-orange-500 transition shrink-0">
                <Smile size={18} />
              </button>
              <button className="text-slate-400 hover:text-orange-500 transition shrink-0">
                <Paperclip size={18} />
              </button>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type a message…"
                className="flex-1 bg-transparent outline-none text-[13.5px] text-slate-700 placeholder:text-slate-400 min-w-0"
              />
              <button
                onClick={sendMessage}
                className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#F54900] to-orange-400 text-white flex items-center justify-center shadow-md shadow-orange-200 hover:scale-110 transition-all duration-150"
              >
                <Send size={15} />
              </button>
            </div>
            <p className="text-center text-[11px] text-slate-300 mt-2 font-medium">Press Enter to send</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;