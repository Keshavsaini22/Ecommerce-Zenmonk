import React from 'react'
import ReviewCard from '../ReviewCard/ReviewCard'
import './LandingReviews.css'
function LandingReviews() {
  return (

    <div className="reviews-section">
        <div className="upper-section">
            <div className="left">REVIEWS</div>
            <div className="right">SEE ALL</div>
        </div>
        <div className="lower-section">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>

        </div>
    </div>

    )
}

export default LandingReviews