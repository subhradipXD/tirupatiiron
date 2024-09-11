import { motion } from "framer-motion";
import Footer from "../include/Footer";
import Navbar from "../include/Navbar";
import Shop from '../assets/Shop.png';
import Logo from "../assets/Logo.jpg";
import Brand1 from "../assets/Sail.png";
import Brand2 from "../assets/TATA Steel.jpg";
import Brand3 from "../assets/Ultratech.jpg";
import Brand4 from "../assets/Vizag Steel.jpeg";
import Brand5 from "../assets/Godrej.jpeg";
import Brand6 from "../assets/Logo.jpg";
import Brand7 from "../assets/Logo.jpg";
import Brand8 from "../assets/Logo.jpg";


import "./styles.css";
import { Link } from "react-router-dom";

function Home() {
    const productCategories = [
        { id: 1, name: 'Flat Products', description: 'Description for Category 1', image: Logo },
        { id: 2, name: 'Long Product', description: 'Description for Category 2', image: Logo },
        { id: 3, name: 'Re-Bar', description: 'Description for Category 3', image: Logo },
        { id: 4, name: 'Pipe and Hollow Section', description: 'Description for Category 4', image: Logo },
        { id: 5, name: 'Round, Square and flat Bar', description: 'Description for Category 5', image: Logo },
        { id: 6, name: 'Roofing Sheets', description: 'Description for Category 6', image: Logo },
        { id: 7, name: 'Cement', description: 'Description for Category 7', image: Logo },
        { id: 8, name: 'Godrej Safes', description: 'Description for Category 8', image: Logo },
        { id: 9, name: 'Hardware', description: 'Description for Category 9', image: Logo }
    ];

    const brands = [
        Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8
    ];

    return (
        <>
            <Navbar />
            <div className="image-container">
                <img src={Shop} alt="Shop" className="img-fluid shop-image" />
            </div>
            <div className="container my-4">
                <h2 className="mb-4 text-center">Products We Offer</h2>
                <div className="row">
                    {productCategories.map((category) => (
                        <div className="col-md-4 mb-4" key={category.id}>
                            <div className="card h-100 card-hover">
                                <img src={category.image} className="card-img-top" alt={category.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">{category.description}</p>
                                    <Link to={`/products/${category.id}`} className="btn btn-primary">
                                        View Products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container my-4">
                <h2 className="mb-4 text-center">Top Quality Brands</h2>
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

            <div className="container my-4">
                <h2 className="mb-4 text-center">Certifications</h2>
                <div className="brands-container">
                    <motion.div
                        className="brands-wrapper"
                        animate={{ x: ["0%", "50%", "0%", "-50%", "0%"] }}
                        transition={{
                            duration: 30,
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


            <Footer />
        </>
    );
}

export default Home;
