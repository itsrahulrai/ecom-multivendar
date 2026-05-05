import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import {
  LayoutDashboard,
  BarChart3,
  Activity,
  Package,
  ShoppingCart,
  Star,
  Boxes,
  Wallet,
  CreditCard,
  Users,
  Puzzle,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

// ── Nav config ─────────────────────────────────────────
const NAV = [
  {
    items: [
      { label: "Dashboard", icon: LayoutDashboard, to: "/" },
      { label: "Analytics", icon: BarChart3, to: "/analytics", badge: { text: "Pro", cls: "bg-orange-100 text-[#F54900]" } },
      { label: "Live Sales", icon: Activity, to: "/live", badge: { text: "Live", cls: "bg-emerald-100 text-emerald-600 animate-pulse" } },
    ],
  },
  {
    section: "Store",
    items: [
      { label: "Products", icon: Package, to: "/products", badge: { text: "248", cls: "bg-amber-100 text-amber-600" } },
      { label: "Orders", icon: ShoppingCart, to: "/orders", badge: { text: "12", cls: "bg-red-100 text-red-500" } },
      { label: "Reviews", icon: Star, to: "/reviews" },
      { label: "Inventory", icon: Boxes, to: "/inventory" },
    ],
  },
  {
    section: "Platform",
    items: [
      { label: "Settings", icon: Settings, to: "/settings" },
    ],
  },
];

// ── NavItem ───────────────────────────────────────────
const NavItem = ({ item, active }) => {
  const Icon = item.icon;

  return (
    <Link
      to={item.to}
      className={`
        group relative flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5
        transition-all duration-150
        ${active
          ? "bg-[#F54900]/10 text-[#F54900]"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"}
      `}
    >
      {active && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 bg-[#F54900] rounded-r-full" />
      )}

      <span
        className={`
        flex items-center justify-center w-8 h-8 rounded-lg
        ${active
            ? "bg-[#F54900]/15 text-[#F54900]"
            : "text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"}
      `}
      >
        <Icon size={18} />
      </span>

      <span
        className={`flex-1 text-[13px]
        ${active ? "font-semibold text-[#F54900]" : "font-medium text-slate-600"}`}
      >
        {item.label}
      </span>

      {item.badge && (
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.badge.cls}`}>
          {item.badge.text}
        </span>
      )}
    </Link>
  );
};

// ── Sidebar ───────────────────────────────────────────
const Sidebar = () => {

  const [allNav,setAllNav]  = useState([])
  useEffect(() => {
    const navs = getNav('admin')
    setAllNav(navs)
  },[])

  console.log(allNav)

  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 w-[260px] h-screen z-50 flex flex-col bg-white border-r border-slate-200 shadow-sm">

      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-[18px] border-b border-slate-100">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#F54900] flex items-center justify-center">
            <span className="text-white font-bold text-sm">VM</span>
          </div>

          <div>
            <span className="text-[15px] font-bold text-slate-800">VendorMesh</span>
            <p className="text-[10px] text-slate-400">Multi-vendor Platform</p>
          </div>
        </Link>

        <button className="ml-auto relative text-slate-400 hover:text-[#F54900]">
          <Bell size={18} />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#F54900] rounded-full" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-1  py-0">

        {NAV.map((group) => (
          <div key={group.section} className="mb-2">

            {/* Section Title */}
            <p className="text-[9px] font-medium text-slate-400 uppercase px-1 mb-[6px] leading-none tracking-wider">
              {group.section}
            </p>

            {/* Items */}
            <div className="space-y-[2px]">
              {group.items.map((item) => (
                <NavItem
                  key={item.to}
                  item={item}
                  active={location.pathname === item.to}
                />
              ))}
            </div>

          </div>
        ))}

      </nav>

      {/* Bottom User */}
      <div className="mx-3 mb-3">
        <div className="flex items-center gap-2 px-1 py-1 rounded-xl hover:bg-slate-100 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-[#F54900] flex items-center justify-center text-white font-bold text-sm">
            R
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-700">Rahul Rai</p>
            <p className="text-xs text-slate-400">codersvox@gmail.com</p>
          </div>

          <LogOut size={16} className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-[#F54900]" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;