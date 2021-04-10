import React, {useState} from 'react';
import './SearchBar.scss';

const SearchBar = ({onFormSubmit}) => {
    const [text, setText] = useState('');
    
    const handleOnChange = (e) => {
        setText(e.target.value)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(text);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="search-bar">
                <label className="search-bar__label">Enter video search text</label>
                <input
                    className="search-bar__input"
                    value={text}
                    type="text"
                    onChange={handleOnChange}
                />
            </div>
        </form>
    );
};

export default SearchBar;