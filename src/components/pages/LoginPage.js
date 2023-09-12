import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'

export default function SignInPage({ route }) {
    console.log("🚀 ~ file: LoginPage.js:8 ~ SignInPage ~ route:", route)
    const navigate = useNavigate()
    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)

    const handleNavigation = (res) => {
        navigate('/home', { state: { token: res.data.token } });
    };

    // Assuming you have some function or event handler to trigger the navigation
    const onButtonClick = () => {
        // Replace this with the actual response from your API call
        const res = { data: { token: 'your_token_here' } };
        handleNavigation(res);
    };
    const handleSubmit = (e) => {
        const body = {
            username: userName,
            password: password
        }
        e.preventDefault();
        // console.log('submit')
        const url = `http://13.49.75.92:8080/login`
        // fetch({
        //     method: 'POST',
        //     body: JSON.stringify(body),
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        // }).then((res) => {
        //     console.log("🚀 ~ file: LoginPage.js:21 ~ handleSubmit ~ res:", res)

        // }).catch((err) => {
        //     console.log("🚀 ~ file: LoginPage.js:24 ~ handleSubmit ~ err:", err)

        // })
        // const body = {
        //     username: "108cd9fc-1041-7024-1c43-e2233a95e52d",
        //     password: "Temppass@0909"
        // }
        // const headers = {
        //     "Content-Type": "application/json"
        // };

        axios.post(url, body
        ).then((res) => {
            console.log(res)
            const p = { data: { token: res.data.token } };
            handleNavigation(p);

        }).catch((err) => {
            console.log(err)
        })
    }
    const handleChange = (e) => {
        // console.log(e.target.value)
        setUserName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className="text-center m-5-auto" >
            <h2>Sign in to us</h2>
            <form action="/home" onSubmit={handleSubmit}>
                <p>
                    <label>Username or email address</label><br />
                    <input type="text" name="first_name" required onChange={handleChange} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br />
                    <input type="password" name="password" required onChange={handlePassword} />
                </p>
                <p>
                    <button id="sub_btn" type="submit"// onClick={handleSubmit}
                    >Login</button>
                </p>
            </form>
            <footer>
                {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div >
    )
}
