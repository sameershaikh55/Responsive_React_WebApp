import React from "react";
import "./App.css";

//import switch and route for use from react dom
import { Switch, Route, Redirect } from "react-router-dom";

//importing all NavBar components
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

//import Navbar
import Navbar from "./Navbar";

// import footer for copyright
import Footer from "./Footer";

// Error Image
import ErrImg from "./Images/ErrorPageSvg.svg";

function App() {
	return (
		<div className="AllPagesContainer">
			<img src={ErrImg} alt="ErrorPage" className="errorImg" />
			<h4 className="errorText">
				This Website is not Responsive for Small Devices, Please Open it on your
				Laptop Or Desktop...!!!
			</h4>
			<div className="header_container">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/service" component={Service} />
					<Route exact path="/contact" component={Contact} />
					<Redirect to="/" />
				</Switch>
				<Footer />
			</div>
		</div>
	);
}

export default App;
