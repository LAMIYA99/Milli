"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/admin/layout/Sidebar";
import LoginModal from "@/components/admin/auth/LoginModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (using localStorage for mock auth)
    const authStatus = localStorage.getItem("milli_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("milli_admin_auth", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("milli_admin_auth");
  };

  if (isChecking) {
    return <div className="min-h-screen flex items-center justify-center bg-zinc-950"><div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!isAuthenticated) {
    return <LoginModal onLogin={handleLogin} />;
  }

  return (
    <>
      <Sidebar onLogout={handleLogout} />
      <main className="ml-64 p-8 min-h-screen bg-zinc-50">
        {children}
      </main>
    </>
  );
}
