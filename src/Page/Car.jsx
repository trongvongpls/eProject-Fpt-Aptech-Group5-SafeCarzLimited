import React from 'react'
import Cardata from '../Json/Plancar.json'

function Car({handleAdd}) {
    return (
        <div>
            <div className="hero-image-small hero-small-car">
                <div className="container">
                    <div className="hero-text-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 m-auto text-center">
                                <h3><span className="sub-heading-1">Get Instantly</span> Car Insurance</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="section-first">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 text-container-left">

                            <div className="container-text">
                                <h2>We promise to <br />pay for the car repairs</h2>
                                <p>Car insurance is a contract between a car owner and a general isnurance company where in the latter promises to protect the car owner from financial losses which may occur dure to an unfortunate event involving his/her car.</p>
                                <span className="sub-heading-2">Car insurance is based on the simple concept of risk sharing.</span>
                                <p>To continue availing the benefits of these policies, auto insurance renewals must be processed on time by policyholders.</p>

                            </div>

                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="img-container">
                                <img src="assets/images/about_img_1.png" className="img-fluid" alt="" />
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
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="title-center">
                                <span className="sub-heading-1">Buy/Renew</span>
                                <h2>Insurance Online</h2>
                                <p>Online insurance is an insurance service that consumers can purchase and manage online through insurers' websites or mobile applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-8 m-auto">
                            <div className="title-center">
                                <h4><strong>How our car insurance works?</strong></h4>
                                <p>Auto insurance works by the car owner paying a monthly or annual fee to the insurance company. In case the car has an accident or fire, the insurance company will pay the amount of loss agreed in the insurance contract. For mandatory auto insurance, if the vehicle user causes damage to people or property of a third party, the insurance company will pay for legal losses and property liability according to regulations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 steps">

                            <div className="img-container-step">
                                <img src="assets/images/about_step_1.png" className="img-fluid" alt="" />
                            </div>
                            <div className="step-head vertical-cntr">
                                <div className="step-count"><h1>1</h1></div>
                                <h6>Start with entering your car number or selecting your car.</h6>
                            </div>
                            <div className="step-text">
                                <p>Choose the ones that fit the coverage you need</p>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 steps">

                            <div className="img-container-step">
                                <img src="assets/images/about_step_2.png" className="img-fluid" alt="" />
                            </div>
                            <div className="step-head vertical-cntr">
                                <div className="step-count"><h1>2</h1></div>
                                <h6>Just answer a few simple questions about your car.</h6>
                            </div>
                            <div className="step-text">
                                <p>We will have the necessary information so you can choose the necessary insurance</p>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 steps">

                            <div className="img-container-step">
                                <img src="assets/images/about_step_3.png" className="img-fluid" alt="" />
                            </div>
                            <div className="step-head vertical-cntr">
                                <div className="step-count"><h1>3</h1></div>
                                <h6>Amazing online car insurance plans &amp; prices tailor-made for you.</h6>
                            </div>
                            <div className="step-text">
                                <p>Online auto insurance packages often include different selected drugs such as: military arrest insurance, hazard insurance, theft/vandalism insurance and personal accident insurance.</p>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 steps">

                            <div className="img-container-step">
                                <img src="assets/images/about_step_4.png" className="img-fluid" alt="" />
                            </div>
                            <div className="step-head vertical-cntr">
                                <div className="step-count"><h1>4</h1></div>
                                <h6>Choose a price, make payment &amp; the policy will be in your inbox in seconds.</h6>
                            </div>
                            <div className="step-text">
                                <p>You also need to consider how to pay, whether you can pay monthly or in one lump sum, as well as different payment methods.</p>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
            <div className="section-larger bg-color-10">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="img-container">
                                <img src="assets/images/home_img_1.png" className="img-fluid" alt="" />
                            </div>
                            <div className="text-container">
                                <h2><span className="sub-heading-1">6 Factors Affect</span>Insurance Cost</h2>
                                <p>The cost of car insurance depends on many factors such as vehicle type, driving history, geographical area, level of insurance chosen and other personal conditions of the user.</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 factors">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="point-list">
                                        <ul>
                                            <li>
                                                <div className="list-icon">
                                                    <span className="flaticon-credit"></span>
                                                </div>
                                                <div className="list-text">
                                                    <h6>Value of your Car</h6>
                                                    <p>Get the best price, every single time. for your Car and Motorbike</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list-icon">
                                                    <span className="flaticon-car-insurance-2"></span>
                                                </div>
                                                <div className="list-text">
                                                    <h6>Type of Car Insurance</h6>
                                                    <p>Get the best price, every single time. for your Car and Motorbike</p>
                                                </div>
                                            </li>
                                            <li className="last">
                                                <div className="list-icon">
                                                    <span className="flaticon-document"></span>
                                                </div>
                                                <div className="list-text">
                                                    <h6>Coverage</h6>
                                                    <p>Get the best price, every single time. for your Car and Motorbike</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="point-list">
                                        <ul>
                                            <li>
                                                <div className="list-icon">
                                                    <span className="flaticon-credit"></span>
                                                </div>
                                                <div className="list-text">
                                                    <h6>Car’s Age</h6>
                                                    <p>Get the best price, every single time. for your Car and Motorbike</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list-icon">
                                                    <span className="flaticon-car-insurance-2"></span>
                                                </div>
                                                <div className="list-text">
                                                    <h6>Extra Features</h6>
                                                    <p>Get the best price, every single time. for your Car and Motorbike</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list-icon">
                                                    <span className="flaticon-document"></span>
                                                </div>
                                                <div className="list-text">
                                                    <h6>Your Claim History</h6>
                                                    <p>Get the best price, every single time. for your Car and Motorbike</p>
                                                </div>
                                            </li>
                                        </ul>
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

export default Car
