import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InputField from "@/components/InputField";
import AuthHeader from "@/components/AuthHeader";
import Gradient from "@/components/Gradient";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      <Gradient />
      <div className="w-full max-w-md mx-4 relative z-10">
        <AuthHeader headerText="Signup" lineText="Signup to meet game freaks" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <InputField
              placeholder="Enter the username"
              value={formData.username}
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <InputField
              placeholder="Enter the email"
              value={formData.email}
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <InputField
              placeholder="Enter the password"
              value={formData.password}
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="space-y-2 flex ">
            <InputField
              placeholder="Confirm password"
              value={formData.confirmPassword}
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          <Button
            type="submit"
            className="w-full relative overflow-hidden group bg-transparent border border-red-500 text-white hover:bg-red-500/20 transition-all duration-300"
          >
            <span className="relative z-10">Sign up</span>
            <div className="absolute inset-0 w-0 bg-red-500/20 transition-all duration-300 group-hover:w-full"></div>
          </Button>

          <p className="text-center text-white pt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
