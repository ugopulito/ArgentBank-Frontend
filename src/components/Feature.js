import React from 'react';

const Feature = ({src, alt, title, text}) => {
    return (
        <div className='feature-item'>
            <img className='feature-icon' src={src} alt={alt} />
            <h3 className='feature-item-title'>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Feature;