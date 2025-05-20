import React from 'react';
import './general.css';

const Input = ({
    label,
    type = 'text',
    className = '',
    value,
    setValue,
    icon,
    inputAttributes = {}
}) => {
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <div className="input-wrapper">
                <input
                    type={type}
                    className={`input-field ${className}`}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                />
                {icon && <span className="input-icon">{icon}</span>}
            </div>
        </div>
    );
};

export default Input;
