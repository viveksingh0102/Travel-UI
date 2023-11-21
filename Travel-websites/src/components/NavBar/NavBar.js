import React from "react";
import "./NavBar.css";
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-red" href="/landing">
                        <img src="/img/t3.png" alt="Logo" height="45" />
                        <span className="text1">TBAG</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ml-auto text-center">
                            <li className="nav-item ">
                                <a className="nav-link text-danger" href="/landing">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger" href="package">
                                    Packages
                                </a>
                            </li>


                            <li className="nav-item">
                                <a className="nav-link text-danger" href="contact">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger" href="/">
                                    LogOut
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
