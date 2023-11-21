import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faGoogle,
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer/Footer.js";
import NavBar from "../NavBar/NavBar.js";


const Home = () => {
    const iconStyle = { color: 'black' };
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="container-fluid home">
                {/* text home */}

                <div className="text-center">
                    <h2 className="font-weight-bold title">You can explore world with us...</h2>
                </div>
                <div id="carouselExampleControls" className="carousel slide mt-3" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block imm" src="img/h1.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block imm" src="img/h2.avif" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block imm" src="img/h3.avif" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* <div className="row">
                    <div className="col-sm-12">
                        <img
                            src="https://picsum.photos/id/1056/1424/562"
                            alt="test"
                            className="img-fluid"
                        />
                        <div className="heroContent display-flex">
                            <p className="Hero">
                                Our Packages
                                <br />
                                <h1 className="font-weight-bol tex text-danger">
                                    Search your Holiday
                                </h1>
                            </p>
                            <div className="row">
                                <div className="col-md-4 mt-4">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control border border-dark"
                                            placeholder="Enter destination"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 mt-4">
                                    <div className="form-group">
                                        <input
                                            type="date"
                                            className="form-control border border-dark"
                                            placeholder="Select date"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 mt-4">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input
                                                type="number"
                                                className="form-control border border-dark"
                                                placeholder="Max Price"
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text border border-dark">
                                                    COST
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm mb-2">
                                    <div className="">
                                        <button type="button" className="btn btn-danger btn-sm">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* visited place */}

            <div className="container-fluid mt-3">
                <h2 className="font-weight-bold text-center">MOST VISITED PLACES</h2>
            </div>

            <div className="container-fluid mt-4">
                <div className="row mb-4">
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top w-100"
                                src="https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=740&t=st=1696431810~exp=1696432410~hmac=dc2043566de791e14ff217dc03af20a2e958574ecba87b04cad2be5666b9d9e1"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title nn"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> GOA</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="news" className="btn btn-danger   btn-sm">
                                    More Details
                                </a>

                                <a href="booknow" className="btn btn-danger bk btn-sm">
                                    Book Now
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="https://img.freepik.com/premium-photo/thailand-temple_51195-539.jpg?w=740"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title nn">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> THAILAND</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="news" className="btn btn-danger  btn-sm">
                                    More Details
                                </a>
                                <a href="booknow" className="btn btn-danger bk btn-sm">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="https://img.freepik.com/free-photo/marina-bay-sand-building_1203-7125.jpg?w=740&t=st=1696432119~exp=1696432719~hmac=125ccd99f9e952377101d3859210537f04e82898930f737c32c23f0b9979a409"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title nn">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> SINGAPUR</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="news" className="btn btn-danger  btn-sm">
                                    More Details
                                </a>
                                <a href="booknow" className="btn btn-danger bk btn-sm">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mb-4">
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/pr.jpg"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title  nn">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> PARIS</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="news" className="btn btn-danger  btn-sm">
                                    More Details
                                </a>
                                <a href="booknow" className="btn btn-danger bk btn-sm">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/newyork1.jpg"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title nn">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> NEW YORK</h5>

                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p>
                                <a href="news" className="btn btn-danger  btn-sm">
                                    More Details
                                </a>
                                <a href="booknow" className="btn btn-danger bk btn-sm">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mt-3">
                        <div className="card" style={{ border: "2px solid red" }}>
                            <img
                                className="card-img-top"
                                src="img/ksh2.avif"
                                alt="Card image"
                            />
                            <div className="card-body">
                                <h5 className="card-title nn">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> KASHMIR</h5>

                                {/* <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing and

                                </p> */}
                                <a href="news" className="btn btn-danger  btn-sm">
                                    More Details
                                </a>
                                <a href="booknow" className="btn btn-danger bk btn-sm">
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className="">
                <Footer />

            </div>
        </>
    );
};
export default Home;
