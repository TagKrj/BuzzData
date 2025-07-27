import React, { useState } from 'react';
import FilterSection from '../components/FilterSection';
import ProductRow from '../components/ProductRow';
import Pagination from '../components/Pagination';
import { mockProductsRealistic } from '../constants/mockData';

const TikTokRanking = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Use mock data from constants
    const products = mockProductsRealistic;

    const getRankBadge = (rank) => {
        if (rank === 1) {
            return (
                <div className="w-8 h-8 ranking-badge-gold rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    1
                </div>
            );
        }
        if (rank === 2) {
            return (
                <div className="w-8 h-8 ranking-badge-silver rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    2
                </div>
            );
        }
        if (rank === 3) {
            return (
                <div className="w-8 h-8 ranking-badge-bronze rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    3
                </div>
            );
        }
        return (
            <div className="w-8 h-8 flex items-center justify-center text-black font-bold text-lg">
                {rank}
            </div>
        );
    };

    return (
        <div className="tiktok-ranking p-6 shadow-sm rounded-[20px] overflow-hidden ">
            {/* Header */}
            <div className="mb-6">
                {/* Filters */}
                <FilterSection
                    title="TikTok売上ランキング"
                />
            </div>


            <div className='rounded-[20px] bg-white shadow-sm'>
                <div className="table-header-bg px-4 py-3  rounded-t-md">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 text-xs font-bold text-black">
                        <div className="col-span-1 text-center">順位</div>
                        <div className="col-span-1 text-center">店舗</div>
                        <div className="col-span-2 text-center">商品</div>
                        <div className="col-span-1 text-center">カテゴリー</div>
                        <div className="col-span-1 text-center">コミッション率</div>
                        <div className="col-span-1 text-center">
                            <div className="flex items-center justify-center gap-1">
                                販売数先週比
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-span-1 text-center">
                            <div className="flex items-center justify-center gap-1">
                                売上高
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-span-1 text-center">
                            <div className="flex items-center justify-center gap-1">
                                累積販売数量
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-span-1 text-center">
                            <div className="flex items-center justify-center gap-1">
                                累積売上
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-span-1 text-center">お気に入り</div>
                    </div>
                </div>

                {/* Product Rows */}
                <div className="space-y-1 bg-white rounded-b-md">
                    {products.map((product) => (
                        <div key={product.id} className="product-row">
                            <ProductRow
                                product={product}
                                getRankBadge={getRankBadge}
                            />
                        </div>
                    ))}
                </div>

                {/* Pagination */}

                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={50}
                />
            </div>
        </div>
    );
};

export default TikTokRanking;
