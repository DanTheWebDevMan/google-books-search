import axios from "axios";

export default {
    // Gets all books
    getBooks: function () {
        //You can perform a volumes search by sending an HTTP GET request to the following URI: https://www.googleapis.com/books/v1/volumes?q=search+terms
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
