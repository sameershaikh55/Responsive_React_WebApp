import React from 'react'

//importing material ui buttons
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Fab from '@material-ui/core/Fab';    
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <div className="home_page">
            <div>
                <h1 className="slogan"> {props.our_speciality} <br /> <span className="b_name"> SaymTechnical </span></h1>
                <p className="speciality"> We are the team of talented peoples making Softwares </p>
                <br />
                <NavLink activeClassName="getStarted" className="getStarted2" to={props.path}>
                    <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="Add"
                        style={{ fontWeight: "bold", letterSpacing: "1.2px", outline: "none" }}
                        >
                         {props.btn_name}
                        <ArrowForwardIcon style={{ marginLeft: "2px" }} />
                    </Fab>          
                </NavLink>
            </div>
            <div>
                <img src={props.image} alt="Web_Development" className={props.className} />
            </div>
        </div>
    )
}

export default Common;
