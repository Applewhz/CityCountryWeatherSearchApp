import React from "react";
import './Input.css';

export const SearchInput = (props) => {
    return (
        <div className='SearchBar'>
            <input type='text' placeholder={props.placeholder} onChange={props.onChange} onKeyDown={props.onKeyDown} value={props.value} />
        </div>
    )
}
