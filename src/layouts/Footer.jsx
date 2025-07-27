import React from "react";
import logo from "../assets/logo/LogoBuzzData.png"

const Footer = () => {
  return (
    <footer className=" bg-white text-sm text-gray-600 mt-auto w-full">
      <div className="py-10 px-6 pl-75 flex items-start">
        <div className="flex flex-col gap-1 text-left">
          <p>当サイトご利用にあたって</p>
          <p>プライバシーポリシー</p>
          <p>会社概要</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src={logo} alt="Logo" className="h-10" />
          <p>copyright (C) BuzzData all rights reserve</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
