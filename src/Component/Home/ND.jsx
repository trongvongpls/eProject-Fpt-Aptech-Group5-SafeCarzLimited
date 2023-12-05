import React from 'react'

function Home() {
    return (
        <div>
            <div className="hero-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-text">
                                <h5>Renew car insurance in 2 minutes</h5>
                                <h1 className="text-pink">Safe Carz Limited<span className="text-black">.SAFETY FIRST</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">

                                        <div className="slider-text-bg">

                                            <div className="title" data-swiper-parallax="900">
                                                <img src="assets/images/hero_car_2.png" className="img-fluid" alt="" />
                                            </div>

                                            <div className="text" data-swiper-parallax="1500">
                                                <img src="assets/images/hero_car_1.png" className="img-fluid" alt="" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="swiper-slide">

                                        <div className="slider-text-bg">

                                            <div className="title" data-swiper-parallax="600">
                                                <img src="assets/images/hero_bike_2.png" className="img-fluid" alt="" />
                                            </div>

                                            <div className="text" data-swiper-parallax="1000">
                                                <img src="assets/images/hero_bike_1.png" className="img-fluid" alt="" />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className="swiper-pagination swiper-pagination-h"></div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-12 offset-lg-1 offset-md-1">
                            <div className="form-head">
                                <h6>Your vehicle is safe with us</h6>
                            </div>

                            <div className="form-home">
                                <form>
                                    <a href="/car">
                                        <button type="button" className="btn btn-prim-round mt-4" onclick="window.location;">Plan for Car</button>
                                    </a>
                                    <a href="/bike">
                                        <button type="button" className="btn btn-prim-round mt-4" onclick="window.location;">Plan for Bike</button>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="section-larger bg-img-left-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="numbers">
                                <h2>96%
                                    <span>5 Star Ratings</span>
                                </h2>
                                <p>The company itself is a very successful company. </p>
                                <div className="number-icons">
                                    <img src="assets/images/number_icon_1.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="numbers">
                                <h2>4.5cr
                                    <span>Happy Clients</span>
                                </h2>
                                <p>The company itself is a very successful company.</p>
                                <div className="number-icons">
                                    <img src="assets/images/number_icon_2.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="numbers">
                                <h2>99%
                                    <span>Quality Products</span>
                                </h2>
                                <p>The company itself is a very successful company.</p>
                                <div className="number-icons">
                                    <img src="assets/images/number_icon_3.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section-larger bg-color">
                <div className="container">
                    <div className="row vertical-cntr">
                        <div className="col-lg-5">
                            <div className="point-list">
                                <ul>
                                    <li>
                                        <div className="list-icon">
                                            <span className="flaticon-credit"></span>
                                        </div>
                                        <div className="list-text">
                                            <h6>Incredibly Low Prices</h6>
                                            <p>Get the best price, every single time. for your Car and Motorbike</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon">
                                            <span className="flaticon-car-insurance-2"></span>
                                        </div>
                                        <div className="list-text">
                                            <h6>Terribly Convenient</h6>
                                            <p>Get the best price, every single time. for your Car and Motorbike</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-icon">
                                            <span className="flaticon-document"></span>
                                        </div>
                                        <div className="list-text">
                                            <h6>Zero-Hassle Claims</h6>
                                            <p>Get the best price, every single time. for your Car and Motorbike</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-1">
                            <div className="img-container">
                                <img src="assets/images/home_img_1.png" className="img-fluid mt" alt="" />
                            </div>
                            <div className="text-container">
                                <h2><span className="sub-heading-1">Special support & caring</span>Insurance Company</h2>
                                <p>The company itself is a very successful one.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-larger bg-img-left">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">

                                    <div className="col-icon-bg-cntr">
                                        <div className="icon-cntr"><span className="flaticon-fender-bender"></span></div>
                                        <div className="col-text-cntr">
                                            <h6>Accidents</h6>
                                            <p>Protect your car from disasters caused by accidents.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">

                                    <div className="col-icon-bg-cntr">
                                        <div className="icon-cntr"><span className="flaticon-fire-1"></span></div>
                                        <div className="col-text-cntr">
                                            <h6>Fire</h6>
                                            <p>Protect your vehicle from natural disasters.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="col-icon-bg-cntr">
                                        <div className="icon-cntr"><span className="flaticon-theft"></span></div>
                                        <div className="col-text-cntr">
                                            <h6>Theft</h6>
                                            <p>Insurance protects the vehicle against theft.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="col-icon-bg-cntr">
                                        <div className="icon-cntr"><span className="flaticon-flood"></span></div>
                                        <div className="col-text-cntr">
                                            <h6>Calamities</h6>
                                            <p>Protect your car from disasters.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 text-container-right">

                            <div className="container-text">
                                <h2>What's Covered Under Our Insurance?</h2>
                                <span className="sub-heading-2">Specific methods and techniques have changed considerably over the years</span>
                                <p>The company itself is a very successful one!</p>
                                <button type="Submit" className="btn btn-prim-round mt-lg-5 mt-md-3 mt-sm-3">Read more</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 vertical-cntr">
                            <div className="feedback">
                                <img src="assets/images/feedback_bg.png" className="img-fluid" alt="" />
                                <span className="sub-heading-1">Customer’s Feedback</span>
                                <h2>Words of Appreciation</h2>

                                <div className="img-container">
                                    <img src="assets/images/feedback.png" className="img-fluid" alt="" />
                                </div>
                                <p>The company itself is a very successful one. Flexible and diverse office!</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 offset-lg-1 offset-md-1">
                            <div className="feedback-list">
                                <div className="client-feedback-left owl-carousel owl-theme">
                                    <div className="item-1">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="feedback-content-left">
                                                    <div className="feedback-pic-left">
                                                        <img src="assets/images/pic_1.jpg" alt="" />
                                                    </div>
                                                    <div className="feedback-text-left">
                                                        <h6>BMW Owner, NYC
                                                            <span>Mark Smith</span>
                                                        </h6>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea pariatur quae quis reprehenderit quisquam, iusto laborum fuga!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item-1">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="feedback-content-left">
                                                    <div className="feedback-pic-left">
                                                        <img src="assets/images/pic_1.jpg" alt="" />
                                                    </div>
                                                    <div className="feedback-text-left">
                                                        <h6>BMW Owner, NYC
                                                            <span>Mark Smith</span>
                                                        </h6>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea pariatur quae quis reprehenderit quisquam, iusto laborum fuga!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="item-1">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="feedback-content-left">
                                                    <div className="feedback-pic-left">
                                                        <img src="assets/images/pic_1.jpg" alt="" />
                                                    </div>
                                                    <div className="feedback-text-left">
                                                        <h6>BMW Owner, NYC
                                                            <span>Mark Smith</span>
                                                        </h6>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ea pariatur quae quis reprehenderit quisquam, iusto laborum fuga!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-larger bg-img-right">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center">
                                <span className="sub-heading-1">200+ Companies</span>
                                <h2>Connected with us</h2>
                                <p>The company itself is a very successful company!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 client"><img src="assets/images/client_1.jpg" className="img-fluid" alt="" /></div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 client"><img src="assets/images/client_2.jpg" className="img-fluid" alt="" /></div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 client"><img src="assets/images/client_1.jpg" className="img-fluid" alt="" /></div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 client"><img src="assets/images/client_2.jpg" className="img-fluid" alt="" /></div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 client"><img src="assets/images/client_2.jpg" className="img-fluid" alt="" /></div>
                        <div className="col-lg-2 col-md-4 col-sm-4 col-6 client"><img src="assets/images/client_1.jpg" className="img-fluid" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="section-large bg-color-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center">
                                <span className="sub-heading-1">We Achived</span>
                                <h2>Awards & Recognition</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="col-img-cntr">
                                <div className="img-cntr-claim">
                                    <div className="img-container-sml">
                                        <img src="assets/images/awward_1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-text-claim">
                                    <h6>Best Company</h6>
                                    <p>One of the leading companies in Vietnam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="col-img-cntr">
                                <div className="img-cntr-claim">
                                    <div className="img-container-sml">
                                        <img src="assets/images/awward_2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-text-claim">
                                    <h6>Great Support</h6>
                                    <p>One of the leading companies in Vietnam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="col-img-cntr">
                                <div className="img-cntr-claim">
                                    <div className="img-container-sml">
                                        <img src="assets/images/awward_1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-text-claim">
                                    <h6>Growing Business</h6>
                                    <p>One of the leading companies in Vietnam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="col-img-cntr">
                                <div className="img-cntr-claim">
                                    <div className="img-container-sml">
                                        <img src="assets/images/awward_2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-text-claim">
                                    <h6>Excellent Service</h6>
                                    <p>One of the leading companies in Vietnam.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section-large bg-img-left-2">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-12 m-auto">
                                <div className="img-container">
                                    <img src="assets/images/bg_newsletter.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12 m-auto">
                                <div className="title-center pb-4">
                                    <h4>Subscribe for Newsletter</h4>
                                    <p>The company itself is a very successful one. Top in Vietnam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-7 col-sm-12 m-auto p-0">
                                <div className="form">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" id="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-link" type="button">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
