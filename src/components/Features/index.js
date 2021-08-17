import React from 'react';
import "./Features.css";
import Feature from "./Feature";

const Features = (props) => {
  return (
     <section className="Content">
        <h2>Features</h2>
        <p>We've got you. Don't go through the stress alone</p>
       <div className="Content__Row">
       		<Feature emoji="💑" text="Meet people in your situation" />
       		<Feature emoji="👨‍⚖️" text="Get Professional Assistance" />
       </div> 
    </section>
  )
}

export default Features;