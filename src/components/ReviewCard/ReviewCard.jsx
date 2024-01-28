import React from 'react'
import { ReactComponent as Star } from '../Assets/Kicks/LandingPage/Reviews/star.svg'
import DpPic from '../Assets/Kicks/LandingPage/Reviews/Ellipse1.png'
import ProductPic from '../Assets/Kicks/LandingPage/Reviews/productPic.png'
import './ReviewCard.css'
function ReviewCard() {
    return (
        <div className="reviewcard">
            <div className="upper">
                <div className="upper-top">
                    <div className="left">
                        <div className="bolder">Good Quality</div>
                        <div className="lightcomment">I highly recommend shopping from kicks</div>
                    </div>
                    <div className="rightt">
                        <img src={DpPic} alt="" srcset="" />
                    </div>
                </div>
                <div className="upper-bottom">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <span className="txt">5.0</span>
                </div>


            </div>



            <div className="lowerr">
                <img src={ProductPic} alt="" srcset="" />
            </div>
        </div>
    )
}



export default ReviewCard