import React from 'react'
import Common from './Common'

// importing image 1 for home
import Image_1 from './Images/image-1.png'

const Home = () => {

    return (
        <div>
            <Common 
                image={Image_1}
                our_speciality="Grow your business with"
                btn_name="Get Started"
                className="img_1"
                path="/service"
            />
        </div>
    )
}

export default Home;
