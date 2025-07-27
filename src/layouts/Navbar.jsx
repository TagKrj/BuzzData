import React from 'react'
import search from "../assets/icon/Search.svg"

const Navbar = () => {
  return (
    <div className="w-full flex items-center px-5 py-3 bg-white shadow-sm min-h-[60px]">
      <div className="flex items-center px-3 py-1.5 rounded-md border border-[#D9D8DC] bg-[#FAF8F8] flex-grow max-w-[600px]">
        <img src={search} alt="search" className="w-4 h-4 opacity-60" />
        <input
          type="text"
          placeholder="インフルエンサー　ブランド　商品名"
          className="border-none bg-transparent outline-none text-sm w-full px-2 py-1"
        />
      </div>
    </div>
  )
}

export default Navbar