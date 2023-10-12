import React from "react";
import Footer from "../Footer/Footer";
import "./Packages.css";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Home from "../Home/Home";

const Packages = () => {
    const iconStyle = { color: 'black' };

    return (
        <>
            <div className="package">
                <div className="container text-center">
                    <h4>HERE IS THE BEST OFFER</h4>
                </div>
                <div className="container-fluid">
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    className="d-block  img-fluid imm"
                                    src="/img/p1.jpg"
                                    alt="First slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block  img-fluid imm"
                                    src="/img/p2.avif"
                                    alt="Second slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block  img-fluid imm"
                                    src="img/p3.jpg"
                                    alt="Third slide"
                                />
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* package */}
            {/* <div className="container-fluid mt-4">
                <h1 className="font-weight-bold text-center">Most visited Places</h1>
            </div> */}

            <div className="container-fluid mt-4">
                <div className="row mb-4">
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top w-100"
                                src="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=740&t=st=1696431810~exp=1696432410~hmac=dc2043566de791e14ff217dc03af20a2e958574ecba87b04cad2be5666b9d9e1"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> Goa</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger   btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="https://img.freepik.com/premium-photo/thailand-temple_51195-539.jpg?w=740"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> THAILAND</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="https://img.freepik.com/free-photo/marina-bay-sand-building_1203-7125.jpg?w=740&t=st=1696432119~exp=1696432719~hmac=125ccd99f9e952377101d3859210537f04e82898930f737c32c23f0b9979a409"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> SINGAPUR</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top w-100"
                                src="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=740&t=st=1696431810~exp=1696432410~hmac=dc2043566de791e14ff217dc03af20a2e958574ecba87b04cad2be5666b9d9e1"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> Goa</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger   btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/pr.jpg"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> PARIS</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/newyork1.jpg"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> NEW YORK</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-4">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/ksh2.avif" alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> KASHMIR</h5>

                                {/* <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p> */}
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/newyork1.jpg"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> NEW YORK</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top w-100"
                                src="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=740&t=st=1696431810~exp=1696432410~hmac=dc2043566de791e14ff217dc03af20a2e958574ecba87b04cad2be5666b9d9e1"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> Goa</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger   btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="https://img.freepik.com/premium-photo/thailand-temple_51195-539.jpg?w=740"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> THAILAND</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="https://img.freepik.com/free-photo/marina-bay-sand-building_1203-7125.jpg?w=740&t=st=1696432119~exp=1696432719~hmac=125ccd99f9e952377101d3859210537f04e82898930f737c32c23f0b9979a409"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> SINGAPUR</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top w-100"
                                src="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=740&t=st=1696431810~exp=1696432410~hmac=dc2043566de791e14ff217dc03af20a2e958574ecba87b04cad2be5666b9d9e1"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> Goa</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger   btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/pr.jpg"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> PARIS</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/newyork1.jpg" alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> NEW YORK</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-4">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/ksh2.avif" alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> KASHMIR</h5>

                                {/* <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p> */}
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/newyork1.jpg" alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bol">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> NEW YORK</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="booknow" className="btn btn-danger  btn-sm">
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Packages;
