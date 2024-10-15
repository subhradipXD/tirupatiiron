import Navbar from "../../include/Navbar";
import cement from "../../assets/Cement/Cement.jpg";
import ultratech from "../../assets/Cement/UltratechCement.jpg";
import ambuja from "../../assets/Cement/AmbujaCement.jpg";

function Cement() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-4">
                        <img src={cement} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="container">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                                ducimus, ea animi earum illo pariatur, voluptatibus magni commodi,
                                nam nemo id itaque cum in sed error provident officia incidunt debitis!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal1" >
                            <div className="card-body">
                                <h5 className="card-title">UltraTech Cement</h5>
                                <img src={ultratech} alt="" className="img-fluid rounded" style={{ height: "200px" }} />
                                <br />
                                <a href="#" className="btn btn-warning mt-2" data-bs-toggle="modal" data-bs-target="#cardModal1">View Products</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2" >
                            <div className="card-body">
                                <h5 className="card-title">Ambuja Cement</h5>
                                <img src={ambuja} alt="" className="img-fluid rounded" style={{ height: "200px" }} />
                                <br />
                                <a href="#" className="btn btn-warning mt-2" data-bs-toggle="modal" data-bs-target="#cardModal2">View Products</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal */}
            <div className="modal fade" id="cardModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">UltraTech Cement</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    {/* Product 1 */}
                                    <div className="col-md-6">
                                        <div className="card h-100">
                                            <img src="https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/products/overview/_jcr_content/root/container/container_copy_17077738/container_1634993344/container/tabs/item_1682427045515/container_1158040084/slickcarousel/container_49699196/teaser_copy_copy_cop.coreimg.png/1707274353054/small-cement-card.png" className="card-img-top" alt="Product 1" />
                                            <div className="card-body">
                                                <h5 className="card-title">Ordinary Portland Cement (OPC)</h5>
                                                <p className="card-text">OPC has an early setting time but is not environmentally sound or cost-effective.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 2 */}
                                    <div className="col-md-6">
                                        <div className="card h-100">
                                            <img src="https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/products/overview/_jcr_content/root/container/container_copy_17077738/container_1634993344/container/tabs/item_1682427045515/container_1158040084/slickcarousel/container_49699196_c/teaser_copy_copy_cop_748556542.coreimg.png/1699003528806/image.png" className="card-img-top" alt="Product 2" />
                                            <div className="card-body">
                                                <h5 className="card-title">Portland Pozzolana Cement (PPC)</h5>
                                                <p className="card-text">This is ideal for construction in harsh environmental conditions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    {/* Product 3 */}
                                    <div className="col-md-6">
                                        <div className="card h-100">
                                            <img src="https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/products/overview/_jcr_content/root/container/container_copy_17077738/container_1634993344/container/tabs/item_1682427045515/container_1158040084/slickcarousel/container_49699196_c_579502311/teaser_copy_19232512.coreimg.png/1699003527649/image-%281%29.png" className="card-img-top" alt="Product 3" />
                                            <div className="card-body">
                                                <h5 className="card-title">Portland Slag Cement (PSC)</h5>
                                                <p className="card-text">This cement is the best for constructions that are exposed to marine environments.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 4 */}
                                    <div className="col-md-6">
                                        <div className="card h-100">
                                            <img src="https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/products/overview/ultratech-premium/_jcr_content/root/container/container_copy_copy/container_copy/teaser.coreimg.png/1699003932944/premium.png" className="card-img-top" alt="Product 4" />
                                            <div className="card-body">
                                                <h5 className="card-title">UltraTech Premium</h5>
                                                <p className="card-text">UltraTech Premium is the perfect choice for critical applications including slabs, columns, beams, and roofing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ambuja Cement</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    {/* Product 1 */}
                                    <div className="col-md-6">
                                        <div className="card h-100">
                                            <div className="d-flex justify-content-center">
                                                <img src="https://www.ambujacement.com/Upload/Images/thumbnail/landing-list-ambujacement-y.png" style={{ width: '200px' }} className="card-img-top mt-3" alt="Product 1" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Ambuja Cement</h5>
                                                <p className="card-text">Known for its high strength, high performance cement caters to each of its three customer segments – Individual Home Builders (IHBs), Masons and Contractors, and Professionals</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product 2 */}
                                    <div className="col-md-6">
                                        <div className="card h-100">
                                            <div className="d-flex justify-content-center">
                                                <img src="https://www.ambujacement.com/Upload/Images/thumbnail/ambuja-filip.png" style={{ width: '200px' }} className="card-img-top mt-3" alt="Product 2" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Ambuja Kawach</h5>
                                                <p className="card-text">Engineered with cutting edge technology – Ambuja Kawach is a specially formulated cement with high quality water-repellent properties and is a one-of-its-kind product</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-md-3"></div>
                                    {/* Product 3 */}
                                    <div className="col-md-6">
                                        <div className="card h-100">
                                            <div className="d-flex justify-content-center">
                                                <img src="https://www.ambujacement.com/Upload/Images/thumbnail/landing-products-compocem-y.png" style={{ width: '200px' }} className="card-img-top mt-3" alt="Product 3" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Ambuja Compocem</h5>
                                                <p className="card-text">At Ambuja we’ve always looked to create the strongest cement, with the lightest carbon footprint. By creating an innovative product line, Ambuja is bringing sustainability to people’s homes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}

export default Cement;