import React, { useEffect, useState } from 'react';

function ProductDetails() {
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
            console.log(responseData);
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
                <input type="text" placeholder="product name" />
                <select>
                    <option>select any</option>
                    {
                        category && category.map((opt) => (
                            <option>{opt.name}</option>
                        ))
                    }


                </select>
                <div className="product-checkbox">
                    {
                        color && color.map((col) => (
                            <label>{col.name}
                                <input type="checkbox" />
                            </label>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductDetails