import { useState } from "react";
import './allProducts.css';
import Navbar from "../../include/Navbar";
import logo from "../../assets/Logo.jpg";

const FlatProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const productCategories = [
        {
            name: "MS",
            description: "Mild Steel (MS) products include hot-rolled (HR) and cold-rolled (CR) sheets.",
            image: logo,
            subcategories: [
                { name: "HR (Hot Rolled)", description: "Lorem ipsum dolor sit amet, HR sheets description.", image: logo },
                { name: "CR (Cold Rolled)", description: "Lorem ipsum dolor sit amet, CR sheets description.", image: logo }
            ]
        },
        {
            name: "GI",
            description: "Galvanized Iron (GI) products are rust-resistant steel sheets.",
            image: logo,
            subcategories: []
        },
        {
            name: "SS",
            description: "Stainless Steel (SS) products include hot-rolled (HR) and cold-rolled (CR) sheets.",
            image: logo,
            subcategories: [
                { name: "HR (Hot Rolled)", description: "Lorem ipsum dolor sit amet, HR sheets description.", image: logo },
                { name: "CR (Cold Rolled)", description: "Lorem ipsum dolor sit amet, CR sheets description.", image: logo }
            ]
        }
    ];

    const handleShowModal = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (

        <>
            <Navbar />

            <div className="container my-4">
                <h2 className="mb-4 text-center">Flat Products</h2>
                <div className="row">
                    {productCategories.map((category, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100 card-hover">
                                <img src={category.image} className="card-img-top" alt={category.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">{category.description}</p>
                                    {category.subcategories.length > 0 && (
                                        <button
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#productModal"
                                            onClick={() => handleShowModal(category)}
                                        >
                                            View Details
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                <div
                    className="modal fade"
                    id="productModal"
                    tabIndex="-1"
                    aria-labelledby="productModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="productModalLabel">
                                    {selectedProduct?.name} Subcategories
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {selectedProduct?.subcategories.length > 0 ? (
                                    selectedProduct.subcategories.map((subcategory, idx) => (
                                        <div key={idx} className="mb-4">
                                            <img
                                                src={subcategory.image}
                                                alt={subcategory.name}
                                                className="img-fluid mb-2"
                                                style={{ maxHeight: "200px", objectFit: "cover" }}
                                            />
                                            <h6>{subcategory.name}</h6>
                                            <p>{subcategory.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No subcategories available for {selectedProduct?.name}.</p>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default FlatProducts;
