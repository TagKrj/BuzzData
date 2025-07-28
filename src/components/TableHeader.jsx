import React, { useState } from 'react';
import down2 from '../assets/icon/down2.svg';

const TableHeader = ({ headers = [], onColumnClick }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const totalColSpan = headers.reduce((sum, h) => sum + (h.colSpan || 1), 0);

    // Generate grid class based on total columns
    const getGridClass = (cols) => {
        const gridClasses = {
            1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4',
            5: 'grid-cols-5', 6: 'grid-cols-6', 7: 'grid-cols-7', 8: 'grid-cols-8',
            9: 'grid-cols-9', 10: 'grid-cols-10', 11: 'grid-cols-11', 12: 'grid-cols-12'
        };
        return gridClasses[cols] || 'grid-cols-12';
    };

    const handleColumnClick = (index) => {
        const isClickable = !!headers[index].icon;
        if (isClickable) {
            setActiveIndex(index);
            if (onColumnClick) {
                onColumnClick(index);
            }
        }
    };

    return (
        <div className="px-4 py-3 rounded-t-md w-full overflow-hidden">
            <div className={`grid ${getGridClass(totalColSpan)} gap-1 text-xs font-bold text-black`}>
                {headers.map((header, index) => {
                    const isClickable = !!header.icon;
                    const isActive = index === activeIndex;

                    // Map colSpan to fixed Tailwind classes
                    const getColSpanClass = (colSpan) => {
                        switch (colSpan) {
                            case 1: return 'col-span-1';
                            case 2: return 'col-span-2';
                            case 3: return 'col-span-3';
                            default: return 'col-span-1';
                        }
                    };

                    return (
                        <div
                            key={index}
                            className={`${getColSpanClass(header.colSpan || 1)} text-center`}
                        >
                            <div
                                className={`flex items-center justify-center gap-1 px-2 py-1 rounded-md w-full h-full
                                    ${isClickable ? 'cursor-pointer' : ''}
                                    ${isActive ? 'bg-[#FFE5E5] text-[#E73253]' : ''}
                                    ${isClickable && !isActive ? 'hover:bg-[#FFE5E5] hover:text-[#E73253]' : ''}
                                    transition-colors duration-200
                                `}
                                onClick={() => {
                                    handleColumnClick(index);
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
