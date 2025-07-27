import React, { useState } from 'react';
import FilterSection from '../components/FilterSection';
import TikTokProductRow from '../components/rowTable/TikTokProductRow';
import Pagination from '../components/Pagination';
import TableHeader from '../components/TableHeader';
import { mockProductsRealistic } from '../constants/mockData';

const TikTokRanking = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Use mock data from constants
    const products = mockProductsRealistic;

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
                        { label: '商品', colSpan: 1 },
                        { label: '店舗', colSpan: 2 },
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
                            <TikTokProductRow
                                product={product}
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
