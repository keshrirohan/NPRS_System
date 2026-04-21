import { useState } from "react";
import { login } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await login(form);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 px-4">

      <div className="w-full max-w-md bg-black border border-red-500 p-8 rounded-3xl shadow-[0_0_20px_rgba(255,0,0,0.3)]">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500">
          Login
        </h2>

        {/* Email */}
        <input
          placeholder="Enter Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-4 p-3 bg-black border border-red-400 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-4 p-3 bg-black border border-red-400 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
        >
          Login
        </button>

        {/* Link */}
        <p className="text-center mt-5 text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-red-400 font-semibold hover:underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;