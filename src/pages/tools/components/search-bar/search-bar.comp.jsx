import React from 'react';

import './search-bar.style.css';


const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="To plan-input">
               <input type="text" placeholder="To plan"/>
             </div>
             <div>  
            <input type="checkbox"/> Plant operators
        </div>
        </div>
     );
}

export default  SearchBar;