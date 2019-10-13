import React from "react";
import Jumbotron from "../jumbotron";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                    Google Books
      </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link navbar-brand" id="savedLink" href="/bookshelf">Saved Books</a>
                    </li>
                </ul>
            </nav>
            <Jumbotron />
        </div >
    );
}

export default Nav;