import { useState } from "react";
import Navbar from "../../include/Navbar";
import "./allProducts.css"; // Reuse for any custom styles you may add
import logo from "../../assets/Logo.jpg"; // Sample image for categories and sub-categories

function ProductsThree() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Categories and Sub-categories Data
    const categories = [
        {
            id: 1,
            name: "Main Re-Bar",
            description: "High-quality re-bar for construction.",
            image: logo,
            subCategories: [
                { id: 1, name: "SAIL", description: "SAIL Re-Bars for strong reinforcement.", image: logo },
                { id: 2, name: "RINL", description: "RINL Re-Bars for top-grade construction.", image: logo },
            ],
        },
        {
            id: 2,
            name: "Rolling Re-Bar",
            description: "Re-bars manufactured using advanced rolling techniques.",
            image: logo,
            subCategories: [
                { id: 1, name: "Rashmi BOF", description: "Re-bars from Rashmi BOF.", image: logo },
                { id: 2, name: "OMPL", description: "Durable re-bars from OMPL.", image: logo },
            ],
        },
    ];

    // Modal handler
    const handleShowModal = (category) => setSelectedCategory(category);
    const handleCloseModal = () => setSelectedCategory(null);

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h2 className="text-center mb-4">Re-Bar Products</h2>
                <div className="row">
                    {categories.map((category) => (
                        <div className="col-md-6 mb-4" key={category.id}>
                            <div className="card h-100 card-hover" onClick={() => handleShowModal(category)}>
                                <img src={category.image} className="card-img-top" alt={category.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">{category.description}</p>
                                    <button className="btn btn-primary" onClick={() => handleShowModal(category)}>
                                        View Sub-categories
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for displaying sub-categories */}
            {selectedCategory && (
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

export default ProductsThree;
