import React from "react";
import "./Create.css";
import {handlePost} from "../services/FilmService";
import {useParams} from "react-router-dom";

const FilmCreateComponent = () => {
    const {film_id} = useParams();

    return (
        <div id={"mainDivCreate"}>
            <h2>Create/Update a Film element:</h2>
            <div id={"input_div"}>
                <label htmlFor={"film_name"}>Film name: </label>
                <input type={"text"} id={"film_name"}></input>
                <br></br>
                <label htmlFor={"film_duration"}>Film duration: </label>
                <input type={"number"} id={"film_duration"} min={"0"}></input>
                <br></br>
                <label htmlFor={"film_year_of_creation"}>Film year of creation: </label>
                <input type={"number"} id={"film_year_of_creation"} min={"1888"}></input>
                <button onClick={() => handlePost(document.getElementById("film_name").value,
                    document.getElementById("film_duration").value, document.getElementById("film_year_of_creation").value, film_id)}>INSERT</button>
            </div>
        </div>
    )
};

export default FilmCreateComponent;