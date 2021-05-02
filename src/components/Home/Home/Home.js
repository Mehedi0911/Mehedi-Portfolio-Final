import React from 'react';
import Sidebar from '../../SideBar/Sidebar';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>  
        <Header></Header>
           <About></About>
           <Tools></Tools>
           <Services></Services>
           <Projects></Projects>
           <Testimonial></Testimonial>
           <Blog></Blog>
           <Contact></Contact>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;