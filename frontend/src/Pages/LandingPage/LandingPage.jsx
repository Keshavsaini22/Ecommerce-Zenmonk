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
import YouMayAlsoLike from '../../components/YouMayAlsoLike/YouMayAlsoLike'
import './LandingPage.css'
import axios from 'axios';


function LandingPage() {
  axios.defaults.withCredentials = true;


  // useEffect(() => {
  //   // const token = getCookie('token');
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:5000/home')
  //       setUserData(res.data);
  //     } catch (error) {
  //       console.error(error);

  //     }
  //   }
  //   fetchData()
  // })
  return (
    <div className="landing-sectionn">
      <NikeAirSection className='nike-section' />
      <LandingPageDontMiss className='dontmiss-section' />
      <LandingCategories className='categories-section' />
      <LandingReviews className='reviews-section' />

    </div>
  )
}

export default LandingPage