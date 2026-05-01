import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { admin_login,clearMessages } from "../../store/Reducers/authReducer";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";




export default function AdminLogin() {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loader, errorMessage, successMessage  } = useSelector(state => state.auth)

  const [showPass, setShowPass] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState({ email: "", password: "" });

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(admin_login(state))

  };

useEffect(() => {
  if (errorMessage) toast.error(errorMessage);
  if (successMessage) {
    toast.success(successMessage);
    navigate("/");
  }

  if (errorMessage || successMessage) {
    dispatch(clearMessages());
  }
}, [errorMessage, successMessage]);

  return (
    <div className="min-h-screen flex bg-orange-50 font-sans">
      {/* ── RIGHT FORM PANEL ── */}
      <div className="flex flex-1 items-center justify-center px-5 py-10">
        <div
          className={`w-full max-w-md transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-white rounded-3xl border border-orange-100 shadow-xl shadow-orange-100/60 p-8">
            <div className="text-center">
              {/* Logo / Image */}
              <div className="text-center mb-2">
                <img
                  src="/images/logo.png"
                  alt="Admin Logo"
                  className="w-44 h-auto object-contain mx-auto drop-shadow-lg"
                />
              </div>
            </div>
            <form onSubmit={submitHandle} className="flex flex-col  gap-3.5">
              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={inputHandle}
                    placeholder="admin@example.com"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={18} />
                  </span>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={state.password}
                    onChange={inputHandle}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((p) => !p)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember me + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer select-none text-sm text-gray-500">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded accent-orange-500"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Submit button */}
              {/* <button
                disabled={loader}
                type="submit"
                className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-200
  ${loader
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200 active:translate-y-0 active:shadow-none"
                  }`}
              >
                {loader ? (
                  <div className="flex items-center justify-center w-full">
                    <PropagateLoader color="#fff" size={10} />
                  </div>
                ) : (
                  "Login"
                )}
              </button> */}

              <button
                disabled={loader}
                type="submit"
                className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-200
                ${loader
                    ? "bg-orange-400 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200 active:translate-y-0 active:shadow-none"
                  }`}>
                {loader ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}