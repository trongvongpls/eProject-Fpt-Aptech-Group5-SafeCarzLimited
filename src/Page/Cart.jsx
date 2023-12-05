import React, { useState } from 'react'

function Cart({ cartItems,deleteCart }) {
// State to hold the input value
const [formData, setFormData] = useState({
    name: '',
    phone:'',
    address:'',
    email: '',
    purchase: '',
});
const [formErrors, setFormErrors] = useState({
    name: '',
    phone:'',
    address:'',
    email: '',
    purchase: '',
});
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
};
const validateForm = () => {
    let valid = true;
    const newErrors = {
        name: '',
        phone:'',
        address:'',
        email: '',
        purchase: '',
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (formData.phone.trim() === '') {
        newErrors.phone = 'Phone is required';
        valid = false;
    }
    if (formData.address.trim() === '') {
        newErrors.address = 'Address is required';
        valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    if (formData.purchase.trim() === '') {
      newErrors.purchase = 'Purchase is required';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
};
const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform the action you want when the form is successfully submitted
        alert("Order has been placed");
        window.location.reload();
    } else {
      console.log('Form validation failed');
    }
  };

  

  return (
    <div>
            <div className="section-larger">
                <div className="container">

                    <div className="insure-text bg-color-2 p-4">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-9 col-xs-9">
                                <h4 className="highlight"><strong className="text-yellow">Upto 80% Off*</strong><br /> on Comprehensive Car Insurance
                                </h4>
                                <p>Ensure the company's reputation and commitment to customers.</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3">
                                <div className="img-container-sml text-right">
                                    <img src="assets/images/about_step_1.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                  
                  <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <b>Personal Info</b>
                                    <input
                                    className='form-control'
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    />
                                    <span className="error">{formErrors.name}</span>
                               </div>
                               <div className="form-group">
                                    <b>Phone Number</b>
                                    <input
                                    className='form-control'
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    />
                                    <span className="error">{formErrors.phone}</span>
                              </div>
                              <div className="form-group">
                                    <b>Address</b>
                                    <input
                                    className='form-control'
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    />
                                    <span className="error">{formErrors.address}</span>
                                </div>
                                <div className="form-group">
                                    <b>Email:</b>
                                    <input
                                    className='form-control'
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                    <span className="error">{formErrors.email}</span>
                                </div>
                                <div className="form-group">
                                    <b>Purchase Date:</b>
                                    <input
                                    className='form-control'
                                    type="text"
                                    id="purchase"
                                    name="purchase"
                                    value={formData.purchase}
                                    onChange={handleChange}
                                    />
                                    <span className="error">{formErrors.purchase}</span>
                              </div>
                               <button type="reset" className="btn btn-ter-round">Reset</button>&nbsp;&nbsp;
                                <button type="submit" className="btn btn-prim-round">Submit</button>
                            </form>
                        </div>

                          <div className="col-lg-5 col-md-5 col-sm-12 offset-md-1 offset-lg-2">
                              <div className="plan">
                                  <ul>
                                      {
                                          cartItems.map((items, i) => (
                                              <li>
                                                  <h5>${items.price} <span>/ 1 Year</span></h5>
                                                  <p><strong>Name:</strong> {items.name} | Quantity: {items.quantity}</p>
                                                  <input type="Submit" value="remove"
                                                   onClick={() => deleteCart(items)} />
                                              </li>

                                          ))}
                                  </ul>
                              </div>

                           

                              {/* <div className="send-quotes bg-color-2">
                                <div className="quote-text">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span className="flaticon-email"></span>
                                                <p>Email</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="flaticon-mobile-phone"></span>
                                                <p>SMS</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="flaticon-whatsapp"></span>
                                                <p>WhatsApp</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                          </div>

                      </div>
                  
                </div>
            </div>

        </div>
  )
}

export default Cart