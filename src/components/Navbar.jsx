import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"


function Navbar() {


    return (
        <nav>
            <Link className="logo" to={"/"}>TODO APP</Link>
        </nav>

    )
}

export default Navbar