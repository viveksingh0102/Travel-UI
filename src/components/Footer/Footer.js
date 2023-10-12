import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faGoogle,
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import 'font-awesome/css/font-awesome.min.css';


const Footer = () => {
    const iconStyle = { color: 'red' };

    return (
        <>
            <div className="my-5">
                <footer
                    className="text-center text-lg-start text-dark"
                    style={{ backgroundColor: "#ECEFF1" }}
                >
                    <section
                        className="d-flex justify-content-between p-4 text-white"
                        style={{ backgroundColor: "#21D192" }}
                    >
                        <div className="me-5">
                            <span className="get">
                                Get connected with us on social networks:
                            </span>
                        </div>
                        <div>
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
                            </a>
                            &nbsp;
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
                            </a>
                            &nbsp;
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faGoogle} style={iconStyle} />
                            </a>
                            &nbsp;
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
                            </a>
                            &nbsp;
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
                            </a>
                            &nbsp;
                            <a href="#" className="text-white me-4">
                                <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                            </a>
                        </div>
                    </section>
                    <section>
                        <div className="container-fluid text-center text-md-start mt-3">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* <h6 className="text-uppercase fw-bold">Our Products</h6> */}
                                    {/* <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{
                                            width: "65px",
                                            backgroundColor: "red",
                                            height: "1px",
                                        }}
                                    /> */}
                                    {/* <p>
                                        Hotel Booking
                                    </p>
                                    <p>
                                        Air Ticket
                                    </p> */}
                                    {/* <p>
                                        Train Booking
                                    </p>
                                    <p>
                                        Bus Booking
                                    </p> */}
                                    <a className="navbar-brand text-red" href="/">
                                        <img src="/img/t3.png" alt="Logo" height="210" />
                                        <span className="text">TBAG</span>
                                    </a>
                                </div>
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Our Services</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{
                                            width: "65px",
                                            backgroundColor: "red",
                                            height: "1px",
                                        }}
                                    />
                                    <p>
                                        Hotel Booking
                                    </p>
                                    <p>
                                        Air Ticket
                                    </p>
                                    <p>
                                        Train Booking
                                    </p>
                                    <p>
                                        Bus Booking
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{
                                            width: "65px",
                                            backgroundColor: "red",
                                            height: "1px",
                                        }}
                                    />
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Your Account
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Offer
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Shipping Rates
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-dark">
                                            Help
                                        </a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{
                                            width: "50px",
                                            backgroundColor: "red",
                                            height: "1px",
                                        }}
                                    />
                                    <p>
                                        <i className="fa fa-home mr-3"></i> Lucknow (Uttar Pradesh)
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope mr-3"></i>travelbag@gmail.com
                                    </p>
                                    <p>
                                        <i className="fa fa-phone mr-3"></i> +915458796474
                                    </p>
                                    <p>
                                        <i className="fa fa-print mr-3"></i> +915478896521
                                    </p>

                                </div>
                            </div>
                        </div>
                    </section>
                    <div
                        className="text-center p-3 mt-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2023 Copyright:
                        <a className="text-dark" href="https://travelbag.com/">
                            travelbag.com
                        </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
