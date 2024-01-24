import React from 'react'
import './JoinKicksClub.css'
import { ReactComponent as ArrowFor } from '../Assets/Kicks/arrow_forward.svg'

function JoinKicksClub() {
    return (
        <div className="main-container">
            <div className="inner-container">
                <div className="main-heading">Join  Kicks Club Get Rewarded Today.</div>
                <div className="line-1">As kicks club member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:</div>
                <div className="list">
                    <ul>
                        <li>Free shipping</li>
                        <li>​A 15% off voucher for your next purchase​</li>
                        <li>Access to Members Only products and sales</li>
                        <li>Access to adidas Running and Training apps​</li>
                        <li>Special offers and promotions​</li>
                    </ul>
                </div>
                <div className="line-2">Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.​</div>
            </div>
            <div className="btn-container">
                <div className="btn-txt">JOIN THE CLUB</div>
                <ArrowFor className='arrow' />
            </div>
        </div>
    )
}

export default JoinKicksClub