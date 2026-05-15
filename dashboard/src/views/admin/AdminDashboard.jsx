import React from "react";
import {
    DollarSign,
    ShoppingCart,
    Store,
    Package,
    TrendingUp,
    TrendingDown,
    Eye,
    Bell,
    Users,
    ArrowUpRight,
} from "lucide-react";

const stats = [
    {
        title: "Revenue",
        value: "$48.5K",
        icon: DollarSign,
        growth: "+12%",
        bg: "bg-[#F54900]",
    },
    {
        title: "Orders",
        value: "2,845",
        icon: ShoppingCart,
        growth: "+8%",
        bg: "bg-blue-500",
    },
    {
        title: "Vendors",
        value: "425",
        icon: Store,
        growth: "+5%",
        bg: "bg-purple-500",
    },
    {
        title: "Products",
        value: "8,240",
        icon: Package,
        growth: "-2%",
        bg: "bg-green-500",
    },
];

const AdminDashboard = () => {
    return (
        <div className="w-full space-y-5">

            {/* Top Header */}
            <div
                className=" mr-8
          relative
          overflow-hidden
          rounded-3xl
          bg-gradient-to-r from-[#F54900] to-orange-500
         p-5 lg:p-7
          text-white
        "
            >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                    {/* Left */}
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">
                            Welcome Back, Rahul
                        </h1>

                        <p className="text-white/80 mt-2 text-sm lg:text-base max-w-xl">
                            Monitor your vendors, sales, orders and platform activity
                            from one powerful admin dashboard.
                        </p>

                        <div className="flex items-center gap-3 mt-5">

                            <button
                                className="
                  px-5 py-3
                  rounded-2xl
                  bg-white
                  text-[#F54900]
                  font-semibold
                  text-sm
                  hover:scale-105
                  transition-all
                "
                            >
                                View Reports
                            </button>

                            <button
                                className="
                  px-5 py-3
                  rounded-2xl
                  bg-white/10
                  backdrop-blur
                  border border-white/20
                  text-white
                  text-sm
                  hover:bg-white/20
                  transition-all
                "
                            >
                                Analytics
                            </button>

                        </div>
                    </div>

                    {/* Right */}
                    <div className="grid grid-cols-2 gap-3 shrink-0">

                        {/* Sales Card */}
                        <div
                            className="
      relative overflow-hidden
      rounded-[20px]
      bg-gradient-to-br from-emerald-500 to-green-600
      px-4 py-3
      text-white
      shadow-md shadow-emerald-500/20
    "
                        >
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-2xl" />

                            <div className="relative z-10">

                                {/* Top */}
                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-[11px] text-white/75">
                                            Today Sales
                                        </p>

                                        <h2 className="text-[22px] font-bold leading-none mt-1">
                                            $12.8K
                                        </h2>
                                    </div>

                                    <div
                                        className="
            w-9 h-9
            rounded-xl
            bg-white/15
            flex items-center justify-center
            backdrop-blur
          "
                                    >
                                        <TrendingUp size={17} />
                                    </div>

                                </div>

                                {/* Bottom */}
                                <div className="flex items-center gap-2 mt-3">

                                    <span
                                        className="
            px-2 py-[3px]
            rounded-md
            bg-white/15
            text-[10px]
            font-semibold
          "
                                    >
                                        +18%
                                    </span>

                                    <span className="text-[10px] text-white/70">
                                        Growth
                                    </span>

                                </div>

                            </div>
                        </div>

                        {/* Vendors Card */}
                        <div
                            className="
                            relative overflow-hidden
                            rounded-2xl
                            bg-gradient-to-br from-violet-500 to-purple-600
                            px-4 py-3
                            text-white
                            shadow-md shadow-purple-500/20
                            ">
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-black/10 rounded-full blur-2xl" />

                            <div className="relative z-10">

                                {/* Top */}
                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-[11px] text-white/75">
                                            Active Vendors
                                        </p>

                                        <h2 className="text-[22px] font-bold leading-none mt-1">
                                            324
                                        </h2>
                                    </div>

                                    <div
                                        className="
                                            w-9 h-9
                                            rounded-xl
                                            bg-white/15
                                            flex items-center justify-center
                                            backdrop-blur
                                        ">
                                        <Users size={17} />
                                    </div>

                                </div>

                                {/* Bottom */}
                                <div className="flex items-center gap-2 mt-3">
                                    <span
                                        className="
                                            px-2 py-[3px]
                                            rounded-md
                                            bg-white/15
                                            text-[10px]
                                            font-semibold
                                        ">
                                        +9%
                                    </span>

                                    <span className="text-[10px] text-white/70">
                                        Active
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 pr-8">

                {stats.map((item, index) => {
                    const Icon = item.icon;

                    // Premium Light Themes
                    const themes = [
                        {
                            card: "from-[#fff7ed] via-[#fff1e6] to-[#ffe4d6]",
                            icon: "from-[#ff7b54] to-[#ff4d00]",
                            glow: "bg-orange-300/30",
                            badge: "bg-orange-100 text-orange-600",
                            border: "border-orange-100",
                        },
                        {
                            card: "from-[#eff6ff] via-[#eef4ff] to-[#dbeafe]",
                            icon: "from-[#3b82f6] to-[#6366f1]",
                            glow: "bg-blue-300/30",
                            badge: "bg-blue-100 text-blue-600",
                            border: "border-blue-100",
                        },
                        {
                            card: "from-[#f5f3ff] via-[#faf5ff] to-[#ede9fe]",
                            icon: "from-[#8b5cf6] to-[#d946ef]",
                            glow: "bg-violet-300/30",
                            badge: "bg-violet-100 text-violet-600",
                            border: "border-violet-100",
                        },
                        {
                            card: "from-[#ecfdf5] via-[#f0fdf4] to-[#dcfce7]",
                            icon: "from-[#10b981] to-[#22c55e]",
                            glow: "bg-emerald-300/30",
                            badge: "bg-emerald-100 text-emerald-600",
                            border: "border-emerald-100",
                        },
                    ];

                    const theme = themes[index];

                    return (
                        <div
                            key={index}
                            className={`
          group
          relative
          overflow-hidden
          rounded-[20px]
          bg-gradient-to-br ${theme.card}
          border ${theme.border}
          p-5
          shadow-[0_10px_30px_rgba(0,0,0,0.04)]
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          hover:-translate-y-1
          transition-all duration-500
        `}
                        >

                            {/* Glow */}
                            <div
                                className={`
            absolute -top-10 -right-10
            w-32 h-32
            rounded-full
            blur-3xl
            ${theme.glow}
          `}
                            />

                            {/* Small Decorative Circle */}
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/30 rounded-full blur-2xl" />

                            {/* Content */}
                            <div className="relative z-10">

                                {/* Top */}
                                <div className="flex items-start justify-between">

                                    {/* Left */}
                                    <div>

                                        <p className="text-[13px] font-semibold text-slate-500">
                                            {item.title}
                                        </p>

                                        <h2 className="text-[32px] font-black text-slate-800 mt-3 leading-none tracking-tight">
                                            {item.value}
                                        </h2>

                                    </div>

                                    {/* Icon */}
                                    <div
                                        className={`
                relative
                w-14 h-14
                rounded-[20px]
                bg-gradient-to-br ${theme.icon}
                flex items-center justify-center
                text-white
                shadow-lg
                shadow-black/5
                group-hover:scale-110
                transition-all duration-500
              `}
                                    >
                                        <div className="absolute inset-0 rounded-[20px] bg-white/10" />

                                        <Icon size={24} className="relative z-10" />
                                    </div>

                                </div>

                                {/* Bottom */}
                                <div className="flex items-center justify-between mt-6">

                                    <div className="flex items-center gap-2">

                                        <div
                                            className={`
                  flex items-center gap-1
                  px-2.5 py-1
                  rounded-xl
                  text-[11px]
                  font-bold
                  ${theme.badge}
                `}
                                        >
                                            {item.growth.includes("-") ? (
                                                <TrendingDown size={12} />
                                            ) : (
                                                <TrendingUp size={12} />
                                            )}

                                            {item.growth}
                                        </div>

                                        <span className="text-[11px] text-slate-400 font-medium">
                                            This Month
                                        </span>

                                    </div>

                                    {/* Live Dot */}
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                                        <span className="text-[10px] text-slate-400 font-medium">
                                            Live
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                })}
            </div>
                
            {/* ===================== RECENT ORDERS + SELLER CHAT ===================== */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 pr-8 mb-5">

                {/* ===================== RECENT ORDERS ===================== */}
                <div
                    className="
                        xl:col-span-8
                        relative overflow-hidden
                        rounded-[28px]
                        border border-white/60
                        bg-white/80
                        backdrop-blur-xl
                        p-6
                        shadow-[0_20px_60px_rgba(0,0,0,0.04)]
                    "
                >

                    {/* Glow */}
                    <div className="absolute -top-10 right-0 w-60 h-60 bg-orange-100 rounded-full blur-3xl opacity-70" />

                    {/* Header */}
                    <div className="relative z-10 flex items-center justify-between">

                        <div>
                            <h2 className="text-[22px] font-black text-slate-800">
                                Recent Orders
                            </h2>

                            <p className="text-sm text-slate-400 mt-1">
                                Latest marketplace transactions
                            </p>
                        </div>

                        <button
                            className="
                                px-4 py-2
                                rounded-2xl
                                bg-slate-100
                                text-slate-600
                                text-sm
                                font-semibold
                                hover:bg-slate-200
                                transition-all
                            "
                        >
                            View All
                        </button>

                    </div>

                    {/* Orders */}
                    <div className="relative z-10 mt-6 space-y-4">

                        {[
                            {
                                id: "#ORD-1025",
                                customer: "Rahul Rai",
                                product: "MacBook Pro",
                                amount: "₹ 1,250",
                                status: "Completed",
                                color: "bg-emerald-100 text-emerald-600",
                            },
                            {
                                id: "#ORD-1026",
                                customer: "Anjali Verma",
                                product: "iPhone 15",
                                amount: "₹980",
                                status: "Pending",
                                color: "bg-yellow-100 text-yellow-600",
                            },
                            {
                                id: "#ORD-1027",
                                customer: "Rohit Singh",
                                product: "Headphones",
                                amount: "₹ 220",
                                status: "Shipped",
                                color: "bg-blue-100 text-blue-600",
                            },
                            {
                                id: "#ORD-1028",
                                customer: "Sneha Kapoor",
                                product: "Gaming Mouse",
                                amount: "₹ 120",
                                status: "Cancelled",
                                color: "bg-red-100 text-red-600",
                            },
                        ].map((order, index) => (
                            <div
                                key={index}
                                className="
                                    flex flex-col lg:flex-row lg:items-center justify-between
                                    gap-4
                                    rounded-[22px]
                                    border border-slate-100
                                    bg-white/70
                                    p-4
                                    hover:shadow-md
                                    transition-all duration-300
                                "
                            >

                                {/* Left */}
                                <div className="flex items-center gap-4">

                                    {/* Icon */}
                                    <div
                                        className="
                                            w-12 h-12
                                            rounded-2xl
                                            bg-gradient-to-br from-[#F54900] to-orange-400
                                            flex items-center justify-center
                                            text-white
                                            shadow-lg shadow-orange-200
                                        "
                                    >
                                        <ShoppingCart size={20} />
                                    </div>

                                    {/* Info */}
                                    <div>

                                        <h3 className="text-sm font-bold text-slate-800">
                                            {order.customer}
                                        </h3>

                                        <p className="text-xs text-slate-400 mt-1">
                                            {order.product}
                                        </p>

                                    </div>

                                </div>

                                {/* Right */}
                                <div className="flex items-center gap-6">

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Order ID
                                        </p>

                                        <h4 className="text-sm font-bold text-slate-700 mt-1">
                                            {order.id}
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Amount
                                        </p>

                                        <h4 className="text-sm font-bold text-slate-700 mt-1">
                                            {order.amount}
                                        </h4>
                                    </div>

                                    <div
                                        className={`
                                            px-3 py-1.5
                                            rounded-xl
                                            text-xs
                                            font-bold
                                            ${order.color}
                                        `}
                                    >
                                        {order.status}
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

                {/* ===================== SELLER CHAT ===================== */}
                <div
                    className="
                        xl:col-span-4
                        relative overflow-hidden
                        rounded-[28px]
                        border border-white/60
                        bg-white/80
                        backdrop-blur-xl
                        p-6
                        shadow-[0_20px_60px_rgba(0,0,0,0.04)]
                    "
                >

                    {/* Glow */}
                    <div className="absolute bottom-0 left-0 w-52 h-52 bg-violet-100 rounded-full blur-3xl opacity-70" />

                    {/* Header */}
                    <div className="relative z-10 flex items-center justify-between">

                        <div>

                            <h2 className="text-[22px] font-black text-slate-800">
                                Seller Chat
                            </h2>

                            <p className="text-sm text-slate-400 mt-1">
                                Active conversations
                            </p>

                        </div>

                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

                    </div>

                    {/* Chats */}
                    <div className="relative z-10 mt-6 space-y-4">

                        {[
                            {
                                name: "Aman Store",
                                message: "New stock uploaded successfully.",
                                time: "2m ago",
                                color: "from-orange-400 to-orange-500",
                            },
                            {
                                name: "Tech Seller",
                                message: "Shipment dispatched today.",
                                time: "10m ago",
                                color: "from-blue-400 to-cyan-500",
                            },
                            {
                                name: "Fashion Hub",
                                message: "Customer requested refund.",
                                time: "25m ago",
                                color: "from-violet-400 to-purple-500",
                            },
                            {
                                name: "Gaming World",
                                message: "Order #1045 confirmed.",
                                time: "1h ago",
                                color: "from-emerald-400 to-green-500",
                            },
                        ].map((chat, index) => (
                            <div
                                key={index}
                                className="
                                    flex items-start gap-3
                                    rounded-[20px]
                                    bg-white/70
                                    border border-slate-100
                                    p-4
                                    hover:shadow-md
                                    transition-all duration-300
                                "
                            >

                                {/* Avatar */}
                                <div
                                    className={`
                                        w-12 h-12
                                        rounded-2xl
                                        bg-gradient-to-br ${chat.color}
                                        flex items-center justify-center
                                        text-white
                                        font-bold
                                        shadow-lg
                                    `}
                                >
                                    {chat.name.charAt(0)}
                                </div>

                                {/* Content */}
                                <div className="flex-1">

                                    <div className="flex items-center justify-between">

                                        <h3 className="text-sm font-bold text-slate-800">
                                            {chat.name}
                                        </h3>

                                        <span className="text-[11px] text-slate-400">
                                            {chat.time}
                                        </span>

                                    </div>

                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                        {chat.message}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;