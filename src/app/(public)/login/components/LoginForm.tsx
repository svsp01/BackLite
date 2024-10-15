"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/features/user/userAPI";
import { RootState } from "@/redux/store";
import { LoginCredentials } from "@/redux/features/user/types";

const LoginForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.user);
  const [email, setEmail] = React.useState<string>(""); // Specify type
  const [password, setPassword] = React.useState<string>(""); // Specify type

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const credentials: LoginCredentials = { email, password }; // Create credentials object

    try {
      await dispatch(loginUser(credentials) as any); // Cast to any to suppress TypeScript error
    } catch (err) {
      console.error("Login failed:", err); 
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-base-100 transition-all duration-300">
      <div className="w-full rounded-xl max-w-md p-6 bg-white shadow-xl">
        <h1 className="text-2xl font-bold text-black text-center mb-5">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered bg-transparent"
              required
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered bg-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
          <p className="mt-4 text-center">
            <span
              onClick={toggleForm}
              className="cursor-pointer text-blue-500 hover:underline"
            >
              Don't have an account? Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
