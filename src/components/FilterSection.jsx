import React, { useState } from 'react';
import { categories } from '../constants/mockData';
import InputDate from './InputDate';
import Star from '../assets/icon/star.svg';
import Down from '../assets/icon/down.svg';

const FilterSection = ({
    title,
    searchTerm,
    setSearchTerm,
    selectedPeriod,
    setSelectedPeriod,
    selectedCategory,
    setSelectedCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate
}) => {
    // Local state nếu bạn chưa có selectedCategory truyền từ props
    const [activeCategory, setActiveCategory] = useState(selectedCategory || '');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (setSelectedCategory) setSelectedCategory(category);
    };

    return (
        <div className="space-y-4">
            {title && <h1 className="text-xl font-bold text-black">{title}</h1>}

            <div className="bg-white p-4 rounded-[20px] space-y-2 ">
                <h5 className='text-sm font-bold'>絞り込み</h5>

                {/* Period Filter */}
                <div className="flex items-center gap-4 px-5">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-black min-w-16">期間:</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#E73253] bg-[#FFE5E5] rounded-full px-2 py-1">日間ランキング</span>
                            <InputDate
                                type="date"
                                value="2025-07"
                            />
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium bg-gray-200 text-black min-w-20 px-2 py-1 rounded-full">週間ランキング</span>
                        <div>
                            <InputDate
                                type="date"
                                value="2025-07"
                            />
                            <span className="text-sm font-bold text-black min-w-20">〜</span>
                            <InputDate
                                type="date"
                                value="2025-07"
                            />
                        </div>

                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium bg-gray-200 text-black min-w-20 px-2 py-1 rounded-full">月間ランキング</span>
                        <div>
                            <InputDate
                                type="month"
                                value="2025-07"
                            />
                        </div>

                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-black min-w-20 px-2 py-1 rounded-full">お気に入り：</span>
                        <div className="flex items-center bg-gray-200 px-2 py-1 rounded-full cursor-pointer hover:bg-red-200">
                            <img
                                src={Star}
                                alt="Star"
                                width={20}
                                height={19}
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                            />
                        </div>

                    </div>

                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-4 mt-4 w-full justify-between">
                    <div className="flex items-center flex-wrap gap-2">
                        <span className="text-xs font-bold text-black min-w-20">カテゴリー：</span>
                        <div className="text-sm text-gray-600 flex flex-wrap items-center">
                            {categories.slice(0, 8).map((item, index) => (
                                <span
                                    key={index}
                                    className={`mr-2 px-2 py-1 rounded-full cursor-pointer ${item === activeCategory
                                        ? 'bg-[#E73253] text-white font-bold'
                                        : 'text-gray-600'
                                        }`}
                                    onClick={() => handleCategoryClick(item)}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Nút Down */}
                    <div className="flex items-center">
                        <div className="flex items-center bg-[#E73253] px-2 py-2 rounded-[2px] cursor-pointer hover:bg-gray-800">
                            <img
                                src={Down}
                                alt="Down"
                                width={10}
                                height={10}
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
