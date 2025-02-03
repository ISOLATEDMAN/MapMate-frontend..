import React from 'react';
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Top-right gradient orb */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full 
          blur-3xl opacity-30 animate-pulse"></div>
        
        {/* Bottom-left gradient orb */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-50 
          rounded-full blur-3xl opacity-30 animate-pulse" 
          style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] 
          bg-[size:14px_24px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;