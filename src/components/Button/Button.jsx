import React from 'react'

const Button = ({text, type}) => {
    const btnstyle= {
        backgroundColor: type === "alert" ? "grey" : "Darkblue"
    };

  return (
    <button style={btnstyle} className='btn'> {text} </button>
  );
}

export default Button