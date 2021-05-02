import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import "../../../../src/styles.css";

//importing images
import user1 from '../../../Image/profile.png'
import user2 from '../../../Image/profile2.png'
import user3 from '../../../Image/profile3.png'

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import ReviewCard from "../ReviewCard/ReviewCard";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonial = () => {
    const testData = [
        {
            image:user1,
            name:'John Doe',
            title:'Graphic Designer',
            review:'Thi is a demo description'
        },
        {
            image:user2,
            name:'Sara Williams',
            title:'Company C.E.O',
            review:'Thi is a demo description'
        },
        {
            image:user3,
            name:'Steven Smith',
            title:'Marketing Manager',
            review:'Thi is a demo description'
        }
    ]
    return (
        <section className="container w-75">
            <h5 className="section-heading">Testimonials</h5>
            <>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
               {
                   testData.map(data => <SwiperSlide><ReviewCard testimony={data}></ReviewCard></SwiperSlide>)
               }
              
            </Swiper>
        </>
        </section>
    )

};

export default Testimonial;