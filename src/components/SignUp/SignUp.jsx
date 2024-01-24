import React from 'react'
import { ReactComponent as Google } from '../Assets/Kicks/logos_google-icon.svg'

import { ReactComponent as Apple } from '../Assets/Kicks/ic_baseline-apple.svg'

import { ReactComponent as Facebook } from '../Assets/Kicks/logos_facebook.svg'

function SignUp() {
    return (
        <div className="signup-container">
            <div className="register">
                <div className="line1">Register</div>
                <div className="line2">Sign up with</div>
            </div>
            <div className="auth-logos">
                <button className="btn-auth">
                    <Google className='btn-auth-svg' /> </button>
                <button className="btn-auth">
                    <Facebook className='btn-auth-svg' />
                </button>
                <button className="btn-auth">
                    <Apple className='btn-auth-svg' />
                </button>
            </div>
            <div className="or">OR</div>
            <div className="your-info">
                <div className="info-txt">Your Name</div>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <div className="gender">
                <h1>Gender</h1>
                <div className="checkbox">
                    <input type="checkbox" name="male" id="male" /><label htmlFor="">Male</label>
                    <input type="checkbox" name="male" id="male" /><label htmlFor="">Female</label>
                    <input type="checkbox" name="male" id="male" /><label htmlFor="">Other</label>

                </div>
            </div>
            <div className="login-details">
                <div className="log-txt">Login Details</div>
                <input type="email" name="" id="" placeholder='Email'/>
                <input type="password" name="" id="" placeholder='Password'/>
                <div className="warning-txt">Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</div>

            </div>
            <div className="termsandc1">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">By clicking 'Log In' you agree to our website KicksClub <span>Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</span></label>
            </div>
        </div>
    )
}

export default SignUp