import React from 'react';
import Star from '../assets/icon/star2.svg';

const ProductRow = ({ product, getRankBadge }) => {
    return (
        <div className="border-b border-gray-200 py-3 hover:bg-gray-50 transition-colors">
            <div className="grid grid-cols-11 gap-4 items-center text-xs text-black font-medium">
                {/* Rank */}
                <div className="col-span-1 flex justify-center">
                    {getRankBadge(product.rank)}
                </div>

                {/* Store */}
                <div className="col-span-1">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full border border-gray-300 overflow-hidden bg-gray-50">
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
                        <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                            <img
                                src={product.storeImage || '/api/placeholder/72/72'}
                                alt="Product"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml;base64,...'; // giữ nguyên placeholder
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
                <div className="col-span-1 text-center">{product.commission}</div>

                {/* Sales Comparison */}
                <div className="col-span-1 text-center">{product.salesComparison}</div>

                {/* Revenue */}
                <div className="col-span-1 text-center">{product.revenue}</div>

                {/* Cumulative Sales */}
                <div className="col-span-1 text-center">{product.cumulativeSales}</div>

                {/* Cumulative Revenue */}
                <div className="col-span-1 text-center">{product.cumulativeRevenue}</div>

                {/* Favorite */}
                <div className="col-span-1 text-center">
                    <button className="favorite-button text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer">
                        <img
                            src={Star}
                            alt="Star"
                            width={20}
                            height={19}
                            style={{ display: 'inline-block', verticalAlign: 'middle' }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductRow;
