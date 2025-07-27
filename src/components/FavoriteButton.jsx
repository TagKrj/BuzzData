import React from 'react';
import Star from '../assets/icon/star2.svg';

const FavoriteButton = ({ onClick, className = "" }) => {
    return (
        <div className="col-span-1 text-center">
            <button
                className={`favorite-button text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer ${className}`}
                onClick={onClick}
            >
                <img
                    src={Star}
                    alt="Star"
                    width={20}
                    height={19}
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                />
            </button>
        </div>
    );
};

export default FavoriteButton;
