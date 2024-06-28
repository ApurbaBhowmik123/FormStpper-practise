import React, { useState, useEffect } from 'react';

function ProductConfirmation({ formData, setFormData, productconfirmation, productdeatils }) {
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
    const handleconfirmation = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            productconfirmation: { id: value }
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (

        <div className="product-confirmation">
            <p>Product-Confirmation</p>
            <div>
                <select name="productconfirmation" onChange={handleconfirmation}>
                    <option>select any</option>
                    {
                        confirmation && confirmation.map((con) => (
                            <option key={con.name} value={con.id}>{con.name}</option>
                        ))
                    }
                </select>
                {
                    (productconfirmation.id === '1' || productconfirmation.id === '3') &&
                    (<textarea placeholder="write somethng..." name="productdeatils"
                        value={formData.productdeatils}
                        onChange={handleChange}></textarea>)
                }
            </div>
        </div>
    )
}

export default ProductConfirmation