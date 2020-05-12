import React from "react";

import h from './Header.module.css'

const Header = () => {

    const { header } = h;

    return (
        <header className={ header }>
            Header
        </header>
    )
};

export default Header;