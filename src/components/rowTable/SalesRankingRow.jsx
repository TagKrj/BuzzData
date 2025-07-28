import React from 'react';
import RankBadge from '../RankBadge';
import FavoriteButton from '../FavoriteButton';

const TikTokProductRow = ({ product, activeColumnIndex, totalColumns = 11 }) => {
    // Generate grid class based on total columns
    const getGridClass = (cols) => {
        const gridClasses = {
            1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4',
            5: 'grid-cols-5', 6: 'grid-cols-6', 7: 'grid-cols-7', 8: 'grid-cols-8',
            9: 'grid-cols-9', 10: 'grid-cols-10', 11: 'grid-cols-11', 12: 'grid-cols-12'
        };
        return gridClasses[cols] || 'grid-cols-12';
    };

    // Map column indices to their positions in the row
    const getColumnClass = (columnIndex) => {
        if (activeColumnIndex === columnIndex) {
            return 'bg-gray-100';
        }
        return '';
    };
    return (
        <div className="border-b border-gray-200 py-3 px-4 hover:bg-gray-50 transition-colors">
            <div className={`grid ${getGridClass(totalColumns)} gap-1 items-center text-xs text-black font-medium`}>
                {/* Rank */}
                <div className="col-span-1 flex justify-center">
                    <RankBadge rank={product.rank} />
                </div>

                {/* Store */}
                <div className="col-span-1">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 border border-gray-300 overflow-hidden bg-gray-50">
                            <img
                                src={product.image || '/api/placeholder/64/64'}
                                alt="Store"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml;base64,...';
                                }}
                            />
                        </div>
                        <div className="min-w-0">
                            <p className="line-clamp-2 truncate">{product.productName}</p>
                            <p className="font-bold text-orange-500 mt-1 whitespace-nowrap">{product.price}</p>
                        </div>
                    </div>
                </div>

                {/* Product */}
                <div className="col-span-2">
                    <div className="flex items-start gap-3">
                        <div className="w-12 h-12  rounded overflow-hidden">
                            <img
                                src={product.storeImage || '/api/placeholder/72/72'}
                                alt="Product"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml;base64,...';
                                }}
                            />
                        </div>
                        <div>
                            <p className="line-clamp-2">{product.brand}</p>
                            <p className="text-gray-500 mt-1">{product.storeInfo}</p>
                        </div>
                    </div>
                </div>

                {/* Category */}
                <div className="col-span-1 text-center">
                    <span className="category-badge px-3 py-1 rounded-full font-bold">
                        {product.category}
                    </span>
                </div>

                {/* Commission */}
                <div className={`col-span-1 text-center ${getColumnClass(4)}`}>{product.commission}</div>

                {/* Sales Comparison */}
                <div className={`col-span-1 text-center ${getColumnClass(5)}`}>{product.salesComparison}</div>

                {/* Revenue */}
                <div className={`col-span-1 text-center ${getColumnClass(6)}`}>{product.revenue}</div>

                {/* Cumulative Sales */}
                <div className={`col-span-1 text-center ${getColumnClass(7)}`}>{product.cumulativeSales}</div>

                {/* Cumulative Revenue */}
                <div className={`col-span-1 text-center ${getColumnClass(8)}`}>{product.cumulativeRevenue}</div>

                {/* Favorite */}
                <FavoriteButton />
            </div>
        </div>
    );
};

export default TikTokProductRow;
