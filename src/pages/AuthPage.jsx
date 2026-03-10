import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import SignupForm from "../components/Auth/SignupForm";
import { useNavigate } from "react-router-dom";

// ── Features list ─────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "📊", text: "Real-time simulation dashboard" },
  { icon: "📈", text: "Sales & market analytics" },
  { icon: "💰", text: "Finance & R&D controls" },
];

// ── Root ─────────────────────────────────────────────────────────────────────
export default function AuthPage() {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen flex bg-gray-100" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>

      {/* ── Left: Dark sidebar ── */}
      <div className="hidden lg:flex w-[400px] shrink-0 flex-col justify-between p-12 relative overflow-hidden" style={{ background: "#14141f" }}>
        {/* Glow orbs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(124,58,237,0.4)" }} />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(219,39,119,0.3)" }} />

        {/* Top content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-14">
            <span className="text-white text-xl font-extrabold tracking-tight">SimuCorp</span>
          </div>

          {/* Headline */}
          <h2 className="text-white text-3xl font-black leading-snug mb-4 whitespace-pre-line">
            {mode === "login" ? "Welcome\nback 👋" : "Start your\njourney 🚀"}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] mb-10">
            {mode === "login"
              ? "Sign in to access your business simulation dashboard and track performance."
              : "Create an account to run simulations, manage marketing, production, and finance."}
          </p>

          {/* Feature pills */}
          <div className="flex flex-col gap-2.5">
            {FEATURES.map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 text-sm font-medium border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)" }}>
                <span className="text-base">{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-600 text-[11px] tracking-wide relative z-10">
          © 2026 SimuCorp · All rights reserved
        </p>
      </div>

      {/* ── Right: Form panel ── */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-xl p-10">

          {/* Tab switcher */}
          <div className="flex bg-gray-100 rounded-xl p-1 gap-1 mb-8">
            {[["login", "Sign In"], ["signup", "Sign Up"]].map(([tab, label]) => (
              <button
                key={tab}
                onClick={() => setMode(tab)}
                className={`flex-1 py-2.5 rounded-lg text-[13px] font-bold tracking-wide transition-all duration-200 border-none cursor-pointer ${
                  mode === tab
                    ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-md"
                    : "bg-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Heading */}
          <div className="mb-7">
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">
              {mode === "login" ? "Sign in to your account" : "Create a new account"}
            </h3>
            <p className="text-sm text-gray-400">
              {mode === "login" ? "Enter your credentials to continue" : "Fill in the details below to get started"}
            </p>
          </div>

          {/* Form */}
          {mode === "login"
            ? <LoginForm onSwitch={() => setMode("signup")} />
            : <SignupForm onSwitch={() => setMode("login")} />}

          {/* Footer divider */}
          <div className="flex items-center gap-3 mt-7">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-[10px] text-gray-300 font-semibold tracking-widest uppercase">Secured by Firebase</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

        </div>
      </div>
    </div>
  );
}
