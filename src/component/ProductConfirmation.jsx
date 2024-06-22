import React, { useState, useEffect } from 'react';

function ProductConfirmation({ formData, handleChange }) {
    const [confirmation, setConfirmation] = useState([]);
    useEffect(() => {
        const confirmationData = async () => {
            try {
                const response = await fetch("http://localhost:3000/product-confirmation", {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const responseData = await response.json();
                setConfirmation(responseData);
            } catch (error) {
                throw new Error(error.message)
            }
        }
        confirmationData();
    }, [])

    return (

        <div className="product-confirmation">
            <p>Product-Confirmation</p>
            <div>
                <select name="productconfirmation" value={formData.productconfirmation} onChange={handleChange}>
                    <option>select any</option>
                    {
                        confirmation && confirmation.map((con) => (
                            <option key={con.name} value={con.id}>{con.name}</option>
                        ))
                    }
                </select>
                {
                    (formData.productconfirmation === "1" ||
                        formData.productconfirmation === '3') &&
                    (<textarea placeholder={formData.productconfirmation} name="productdeatils"
                        value={formData.productdetails}
                        onChange={handleChange}></textarea>)
                }
            </div>
        </div>
    )
}

export default ProductConfirmation