import React from 'react';

const Feature = ({emoji, text, ...props}) => {
  return (
    <div className="Card">
        <div>
            <span className="Emoji">{emoji}</span>
        </div>
        <span>{text}</span>
    </div> 
  )
}

export default Feature;