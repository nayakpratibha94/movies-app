import React, { useState } from 'react';
import './Search.css';
import { useDispatch } from 'react-redux';
import {
  searchByText
} from '../../features/counterSlice';
function Search() {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handlerSearch = () => {
        if (!active) {
            setActive(true)
        } else {
            dispatch(searchByText(value))
        }
    }
  return (
      <div className="searchInput">
        {
            active ? 
            <input type="text" placeholder='search here' className='input-bar' onChange={(e) => {setValue(e.target.value)}} value={value} /> 
            : null
        }
        <div class="search-image" >
            <img src={'search.png'} alt="search-icon" onClick={() => handlerSearch()}/>
        </div>
      </div>
  );
}

export default Search;