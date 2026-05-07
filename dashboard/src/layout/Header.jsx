import { React, useState } from "react";
import {
    Bell,
    MessageCircle,
    ChevronDown,
    User,
    LogOut,
} from "lucide-react";

const Header = () => {
    const [openProfile, setOpenProfile] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);

    return (
        <header
            className="
        fixed top-0 left-[220px] right-0
        h-[63px]
        bg-white/95 backdrop-blur
        border-b border-slate-200
        flex items-center justify-between
        px-6
        z-40
      "
        >
            {/* Left */}
            <div>
                <h2 className="text-[22px] font-bold text-slate-800">
                    Dashboard
                </h2>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

                {/* Notification */}
                <div className="relative">
                    <button
                        onClick={() => {
                            setOpenNotification(!openNotification);
                            setOpenMessage(false);
                        }}
                        className="
                            relative
                            w-10 h-10
                            rounded-xl
                            bg-slate-100
                            flex items-center justify-center
                            text-slate-500
                            hover:bg-[#F54900]
                            hover:text-white
                            transition-all
                            ">
                        <Bell size={18} />
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#F54900]" />
                    </button>

                   {/* Notification Dropdown */}
                        {openNotification && (
                        <div
                            className="
                            absolute right-0 top-[48px]
                            w-[270px]
                            bg-white
                            border border-slate-200
                            rounded-xl
                            shadow-lg
                            overflow-hidden
                            z-50
                            "
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
                            <h4 className="text-sm font-semibold text-slate-700">
                                Notifications
                            </h4>

                            <span className="text-[10px] text-[#F54900] font-medium">
                                2 New
                            </span>
                            </div>

                            {/* Notifications */}
                            <div className="p-1.5 space-y-1">

                            {/* Item */}
                            <div
                                className="
                                flex gap-2
                                p-2
                                rounded-lg
                                hover:bg-slate-50
                                transition
                                cursor-pointer
                                "
                            >
                                {/* Icon */}
                                <div
                                className="
                                    w-9 h-9
                                    rounded-lg
                                    bg-[#F54900]/10
                                    flex items-center justify-center
                                    shrink-0
                                "
                                >
                                <Bell size={16} className="text-[#F54900]" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-[13px] font-semibold text-slate-700">
                                    New Order
                                    </h5>

                                    <span className="text-[10px] text-slate-400">
                                    2m
                                    </span>
                                </div>

                                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                    You received a new order.
                                </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div
                                className="
                                flex gap-2
                                p-2
                                rounded-lg
                                hover:bg-slate-50
                                transition
                                cursor-pointer
                                "
                            >
                                {/* Icon */}
                                <div
                                className="
                                    w-9 h-9
                                    rounded-lg
                                    bg-blue-100
                                    flex items-center justify-center
                                    shrink-0
                                "
                                >
                                <Bell size={16} className="text-blue-600" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-[13px] font-semibold text-slate-700">
                                    Seller Request
                                    </h5>

                                    <span className="text-[10px] text-slate-400">
                                    10m
                                    </span>
                                </div>

                                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                    New seller approval pending.
                                </p>
                                </div>
                            </div>

                            </div>

                            {/* Footer */}
                            <div className="p-2 border-t border-slate-100">
                            <button
                                className="
                                w-full
                                py-2
                                rounded-lg
                                bg-[#F54900]
                                text-white
                                text-[12px]
                                font-medium
                                hover:opacity-90
                                transition
                                "
                            >
                                View All
                            </button>
                            </div>
                        </div>
                        )}
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setOpenMessage(!openMessage);
                                    setOpenNotification(false);
                                }}
                                className="
                    w-10 h-10
                    rounded-xl
                    bg-slate-100
                    flex items-center justify-center
                    text-slate-500
                    hover:bg-[#F54900]
                    hover:text-white
                    transition-all
                    "
                            >
                                <MessageCircle size={18} />
                            </button>

                            {/* Message Dropdown */}
                            {openMessage && (
                                <div
                                    className="
            absolute right-0 top-[48px]
            w-[270px]
            bg-white
            border border-slate-200
            rounded-xl
            shadow-lg
            overflow-hidden
            z-50
            "
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
                                        <h4 className="text-sm font-semibold text-slate-700">
                                            Messages
                                        </h4>

                                        <span className="text-[10px] text-[#F54900] font-medium">
                                            2 New
                                        </span>
                                    </div>

                                    {/* Messages */}
                                    <div className="p-1.5 space-y-1">

                                        {/* Item */}
                                        <div
                                            className="
                flex gap-2
                p-2
                rounded-lg
                hover:bg-slate-50
                transition
                cursor-pointer
                "
                                        >
                                            <div
                                                className="
                    w-9 h-9
                    rounded-lg
                    bg-[#F54900]
                    flex items-center justify-center
                    text-white
                    text-[11px]
                    font-semibold
                    shrink-0
                "
                                            >
                                                RR
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <h5 className="text-[13px] font-semibold text-slate-700">
                                                        Rahul Rai
                                                    </h5>

                                                    <span className="text-[10px] text-slate-400">
                                                        2m
                                                    </span>
                                                </div>

                                                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                                    Please check new products.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Item */}
                                        <div
                                            className="
                flex gap-2
                p-2
                rounded-lg
                hover:bg-slate-50
                transition
                cursor-pointer
                "
                                        >
                                            <div
                                                className="
                    w-9 h-9
                    rounded-lg
                    bg-slate-200
                    flex items-center justify-center
                    text-slate-700
                    text-[11px]
                    font-semibold
                    shrink-0
                "
                                            >
                                                VT
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <h5 className="text-[13px] font-semibold text-slate-700">
                                                        Vendor Team
                                                    </h5>

                                                    <span className="text-[10px] text-slate-400">
                                                        10m
                                                    </span>
                                                </div>

                                                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                                                    Meeting today at 5 PM.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Footer */}
                                    <div className="p-2 border-t border-slate-100">
                                        <button
                                            className="
                                                w-full
                                                py-2
                                                rounded-lg
                                                bg-[#F54900]
                                                text-white
                                                text-[12px]
                                                font-medium
                                                hover:opacity-90
                                                transition
                                                "
                                        >
                                            View All
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Profile Dropdown */}
                        <div className="relative">

                            {/* Profile Button */}
                            <button
                                onClick={() => setOpenProfile(!openProfile)}
                                className="
                    flex items-center gap-3
                    px-2 py-1.5
                    rounded-md
                    hover:bg-slate-100
                    transition-all
                    "
                            >
                                {/* Avatar */}
                                <div
                                    className="
                        w-10 h-10
                        rounded-xl
                        bg-[#F54900]
                        flex items-center justify-center
                        text-white
                        text-sm
                        font-semibold
                    "
                                >
                                    VM
                                </div>

                                {/* User Info */}
                                <div className="hidden md:block text-left">
                                    <h4 className="text-sm font-semibold text-slate-700 leading-none">
                                        VendorMesh
                                    </h4>

                                    <p className="text-xs text-slate-400 mt-1">
                                        Administrator
                                    </p>
                                </div>

                                {/* Arrow */}
                                <ChevronDown
                                    size={16}
                                    className={`
                        text-slate-400
                        transition duration-300
                        ${openProfile ? "rotate-180" : ""}
                    `}
                                />
                            </button>

                            {/* Dropdown */}
                            {openProfile && (
                                <div
                                    className="
                        absolute right-0 top-[55px]
                        w-[200px]
                        bg-white
                        border border-slate-200
                        rounded-md
                        shadow-lg
                        overflow-hidden
                        z-50
                    "
                                >
                                    {/* Profile */}
                                    <button
                                        className="
                        w-full flex items-center gap-3
                        px-4 py-3
                        text-sm text-slate-700
                        hover:bg-slate-100
                        transition
                        "
                                    >
                                        <User size={16} />
                                        My Profile
                                    </button>

                                    {/* Logout */}
                                    <button
                                        className="
                        w-full flex items-center gap-3
                        px-4 py-3
                        text-sm text-red-500
                        hover:bg-red-50
                        transition
                        "
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>

            </div>
        </header>
    );
};

export default Header;