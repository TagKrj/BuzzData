import React from "react";
import Sidebar from './layouts/Sidebar.jsx';
import Navbar from './layouts/Navbar.jsx';
import Footer from './layouts/Footer.jsx';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar - Fixed bên trái */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-[#F9F8F6] p-6">
          {/* Nội dung chính sẽ ở đây */}
        </main>
      </div>
    </div>
  );
}
export default App;
