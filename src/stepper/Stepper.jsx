import React, { useState } from 'react'
import ProductDetails from '../component/ProductDetails'
import ProductImage from '../component/ProductImage'
import ProductConfirmation from '../component/ProductConfirmation';
import '../css/stepper.css'

function Stepper() {
    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState({
        productname: '',
        productcategory: [],
        productcolor: [],
        productimage: '',
        productdescription: '',
        productconfirmation: []
    })

    const handleChange = () => {

    }
    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }
    const handlePrev = () => {
        setActiveStep(activeStep - 1)
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
                        {activeStep === 1 && <ProductDetails />}

                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span className={`stepper ${activeStep === 2 ? 'active' : ''}`}>2</span>
                            <h3>ProductImage</h3>
                        </div>
                        {activeStep === 2 && <ProductImage />}
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span className={`stepper ${activeStep === 3 ? 'active' : ''}`}>3</span>
                            <h3>ProductConfirmation</h3>
                        </div>
                        {activeStep === 3 && <ProductConfirmation productconfirmation={formData}/>}
                    </div>

                </div>
            </div>
            <div className="btn-btn">
                {
                    activeStep > 1 && <button onClick={handlePrev}>Prev</button>

                }
                {
                    activeStep === 3 ? (<button>submit</button>) : (<button onClick={handleNext}>Next</button>)
                }
            </div>
        </div>
    )
}

export default Stepper