import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import Field from "../Field";
import GradientButton from "../GradientButton";
import { useNavigate } from "react-router-dom";

// ── Login Form ───────────────────────────────────────────────────────────────
function LoginForm({ onSwitch }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();


  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.password) e.password = "Password is required";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setServerError("");
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert(`Successfully signed in as ${form.email}`);
      navigate('/');

    } catch (err) {
      setServerError(err.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Field label="Email Address" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" error={errors.email} />
      <Field label="Password" type="password" value={form.password} onChange={set("password")} placeholder="••••••••" error={errors.password} />
      {serverError && <p className="text-xs text-red-400">{serverError}</p>}
      <GradientButton loading={loading} label="Sign In" onClick={handleSubmit} />
      <p className="text-center text-xs text-gray-400">
        No account?{" "}
        <button onClick={onSwitch} className="text-violet-600 font-bold underline underline-offset-2 hover:text-pink-600 transition-colors bg-transparent border-none cursor-pointer p-0">
          Create one
        </button>
      </p>
    </div>
  );
}

export default LoginForm;