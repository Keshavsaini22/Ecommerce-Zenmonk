import React from 'react'
import img1 from '../Assets/Kicks/LandingPage/landing-page3.png'
import img2 from '../Assets/Kicks/LandingPage/landing-page1.png'

import img3 from '../Assets/Kicks/LandingPage/landing-page2.png'
import './NikeAirSection.css'
function NikeAirSection() {
    const containerStyle = {
        width: '90vw',
        height: '750px',
        borderRadius: '64px',

        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 31.12%, rgba(0, 0, 0, 0.50) 66.06%), url(${img1}), lightgray 50% / cover no-repeat`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'flex-end',
    };
    const imgRight2 = {
        width: '160px',
        height: '160px',
        borderRadius: '32px',
        // border: ' solid var(--Gray, #E7E7E3)',
        background: `url(${img2}), lightgray 50% / cover no-repeat`,
    };
    const imgRight1 = {
        width: '160px',
        height: '160px',
        borderRadius: '32px',
        // border: ' solid var(--Gray, #E7E7E3)',
        background: `url(${img3}), lightgray 50% / cover no-repeat`,
    };
    return (
        <>
            <div className="tag-line">DO IT <span>RIGHT</span></div>

            <div style={containerStyle} className='nikeairsection'>
                <div className="left">
                    <div className="line1">NIKE AIR MAX</div>
                    <div className="line2">Nike introducing the new air max for everyone's comfort</div>
                    <button>Shop now</button>
                </div>
                <div className="right">
                    <div style={imgRight1}></div>
                    <div style={imgRight2}></div>
                </div>
            </div>
        </>
    )
}

export default NikeAirSection