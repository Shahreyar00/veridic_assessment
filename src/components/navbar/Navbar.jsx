import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar__container">
            <div className="navbar__wrapper">
                <Link to="/">
                    <span className="title">TechCrunch Display</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar