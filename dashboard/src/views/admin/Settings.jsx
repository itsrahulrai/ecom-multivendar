import React, { useState } from "react";
import {
  Settings2,
  Mail,
  Shield,
  Bell,
  Globe,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const menuItems = [
    {
      id: "general",
      name: "General Settings",
      icon: Settings2,
    },
    {
      id: "smtp",
      name: "SMTP Settings",
      icon: Mail,
    },
    {
      id: "security",
      name: "Security",
      icon: Shield,
    },
    {
      id: "notifications",
      name: "Notifications",
      icon: Bell,
    },
    {
      id: "website",
      name: "Website Settings",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="text-slate-500 mt-1">
          Manage all your application settings
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* ================= SIDEBAR ================= */}
        <div className="xl:col-span-3">

          <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-sm sticky top-5">

            <div className="space-y-2">

              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 text-left
                      ${
                        activeTab === item.id
                          ? "bg-gradient-to-r from-[#F54900] to-orange-400 text-white shadow-lg shadow-orange-200"
                          : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
                      }
                    `}
                  >
                    <Icon size={18} />

                    <span className="text-sm font-semibold">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="xl:col-span-9">

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">

            {/* ================= GENERAL SETTINGS ================= */}
            {activeTab === "general" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  General Settings
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Website Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter website name"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Support Email
                    </label>

                    <input
                      type="email"
                      placeholder="support@example.com"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Contact Number
                    </label>

                    <input
                      type="text"
                      placeholder="+91 9876543210"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Address
                    </label>

                    <input
                      type="text"
                      placeholder="Enter address"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                </div>
              </div>
            )}

            {/* ================= SMTP SETTINGS ================= */}
            {activeTab === "smtp" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  SMTP Settings
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      SMTP Host
                    </label>

                    <input
                      type="text"
                      placeholder="smtp.gmail.com"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      SMTP Port
                    </label>

                    <input
                      type="text"
                      placeholder="587"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      SMTP Username
                    </label>

                    <input
                      type="text"
                      placeholder="Enter username"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      SMTP Password
                    </label>

                    <input
                      type="password"
                      placeholder="Enter password"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                </div>
              </div>
            )}

            {/* ================= SECURITY ================= */}
            {activeTab === "security" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Security Settings
                </h2>

                <div className="space-y-5">

                  <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-200">
                    <div>
                      <h4 className="font-semibold text-slate-700">
                        Two Factor Authentication
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        Add extra security to your account
                      </p>
                    </div>

                    <input type="checkbox" className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-200">
                    <div>
                      <h4 className="font-semibold text-slate-700">
                        Login Alerts
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        Get notified for suspicious login activity
                      </p>
                    </div>

                    <input type="checkbox" className="w-5 h-5" />
                  </div>

                </div>
              </div>
            )}

            {/* ================= NOTIFICATIONS ================= */}
            {activeTab === "notifications" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Notification Settings
                </h2>

                <div className="space-y-5">

                  <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-200">
                    <div>
                      <h4 className="font-semibold text-slate-700">
                        Email Notifications
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        Receive updates on email
                      </p>
                    </div>

                    <input type="checkbox" className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between p-5 rounded-2xl border border-slate-200">
                    <div>
                      <h4 className="font-semibold text-slate-700">
                        SMS Notifications
                      </h4>

                      <p className="text-sm text-slate-500 mt-1">
                        Receive SMS alerts
                      </p>
                    </div>

                    <input type="checkbox" className="w-5 h-5" />
                  </div>

                </div>
              </div>
            )}

            {/* ================= WEBSITE SETTINGS ================= */}
            {activeTab === "website" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                  Website Settings
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Website Title
                    </label>

                    <input
                      type="text"
                      placeholder="Enter title"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Meta Description
                    </label>

                    <input
                      type="text"
                      placeholder="Enter description"
                      className="w-full h-12 px-4 rounded-2xl border border-slate-200 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition"
                    />
                  </div>

                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <button className="px-6 h-12 rounded-2xl bg-gradient-to-r from-[#F54900] to-orange-400 text-white font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-all duration-300">
                Save Changes
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;