import React from "react";
import axios from "axios";
import { toast } from 'react-toastify';


class AddBookBtn extends React.Component {

    var dbBook = {
    title: book.title,
    authors: book.authors,
    synopsis: book.synopsis,
    thumbnail: book.thumbnail,
    link: book.link
}

axios.post("/api/books", dbBook)
    .then(() => toast.success(`${book.title} has been added`))
    .catch(err => console.log(err))
    }

//post book on click to database
render() {
    return (
        <div>
            <Button type="primary" onClick={() => { this.postToDB(this.props) }
            }>
                Save Book
        </Button>
        </div>
    );
}


export default AddBookBtn;