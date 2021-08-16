import React from 'react';
import "./NavBar.css";
import Container from "../Container";

const NavBar = ({onRegister, ...props}) => {
  return (
    <div className="NavBar" {...props}>
    	<Container>
	    	<strong className="NavBar__Logo">FearWomen</strong>
	    	<a href="#" className="NavBar__NotifyMe" onClick={onRegister}>Register</a>
	    </Container>
    </div>
  )
}

export default NavBar;