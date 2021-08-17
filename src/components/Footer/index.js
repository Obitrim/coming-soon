import React from 'react';
import "./Footer.css";
import Container from "../Container";
import SubscriptionInput from "../SubscriptionInput";

const Footer = (props) => {
  return (
    <footer className="AppFooter">
        <svg xmlns="http://www.w3.org/2000/svg" id="wave" viewBox="0 0 1440 320"><path fill="var(--violet)" fillOpacity="1" d="M0,96L40,85.3C80,75,160,53,240,80C320,107,400,181,480,213.3C560,245,640,235,720,202.7C800,171,880,117,960,106.7C1040,96,1120,128,1200,133.3C1280,139,1360,117,1400,106.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
       <Container>
            <section className="SocialMedia">
                <h3>Follow Us</h3>
                <a href="#" className="Icon">
                    <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>
                </a>
                <a href="#" className="Icon Icon--Instagram">
                    <ion-icon ios="logo-instagram" md="logo-instagram"></ion-icon>
                </a>
            </section>
            <section>
                <h3>Be the first to be notified</h3>
                <p>Subscribe to be the first to know when we are in operation</p>
                <SubscriptionInput />
            </section>
       </Container>
	</footer>
  )
}

export default Footer;