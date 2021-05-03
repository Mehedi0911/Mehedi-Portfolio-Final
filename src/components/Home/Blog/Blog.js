
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "../../../../src/styles.css";
//importing Images.......
import nodeImage from '../../../Image/node.jpg' 
import cssImage from '../../../Image/css.jpg' 
import jsImage from '../../../Image/js.jpg' 
import fireImage from '../../../Image/fire.jpg' 
import codeImage from '../../../Image/code.jpg' 
// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
import BlogCards from "../BlogCards/BlogCards";

// install Swiper modules
SwiperCore.use([Pagination]);

const Blog = () => {

    const blogData = [
        {
            image:nodeImage,
            title:'Backend revolution: A Node.js Story',
            description:'',
            date:new Date().toDateString()

        },
        {
            image:cssImage,
            title:'Top 10 Css tricks to make your site responsive',
            description:'',
            date:new Date().toDateString()

        },
        {
            image:jsImage,
            title:'10 Best Resources to learn applied Javascript',
            description:'',
            date:new Date().toDateString()

        },
        {
            image:fireImage,
            title:'All you have to know about Firebase Authentications',
            description:'',
            date:new Date().toDateString()

        },
        {
            image:codeImage,
            title:'Pro tips to write Cleaner Codes and get organized with large projects',
            description:'',
            date:new Date().toDateString()

        },
    ]

    return (
        <section className="container w-75" id="blog">
            <h5 className="section-heading">Latest Blogs</h5>
            <>
            <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
                "clickable": true
            }} className="mySwiper">
                {
                    blogData.map(bData => <SwiperSlide><BlogCards blogData={bData}></BlogCards></SwiperSlide>)
                }
                
            </Swiper>
        </>
        </section>
    )
}

export default Blog;