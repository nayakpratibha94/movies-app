import React, { useState, useMemo } from 'react';
import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchByText,
  setInputActive,
  searchActive
} from '../../features/counterSlice';
function Search() {
    const [value, setValue] = useState('');
    const active = useSelector(searchActive);
    const dispatch = useDispatch();
    const handlerSearch = () => {
        if (!active) {
            dispatch(setInputActive())
        } else {
            dispatch(searchByText(value))
        }
    }
    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(searchByText(e.target.value))
    }
  return (
      <div className="searchInput">
        {
            active ? 
            <input type="text" placeholder='search here' className='input-bar' onChange={(e) => {handleChange(e)}} value={value} /> 
            : null
        }
        <div className="search-image" >
            <img src={'search.png'} alt="search-icon" onClick={() => handlerSearch()}/>
        </div>
      </div>
  );
}

export default Search;