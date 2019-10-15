import React from "react";
import Button from "./button";

function DeleteBookBtn(props) {
    return (
        <Button type="danger" className="delete-btn" {...props} role="button" tabIndex="0">
            Delete
      </Button>
    );
}

export default DeleteBookBtn;