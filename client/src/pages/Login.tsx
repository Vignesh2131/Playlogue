import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Gradient from "@/components/Gradient";
import InputField from "@/components/InputField";
import AuthHeader from "@/components/AuthHeader";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      <Gradient />
      <div className="w-full max-w-md mx-4 relative z-10">
        <AuthHeader headerText="Login" lineText="Got back with new review"/>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <InputField
              value={formData.email}
              placeholder="Enter your email"
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <InputField
              value={formData.password}
              placeholder="Enter your password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <Button
            type="submit"
            className="w-full relative overflow-hidden group bg-transparent border border-red-500 text-white hover:bg-red-500/20 transition-all duration-300"
          >
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 w-0 bg-red-500/20 transition-all duration-300 group-hover:w-full"></div>
          </Button>

          <p className="text-center text-white pt-4">
            New NPC?{" "}
            <Link
              to="/signup"
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
