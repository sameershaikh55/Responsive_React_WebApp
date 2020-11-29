import React from 'react';

// importing Box button
import Button from '@material-ui/core/Button';


const Cards = () => {
    return (
                <div>
                    <h2 className="services_heading">Our Services</h2>
                <div className="box_manager">
                    <div className="box_1">
                        <img src="https://source.unsplash.com/6001x4000/?computer,tech,programming,webdevelopment,coding,react,javascript,html,css,laptop" alt="our_services" />
                        <h2>Our Project</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <Button variant="contained" color="primary">Go Project</Button>
                    </div>
                    <div className="box_2">
                        <img src="https://source.unsplash.com/6002x4000/?computer,tech,programming,webdevelopment,coding,react,javascript,html,css,laptop" alt="our_services" />
                        <h2>Our Project</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <Button variant="contained" color="primary">Go Project</Button>
                    </div>
                    <div className="box_3">
                        <img src="https://source.unsplash.com/6003x4000/?computer,tech,programming,webdevelopment,coding,react,javascript,html,css,laptop" alt="our_services" />
                        <h2>Our Project</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <Button variant="contained" color="primary">Go Project</Button>
                    </div>        
                </div>
                </div>  
    )
}

export default Cards;
