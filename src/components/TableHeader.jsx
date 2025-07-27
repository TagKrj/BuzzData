import React, { useState } from 'react';
import down2 from '../assets/icon/down2.svg';

const TableHeader = ({ headers = [] }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const totalColSpan = headers.reduce((sum, h) => sum + (h.colSpan || 1), 0);

    return (
        <div className=" px-4 py-3 rounded-t-md w-full overflow-hidden">
            <div className={`grid grid-cols-${totalColSpan} text-xs font-bold text-black`}>
                {headers.map((header, index) => {
                    const isClickable = !!header.icon;
                    const isActive = index === activeIndex;

                    return (
                        <div
                            key={index}
                            className={`col-span-${header.colSpan || 1} text-center`}
                        >
                            <div
                                className={`flex items-center justify-center gap-1 px-2 py-1 rounded-md w-full h-full
                                    ${isClickable ? 'cursor-pointer' : ''}
                                    ${isActive ? 'bg-[#FFE5E5] text-[#E73253]' : ''}
                                    ${isClickable && !isActive ? 'hover:bg-[#FFE5E5] hover:text-[#E73253]' : ''}
                                    transition-colors duration-200
                                `}
                                onClick={() => {
                                    if (isClickable) setActiveIndex(index);
                                }}
                            >
                                {header.label}
                                {header.icon === 'img' && (
                                    <img
                                        src={down2}
                                        alt="Down"
                                        width={8}
                                        height={8}
                                        className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''
                                            }`}
                                        style={{
                                            display: 'inline-block',
                                            verticalAlign: 'middle',
                                            filter: isActive
                                                ? 'brightness(0) saturate(100%) invert(32%) sepia(82%) saturate(746%) hue-rotate(336deg) brightness(98%) contrast(92%)'
                                                : 'none',
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TableHeader;
