import React from 'react'
import {Link} from "react-router-dom"
export const Heading = () => {
    return (
        <nav className="containerNav navbar navbar-dark bg-dark">
            <Link to="/" className=" navbar-brand">My Team</Link>
            <Link to="/add" className="btn btn-primary add-user">Add User</Link>
        </nav>
    );
}
