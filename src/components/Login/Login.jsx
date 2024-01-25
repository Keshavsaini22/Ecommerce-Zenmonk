import React from 'react'
import './Login.css'
import { ReactComponent as Google } from '../Assets/Kicks/logos_google-icon.svg'

import { ReactComponent as Apple } from '../Assets/Kicks/ic_baseline-apple.svg'

import { ReactComponent as Facebook } from '../Assets/Kicks/logos_facebook.svg'

import { ReactComponent as ArrowFor } from '../Assets/Kicks/arrow_forward.svg'
import { NavLink } from 'react-router-dom'
function Login() {
    return (
        <div className="container">
            <div id='log-for'>
                <div className="log">Login / <NavLink to={'/signup'}>SignUp</NavLink></div>
                <div className="forget">Forget your password?</div>
            </div>

            <input type="email" placeholder='Email' className='email' />

            <input type="password" className='password' name="" id="" placeholder='Password' />


            <div id="cont-text">
                <input type="checkbox" name="" id="checkbox" />
                <div className="typography">
                    <div className="textopt">Keep me logged in - applies to all log in options below. </div>
                    <div className="moreinfo">More info</div>
                </div>
            </div>



            <div className="btn-container">
                <button>EMAIL LOGIN</button>
                <ArrowFor className='arrow'/>

            </div>
            <div className="three-btn">
                <button className="btn-auth">
                    <Google className='btn-auth-svg'/> </button>
                <button className="btn-auth">
                    <Facebook className='btn-auth-svg'/>
                </button>
                <button className="btn-auth">
                    <Apple className='btn-auth-svg'/>
                </button>

            </div>

      
                <div className="typo-tems">By clicking 'Log In' you agree to our website Kicks<span className='inner-txt'>Club Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</span></div>


        </div>
    )
}

export default Login