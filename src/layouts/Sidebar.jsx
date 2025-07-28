import React, { useState } from 'react';
import { menuItems } from '../constants/menuItems.jsx';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo/LogoBuzzData.png";

const NAVBAR_HEIGHT = 66; // px, nhớ đồng bộ với Navbar

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [expandedMenus, setExpandedMenus] = useState([]);
    const navigate = useNavigate();

    const toggleSubmenu = (menuId) => {
        setExpandedMenus(prev =>
            prev.includes(menuId)
                ? []
                : [menuId]
        );
    };

    const handleMenuClick = (item) => {
        setActiveItem(item.id);
        if (item.hasSubmenu) {
            toggleSubmenu(item.id);
            // Nếu có linkRouter, cũng navigate luôn
            if (item.linkRouter) {
                navigate(item.linkRouter);
            }
        } else if (item.linkRouter) {
            navigate(item.linkRouter);
        }
    };

    const isMenuActive = (item) => {
        return activeItem === item.id && !item.hasSubmenu;
    };

    const hasActiveSubmenu = (item) => {
        return item.hasSubmenu && item.submenu?.some(subItem => activeItem === subItem.id);
    };

    return (
        <div
            className="nav-sidebar left-0 top-0 w-[180px] bg-white flex flex-col border-r border-gray-200"
            style={{ height: `100vh` }}
        >
            {/* Logo Section */}
            <div className="flex items-center justify-center p-4 border-b border-gray-200 h-[66px]">
                <img src={logo} alt="logo" className="h-8 w-[140px]" />
            </div>

            <div className="flex-1 overflow-y-auto">
                {menuItems.map((item) => (
                    <div key={item.id}>
                        <div
                            className={`nav-item cursor-pointer ${isMenuActive(item) ? 'nav-item-active' : ''} ${hasActiveSubmenu(item) ? 'nav-item-parent-active' : ''}`}
                            onClick={() => handleMenuClick(item)}
                        >
                            <div className="w-6 h-6 text-current">
                                {item.icon}
                            </div>
                            <span className={`flex-1 ${isMenuActive(item) ? 'font-semibold' : ''}`}>{item.label}</span>
                            {item.hasSubmenu && (
                                <div className="w-6 h-6">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={`transform transition-transform ${expandedMenus.includes(item.id) ? 'rotate-180' : ''
                                            }`}
                                    >
                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {item.hasSubmenu && expandedMenus.includes(item.id) && item.submenu && (
                            <div className="pl-4">
                                {item.submenu.map((subItem) => (
                                    <div
                                        key={subItem.id}
                                        className={`nav-item cursor-pointer ${activeItem === subItem.id ? 'nav-item-active' : ''
                                            }`}
                                        onClick={() => {
                                            setActiveItem(subItem.id);
                                            if (subItem.linkRouter) {
                                                navigate(subItem.linkRouter);
                                            }
                                        }}
                                    >
                                        {subItem.icon && (
                                            <div className="w-5 h-5 text-current">
                                                {subItem.icon}
                                            </div>
                                        )}
                                        <span className={`${activeItem === subItem.id ? 'font-semibold' : ''}`}>{subItem.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;