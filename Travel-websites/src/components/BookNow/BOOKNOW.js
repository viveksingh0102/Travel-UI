import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import NavBar from "../NavBar/NavBar";

const BookNow = () => {
    const [submissionMessage, setSubmissionMessage] = useState('');
    const fireAlert = (event) => {
        event.preventDefault();
        const message = "Team will contact you within an hour....";

        Swal.fire({
            title: 'Message Sent',
            text: message,
            icon: 'success',
        });

    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            {/* Carousel */}
            <div className="container-fluid home">
                <div className="container-fluid">
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    className="d-block w-100"
                                    src="/img/b1.avif"
                                    alt="First slide"
                                    style={{ width: "100%", height: "450px" }}
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src="/img/b2.jpg"
                                    alt="Second slide"
                                    style={{ width: "100%", height: "450px" }}
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src="img/b3.jpg"
                                    alt="Third slide"
                                    style={{ width: "100%", height: "450px" }}
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
            {/* Form */}
            <div className="mt-3">
                <h4 className="text-center font-weight-bold">
                    <span style={{ borderBottom: '1px solid red', display: 'inline-block', paddingBottom: '2px' }}>Book your adventure</span>
                </h4>
            </div>


            <form className="container w-50 mt-3">
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">
                        <span style={{ color: "black" }}>Name</span>
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        style={{ borderColor: "red" }}
                        required
                    />
                </div>
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">
                        <span style={{ color: "black" }}>Whatsapp Number</span>
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="number"
                        className="form-control text-red"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Number"
                        style={{ borderColor: "red" }}
                        required
                    />
                </div>
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">
                        <span style={{ color: "black" }}>Email Address</span>
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        style={{ borderColor: "red" }}
                        required
                    />
                </div>
                <div className="form-group ">
                    <label htmlFor="exampleInputEmail1">
                        <span style={{ color: "black" }}>Enter Destination</span>
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Destination"
                        style={{ borderColor: "red" }}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        <span style={{ color: "black" }}>Message</span>
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Enter Message"
                        style={{ borderColor: "red" }}
                        required
                    ></textarea>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="" className="btn btn-danger"
                        onClick={fireAlert}>
                        SUBMIT
                    </button>
                </div>
            </form>

            <Footer />
        </>
    );
};

export default BookNow;
