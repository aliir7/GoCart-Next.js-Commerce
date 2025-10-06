// components/LoginForm.tsx
"use client";

import { useState } from "react";
import { Mail, Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌تونی منطق ارسال فرم رو پیاده‌سازی کنی
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      <div className="mb-1">
        <div className="font-medium">Login in to GoCart</div>
      </div>

      {/* Email Field */}
      <div className="mt-4 flex flex-col divide-y divide-solid divide-slate-50 rounded-xl border border-slate-200 dark:divide-[#ffffff29] dark:border-[#ffffff29] dark:bg-[#2a2a2a]">
        <div className="flex h-12 flex-row items-center px-6">
          <Mail size={14} className="text-gray-500 dark:text-gray-400" />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-0.5 w-full bg-transparent text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-[#ffffff66]"
            placeholder="Enter Your Email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="mt-4 flex flex-col divide-y divide-solid divide-slate-50 rounded-xl border border-slate-200 dark:divide-[#ffffff29] dark:border-[#ffffff29] dark:bg-[#2a2a2a]">
        <div className="flex h-12 flex-row items-center px-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-0.5 w-full bg-transparent text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-[#ffffff66]"
            placeholder="Enter Your Password"
            autoComplete="current-password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        Login
      </button>
    </form>
  );
}
export default LoginForm;
