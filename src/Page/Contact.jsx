import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
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
          email: '',
          message: '',
        };
    
        if (formData.name.trim() === '') {
          newErrors.name = 'Name is required';
          valid = false;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Invalid email address';
          valid = false;
        }
    
        if (formData.message.trim() === '') {
          newErrors.message = 'Message is required';
          valid = false;
        }
    
        setFormErrors(newErrors);
        return valid;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Perform the action you want when the form is successfully submitted
            alert("Submit sent ok");
        } else {
          console.log('Form validation failed');
        }
      };
    return (
        <div>
            <div className="hero-image-small hero-small-contact">
                <div className="container">
                    <div className="hero-text-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 m-auto text-center">
                                <h3><span className="sub-heading-1">Any quiery?</span>Contact Us</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-first">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="contact">
                                        <img src="assets/images/send-email-2.png" className="img-fluid" alt="" data-aos="flip-left" data-aos-delay="50" />
                                        <span className="lable">Email -</span>
                                        <p>namlk0310pro@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="contact">
                                        <img src="assets/images/mobile-phone-2.png" className="img-fluid" alt="" data-aos="flip-left" data-aos-delay="150" />
                                        <span className="lable">Call -</span>
                                        <p>+(84)0931 313 329</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="contact">
                                        <img src="assets/images/mood-happy.png" className="img-fluid" alt="" data-aos="flip-left" data-aos-delay="250" />
                                        <span className="lable">Skype -</span>
                                        <p>namlk0310pro@skype</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="contact">
                                        <img src="assets/images/flag.png" className="img-fluid" alt="" data-aos="flip-left" data-aos-delay="350" />
                                        <span className="lable">Location -</span>
                                        <p>62 Street 36, Van Phuc Urban Area, Thu Duc, Ho Chi Minh City, VIETNAM</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput1">Name</label>
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
                                    <label htmlFor="email">Email:</label>
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
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                    className='form-control'
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    ></textarea>
                                    <span className="error">{formErrors.message}</span>
                                </div>
                                <button type="submit" className="btn btn-prim-round">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.547210114064!2d106.70816247498296!3d10.84592138930711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529649850badb%3A0x617177104127c8ea!2sFPT%20AfterSchool%20-%20CS%20V%E1%BA%A1n%20Ph%C3%BAc!5e0!3m2!1svi!2s!4v1701477394950!5m2!1svi!2s" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </div>
    )
}

export default Contact
