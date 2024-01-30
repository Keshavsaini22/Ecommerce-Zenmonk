import React from 'react'
import basketballimg from '../Assets/LandingCategories/image 32.png'
import lifestyleimg from '../Assets/LandingCategories/image 31.png'

import './LandingCategories.css'
function LandingCategories() {
    // const lifestylestyle = {
    //     width: '400px',
    //     height: '476px',
    //     // borderRadius: '32px',
    //     // border: ' solid var(--Gray, #E7E7E3)',
    //     background: `url(${lifestyleimg}), lightgray -13.063px 57.715px / 113.463% 90.725% no-repeat`,
    // }
    return (
        <div className="categories">
            <div className="uppersection">
                <div className="leftc">Categories</div>
                <div className="rightc">
                    <div className='right-btn'><i class="fa fa-chevron-left" aria-hidden="true"></i>                    </div>
                    <div><i class="fa fa-chevron-right" aria-hidden="true"></i>                    </div>
                </div>
            </div>
            <div className="lowersection">
                <div className="lifestyle">
                    {/* <div className="image" style={lifestylestyle}></div> */}
                    <div className="image"><img src={lifestyleimg} alt="" srcset="" /></div>
                    <div className="text">
                        <div className="type" >LIFESTYLE <br/> SHOES</div>
                        <button><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className="basketball">
                <div className="image"><img src={basketballimg} alt="" srcset="" /></div>
                    <div className="text">
                        <div className="type">BASKETBALL <br/>  SHOES</div>
                        <button><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>)
}

export default LandingCategories