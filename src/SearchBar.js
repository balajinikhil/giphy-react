import React, { useState } from 'react';

const SearchBar = (props) =>{
    let { onSearchSubmit  } = props
    let [search, searchUpdate] = useState('silicon valley');

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            onSearchSubmit(search)
        }}
        className="ui form">
            <div className="field">
                <label>Search</label>
                <input type="text"  placeholder="Silicon Valley" 
                onChange={(e)=>{
                    searchUpdate(e.target.value)
                }}
                />
            </div>
        </form>
    )
};

export default SearchBar;