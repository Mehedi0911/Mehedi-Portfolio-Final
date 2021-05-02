import React from 'react';

const ReviewCard = (props) => {
    const {image, title, name, review} = props.testimony;
    return (
        <div className="mb-5 text-white">
            <img className="mb-3" style={{height:'50px'}} src={image} alt=""/>
            <h6 className="mb-2 brand-text">{name}</h6>
            <p>{title}</p>
            <div className="w-75 m-auto" style={{background:'#0e0d21', padding:'.5rem 1rem', borderRadius:'5px'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor quod tempora eius ea! Vitae expedita molestias maiores totam. Repudiandae dignissimos autem corporis voluptatibus. Officia.</p>
            </div>
        </div>
    );
};

export default ReviewCard;