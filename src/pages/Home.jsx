import { motion } from "framer-motion";
import Shop from '../assets/Shop.png';
import Footer from "../include/Footer";
import Navbar from "../include/Navbar";
import Brand1 from "../assets/Sail.png";
import Brand2 from "../assets/TATA Steel.jpg";
import Brand3 from "../assets/Ultratech.jpg";
import Brand4 from "../assets/Vizag Steel.jpeg";
import Brand5 from "../assets/Godrej.jpeg";
import Brand6 from "../assets/Logo.jpg";
import Brand7 from "../assets/Logo.jpg";
import Brand8 from "../assets/Logo.jpg";
import { useInView } from "react-intersection-observer";

import "./styles.css";
import { Link } from "react-router-dom";

function Home() {
    const { ref, inView } = useInView();

    const brands = [
        Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8
    ];

    return (
        <>
            <Navbar />
            <div className="image-container">
                <img src={Shop} alt="Shop" className="img-fluid shop-image" />
            </div>

            <div className="bg-warning bg-gradient">
                <div className="text-center py-4 ms-5 me-5 bg-warning bg-gradient">
                    <h2>Our Supplies</h2>
                    <p>We have an amazing offering of specialized construction materials for sale.
                        All of our products are of the highest quality and adhere to the strictest industry norms which conforms to IS grade and also other standards globally.
                        View our full catalogue in order to know all of our products, as well as our additional services.</p>
                    <p>We can also ship our products all around India and work with several strategic partners and distributors in order to make each order as smooth as possible.
                        If you have any questions about our products and services, please get in touch today.</p>

                    <Link to="/Products">View All Products</Link>
                </div>
            </div>


            <div className="container my-4">
                <h2 className="mb-4 text-center">Top Quality Brands</h2>
                <div className="text-center py-4 ms-5 me-5">
                    <p>Performance, Guaranteed</p>
                    <p>TIRUPATI IRON has been working with the same brands since 1997.
                        Our business was founded on the idea of providing quality construction materials and supplies to people and businesses that need it.
                        We chose the best and most reputable brands since the start, and we have never looked back.
                        Our reputation depends on offering only the best.</p>
                </div>
                <div className="brands-container">
                    <motion.div
                        className="brands-wrapper"
                        animate={{ x: ["0%", "50%", "0%", "-50%", "0%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        layout
                    >
                        {brands.map((brand, index) => (
                            <div className="brand" key={index}>
                                <img src={brand} alt={`Brand ${index + 1}`} className="brand-img" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className=" py-4  bg-warning bg-gradient">
                <h2 className="mb-4 text-center">Our Certifications</h2>
                <div className="certificate-container">
                    <motion.div
                        className="certificate-wrapper"
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
                    >
                        {brands.map((brand, index) => (
                            <div className="certificate" key={index}>
                                <img src={brand} alt={`Brand ${index + 1}`} className="certificate-img" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
