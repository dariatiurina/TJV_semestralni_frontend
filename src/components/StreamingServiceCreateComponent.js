import React from "react";
import "./Create.css";
import {handlePost} from "../services/StreamingServiceService";
import {useParams} from "react-router-dom";

const StreamingServiceCreateComponent = () => {
    const {streaming_service_id} = useParams();
    return (
        <div id={"mainDivCreate"}>
            <h2>Create a new Streaming Service element:</h2>
            <div id={"input_div"}>
                <label htmlFor={"streaming_service_name"}>Name: </label>
                <input type={"text"} id={"streaming_service_name"}></input>
                <br></br>
                <button onClick={() => handlePost(document.getElementById("streaming_service_name").value, streaming_service_id)}>INSERT</button>
            </div>
        </div>
    )
};

export default StreamingServiceCreateComponent;