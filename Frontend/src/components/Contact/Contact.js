import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./contact.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';
import NavBar from "../NavBar/NavBar";

const Contact = () => {
    const [submissionMessage, setSubmissionMessage] = useState('');
    const fireAlert = (event) => {
        event.preventDefault();
        const message = "Team will contact you soon....";

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

            <div className="container home mt-5">
                <div className=" mt-5">
                    <img src="img/map.jpg" alt="" className=" text-center imm" />
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <form className="container mt-5" onSubmit={fireAlert}>
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
                                ></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-danger round">
                                    Send Message
                                </button>
                            </div>{" "}
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="details mt-3">
                            <h3 className="text-center ddd">
                                <span
                                    style={{
                                        borderBottom: "1px solid red",
                                        display: "inline-block",
                                        paddingBottom: "1px",
                                    }}
                                >
                                    Contact Details
                                </span>
                            </h3>
                            <div className="">
                                <p className="det">You can also reach us by below information</p>
                            </div>
                            <div className="container mt-3">
                                <h5 className="">Website :</h5>
                                <p className="pp">www.travelbag.com</p>
                                <h5 className="">Email :</h5>
                                <p className="pp">travelbag@gmail.com</p>
                                <h5 className="">Phone/Whatsapp :</h5>
                                <p className="pp">+915458796474 / +915478896521</p>
                                <h5 className="">Address :</h5>
                                <p className="pp">
                                    Lucknow 226028 (Uttar Pradesh)
                                </p>
                                <h5 className="">FaceBook :</h5>
                                <p className="pp">@travelbag</p>
                                {/* <h5 className="">Email</h5>
                                <p className="pp">travel@gmail.com</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />{" "}
        </>
    );
};

export default Contact;
