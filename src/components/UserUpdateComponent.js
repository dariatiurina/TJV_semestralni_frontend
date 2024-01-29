import React from "react";
import "./Create.css";
import {handlePut} from "../services/UserService";
import {useParams} from "react-router-dom";

const UserUpdateComponent = () => {

    const {username} = useParams();

    return (
        <div id={"mainDivCreate"}>
            <h2>Update User element:</h2>
            <div id={"input_div"}>
                <label htmlFor={"user_real_name"}>Full name: </label>
                <input type={"text"} id={"user_real_name"}></input>
                <br></br>
                <label htmlFor={"user_password"}>Password: </label>
                <input type={"text"} id={"user_password"}></input>
                <br></br>
                <label htmlFor={"user_date_of_birth"}>Date of birth: </label>
                <input type={"date"} id={"user_date_of_birth"} min={"1800-1-1"}></input>
                <button onClick={() => handlePut(
                    document.getElementById("user_real_name").value,
                    document.getElementById("user_date_of_birth").value, document.getElementById("user_password").value, username)}>INSERT
                </button>
            </div>
        </div>
    )
};

export default UserUpdateComponent;