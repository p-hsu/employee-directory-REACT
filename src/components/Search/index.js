import React from "react";
import "./style.css";

function Search({search, setSearch, handleSearch}) {
    return (
        <form className="d-flex">
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Search by LAST NAME here..."
                aria-label="Search"
            />
            <button className="btn btn-outline-secondary">Search</button>
        </form>
    )
}

export default Search;