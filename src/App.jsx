import React from "react";
import Sidebar from './layouts/Sidebar.jsx';
import Navbar from './layouts/Navbar.jsx';
import Footer from './layouts/Footer.jsx';
import TikTokRanking from './pages/TikTokRanking.jsx';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar - Fixed bên trái */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-[#f1f2f3]">
          <TikTokRanking />
        </main>
      </div>
    </div>
  );
}
export default App;
