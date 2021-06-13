import React from "react";
import "./style.css";

function Header() {
    return (
        <header>
            <h1 className="header-title text-center">Employee Directory</h1>
            <h6 className="header-blurb text-center">Use column headers to sort employees or narrow results using the search bar below</h6>
        </header>
    );
}

export default Header;