// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from "react-icons/md";

import { IoMdCall } from 'react-icons/io';
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="pt-4 border-top-custom">
            <div className="container">
                <div className="row">
                    {/* Quick Links */}
                    <div className="col-md-6 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li><Link to="/aboutus" className="text-decoration-none">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-6 mb-3">
                        <h5><Link to="/contactus" className="text-decoration-none">Contact Us</Link></h5>
                        <ul className="list-unstyled">
                            <li><IoMdCall className="me-2" /> +91 9434035673</li>
                            <li className="mb-3">
                                <MdOutlineAlternateEmail className="me-2" />
                                <a
                                    href="mailto:contact@tirupatiiron.com"
                                    className="text-decoration-none"
                                >
                                    contact@tirupatiiron.com
                                </a>
                            </li>
                        </ul>
                        {/* <h5 className="mt-3">Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="me-2" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" className="me-2" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" className="me-2" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="text-center py-3 border-top border-secondary bg-warning">
                <p className="mb-0 text-black">&copy; {new Date().getFullYear()} TIRUPATI IRON. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
