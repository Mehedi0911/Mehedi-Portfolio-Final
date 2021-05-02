import React from 'react';
import './BlogCards.css'
const BlogCards = (props) => {
    const {image, title, date, description} = props.blogData;
    return (
        <div className="mb-5 blog-container">
            <img src={image} alt=""/>
            <h6>{title}</h6>
            <small>{date}</small>
        </div>
    );
};

export default BlogCards;