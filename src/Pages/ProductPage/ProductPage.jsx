import React from 'react'
import './ProductPage.css'
import ProductBigImage from '../../components/ProductBigImage/ProductBigImage'
import ProductPageBuyOption from '../../components/ProductPageBuyOption/ProductPageBuyOption'
import YouMayAlsoLike from '../../components/YouMayAlsoLike/YouMayAlsoLike'
function ProductPage() {
    return (

        <div className="productpage">
            <div className="upper">
                <ProductBigImage />
                <ProductPageBuyOption />
            </div>
            <YouMayAlsoLike />
        </div>
    )
}

export default ProductPage