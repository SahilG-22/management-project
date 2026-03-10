// ── Gradient Button ──────────────────────────────────────────────────────────
function GradientButton({ loading, label, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full mt-1 py-3 rounded-lg text-white text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-violet-600 to-pink-600 shadow-lg hover:opacity-90 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed border-none cursor-pointer"
    >
      {loading ? "Please wait…" : label}
    </button>
  );
}

export default GradientButton;