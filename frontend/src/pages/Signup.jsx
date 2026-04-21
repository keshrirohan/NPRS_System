import { useState } from "react";
import { signup } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await signup(form);

    if (res.data.message === "User already exists") {
      alert("User already exists, please login");
    } else {
      alert("Signup successful");
      navigate("/login");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 px-4">

      <div className="w-full max-w-md bg-black border border-red-500 p-8 rounded-3xl shadow-[0_0_20px_rgba(255,0,0,0.3)]">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500">
          Signup
        </h2>

        {/* Name */}
        <input
          placeholder="Enter Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-4 p-3 bg-black border border-red-400 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

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
          onClick={handleSignup}
          className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
        >
          Create Account
        </button>

        {/* Link */}
        <p className="text-center mt-5 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-red-400 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;