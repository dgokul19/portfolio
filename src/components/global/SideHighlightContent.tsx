import React from 'react';

const SideHighlightContent = ({ content } : { content : any}): JSX.Element => {
    return (
        <>
        <div className={`sideFadedContent`}>
            <h1>{content}</h1>
        </div>
        </>
    );
}

export default SideHighlightContent;