import React from "react";

import content from './Content.module.css';

const Content = () => {

    const { mainContent } = content;

    return (
        <div className={ mainContent }>
            Main Content
        </div>
    )
};

export default Content;