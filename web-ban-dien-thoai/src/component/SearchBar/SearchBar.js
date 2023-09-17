import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa"
import './SearchBar.scss'

const SearchBar = () => {
    const [input, setInput] = useState("")
    const fetchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        console.log(value)

    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div className="input-wrapper nav-item">
            <FaSearch size={20} id="search-icon"/>
            <input placeholder="Bạn cần tìm gì?" value={input} onChange={(e) => {
                handleChange(e.target.value)
            }}/>
        </div>
    );
};

export default SearchBar;