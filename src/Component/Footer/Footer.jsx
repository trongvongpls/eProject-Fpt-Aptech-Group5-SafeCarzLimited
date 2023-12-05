import React from 'react'

function Footer() {
    return (
        <div>
            <div className="section-padding-none">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 footer-sec">
                                <h5>Company</h5>
                                <ul>
                                    <li><a href="about">About Us</a></li>
                                    <li><a href="#">Board Of Directors</a></li>
                                    <li><a href="#">Articles</a></li>
                                    <li><a href="form">Insurance</a></li>
                                    <li><a href="car_claim">Claims</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 footer-sec">
                                <h5>General</h5>
                                <ul>
                                    <li><a href="#">Insurance Sector In Country</a></li>
                                    <li><a href="/">Types Of Insurance</a></li>
                                    <li><a href="#">Motor Vehicles Act 2020</a></li>
                                    <li><a href="#">Vehicle Registration</a></li>
                                    <li><a href="#">About Your Vehicle Number</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 footer-sec">
                                <h5>Insurance</h5>
                                <ul>
                                    <li><a href="car">Car Insurance</a></li>
                                    <li><a href="bike">Bike Insurance</a></li>
                                    <li><a href="car_claim">Car Insurance Claim</a></li>
                                    <li><a href="bike_claim">Bike Insurance Claim</a></li>
                                    <li><a href="#">Add-on Covers</a></li>
                                    <li><a href="#">Car Insurance Comparison</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 footer-sec">
                                <h5>Insurance Company Safe Carz Limited.</h5>
                                <p className="adres">62 Street 36, Van Phuc Urban Area, Thu Duc, Ho Chi Minh City, VIETNAM</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-9 col-md-6">
                                    <p>Copyright © 2021. All rights reserved by FPT Aptech.</p>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-6">
                                    <div className="copyright-social">
                                        <ul>
                                            <li><a href="#"><img src="assets/images/icon_fb.png" className="img-fluid" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon_tw.png" className="img-fluid" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon_li.png" className="img-fluid" alt="" /></a></li>
                                            <li><a href="#"><img src="assets/images/icon_yt.png" className="img-fluid" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
