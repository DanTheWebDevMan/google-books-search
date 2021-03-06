// This file exports the Input, TextArea, and FormBtn components
import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="20" {...props} />
        </div>
    );
}


export const FormBtn = props => (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-info">
        {props.children}
    </button>
);