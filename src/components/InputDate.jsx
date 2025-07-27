import React from 'react';

const InputDate = ({
    type = "date",
    value,
    onChange,
    placeholder,
    className = "",
    ...props
}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`px-3 py-1 border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-black rounded-[10px] cursor-pointer text-gray-400 w-[130px] ${className}`}
            {...props}
        />
    );
};

export default InputDate;
