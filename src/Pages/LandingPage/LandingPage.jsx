import React from 'react'
// import { ReactComponent as MainImg } from '../Assets/Kicks/LandingPage/landing-page1.png'
// import { ReactComponent as Secondary1 } from '../../components/Assets/Kicks/LandingPage/landing-page2.png'
// import { ReactComponent as Secondary2 } from '../../components/Assets/Kicks/LandingPage/landing-page3.png'
// import { ReactComponent as MainImg } from '../../components/Assets/Kicks/LandingPage/landing-page1.png'
import NikeAirSection from '../../components/NikeAirSection/NikeAirSection'
import LandingPageDontMiss from '../../components/LandingPageDontMiss/LandingPageDontMiss'
import LandingCategories from '../../components/LandingCategories/LandingCategories'
import LandingReviews from '../../components/LandingReviews/LandingReviews'
import ProductBigImage from '../../components/ProductBigImage/ProductBigImage'
import ProductPageBuyOption from '../../components/ProductPageBuyOption/ProductPageBuyOption'


function LandingPage() {
  return (
    <div className="landing-section">
      {/* <NikeAirSection/>
      <LandingPageDontMiss /> */}
      {/* <LandingCategories/> */}
      {/* <LandingReviews/> */}
      {/* <ProductBigImage/> */}
      <ProductPageBuyOption/>
    </div>
  )
}

export default LandingPage