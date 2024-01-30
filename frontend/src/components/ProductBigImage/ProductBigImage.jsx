import React from 'react'
import './ProductBigImage.css'
import img1 from '../Assets/Kicks/ProductPage/Rectangle8.png'
import img2 from '../Assets/Kicks/ProductPage/Rectangle9.png'

import img3 from '../Assets/Kicks/ProductPage/Rectangle10.png'

import img4 from '../Assets/Kicks/ProductPage/Rectangle11.png'

function ProductBigImage() {
  return (
    <div className="bigimage">
        <div className="bigimagetop">
            <img src={img1} alt="" className='topleft' />
            <img src={img2} alt=""  className='topright'/>

        </div>
        <div className="bigimagebottom">
            <img src={img3} alt="" className='bottomleft' />
            <img src={img4} alt=""  className='bottomright'/>

        </div>
    </div>
  )
}

export default ProductBigImage