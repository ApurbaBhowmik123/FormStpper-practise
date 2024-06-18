import React, { useState, useEffect } from 'react';

function ProductConfirmation({ productconfirmation }) {
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
                <select name="productconfirmation" value={productconfirmation.name}>
                    <option>select any</option>
                    {
                        confirmation && confirmation.map((con) => (
                            <option value={con.name}>{con.name}</option>
                        ))
                    }
                </select>
                {
                    productconfirmation.name === 'pending' || productconfirmation.name === 'rejected' && <textarea></textarea>
                }
            </div>
        </div>
    )
}

export default ProductConfirmation