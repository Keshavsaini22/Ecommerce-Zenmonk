import React from 'react'
import { ReactComponent as Kickss } from '../Assets/Kicks/kickslogo.svg'
import { ReactComponent as Fb } from '../Assets/Kicks/ic_baseline-facebook.svg'
import { ReactComponent as Insta } from '../Assets/Kicks/mdi_instagram.svg'
import { ReactComponent as Twitter } from '../Assets/Kicks/mdi_twitter.svg'
import { ReactComponent as Tiktok } from '../Assets/Kicks/ic_baseline-tiktok.svg'
import { ReactComponent as Vector } from '../Assets/Kicks/Vector.svg'
import { ReactComponent as AddCircle } from '../Assets/Kicks/Add_circle.svg'
import './Footer.css'

function Footer() {
  return (

    <div className="blue-container">
      <div className="top-container">
        <div className="blue-left">
          <div className="blue-left-text">
            <div className="line1">Join our KicksPlus    <br></br> Club & get 15% off</div>
            <div className="line2">Sign up for free! Join the community.</div>
          </div>
          <form action="" method="get">
            <div className="form">
              <input type="email" name="" id="email" placeholder='Email address' />
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="blue-right">
          <Kickss className='vector' ></Kickss>

        </div>
      </div>

      <div className="black-container">
        <div className="desc">
          <div className="about">
            <h1>About Us</h1>
            <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
          </div>
          <div className="category">
            <h1>Categories</h1>
            <li>Runner</li>
            <li>Sneakers</li>
            <li>Basketball</li>
            <li>Outdoor</li>
            <li>Golf</li>
            <li>Hiking</li>
          </div>
          <div className="company">
            <h1>Company</h1>
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
          </div>
          <div className="follow">
            <h1>Follow US</h1>
            <div className="follow-logo">
              <Fb />
              <Insta />
              <Twitter />
              <Tiktok />
            </div>
          </div>
        </div>
        <Kickss className='down-logo' />
      </div>

    </div>


  )
}

export default Footer