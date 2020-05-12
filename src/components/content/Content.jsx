import React from "react";

import content from './Content.module.css';

const Content = () => {

    const {
        mainContent,
        mainContentText
    } = content;

    return (
        <div className={ mainContent }>
            <h1 className={mainContentText}>Main Content</h1>
        </div>
    )
};

export default Content;