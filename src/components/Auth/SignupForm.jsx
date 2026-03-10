import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebase";
import Field from "../Field";
import GradientButton from "../GradientButton";
import { useNavigate } from "react-router-dom";

// ── Signup Form ──────────────────────────────────────────────────────────────
function SignupForm({ onSwitch }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Min 6 characters";
    if (!form.confirmPassword) e.confirmPassword = "Please confirm";
    else if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords don't match";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setServerError("");
    try {
      const { user } = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(user, { displayName: form.name });
      alert(`Account created successfully for ${form.name}`);
      navigate('/login');
    } catch (err) {
      setServerError(err.message ?? "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Field label="Full Name" value={form.name} onChange={set("name")} placeholder="Jane Doe" error={errors.name} />
      <Field label="Email Address" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" error={errors.email} />
      <Field label="Password" type="password" value={form.password} onChange={set("password")} placeholder="••••••••" error={errors.password} />
      <Field label="Confirm Password" type="password" value={form.confirmPassword} onChange={set("confirmPassword")} placeholder="••••••••" error={errors.confirmPassword} />
      {serverError && <p className="text-xs text-red-400">{serverError}</p>}
      <GradientButton loading={loading} label="Create Account" onClick={handleSubmit} />
      <p className="text-center text-xs text-gray-400">
        Already have an account?{" "}
        <button onClick={onSwitch} className="text-violet-600 font-bold underline underline-offset-2 hover:text-pink-600 transition-colors bg-transparent border-none cursor-pointer p-0">
          Sign in
        </button>
      </p>
    </div>
  );
}

export default SignupForm;