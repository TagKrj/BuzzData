import React from 'react';

const RankBadge = ({ rank }) => {
    if (rank === 1) {
        return (
            <img src="/src/assets/img/number1.png" alt="Gold Medal" />
        );
    }
    if (rank === 2) {
        return (
            <img src="/src/assets/img/number2.png" alt="Silver Medal" />
        );
    }
    if (rank === 3) {
        return (
            <img src="/src/assets/img/number3.png" alt="Bronze Medal" />
        );
    }
    return (
        <div className="w-8 h-8 flex items-center justify-center text-black  text-lg">
            {rank}
        </div>
    );
};

export default RankBadge;
