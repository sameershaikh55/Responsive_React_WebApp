import React from 'react';
import Common from './Common'

// importing image 2 for about
import Image_2 from './Images/image-2.png'

const About = () => {

    return (
        <div className="about_page">
            <Common 
                image={Image_2}
                our_speciality="Welcome to our About Page"
                btn_name="Contact Us"
                className="img_2"
                path="/contact"
            />
        </div>
    );
}

export default About;
