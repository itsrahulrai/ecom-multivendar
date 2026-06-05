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

  return (
    <div className="h-[calc(100vh-120px)] bg-white rounded-[20px] overflow-hidden border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

      <div className="grid grid-cols-12 h-full">

        {/* LEFT SIDEBAR */}
        <div className="col-span-12 lg:col-span-4 border-r border-slate-100">

          <div className="p-5 border-b border-slate-100">

            <h2 className="text-xl font-bold text-slate-800">
              Support Center
            </h2>

            <div className="mt-4 relative">
              <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search support..."
                className="
                  w-full
                  h-11
                  pl-11
                  pr-4
                  rounded-xl
                  border border-slate-200
                  focus:outline-none
                "
              />
            </div>

          </div>

          <div className="overflow-y-auto h-[calc(100%-90px)]">

            {supportAgents.map((agent) => (
              <div
                key={agent.id}
                onClick={() => setSelectedChat(agent)}
                className="
                  p-4
                  border-b
                  border-slate-100
                  cursor-pointer
                  hover:bg-orange-50
                  transition-all
                "
              >

                <div className="flex items-center gap-3">

                  <div className="relative">

                    <div
                      className="
                        w-12 h-12
                        rounded-full
                        bg-orange-100
                        flex items-center justify-center
                      "
                    >
                      <Headphones
                        size={22}
                        className="text-[#F54900]"
                      />
                    </div>

                    {agent.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}

                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between">

                      <h4 className="font-semibold text-slate-800">
                        {agent.name}
                      </h4>

                      <span className="text-xs text-slate-400">
                        {agent.time}
                      </span>

                    </div>

                    <p className="text-xs text-orange-500">
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

        {/* CHAT AREA */}
        <div className="col-span-12 lg:col-span-8 flex flex-col">

          {/* HEADER */}
          <div className="h-20 border-b border-slate-100 px-6 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div
                className="
                  w-12 h-12
                  rounded-full
                  bg-orange-100
                  flex items-center justify-center
                "
              >
                <Headphones
                  size={22}
                  className="text-[#F54900]"
                />
              </div>

              <div>

                <h3 className="font-bold text-slate-800">
                  {selectedChat.name}
                </h3>

                <p className="text-sm text-green-500">
                  {selectedChat.online
                    ? "Online"
                    : "Offline"}
                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Phone size={18} />
              </button>

              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <MoreVertical size={18} />
              </button>

            </div>

          </div>

          {/* CHAT BODY */}
          <div className="flex-1 p-6 bg-slate-50 overflow-y-auto">

            <div className="flex justify-start mb-4">
              <div className="bg-white px-4 py-3 rounded-2xl shadow-sm max-w-xs">
                Hello 👋 Welcome to Support Center.
              </div>
            </div>

            <div className="flex justify-start mb-4">
              <div className="bg-white px-4 py-3 rounded-2xl shadow-sm max-w-xs">
                How can we help you today?
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#F54900] text-white px-4 py-3 rounded-2xl max-w-xs">
                I need help regarding my withdrawal request.
              </div>
            </div>

          </div>

          {/* MESSAGE BOX */}
          <div className="p-4 border-t border-slate-100">

            <div className="flex gap-3">

              <input
                type="text"
                placeholder="Type your message..."
                className="
                  flex-1
                  h-12
                  border border-slate-200
                  rounded-xl
                  px-4
                  focus:outline-none
                "
              />

              <button
                className="
                  w-12 h-12
                  rounded-xl
                  bg-[#F54900]
                  text-white
                  flex items-center justify-center
                "
              >
                <Send size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ChatSupport;