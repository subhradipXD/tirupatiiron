import { useState } from "react";
import Navbar from "../../include/Navbar";
import "./allProducts.css"; // Assuming all styles are already defined here
import logo from "../../assets/Logo.jpg"; // Sample image, replace with actual images

function ProductsFour() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Categories and Sub-categories Data
    const categories = [
        {
            id: 1,
            name: "GI",
            description: "SI pipe and hollow sections for construction.",
            image: logo,
            subCategories: [
                { id: 1, name: "Conical Hollow Section (CHS)", description: "Durable CHS for SI applications.", image: logo },
                { id: 2, name: "Square Hollow Section (SHS)", description: "Strong SHS for SI purposes.", image: logo },
                { id: 3, name: "Rectangle Hollow Section (RHS)", description: "SI Rectangle hollow sections.", image: logo },
            ],
        },
        {
            id: 2,
            name: "MS",
            description: "MS pipe and hollow sections for industrial applications.",
            image: logo,
            subCategories: [
                { id: 1, name: "Conical Hollow Section (CHS)", description: "MS CHS for construction.", image: logo },
                { id: 2, name: "Square Hollow Section (SHS)", description: "MS SHS for framing.", image: logo },
                { id: 3, name: "Rectangle Hollow Section (RHS)", description: "MS RHS for support.", image: logo },
            ],
        },
        {
            id: 3,
            name: "Seamless Pipe",
            description: "High-quality seamless pipes for various uses.",
            image: logo,
            subCategories: [],
        },
        {
            id: 4,
            name: "SS Pipe",
            description: "Stainless steel pipes for corrosion resistance.",
            image: logo,
            subCategories: [],
        },
    ];

    // Modal handler
    const handleShowModal = (category) => setSelectedCategory(category);
    const handleCloseModal = () => setSelectedCategory(null);

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h2 className="text-center mb-4">Pipe and Hollow Section Products</h2>
                <div className="row">
                    {categories.map((category) => (
                        <div className="col-md-6 mb-4" key={category.id}>
                            <div className="card h-100 card-hover" onClick={() => handleShowModal(category)}>
                                <img src={category.image} className="card-img-top" alt={category.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">{category.description}</p>
                                    {category.subCategories.length > 0 && (
                                        <button className="btn btn-primary" onClick={() => handleShowModal(category)}>
                                            View Sub-categories
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for displaying sub-categories */}
            {selectedCategory && selectedCategory.subCategories.length > 0 && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {selectedCategory.name} - Sub-categories
                                </h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    {selectedCategory.subCategories.map((subCategory) => (
                                        <div className="col-md-6 mb-4" key={subCategory.id}>
                                            <div className="card h-100 card-hover">
                                                <img src={subCategory.image} className="card-img-top" alt={subCategory.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{subCategory.name}</h5>
                                                    <p className="card-text">{subCategory.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductsFour;
