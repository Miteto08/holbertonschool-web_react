import React from 'react';
import './general.css';

const SelectInput = ({
    label,
    options,
    className = '',
    value,
    setValue
}) => {
    const handleSelect = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <div className="input-wrapper">
                <select
                    className={`input-field ${className}`}
                    value={value}
                    onChange={handleSelect}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectInput;
