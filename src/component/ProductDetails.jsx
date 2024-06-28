import React, { useEffect, useState } from 'react';

function ProductDetails({ productname, productcategory, productcolor,setFormData,formData }) {
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


    const handleProductCategory = (e) => {

        const { value } = e.target;
        // const productArray = [...formData.productcategory, value];
        setFormData({ ...formData, productcategory: [...formData.productcategory, { id: value }] })
    }

    const handleProductColor = (e) => {
        const { value } = e.target;
        // const colorarray = [...formData.productcolor, value];
        setFormData({ ...formData, productcolor: [...formData.productcolor, { id: value }] })

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    return (
        <div className="product-detail">
            <p>Product-Details</p>
            <div className="product-details">
                <input type="text" placeholder="product name" name="productname" value={productname} onChange={handleChange} />
                <select onChange={handleProductCategory} name="productcategory">
                    {!productcategory.length && <option value=''>select any</option>}

                    {
                        category && category.map((opt, index) => (
                            <option
                                key={index}
                                value={opt.id} disabled={productcategory.some(cat => cat.id === opt.id)}>{opt.name}</option>
                        ))
                    }
                </select>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {
                        productcategory && productcategory.map((cats, ind) => (
                            <p key={ind}>{category.find((cat) => cat.id === cats.id)?.name}</p>
                        ))
                    }
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
        </div >
    )
}

export default ProductDetails