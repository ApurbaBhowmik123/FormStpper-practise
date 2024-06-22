import React, { useEffect, useState } from 'react'
import ProductDetails from '../component/ProductDetails'
import ProductImage from '../component/ProductImage'
import ProductConfirmation from '../component/ProductConfirmation';
import '../css/stepper.css';
import { v4 as uuidv4 } from 'uuid';

function Stepper() {
    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState({
        id: uuidv4(),
        productname: '',
        productcategory: [],
        productcolor: [],
        productimage: null,
        productdescription: '',
        productconfirmation: '',
        productdeatils: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }
    const handlePrev = () => {
        setActiveStep(activeStep - 1)
    }
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
    const handleImage = (e) => {
        setFormData({ ...formData, productimage: e.target.files[0] })
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/product-details", {
                method: "post",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const responseData = await response.json();
        } catch (error) {

        }
    }

    return (
        <div>
            <div>

                <div style={{ display: 'flex', gap: 200 }} className="stepper-1">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span className={`stepper ${activeStep === 1 ? 'active' : ''}`}>1</span>
                            <h3>ProductDetails</h3>
                        </div>
                        {activeStep === 1 && <ProductDetails
                            productname={formData.productname}
                            handleChange={handleChange}
                            handleProductCategory={handleProductCategory}
                            productcategory={formData.productcategory}
                            handleProductColor={handleProductColor}
                            productcolor={formData.productcolor} 
                            id={formData.productcategory.id}/>}

                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span className={`stepper ${activeStep === 2 ? 'active' : ''}`}>2</span>
                            <h3>ProductImage</h3>
                        </div>
                        {activeStep === 2 && <ProductImage productdescription={formData.productdescription} handleChange={handleChange} />}
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span className={`stepper ${activeStep === 3 ? 'active' : ''}`}>3</span>
                            <h3>ProductConfirmation</h3>
                        </div>
                        {activeStep === 3 && <ProductConfirmation formData={formData} productconfirmation={formData.productconfirmation} setFormData={setFormData} />}
                    </div>

                </div>
            </div>
            <div className="btn-btn">
                {
                    activeStep > 1 && <button onClick={handlePrev}>Prev</button>

                }
                {
                    activeStep === 3 ? (<button onClick={handleSubmit}>submit</button>) : (<button onClick={handleNext}>Next</button>)
                }
            </div>
        </div>
    )
}

export default Stepper