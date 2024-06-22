import React from 'react'

function ProductImage({ productdescription, handleChange }) {
    return (
        <div>
            <p>Product-Image</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input type="file" />
                <textarea placeholder='write something' name="productdescription" value={productdescription} onChange={handleChange}></textarea>
            </div>
        </div>
    )
}

export default ProductImage