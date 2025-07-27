import React from 'react';

const ProductRow = ({ product, getRankBadge }) => {
    return (
        <div className="border-b border-gray-200 py-3 hover:bg-gray-50 transition-colors">
            <div className="grid grid-cols-12 gap-4 items-center">
                {/* Rank */}
                <div className="col-span-1 flex justify-center">
                    {getRankBadge(product.rank)}
                </div>

                {/* Store */}
                <div className="col-span-1 text-center">
                    <div className="w-16 h-16 rounded-full border border-gray-300 mx-auto mb-1 overflow-hidden bg-gray-50">
                        <img
                            src={product.storeImage || '/api/placeholder/64/64'}
                            alt="Store"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zMiAyOEMzNS4zMTM3IDI4IDM4IDI1LjMxMzcgMzggMjJDMzggMTguNjg2MyAzNS4zMTM3IDE2IDMyIDE2QzI4LjY4NjMgMTYgMjYgMTguNjg2MyAyNiAyMkMyNiAyNS4zMTM3IDI4LjY4NjMgMjggMzIgMjhaIiBmaWxsPSIjOTM5M0EzIi8+CjxwYXRoIGQ9Ik0xNiA0NlYxOEM0NiAxOCA0NiA0NiA0NiA0NkgxNloiIGZpbGw9IiNBM0EzQjMiLz4KPC9zdmc+';
                            }}
                        />
                    </div>
                </div>

                {/* Product */}
                <div className="col-span-2">
                    <div className="flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                            <img
                                src={product.image || '/api/placeholder/72/72'}
                                alt="Product"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiBmaWxsPSIjRTVFN0VCIi8+CjxwYXRoIGQ9Ik0zNiAyMkM0MC40MTgzIDIyIDQ0IDI1LjU4MTcgNDQgMzBDNDQgMzQuNDE4MyA0MC40MTgzIDM4IDM2IDM4QzMxLjU4MTcgMzggMjggMzQuNDE4MyAyOCAzMEMyOCAyNS41ODE3IDMxLjU4MTcgMjIgMzYgMjJaIiBmaWxsPSIjOUM5Qzk4Ii8+CjxwYXRoIGQ9Ik0yMCA1MEgyMFYyMEg1MlY1MEgyMFoiIGZpbGw9IiNBQUFBQTIiLz4KPC9zdmc+';
                                }}
                            />
                        </div>
                        <div>
                            <p className="text-sm text-black font-medium line-clamp-2">{product.productName}</p>
                            <p className="text-base font-bold text-orange-500 mt-1">{product.price}</p>
                        </div>
                    </div>
                </div>

                {/* Category */}
                <div className="col-span-1 text-center">
                    <span className="category-badge px-3 py-1 rounded-full text-xs font-bold">
                        {product.category}
                    </span>
                </div>

                {/* Commission */}
                <div className="col-span-1 text-center text-sm font-medium">{product.commission}</div>

                {/* Sales Comparison */}
                <div className="col-span-1 text-center text-sm font-medium">{product.salesComparison}</div>

                {/* Revenue */}
                <div className="col-span-1 text-center text-sm font-medium">{product.revenue}</div>

                {/* Cumulative Sales */}
                <div className="col-span-1 text-center text-sm font-medium">{product.cumulativeSales}</div>

                {/* Cumulative Revenue */}
                <div className="col-span-1 text-center text-sm font-medium">{product.cumulativeRevenue}</div>

                {/* Favorite */}
                <div className="col-span-1 text-center">
                    <button className="favorite-button text-gray-400 hover:text-red-500 transition-colors p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Additional Info */}
            <div className="mt-2 pl-20">
                <div className="flex items-center gap-4 text-sm text-gray-700">
                    <span className="font-medium">{product.brand}</span>
                    <span className="text-gray-600">{product.storeInfo}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductRow;
