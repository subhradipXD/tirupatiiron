import { useState } from "react";
import Navbar from "../../include/Navbar";
import "./allProducts.css"; // Keeping the file for any future custom styling
import logo from "../../assets/Logo.jpg";

function ProductsTwo() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Categories and Sub-categories Data
    const categories = [
        {
            id: 1,
            name: "Main Structural Steel",
            description: "High-quality structural steel for large constructions.",
            image: logo,
            subCategories: [
                { id: 1, name: "ISA (Angel)", description: "ISA Angles for structural support.", image: logo },
                { id: 2, name: "ISMC (Channel)", description: "ISMC Channels for framing.", image: logo },
                { id: 3, name: "LISMB (Joint, Beam, NP, WPB)", description: "Structural beams and joints.", image: logo },
                { id: 4, name: "Rails", description: "Durable steel rails for industrial use.", image: logo },
            ],
        },
        {
            id: 2,
            name: "Rolling Structural Steel",
            description: "Structural steel products manufactured using rolling techniques.",
            image: logo,
            subCategories: [
                { id: 1, name: "ISA (Angel)", description: "ISA Angles for rolling construction.", image: logo },
                { id: 2, name: "ISMC (Channel)", description: "Rolling channels for structure.", image: logo },
                { id: 3, name: "LISMB (Joint, Beam, NP, WPB)", description: "Beams and joints for rolling structures.", image: logo },
            ],
        },
        {
            id: 3,
            name: "SS Structural Steel",
            description: "Stainless steel structural elements for durability.",
            image: logo,
            subCategories: [
                { id: 1, name: "ISA (Angel)", description: "Stainless ISA Angles.", image: logo },
                { id: 2, name: "ISMC (Channel)", description: "Stainless steel channels.", image: logo },
                { id: 3, name: "LISMB (Joint, Beam, NP, WPB)", description: "Stainless steel beams and joints.", image: logo },
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
                <h2 className="text-center mb-4">Long Products</h2>
                <div className="row">
                    {categories.map((category) => (
                        <div className="col-md-4 mb-4" key={category.id}>
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
                                        <div className="col-md-4 mb-4" key={subCategory.id}>
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

export default ProductsTwo;
