import React from 'react'
import Cardata from '../Json/Planbike.json'
function Motorbike({handleAdd}) {
    return (
        <div>
            <div className="hero-image-small hero-small-bike">
                <div className="container">
                    <div className="hero-text-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 m-auto text-center">
                                <h3><span className="sub-heading-1">Get Instantly</span>Motorbike Insurance</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-larger">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="title-center">
                                <span className="sub-heading-1">Three Atractive</span>
                                <h2>Insurance Packages</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {Cardata.map((items,i)=>(
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="package">
                                    <h5>{items.name}</h5>
                                    <div className="package-list">
                                        <div className="duration"><h4>${items.price} <span>yearly</span></h4></div>
                                        <ul>
                                        {items.desc1 ? <li>{items.desc1} </li> : ""}
                                            {items.desc2 ? <li>{items.desc2} </li> : ""}
                                            {items.desc3 ? <li>{items.desc3} </li> : ""}
                                            {items.desc4 ? <li>{items.desc4} </li> : ""}
                                            {items.desc5 ? <li>{items.desc5} </li> : ""}
                                        </ul>
                                    </div>
                                    <button type="Submit" className="btn btn-prim mt-lg-4 mt-md-3 mt-sm-3" onClick={() => handleAdd(items)}>Purchase Now</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="section-first">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="title-center p-0">
                                <span className="sub-heading-1">In Simple Steps</span>
                                <h2>How Motorbike insurance works?</h2>
                                <p>Motorbike insurance is a contract between Motorbike owner and a general insurance company, in which the general insurance company promises to protect the Motorbike owner from financial losses that may result from an accident.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="img-container">
                                <img src="assets/images/bike_insurance_1.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-2 text-container-right">
                            <div className="container-text">
                                <div className="bike-works">
                                    <span>01</span>
                                    <div className="works-text">
                                        <h6>Select your Motorbike<br /> (e.g. Honda Future 125cc)</h6>
                                        <p>When choosing a motorbike to buy insurance, you should consider the type of motorbike, its market value as well as the level of use of the motorbike and the desired protection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row section">
                        <div className="col-lg-5 order-lg-2 col-md-6 col-sm-12 offset-lg-2">
                            <div className="img-container">
                                <img src="assets/images/bike_insurance_2.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-12 text-container-right">
                            <div className="container-text">
                                <div className="bike-works">
                                    <span>02</span>
                                    <div className="works-text">
                                        <h6>Enter the purchase date<br />of the Motorbike (e.g. 2020)</h6>
                                        <p>You can check the purchase documents, vehicle purchase invoice, or vehicle registration documents to see the specific purchase date. This information is important when choosing insurance to ensure that you have adequate coverage from the date of purchase.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="img-container">
                                <img src="assets/images/bike_insurance_3.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-2 text-container-right">
                            <div className="container-text">
                                <div className="bike-works">
                                    <span>03</span>
                                    <div className="works-text">
                                        <h6>Select if your existing Motorbike insurance has expired or not</h6>
                                        <p>To see if your current motorbike insurance has expired, you need to check your current insurance policy or contact your insurance company.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-lg-5 order-lg-2 col-md-6 col-sm-12 offset-lg-2">
                            <div className="img-container">
                                <img src="assets/images/bike_insurance_4.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 col-sm-12 text-container-right">
                            <div className="container-text">
                                <div className="bike-works">
                                    <span>04</span>
                                    <div className="works-text">
                                        <h6>Click on 'View Prices' and you can view different plans or your Motorbike</h6>
                                        <p>Factors such as vehicle type, driving history and level of coverage chosen will affect insurance prices!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-color-grad">
                <div className="section-large reason-sec-back">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-center">
                                    <span className="sub-heading-1">6 Reasons to</span>
                                    <h2>Choose our Insurance</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="col-lg-12 reason-sec bg-color">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="col-icon-left-sml">
                                <div className="icon-left-sml"><img src="assets/images/icon_tick_reasons.png" alt="" /></div>
                                <div className="text-left-sml">
                                    <h6>One of the best</h6>
                                    <p>You need to carefully choose the right insurance package for your vehicle.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="col-icon-left-sml">
                                <div className="icon-left-sml"><img src="assets/images/icon_tick_reasons.png" alt="" /></div>
                                <div className="text-left-sml">
                                    <h6>24/7 Support</h6>
                                    <p>The support team will be able to provide detailed information and help you when needed.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="col-icon-left-sml">
                                <div className="icon-left-sml"><img src="assets/images/icon_tick_reasons.png" alt="" /></div>
                                <div className="text-left-sml">
                                    <h6>Quick Settlement</h6>
                                    <p>This requires flexibility and high efficiency in the insurance company, so that the process of confirmation, damage assessment and payment of compensation is carried out quickly and transparently.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="col-icon-left-sml">
                                <div className="icon-left-sml"><img src="assets/images/icon_tick_reasons.png" alt="" /></div>
                                <div className="text-left-sml">
                                    <h6>Incredibly Low Prices</h6>
                                    <p>Sometimes, the price may be due to narrow coverage or the exclusion of some serious risks. Make sure you understand and choose the plan that best suits your needs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="col-icon-left-sml">
                                <div className="icon-left-sml"><img src="assets/images/icon_tick_reasons.png" alt="" /></div>
                                <div className="text-left-sml">
                                    <h6>Low Prices</h6>
                                    <p>Insurance prices are also influenced by many different factors, and comparing plans with their fees and terms is the best way to choose the right insurance plan for your needs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 last">
                            <div className="col-icon-left-sml">
                                <div className="icon-left-sml"><img src="assets/images/icon_tick_reasons.png" alt="" /></div>
                                <div className="text-left-sml">
                                    <h6>Third Party Insurance</h6>
                                    <p>Third-party car insurance is a type of insurance required by law to protect the driver and third parties in case of a traffic accident.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="section-larger">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-container-left">

                            <div className="container-text">
                                <h2>Few easy steps to keep safe your Motorbike!</h2>
                                <span className="sub-heading-2">Motorbike insurance is based on the simple concept of risk sharing.</span>
                                <p>Motorcycle insurance is based on the simple concept of risk sharing which involves the vehicle owner paying a small premium to cover the occurrence of major risks, such as accidents or property loss.</p>
                                <p>By sharing risks within the driver community, car owners can feel more secure about protecting their property and safety.</p>
                            </div>

                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-12 offset-lg-1 offset-md-1">
                            <div className="img-container">
                                <img src="assets/images/about_img_1.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section-larger bg-img-right-half">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div className="text-container">
                                <h2><span className="sub-heading-1">Why?</span>It is Important</h2>
                                <div className="highlight-top">
                                    <h5 className="p-0">Car insurance is important because it provides property protection and safety for the car owner in the event of an accident, fire, or theft.</h5>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Motorbike
