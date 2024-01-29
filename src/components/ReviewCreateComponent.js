import React from "react";
import "./Create.css";
import {useParams} from "react-router-dom";
import {handlePost} from "../services/ReviewService";

const ReviewCreateComponent = () => {
    const { filmId } = useParams();
    return (
        <div id={"mainDivCreate"}>
            <h2>Create a new Review element:</h2>
            <div id={"input_div"}>
                <label htmlFor={"review_text"}>Text: </label>
                <textarea id={"review_text"}></textarea>
                <br></br>
                <label htmlFor={"review_rating"}>Rating: </label>
                <input type={"number"} id={"review_rating"} min={0} max={10}></input>
                <br></br>
                <label htmlFor={"review_user"}>Author username: </label>
                <input type={"text"} id={"review_user"}></input>
                <button onClick={() => handlePost(document.getElementById("review_text").value,
                    document.getElementById("review_rating").value, document.getElementById("review_user").value, filmId)}>INSERT</button>
            </div>
        </div>
    )
};

export default ReviewCreateComponent;