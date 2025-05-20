import React from 'react';
import './general.css';

const SearchBar = ({
    title,
    setTitle
}) => {
    const handleInput = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-bar-input"
                placeholder="Search movies..."
                value={title}
                onChange={handleInput}
            />
        </div>
    );
};

export default SearchBar;
