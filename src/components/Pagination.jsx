import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages = 50 }) => {
    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    return (
        <div className="flex items-center justify-center gap-2  py-3 border-t border-gray-200">
            {/* Previous buttons */}
            <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 bg-gray-100 rounded text-sm flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="前のページ"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Page numbers */}
            <div className="flex items-center gap-1">
                {getVisiblePages().map((page, index) => (
                    page === '...' ? (
                        <span key={`dots-${index}`} className="px-2 text-sm text-gray-500">・・・</span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 rounded text-sm font-medium transition-colors ${currentPage === page
                                ? 'pagination-active font-bold'
                                : 'bg-gray-100 text-black hover:bg-gray-200'
                                }`}
                        >
                            {page}
                        </button>
                    )
                ))}
            </div>

            {/* Next button */}
            <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 bg-gray-100 rounded text-sm flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="次のページ"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Page selector */}
            <div className="flex items-center gap-2 ml-4">
                <span className="text-sm text-black">ページ</span>
                <select
                    value={currentPage}
                    onChange={(e) => setCurrentPage(Number(e.target.value))}
                    className="px-2 py-1 border border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                >
                    {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1).map(page => (
                        <option key={page} value={page}>{page}</option>
                    ))}
                    {totalPages > 10 && (
                        <>
                            <option disabled>...</option>
                            {Array.from({ length: Math.min(10, totalPages - 40) }, (_, i) => totalPages - 9 + i).map(page => (
                                <option key={page} value={page}>{page}</option>
                            ))}
                        </>
                    )}
                </select>
            </div>
        </div>
    );
};

export default Pagination;
