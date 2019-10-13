import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const Button = props => (
    <button className={`book-btn btn btn-${props.btntype} btn-sm`} {...props}>
        {props.children}
    </button>
);

export default Button;