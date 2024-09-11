import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import './footer.css';

function Footer() {
    return (
        <footer className="py-4 border-top-custom">
            <div className="container">
                <div className="row">
                    {/* Quick Links */}
                    <div className="col-md-6 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-decoration-none">Home</a></li>
                            <li><a href="/products" className="text-decoration-none">Products</a></li>
                            <li><a href="/aboutus" className="text-decoration-none">About Us</a></li>
                            <li><a href="/contactus" className="text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-6 mb-3">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><IoMdCall className="me-2" /> +91 9876543210</li>
                            <li><FaEnvelope className="me-2" /> contact@tirupatiiron.com</li>
                        </ul>
                        <h5 className="mt-3">Follow Us</h5>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-3 border-top border-secondary">
                <p className="mb-0">&copy; {new Date().getFullYear()} TIRUPATI IRON. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
