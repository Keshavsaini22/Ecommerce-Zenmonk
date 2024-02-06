import React from 'react'

function AdminPage() {
    return (
        <form action="" method="get">
            <div className="adminpage">
                <div className="dashboard">
                    Admin Dashboard
                </div>
                <div className="productname">
                    <div className="info-txt">Product Name</div>
                    <input type="text" required name='proname' />
                </div>
                <div className="productprice">
                    <div className="info-txt">Product Price</div>
                    <input type="number" required name='proprice' />
                </div>
                <div className="productdesc">
                    <div className="info-txt">Product Description</div>
                    <input type="text" required name='prodesc' />
                </div>
                <div className="productcategory">
                    <label for="role">Choose a category:</label>

                    <select name="category" id="category" >
                        <option value="basketball">Basketball</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>
                </div>
                <div className="producttag">
                    <div className="info-txt">Product Tag</div>
                    <input type="text" required name='protag' />
                </div>
                <div className="productstock">
                    <div className="info-txt">Amount of product</div>
                    <input type='number' required name='prostock' />
                </div>
                <div className="productimage">
                    <div className="info-txt">Product Image</div>
                    <input type="text" required name='proname' />
                </div>

            </div>
        </form>
    )
}

export default AdminPage