import React, { useState } from "react";
import {
  Search,
  Send,
  Phone,
  MoreVertical,
  Headphones,
} from "lucide-react";

const supportAgents = [
  {
    id: 1,
    name: "Support Team",
    role: "Customer Support",
    online: true,
    lastMessage: "How can we help you today?",
    time: "Now",
  },
  {
    id: 2,
    name: "Technical Team",
    role: "Technical Support",
    online: true,
    lastMessage: "Issue has been forwarded.",
    time: "10 min",
  },
  {
    id: 3,
    name: "Billing Team",
    role: "Payment Support",
    online: false,
    lastMessage: "Payment processed successfully.",
    time: "1 hr",
  },
];

const ChatSupport = () => {
  const [selectedChat, setSelectedChat] = useState(supportAgents[0]);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    console.log(message);
    setMessage("");
  };

  return (
    <div className="space-y-6 pr-8">
      <div className="w-full h-[calc(100vh-120px)] bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
        
        {/* FIXED: Flex Wrapper */}
        <div className="flex h-full">

          {/* Sidebar */}
          <div className="w-[380px] min-w-[380px] border-r border-slate-200 flex flex-col">

            {/* Sidebar Header */}
            <div className="p-5 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-800">
                Support Center
              </h2>

              <div className="relative mt-5">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search support..."
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>

            {/* Support List */}
            <div className="flex-1 overflow-y-auto">
              {supportAgents.map((agent) => (
                <div
                  key={agent.id}
                  onClick={() => setSelectedChat(agent)}
                  className={`p-4 border-b border-slate-100 cursor-pointer transition-all ${
                    selectedChat.id === agent.id
                      ? "bg-orange-50"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                        <Headphones
                          size={24}
                          className="text-[#F54900]"
                        />
                      </div>

                      {agent.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-slate-800">
                          {agent.name}
                        </h4>

                        <span className="text-xs text-slate-400">
                          {agent.time}
                        </span>
                      </div>

                      <p className="text-xs text-[#F54900]">
                        {agent.role}
                      </p>

                      <p className="text-sm text-slate-500 truncate">
                        {agent.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* Chat Header */}
            <div className="h-24 px-6 border-b border-slate-200 flex items-center justify-between bg-white">

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <Headphones
                    size={24}
                    className="text-[#F54900]"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    {selectedChat.name}
                  </h3>

                  <p className="text-sm text-green-500">
                    {selectedChat.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200">
                  <Phone size={18} />
                </button>

                <button className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-slate-50 p-6">
              <div className="flex justify-start mb-4">
                <div className="bg-white px-5 py-4 rounded-3xl shadow-sm max-w-md">
                  Hello 👋 Welcome to Support Center.
                </div>
              </div>

              <div className="flex justify-start mb-6">
                <div className="bg-white px-5 py-4 rounded-3xl shadow-sm max-w-md">
                  How can we help you today?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#F54900] text-white px-5 py-4 rounded-3xl max-w-md shadow-sm">
                  I need help regarding my withdrawal request.
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex items-center gap-3">

                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 h-14 px-5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />

                <button
                  onClick={handleSend}
                  className="w-14 h-14 rounded-xl bg-[#F54900] text-white flex items-center justify-center hover:opacity-90"
                >
                  <Send size={20} />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatSupport;