import React from "react";
import "./Create.css";
import {useParams} from "react-router-dom";
import {handlePut} from "../services/ReviewService";

const ReviewUpdateComponent = () => {
    const { review_id } = useParams();
    return (
        <div id={"mainDivCreate"}>
            <h2>Update a Review element:</h2>
            <div id={"input_div"}>
                <label htmlFor={"review_text"}>Text: </label>
                <textarea id={"review_text"}></textarea>
                <br></br>
                <label htmlFor={"review_rating"}>Rating: </label>
                <input type={"number"} id={"review_rating"} min={0} max={10}></input>
                <button onClick={() => handlePut(document.getElementById("review_text").value,
                    document.getElementById("review_rating").value, review_id)}>INSERT</button>
            </div>
        </div>
    )
};

export default ReviewUpdateComponent;