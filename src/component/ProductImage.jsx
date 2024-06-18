import React from 'react'

function ProductImage() {
    return (
        <div>
            <p>Product-Image</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input type="file" />
                <textarea placeholder='write something'></textarea>
            </div>
        </div>
    )
}

export default ProductImage