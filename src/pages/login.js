import React from "react";
import { useState} from "react";
import './css/form.css'

function Form() {
    const [inputFields, setInputFields] = useState([
        { username: '', password: '' }
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(inputFields);
    }

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={submit}>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <div className="user-box">
                                <input
                                    name="username"
                                    value={input.username}
                                    onChange={event => handleFormChange(index, event)}
                                />
                                <label>Username</label>
                            </div>
                            <div className="user-box">
                                <input
                                    name="password"
                                    type="password"
                                    value={input.password}
                                    onChange={event => handleFormChange(index, event)}
                                />
                                <label>Password</label>
                            </div>
                            <a onClick={submit}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </a>
                        </div>
                    );
                })}
            </form>
        </div>
    );
}

const Login = () =>{
    return Form();
}

export default Login;