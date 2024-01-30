import React from 'react'
import './LandingPagDontMiss.css'
import ProductCard from '../ProductCard/ProductCard'
function LandingPageDontMiss() {
  return (
<div className="dontmiss">
    <div className="uppersection">
        <div className="left">Don’t miss out new drops</div>
        <button>Shop New Drops</button>
    </div>
    <div className="lowersection">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

    </div>
</div>  )
}

export default LandingPageDontMiss