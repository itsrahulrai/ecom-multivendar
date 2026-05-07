import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation";
import { Bell, LogOut } from "lucide-react";

// ── NavItem ─────────────────────────
const NavItem = ({ item, active }) => {
  const Icon = item.icon;

  return (
    <Link
      to={item.to}
      className={`
       group flex items-center gap-3 px-3 py-1.5 rounded-xl
        transition-all duration-200
        ${active
          ? "bg-[#F54900] text-white shadow-md shadow-[#F54900]/20"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
        }
      `}
    >
      <span
        className={`
        flex items-center justify-center w-9 h-9 rounded-lg transition
        ${active
            ? "bg-white/20 text-white"
            : "text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-700"
          }
      `}
      >
        <Icon size={18} />
      </span>

      <span className={`flex-1 text-[13px] ${active ? "font-semibold" : "font-medium"}`}>
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

// ── Sidebar ─────────────────────────
const Sidebar = () => {
  const [allNav, setAllNav] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);

  return (

    <aside
      className="
    fixed inset-y-0 left-0
    w-[220px]
    bg-white
    border-r border-slate-200
    flex flex-col
    z-50
    h-screen
  "
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#F54900] flex items-center justify-center">
            <span className="text-white font-bold text-sm">VM</span>
          </div>

          <div>
            <span className="text-[14px] font-bold text-slate-800">VendorMesh</span>
            <p className="text-[9px] text-slate-400">Multi-vendor Platform</p>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 pt-1 pb-2">
        {allNav.map((group, index) => (
          <div key={index}>

            {/* Section Title */}
            <p className="text-[10px] font-semibold text-slate-400 uppercase px-4 mt-2 mb-1 tracking-wider">
              {group.section}
            </p>

            {/* Items */}
            <div className="space-y-0 px-2">
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
      <div className="mx-2 mb-4 mt-auto">
        <div
          className="
      flex items-center gap-2
      px-2 py-2
      rounded-xl
      bg-white
      border border-slate-200
      hover:border-[#F54900]/20
      transition-all duration-300
      cursor-pointer
    "
        >
          {/* Avatar */}
          <div
            className="
        w-8 h-8
        rounded-xl
        bg-[#F54900]
        flex items-center justify-center
        text-white
        text-xs
        font-semibold
      "
          >
            R
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <p
              className="
          text-[13px]
          font-semibold
          text-slate-700
          leading-none
          truncate
        "
            >
              Rahul Rai
            </p>

            <p
              className="
          text-[10px]
          text-slate-400
          truncate
          mt-0.5
        "
            >
              codersvox@gmail.com
            </p>
          </div>

          {/* Logout */}
          <button
            className="
        w-7 h-7
        rounded-lg
        flex items-center justify-center
        text-slate-400
        hover:bg-[#F54900]
        hover:text-white
        transition-all
      "
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;