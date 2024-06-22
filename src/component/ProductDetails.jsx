import React, { useEffect, useState } from 'react';

function ProductDetails({ productname, handleChange, handleProductCategory, productcategory, productcolor, handleProductColor }) {
    const [category, setCategory] = useState([]);
    const [color, setColor] = useState([]);

    useEffect(() => {
        const categoryData = async () => {
            const response = await fetch("http://localhost:3000/product-category", {
                headers: {
                    'Content-Type': 'application / json'
                }
            })
            const responseData = await response.json();
            setCategory(responseData)
        }
        categoryData();
    }, []);

    

    useEffect(() => {
        const colorData = async () => {
            const response = await fetch("http://localhost:3000/product-color", {
                headers: {
                    'content-Type': 'appliction/json'
                }
            })
            const responseData = await response.json();
            setColor(responseData)
        }
        colorData();
    }, [])

    return (
        <div className="product-detail">
            <p>Product-Details</p>
            <div className="product-details">
                <input type="text" placeholder="product name" name="productname" value={productname} onChange={handleChange} />
                <select onChange={handleProductCategory} name="productcategory">
                    <option value=''>select any</option>
                    {
                        category && category.map((opt, index) => (
                            <option
                                key={index}
                                value={opt.id} disabled={productcategory.includes(opt.id)}>{opt.name}</option>
                        ))
                    }
                </select>
                <div style={{ display: 'flex' }}>
                    <p style={{ gap: 20, display: "flex" }}>{category.name}</p>
                </div>
                <div className="product-checkbox">
                    {
                        color && color.map((col, index) => (
                            <label key={index}>{col.name}
                                <input type="checkbox" name="productcolor" value={col.id} onChange={handleProductColor} />
                            </label>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductDetails