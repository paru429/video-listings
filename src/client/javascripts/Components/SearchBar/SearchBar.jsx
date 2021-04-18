import React from 'react';
import './SearchBar.scss';

const SearchBar = ({onFormSubmit, searchText, setSearchText}) => {
    const handleOnChange = (e) => {
        setSearchText(e.target.value)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(searchText);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="search-bar">
                <label htmlFor="search-input" className="search-bar__label">Enter video search text</label>
                <input
                    id="search-input"
                    className="search-bar__input"
                    value={searchText}
                    type="text"
                    onChange={handleOnChange}
                />
                <button className="search-bar__submit">Submit search</button>
            </div>
        </form>
    );
};

export default SearchBar;