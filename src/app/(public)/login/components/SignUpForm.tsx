"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/features/user/userAPI";
import { RootState } from "@/redux/store";
import { RegisterCredentials } from "@/redux/features/user/types"; // Adjust the import based on your structure

const SignUpForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.user);
  const [username, setUsername] = React.useState<string>(""); // Specify type
  const [email, setEmail] = React.useState<string>(""); // Specify type
  const [password, setPassword] = React.useState<string>(""); // Specify type

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData: RegisterCredentials = { username, email, password }; // Create userData object
    dispatch(registerUser(userData) as any); // Cast to any to suppress TypeScript error
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-base-100 transition-all duration-300">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-5">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered"
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
              className="input input-bordered"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
          <p className="mt-4 text-center">
            <span
              onClick={toggleForm}
              className="cursor-pointer text-blue-500 hover:underline"
            >
              Already have an account? Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
