import React, { useState } from 'react';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AppFooter from "./components/Footer";
import Features from "./components/Features";

const App = (props) => {
	const [focus, setFocus] = useState(false);

	function handleOnRegister(evt) {
		evt.preventDefault();
		setFocus(true);
	}

	return (
		<main>
			<NavBar onRegister={handleOnRegister}/>
			<Banner subscriptionInputFocus={focus} />
		    <Features />
		    <AppFooter />
		</main>
	)
}

export default App;