import React, {useState} from 'react';
import "./TableComponent.css";
import {Link} from "react-router-dom";

const HomePage = () => {
    const [atLeastInput, atLeastInputSet] = useState(0);

    const handleChange = () => {
        atLeastInputSet(document.getElementById("at_least_input").value);
    }

    return (
        <div>
            <h1>SpringBoot API with a client using ReactJS</h1>
            <div id={"main-buttons"}>
                <Link to={"/streaming_film"}><button>Add Films to a Streaming Services</button></Link>
                <Link to={"/streaming_film_delete"}><button>Delete Films from a Streaming Services</button></Link>
                <Link to={"/best_services"}><button>Best Streaming Services</button></Link>
                <hr/>
                <Link to={`/users_with_at_least/${atLeastInput}`}><button>Show Users with at least N reviews?</button></Link>
                <br/>
                <label htmlFor={"at_least"}>N: </label><input onInput={handleChange} id={"at_least_input"} type={"number"} placeholder={"0"} min={0}/>
            </div>
        </div>
    );
};

export default HomePage;