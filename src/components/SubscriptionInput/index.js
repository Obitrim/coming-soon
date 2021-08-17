import React, { useState, useRef } from 'react';
import "./SubscriptionInput.css";
// import { db } from "../../firebase.js";

const SubscriptionInput = ({ focus, ...props }) => {
	const [email, setEmail] = useState("");
	const emailInput = useRef(null);

	function handleOnSubmit(evt) {
		evt.preventDefault();
		if (email.trim() !== "" && isValidEmail(email)) {
			// db.collection("email-list").add({ email }).then(docRef => {
			// 	alert("Successful");
			// }).catch(error => alert("Failed"));
		}
	}

	function isValidEmail(emailString) {
		// change logic
		return true;
	}

	if (focus) {
		emailInput.current.focus();
	}

	return (
		<form action="#" className="SubscriptionInput--Wrapper" onSubmit={handleOnSubmit} {...props}>
			<input 
				type="email" 
				name="email" 
				placeholder="Enter your email" 
				className="SubscriptionInput--Input"
				onChange={evt => setEmail(evt.target.value)} 
				value={email} 
				ref={emailInput}
			/>
			<button type="submit" className="SubscriptionInput--Button">Subscribe</button>
		</form>
	)
}

export default SubscriptionInput;