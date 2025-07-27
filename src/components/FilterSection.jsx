import React, { useState } from 'react';
import { categories } from '../constants/mockData';
import InputDate from './InputDate';
import Star from '../assets/icon/star.svg';
import Down from '../assets/icon/down.svg';

const CategoryMenu = ({ title = 'カテゴリー：', options = categories.slice(0, 20) }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const handleCategoryClick = (index, item) => {
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col gap-2 mt-4 w-full">
            <div className="flex items-start justify-between">
                <div className="flex items-center flex-wrap gap-2">
                    <span className="text-xs font-bold text-black min-w-20">{title}</span>
                    <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2 max-w-[1000px]">
                        {options.slice(0, 9).map((item, index) => (
                            <span
                                key={index}
                                className={`px-2 py-1 rounded-full cursor-pointer ${activeIndex === index ? 'bg-[#E73253] text-white font-bold' : 'text-gray-600'}`}
                                onClick={() => handleCategoryClick(index, item)}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {options.length > 9 && (
                    <div className="flex items-center ml-auto">
                        <div
                            className="flex items-center bg-[#E73253] px-2 py-2 rounded-[2px] cursor-pointer hover:bg-gray-800 transition"
                            onClick={() => setShowMore(!showMore)}
                        >
                            <img
                                src={Down}
                                alt="Toggle"
                                width={10}
                                height={10}
                                className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {showMore && (
                <div className="flex flex-wrap items-center gap-2 max-w-[1000px] pl-[84px]">
                    {options.slice(9).map((item, index) => {
                        const realIndex = index + 9;
                        return (
                            <span
                                key={realIndex}
                                className={`px-2 py-1 rounded-full cursor-pointer ${activeIndex === realIndex ? 'bg-[#E73253] text-white font-bold' : 'text-gray-600'}`}
                                onClick={() => handleCategoryClick(realIndex, item)}
                            >
                                {item}
                            </span>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

const FilterSection = ({
    title,
    additionalFilters = []
}) => {
    return (
        <div className="space-y-4">
            {title && <h1 className="text-xl font-bold text-black">{title}</h1>}

            <div className="bg-white p-4 rounded-[20px] space-y-2">
                <h5 className="text-sm font-bold">絞り込み</h5>

                {/* Period Filter */}
                <div className="flex items-center gap-4 px-5 flex-wrap">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-black min-w-16">期間:</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#E73253] bg-[#FFE5E5] rounded-full px-2 py-1">
                                日間ランキング
                            </span>
                            <InputDate type="date" value="2025-07" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium bg-gray-200 text-black min-w-20 px-2 py-1 rounded-full">
                            週間ランキング
                        </span>
                        <div>
                            <InputDate type="date" value="2025-07" />
                            <span className="text-sm font-bold text-black min-w-20">〜</span>
                            <InputDate type="date" value="2025-07" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium bg-gray-200 text-black min-w-20 px-2 py-1 rounded-full">
                            月間ランキング
                        </span>
                        <div>
                            <InputDate type="month" value="2025-07" />
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

                {/* Default Category Filter */}
                <CategoryMenu title="カテゴリー：" options={categories.slice(0, 20)} />

                {/* Additional Dynamic Menus */}
                {additionalFilters.map((filter, idx) => (
                    <CategoryMenu key={idx} title={filter.title} options={filter.options} />
                ))}
            </div>
        </div>
    );
};

export default FilterSection;
