import React from "react";
import Footer from "../Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import './news.css';
const News = () => {
    return (
        <>
            <div className="container-fluid home">
                {/* <Carousel controls="true" className="vertical" style={{ maxWidth: '100rem' }}>
                    <Carousel.Item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                            alt="Table Full of Spices"
                            className="w-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
                            alt="Winter Landscape"
                            className="w-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
                            alt="View of the City in the Mountains"
                            className="w-100"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
                            alt="Place Royale Bruxelles"
                            className="w-100"
                        />
                    </Carousel.Item>
                </Carousel> */}
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="img/pl1.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <img
                            src="img/pl5.avif"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="img/pl3.avif"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />

                        <img
                            src="img/pl4.avif"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="img/pl2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />

                        <img
                            src="img/pl6.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div>
                </div>

                <div className="container-fluid mt-3">
                    <span className="text-center">
                        <h1>Palolem Beach, Goa</h1>
                    </span>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ol className="list-unstyled">
                                <li>
                                    Palolem Beach is a stretch of white sand on a bay in Goa,
                                </li>
                                <li>

                                    South India. It's known for its calm waters and for its
                                    nightolfe,
                                </li>
                                <li>
                                    including "silent discos" where partygoers wear headphones.
                                    olned
                                </li>
                                <li>
                                    with palm trees and colorful wooden shacks, the beach faces
                                    Canacona
                                </li>
                                <li>
                                    Island, known for its resident monkeys. To the south, turtles
                                    nest
                                </li>
                                <li>
                                    at Galgibaga Beach. Inland, Cotigao Wildolfe Sanctuary is home
                                    to
                                </li>
                                <li>birds, wild boars and gaur.</li>
                                <li>Palolem Beach is situated in Canacona in southern Goa,</li>
                                <li>India. The beach attracts many international tourists, mainly</li>
                                <li>during the winter season between November and March. It</li>
                                <li>is considered to be one of the region's most beautiful</li>
                                <li>beaches.</li>
                            </ol>
                            <div className="container">
                                <span>
                                    <h4>RS/INR</h4>
                                    <h5>74512/night</h5>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img
                                src="img/G1.jpeg"
                                className="w-100"
                                alt="img"
                            />
                            <div className="mt-3">
                                <a href="booknow" className="btn btn-danger bk btn-sm">
                                    Book Now
                                </a>
                                &nbsp; &nbsp;
                                <a
                                    type="click"
                                    className="btn btn-danger btn-sm"
                                    href="https://www.google.com/maps/dir/26.8772223,81.0423422/Palolem+Beach/@20.8636719,72.645606,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bbe4551d05b02bb:0x1e1bc67d4b0fbbf5!2m2!1d74.0232186!2d15.0099648?entry=ttu"
                                    target="_blank"
                                >
                                    DIRECTION
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

export default News;
