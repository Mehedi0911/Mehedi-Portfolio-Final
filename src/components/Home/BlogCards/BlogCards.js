import React from 'react';
import './BlogCards.css'
const BlogCards = (props) => {
    const {image, title, date, description} = props.blogData;
    return (
        <div className="mb-5 blog-container">
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
    );
};

export default BlogCards;