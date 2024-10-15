import { useState } from "react";
import Footer from "../include/Footer";
import Navbar from "../include/Navbar";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios"; // To handle API requests
import './styles.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        feedback: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Define the patterns here
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate email format
        if (!emailPattern.test(formData.email)) {
            setError("Please enter a valid email address.");
            toast.error("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        // Validate phone format (e.g., digits only, 10 digits)
        if (!phonePattern.test(formData.phone)) {
            setError("Please enter a valid 10-digit phone number.");
            toast.error("Please enter a valid 10-digit phone number.");
            setLoading(false);
            return;
        }

        // Validate required fields
        if (!formData.name || !formData.feedback) {
            setError("Please fill in all required fields.");
            toast.error("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        // Reset error message
        setError("");

        try {
            // Send data to the backend API (which will handle sending the email)
            await axios.post("http://localhost:5000/api/sendEmail", formData);

            // Reset the form
            setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                feedback: "",
            });

            // Show success toast
            toast.success("Feedback submitted successfully!");

        } catch (error) {
            console.error("Error sending feedback:", error);
            toast.error("There was an error sending your feedback. Please try again later.");
        }

        setLoading(false);
    };

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <ToastContainer />
            </div>
            <div className="container my-4">
                <div className="row">
                    {/* Left side - Google Map */}
                    <div className="col-md-6">
                        <h3>Our Location</h3>
                        <div className="row">
                            <div className="map-container mb-4" style={{ height: '400px' }}>
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
                        <div className="row">
                            <h4 className="pt-5">Shop Hours</h4>
                            <p>We are open from <strong>8:00 AM to 8:00 PM</strong>, Monday to Saturday.</p>
                            <p><strong>Closed on Sundays.</strong></p>
                        </div>
                    </div>

                    {/* Right side - Contact Details */}
                    <div className="col-md-6">
                        <div className="row">
                            <h3>Contact Us</h3>
                            <ul className="list-unstyled">
                                <li className="mb-1">
                                    <IoLocationOutline className="me-2" />
                                    <strong>Address:</strong> Tirupati Iron, Basudevpur, Haldia, West Bengal-721602, India
                                </li>
                                <li className="mb-1">
                                    <MdOutlinePhone className="me-2" />
                                    <strong>Phone:</strong> +91 9434035673
                                </li>
                                <li className="mb-1">
                                    <MdOutlineAlternateEmail className="me-2" />
                                    <strong>Email: </strong>
                                    <a
                                        href="mailto:contact@tirupatiiron.com"
                                        className="text-decoration-none"
                                    >
                                        contact@tirupatiiron.com
                                    </a>
                                </li>

                                <li className="mb-1">
                                    <FaWhatsapp className="me-2" />
                                    <strong>Whatsapp: </strong>
                                    <a
                                        href="https://wa.me/919987579856"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none"
                                    >
                                        +91 9987579856
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h3>Send Us Feedback</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1">
                                        <label htmlFor="formName" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            id="formName"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`form-control form-control-underline ${!formData.name && error ? 'invalid' : ''}`}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="formEmail" className="form-label">Email address</label>
                                        <input
                                            type="email"
                                            id="formEmail"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`form-control form-control-underline ${!emailPattern.test(formData.email) && error ? 'invalid' : ''}`}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="formPhone" className="form-label">Phone Number</label>
                                        <input
                                            type="text"
                                            id="formPhone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`form-control form-control-underline ${!phonePattern.test(formData.phone) && error ? 'invalid' : ''}`}
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="formAddress" className="form-label">Address</label>
                                        <input
                                            type="text"
                                            id="formAddress"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="form-control form-control-underline"
                                            placeholder="Enter your address"
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label htmlFor="formFeedback" className="form-label">Feedback</label>
                                        <textarea
                                            id="formFeedback"
                                            name="feedback"
                                            value={formData.feedback}
                                            onChange={handleChange}
                                            className={`form-control form-control-underline ${!formData.feedback && error ? 'invalid' : ''}`}
                                            rows="3"
                                            placeholder="Enter your feedback"
                                            required
                                        />
                                    </div>

                                    {error && <p className="text-danger">{error}</p>}

                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;
