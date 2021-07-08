import React, { useState, useEffect } from "react"
import "../style/form.css"
import Selection from "./Selection"

const Form = () => {
    return (
        <form className="form-container">
            <h1>
                Let’s set up your account
            </h1>
            <div className="sign-in-container">
                <p>Already have an account?</p>
                <a href="#">Sign in</a>            
            </div>
            <div className="form-inner-container">
                <div className="form-content-container">
                    <input required type="text" placeholder="Your name"/>
                    <input required type="email" placeholder="Email address"/>
                    <Selection/>    
                    <input 
                        id="password"
                        pattern=".{8,}" 
                        required 
                        type="password" 
                        placeholder="Password"/>
                    <p>
                        Minimum 8 characters
                    </p>
                </div>
            </div>
            <div className="submit-container">
                <button type="submit">
                </button>
            </div>
            <div className="policy-container">
                <p>
                    By clicking the “Next” button, 
                    you agree to creating a free account, 
                    and to <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
                </p>
            </div>
        </form>
    )
}

export default Form