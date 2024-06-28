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
        productimage: '',
        productdescription: '',
        productconfirmation: '',
        productdeatils: ''
    })

    console.log(formData)

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }
    const handlePrev = () => {
        setActiveStep(activeStep - 1)
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
            console.log(error)
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
                            productcategory={formData.productcategory}
                            productcolor={formData.productcolor}
                            setFormData={setFormData}
                            formData={formData} />}

                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span className={`stepper ${activeStep === 2 ? 'active' : ''}`}>2</span>
                            <h3>ProductImage</h3>
                        </div>
                        {activeStep === 2 && <ProductImage
                            productdescription={formData.productdescription}
                            productimage={formData.productimage}
                            setFormData={setFormData}
                            formData={formData} />}
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span className={`stepper ${activeStep === 3 ? 'active' : ''}`}>3</span>
                            <h3>ProductConfirmation</h3>
                        </div>
                        {activeStep === 3 && <ProductConfirmation
                            formData={formData}
                            productconfirmation={formData.productconfirmation}
                            setFormData={setFormData}
                            productdeatils={formData.productdeatils}
                        />}
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