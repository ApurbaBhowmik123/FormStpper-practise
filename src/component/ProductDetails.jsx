import React from 'react'

function ProductDetails() {
    return (
        <div>
            <p>Product-Details</p>
            <div className="product-details">
                <input type="text" />
                <select>
                    <option>mobile</option>
                    <option>mobile</option>
                    <option>mobile</option>
                </select>
                <div className="product-checkbox">
                <label>blue</label>
                <input type="checkbox" />
                <label>blue</label>
                <input type="checkbox" />
                <label>blue</label>
                <input type="checkbox" />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails