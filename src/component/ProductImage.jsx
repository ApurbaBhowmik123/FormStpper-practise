import React from 'react';

function ProductImage({ productdescription, productimage, formData, setFormData }) {

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setFormData({ ...formData, productimage: [reader.result] });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <p>Product-Image</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input type="file" onChange={handleImage} />
                <textarea placeholder='write something' name="productdescription" value={productdescription} onChange={handleChange}></textarea>

            </div>
            {
                productimage && (<img src={productimage} alt="image" style={{ width: '100px', height: '100px' }} />)
            }

        </div>
    );
}

export default ProductImage;
