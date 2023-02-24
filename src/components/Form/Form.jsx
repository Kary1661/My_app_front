import React from "react";
import { validation } from "./validation";
import style from "./Form.module.css";

export default function Form (props) {
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        setErrors(validation ({
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className={style.container}>
                <label>Username:</label>
                <input 
                    name="username"
                    type="text"
                    value={userData.username}
                    onChange={handleInputChange}
                />
                <p style={{color: "red"}}>{errors.username}</p>
            </div>
            <div className={style.container}>
                <label>Password:</label>
                <input 
                    name="password"
                    type="password" 
                    value={userData.password}
                    onChange={handleInputChange}
                />
                <p style={{color: "white"}}>{errors.password}</p>
            </div>
            <div className={style.container}>
              <button>Login</button>
            </div>
        </form>
        </>
    )
}