import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul id="navlist">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/film">Film</Link></li>
                <li><Link to="/streaming_service">Streaming Service</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/create">Create</Link></li>
            </ul>
            <hr></hr>
        </nav>
    );
};

export default Navigation;