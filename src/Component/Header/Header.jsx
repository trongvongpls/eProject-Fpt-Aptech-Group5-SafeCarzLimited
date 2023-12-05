import React from 'react'
import { Link } from 'react-router-dom'
function Header({ number }) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container">
                    <div className="navbar-light bg-dark">
                        <a className="navbar-brand" href="/">
                            <img src="assets/images/lg1.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown_1" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Plan
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdown">
                                        <Link to={'/car_claim'} className="dropdown-item">Car Claim</Link>
                                        <Link to={'/bike_claim'} className="dropdown-item">Motorbike Claim</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown_1" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdown">
                                        <Link to={'/car'} className="dropdown-item">Car</Link>
                                        <Link to={'/bike'} className="dropdown-item">Motorbike</Link>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/about'} className="nav-link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/contact'} className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <Link to='/cart' className="btn-link my-2 my-sm-0 ml-15">({number})Cart</Link>


                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
