import React from "react";
import "./Create.css";
import {handlePost} from "../services/UserService";

const UserCreateComponent = () => {
    return (
        <div id={"mainDivCreate"}>
            <h2>Create a new User element:</h2>
            <div id={"input_div"}>
                <label htmlFor={"username"}>Username: </label>
                <input type={"text"} id={"username"}></input>
                <br></br>
                <label htmlFor={"user_real_name"}>Full name: </label>
                <input type={"text"} id={"user_real_name"}></input>
                <br></br>
                <label htmlFor={"user_password"}>Password: </label>
                <input type={"text"} id={"user_password"}></input>
                <br></br>
                <label htmlFor={"user_date_of_birth"}>Date of birth: </label>
                <input type={"date"} id={"user_date_of_birth"} min={"1800-1-1"}></input>
                <button onClick={() => handlePost(document.getElementById("username").value,
                    document.getElementById("user_real_name").value, document.getElementById("user_date_of_birth").value,
                    document.getElementById("user_password").value)}>INSERT</button>
            </div>
        </div>
    )
};

export default UserCreateComponent;