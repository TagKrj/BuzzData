import React, { useState } from 'react';
import FilterSection from '../components/FilterSection';
import ProductRow from '../components/ProductRow';
import Pagination from '../components/Pagination';
import TableHeader from '../components/TableHeader';
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
                <TableHeader
                    headers={[
                        { label: '順位', colSpan: 1 },
                        { label: '店舗', colSpan: 1 },
                        { label: '商品', colSpan: 2 },
                        { label: 'カテゴリー', colSpan: 1 },
                        { label: 'コミッション率', colSpan: 1 },
                        { label: '販売数先週比', colSpan: 1, icon: 'img' },
                        { label: '売上高', colSpan: 1, icon: 'img' },
                        { label: '累積販売数量', colSpan: 1, icon: 'img' },
                        { label: '累積売上', colSpan: 1, icon: 'img' },
                        { label: 'お気に入り', colSpan: 1 }
                    ]}
                />

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
