import { useState } from "react";
import { Link } from "react-router-dom";
import {
    HiOutlineEnvelope,
    HiOutlineLockClosed,
    HiOutlineEye,
    HiOutlineEyeSlash,
    HiOutlineBuildingStorefront,
    HiOutlineArrowUpRight,
} from "react-icons/hi2";

// ─── Constants ────────────────────────────────────────────────────────────────

const FEATURES = [
    { title: "Secure Platform", desc: "Bank-grade encryption on every transaction" },
    { title: "Easy Management", desc: "List products in under 60 seconds" },
    { title: "Fast Checkout", desc: "One-tap buy for repeat customers" },
    { title: "Multi Vendor", desc: "Run multiple storefronts from one dashboard" },
];

// ─── Tiny reusable atoms ──────────────────────────────────────────────────────

const Logo = ({ size = "md" }) => {
    const isLg = size === "lg";
    return (
        <div className="flex items-center gap-[9px]">
            <div className={`${isLg ? "w-[38px] h-[38px]" : "w-9 h-9"} rounded-xl bg-stone-900 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.18)]`}>
                <HiOutlineBuildingStorefront size={isLg ? 18 : 16} color="#f97316" />
            </div>
            <span className={`serif ${isLg ? "text-[1.15rem]" : "text-[1.1rem]"} text-stone-900 font-extrabold`}>
                VendorHub
            </span>
        </div>
    );
};

const Badge = ({ children }) => (
    <div className="inline-flex items-center gap-[5px] bg-orange-50 border-[1.5px] border-orange-200 rounded-full px-[11px] py-1 text-[10px] font-bold text-orange-700 uppercase tracking-[0.04em]">
        {children}
    </div>
);

const Divider = ({ label }) => (
    <div className="flex items-center gap-[10px]">
        <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,transparent,#ddd8cf,transparent)" }} />
        <span className="text-[10px] text-stone-300 font-bold tracking-[0.05em]">{label}</span>
        <div className="h-px flex-1" style={{ background: "linear-gradient(90deg,transparent,#ddd8cf,transparent)" }} />
    </div>
);

// ─── Input Field ──────────────────────────────────────────────────────────────

const Field = ({ icon: Icon, label, type = "text", placeholder, name,
  value,
  onChange, toggleFn, showToggle }) => (
    <div>
        <label className="block text-[10px] font-bold tracking-[0.09em] uppercase text-stone-400 mb-[5px]">
            {label}
        </label>
        <div className="relative">
            <Icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full pl-[34px] pr-[34px] py-[9px] rounded-[10px] text-[0.84rem] text-stone-700 bg-[#faf8f5] border-2 border-[#e7e3dc] outline-none transition-all duration-150 placeholder:text-stone-300 focus:bg-white focus:border-orange-500 focus:ring-[3px] focus:ring-orange-500/10 box-border"
            />
            {toggleFn && (
                <button
                    type="button"
                    onClick={toggleFn}
                    className="absolute right-[10px] top-1/2 -translate-y-1/2 text-stone-400 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer p-0 flex"
                >
                    {showToggle ? <HiOutlineEyeSlash size={14} /> : <HiOutlineEye size={14} />}
                </button>
            )}
        </div>
    </div>
);

// ─── Social Button ────────────────────────────────────────────────────────────

const SocialButton = ({ icon, label, hoverClass }) => (
    <button
        type="button"
        className={`flex-1 flex items-center justify-center gap-[8px] py-[10px] px-3 rounded-xl border-2 border-[#e7e3dc] bg-[#faf8f5] hover:bg-white transition-all duration-[180ms] cursor-pointer active:scale-[0.98] ${hoverClass}`}
    >
        {icon}
        <span className="text-[0.8rem] font-semibold text-stone-600">{label}</span>
    </button>
);

// ─── Social Icons (inline SVG, no extra library needed) ───────────────────────

const GoogleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
    </svg>
);


// ─── Left Panel ───────────────────────────────────────────────────────────────

const LeftPanel = () => (
    <div
        className="hidden lg:flex flex-col justify-start w-[46%] relative overflow-hidden gap-7 p-8"
        style={{ background: "linear-gradient(160deg,#fef3c7 0%,#fed7aa 40%,#fde8d0 100%)" }}
    >
        {/* Decorative blobs */}
        <div className="absolute -top-[70px] -right-[50px] w-[240px] h-[240px] rounded-full pointer-events-none bg-amber-300/20" />
        <div className="absolute -bottom-[80px] -left-[60px] w-[220px] h-[220px] rounded-full pointer-events-none bg-orange-400/15" />
        <div className="absolute top-[42%] right-[8%] w-[100px] h-[100px] rounded-full pointer-events-none bg-white/25" />

        {/* Grid texture overlay */}
        <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
                backgroundImage: "linear-gradient(#92400e 1px,transparent 1px),linear-gradient(90deg,#92400e 1px,transparent 1px)",
                backgroundSize: "38px 38px",
            }}
        />

        {/* Logo */}
        <div className="relative z-10">
            <Logo size="lg" />
        </div>

        {/* Marketing content */}
        <div className="relative z-10">
            <Badge>
                <span className="w-[5px] h-[5px] rounded-full bg-orange-500 inline-block" />
                50,000+ Active Vendors
            </Badge>

            <h1 className="serif text-[3rem] leading-[1.06] text-stone-900 mt-[14px] mb-[10px]">
                Your store,<br />
                <em className="not-italic text-orange-700">your rules.</em>
            </h1>

            <p className="text-stone-500 text-[0.82rem] leading-[1.65] max-w-[270px] mb-[18px]">
                Build, manage, and scale your online shop on a platform made for real sellers — not corporations.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-[7px] mb-[18px]">
                {FEATURES.map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-[10px] px-3 py-[9px] bg-white/55 border-[1.5px] border-white/90 rounded-xl transition-all duration-[180ms] hover:bg-white/85 hover:translate-x-[3px]">
                        <div className="w-[7px] h-[7px] rounded-full bg-gradient-to-br from-orange-500 to-orange-400 shrink-0 mt-1" />
                        <div>
                            <div className="text-[0.75rem] font-bold text-stone-900 mb-[1px]">{title}</div>
                            <div className="text-[0.7rem] text-stone-400">{desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Login() {
    const [showPass, setShowPass] = useState(false);

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const submitHandle = (e) => {
        e.preventDefault();
        console.log("STATE:", state);
    }



    return (
        <div className="h-screen flex bg-[#f5f0e8]">
            {/* Left: Marketing panel (desktop only) */}
            <LeftPanel />

            {/* Right: Registration form */}
            <div className="flex flex-1 items-center justify-center bg-white p-6 relative overflow-hidden">

                {/* Subtle corner glows */}
                <div className="absolute top-0 right-0 w-[180px] h-[180px] pointer-events-none"
                    style={{ background: "radial-gradient(circle at top right,#fff7ed,transparent 70%)" }} />
                <div className="absolute bottom-0 left-0 w-[130px] h-[130px] pointer-events-none"
                    style={{ background: "radial-gradient(circle at bottom left,#fef3c7,transparent 70%)" }} />

                <div className="w-full max-w-[370px] relative z-10">

                    {/* Mobile-only logo */}
                    <div className="flex lg:hidden mb-5">
                        <Logo />
                    </div>

                    {/* Heading */}
                    <div className="mb-5">
                        <h2 className="serif text-[1.9rem] text-stone-900 leading-[1.1] mt-2 mb-[5px]">
                            Sign in
                        </h2>
                        <p className="text-[0.8rem] text-stone-400">
                            Continue to your dashboard
                        </p>
                    </div>

                    {/* Social login buttons */}
                    <div className="flex gap-[8px] mb-[14px]">
                        <SocialButton
                            icon={<FacebookIcon />}
                            label="Facebook"
                            hoverClass="hover:border-[#1877F2]/40 hover:shadow-[0_2px_12px_rgba(24,119,242,0.10)]"
                        />
                        <SocialButton
                            icon={<GoogleIcon />}
                            label="Google"
                            hoverClass="hover:border-stone-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.07)]"
                        />
                    </div>

                    <Divider label="OR LOGIN WITH EMAIL" />

                    {/* Form fields */}

                    <form onSubmit={submitHandle}>
                        <div className="flex flex-col gap-[10px] mt-[14px]">
                            <Field
                                icon={HiOutlineEnvelope}
                                onChange={inputHandle}
                                name="email"
                                label="Email Address"
                                type="email"
                                placeholder="rahul@example.com"
                            />

                            <Field
                                icon={HiOutlineLockClosed}
                                label="Password"
                                onChange={inputHandle}
                                name="password"
                                type={showPass ? "text" : "password"}
                                placeholder="Enter your password"
                                toggleFn={() => setShowPass(p => !p)}
                                showToggle={showPass}
                            />

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-[7px] bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white font-bold text-[0.875rem] py-[13px] rounded-xl transition-all duration-200"
                            >
                                Login <HiOutlineArrowUpRight size={16} />
                            </button>

                            <p className="text-center text-[0.82rem] text-stone-500 m-0">
                                Don’t have an account?{" "}
                                <Link
                                    to="/register"
                                    className="text-stone-900 font-extrabold border-b-2 border-orange-500 pb-[1px] hover:text-orange-600"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}
