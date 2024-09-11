import Navbar from "../include/Navbar";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg"
import Footer from "../include/Footer";
import "./styles.css";

function Products() {
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

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h2 className="mb-4 text-center">Our Products</h2>
                <div className="row">
                    {productCategories.map((category) => (
                        <div className="col-md-4 mb-4" key={category.id}>
                            <div className="card h-100 card-hover">  {/* Add card-hover class */}
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

            <Footer />
        </>
    );
}

export default Products;
