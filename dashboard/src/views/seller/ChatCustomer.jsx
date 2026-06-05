import React, { useState } from "react";
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
} from "lucide-react";

const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    lastMessage: "When will my order arrive?",
    time: "2 min",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Amit Kumar",
    lastMessage: "Need invoice copy",
    time: "10 min",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Priya Singh",
    lastMessage: "Product received thanks",
    time: "1 hour",
    unread: 1,
    online: true,
  },
];

const ChatCustomer = () => {
  const [selectedChat, setSelectedChat] = useState(customers[0]);

  return (
    <div className="h-[calc(100vh-120px)] bg-white rounded-[30px] overflow-hidden border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

      <div className="grid grid-cols-12 h-full">

        {/* LEFT SIDEBAR */}
        <div className="col-span-12 lg:col-span-4 border-r border-slate-100">

          <div className="p-5 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-800">
              Customer Chats
            </h2>

            <div className="mt-4 relative">
              <Search
                size={18}
                className="absolute left-4 top-3.5 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search customer..."
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

            {customers.map((customer) => (
              <div
                key={customer.id}
                onClick={() => setSelectedChat(customer)}
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
                    <img
                      src={`https://ui-avatars.com/api/?name=${customer.name}`}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />

                    {customer.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-semibold text-slate-800">
                        {customer.name}
                      </h4>

                      <span className="text-xs text-slate-400">
                        {customer.time}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 truncate">
                      {customer.lastMessage}
                    </p>
                  </div>

                  {customer.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-[#F54900] text-white text-xs flex items-center justify-center">
                      {customer.unread}
                    </div>
                  )}
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
              <img
                src={`https://ui-avatars.com/api/?name=${selectedChat.name}`}
                alt=""
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-bold text-slate-800">
                  {selectedChat.name}
                </h3>

                <p className="text-sm text-green-500">
                  Online
                </p>
              </div>
            </div>

            <div className="flex gap-3">

              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Phone size={18} />
              </button>

              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Video size={18} />
              </button>

              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <MoreVertical size={18} />
              </button>

            </div>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-6 bg-slate-50 overflow-y-auto">

            <div className="flex justify-start mb-4">
              <div className="bg-white px-4 py-3 rounded-2xl shadow-sm max-w-xs">
                Hi Seller, when will my order arrive?
              </div>
            </div>

            <div className="flex justify-end mb-4">
              <div className="bg-[#F54900] text-white px-4 py-3 rounded-2xl max-w-xs">
                Your order will be delivered tomorrow.
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-white px-4 py-3 rounded-2xl shadow-sm max-w-xs">
                Thank you 😊
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

export default ChatCustomer;