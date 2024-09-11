import Footer from "../include/Footer";
import Navbar from "../include/Navbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa';

function ContactUs() {
    return (
        <>
            <Navbar />
            <div className="container my-4">
                <div className="row">
                    {/* Left side - Google Map */}
                    <div className="col-md-6">
                        <h3>Our Location</h3>
                        <div className="map-container" style={{ height: '400px' }}>
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4302.465252973626!2d88.13835742589531!3d22.082094239051088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f7b29ac833dd%3A0x1bd3f1891ce48d2a!2sTirupati%20Iron!5e0!3m2!1sen!2sin!4v1726057191936!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right side - Contact Details */}
                    <div className="col-md-6">
                        <h3>Contact Us</h3>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <FaMapMarkerAlt className="me-2" />
                                <strong>Address:</strong> 123 Iron Street, Tirupati, India
                            </li>
                            <li className="mb-3">
                                <FaPhoneAlt className="me-2" />
                                <strong>Phone:</strong> +91 9876543210
                            </li>
                            <li className="mb-3">
                                <FaEnvelope className="me-2" />
                                <strong>Email:</strong> contact@tirupatiiron.com
                            </li>
                            <li className="mb-3">
                                <FaFax className="me-2" />
                                <strong>Fax:</strong> +91 9876543211
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;
