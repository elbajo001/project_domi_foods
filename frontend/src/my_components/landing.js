import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component{
	render(){
		return(
			<div className="container bg-transparent">
				<header id="header" className="fixed-top d-flex align-items-center bg-primary">
					<div className="container d-flex align-items-center">
	      				<div className="logo mr-auto">
	        				<h1 className="text-light">
	        					<a href="index.html">
	        						<span className="text-light font-weight-bold">DomiFoods!</span>
	        					</a>
	        				</h1>
	      				</div>

	     				<nav className="navbar navbar-expand">
					 			<Link to ="/Welcome"> <li className="nav-link text-white">Home</li></Link>
					 			<Link to ="/Login">   <li className="nav-link text-white">Login</li></Link>
					 			<Link to = "/Registry">  <li className="nav-link text-white">Sign up</li></Link>
						</nav>
	    			</div>
				</header>
			
				
			</div>
		
		);
	}
}

export default LandingPage;