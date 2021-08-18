import React, { useState, useRef } from 'react';
import swal from "sweetalert";

import "./SubscriptionInput.css";
import { db } from "../../firebase.js";

const SubscriptionInput = ({ focus, ...props }) => {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const emailInput = useRef(null);

	function handleOnSubmit(evt) {
		evt.preventDefault();
		if (email.trim() !== "" && isValidEmail(email)) {
			setIsSubmitting(true);
			db.collection("email-list").where("email", "==", email)
				.get()
				.then(querySnapshot => {
					if (querySnapshot.docs.length === 0) {
						db.collection("email-list").add({ email }).then(docRef => {
							swal("Hurray!! Welcome 🤗", "You will be the first to know when we are in operation", "success")
								.then(() => setEmail(""))
						}).catch(error => alert("Failed"))
					} else {
						swal("Existing Account", `${email} has already been subscribed`, "error")
					}
				})
				.catch(err => swal("Something broke 😞", "An error occured while subscribing. Check your network connection and try again", "error"))
				.finally(() => setIsSubmitting(false))
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
			<button 
				type="submit" 
				className={`SubscriptionInput--Button ${isSubmitting && 'Loading'}`} 
				disabled={isSubmitting || email.trim() === ""}
			>
				<span></span>
				<span></span>
				<span></span>
				<span>Subscribe</span>
			</button>
		</form>
	)
}

export default SubscriptionInput;