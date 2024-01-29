import {Link} from "react-router-dom";
import React from "react";
import "./TableComponent.css"

const CreateNav = () => {
    return (
        <nav>
            <div id="MainDiv">
                <h1>Create</h1>
                <table>
                    <thead>
                    <tr id="create">
                        <th><Link to="/film_create">Create Film</Link></th>
                        <th><Link to="/user_create">Create User</Link></th>
                        <th><Link to="/streaming_service_create">Create Streaming Service</Link></th>
                    </tr>
                    </thead>
                </table>
            </div>
        </nav>
    );
};

export default CreateNav;