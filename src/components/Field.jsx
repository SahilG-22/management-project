// ── Field ────────────────────────────────────────────────────────────────────
function Field({ label, type = "text", value, onChange, placeholder, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold tracking-widest uppercase text-gray-400">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full rounded-lg px-3.5 py-2.5 text-sm text-gray-900 bg-gray-50 outline-none border transition-all duration-150 placeholder:text-gray-300 focus:bg-violet-50 focus:border-violet-500 ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      />
      {error && <p className="text-[11px] text-red-400">{error}</p>}
    </div>
  );
}

export default Field;