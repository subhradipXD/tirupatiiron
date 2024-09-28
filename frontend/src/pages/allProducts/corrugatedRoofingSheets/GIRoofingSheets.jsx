import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function GIRoofingSheets() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-2">
                        <img src={logo} alt="" style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div className="col-md-10">
                        <div className="container">
                            <h6>lorem ipsum</h6>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus, ea animi earum illo pariatur, voluptatibus magni commodi, nam nemo id itaque cum in sed error provident officia incidunt debitis!
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="container">
                            <h5 className="text-center">TATA Shaktee</h5>
                            {/* <a href="https://tatashaktee.com/product/shaktee/tata-shaktee-bro__final_aw_low-2/" target="_blank" className="btn btn-link" download>
                                <img src="https://tatashaktee.com/wp-content/themes/tatashaktee/assets/images/download-icon.png" alt="Download" width="15px" height="15px" /> Download Brochure
                            </a> */}
                            <div className="container animate__animated animate__fadeIn" style={{ animationDelay: '400ms' }}>
                                <div className="text-center">
                                    <div className="product-logo">
                                        <img src="https://tatashaktee.com/wp-content/uploads/2022/06/tata-shaktee-logo.svg" alt="TATA Shaktee" width="43px" height="45px" />
                                    </div>
                                    <img src="https://tatashaktee.com/wp-content/uploads/2022/06/product-range-img2.png" className="img-fluid" alt="product-range-img2" width={259} height={235} />
                                </div>
                                <article>
                                    <p className="lead">Tata Shaktee is Tata Steels premier GI Sheet product particularly catering to consumer requirements in roofing applications.</p>
                                    <h6 className="text-center"><strong>SPECIFICATIONS</strong></h6>
                                    <ul className="list-unstyled">
                                        <li className="d-flex align-items-center mb-3">
                                            <img
                                                src="https://tatashaktee.com/wp-content/uploads/2022/06/coating-gsm.png"
                                                alt="Coating GSM"
                                                width="45px"
                                                height="45px"
                                                className="me-3"
                                            />
                                            <p>
                                                Coating (GSM): <strong>120</strong>
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <img
                                                src="https://tatashaktee.com/wp-content/uploads/2022/06/thickness-range-mm.png"
                                                alt="Thickness Range"
                                                width="45px"
                                                height="45px"
                                                className="me-3"
                                            />
                                            <p>
                                                Thickness range (mm): <strong>0.18-0.8</strong>
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <img
                                                src="https://tatashaktee.com/wp-content/uploads/2022/06/width-range-mm.png"
                                                alt="Width Range"
                                                width="45px"
                                                height="45px"
                                                className="me-3"
                                            />
                                            <p>
                                                Width Range (mm): <strong>1800-1200</strong>
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <img
                                                src="https://tatashaktee.com/wp-content/uploads/2022/06/length-mm.png"
                                                alt="Length"
                                                width="45px"
                                                height="45px"
                                                className="me-3"
                                            />
                                            <p>
                                                Length (mm): <strong>1830-7320 (6 to 24 ft)</strong>
                                            </p>
                                        </li>
                                        <li className="d-flex align-items-center mb-3">
                                            <img
                                                src="https://tatashaktee.com/wp-content/uploads/2022/06/surface-condition.png"
                                                alt="Surface Condition"
                                                width="45px"
                                                height="45px"
                                                className="me-3"
                                            />
                                            <p>
                                                Surface Condition: <strong>Normal Spangle (Lead free)</strong>
                                            </p>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                            <h6 className="text-center"><strong>FEATURES</strong></h6>
                            <ul className="all-feature feature-desk cf list-unstyled">
                                <li className="feature animate1 wow fadeIn animated" data-wow-delay="600ms" data-animate1="fadeIn" data-duration1="1.3s" data-delay1="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '600ms', MozAnimationDelay: '600ms', animationDelay: '600ms' }}>
                                    <div className="d-flex align-items-center">
                                        <img src="https://tatashaktee.com/wp-content/uploads/2022/06/ic-feature-1.png" className="lazyloaded" alt="image" width="60px" height="60px" />
                                        <h6 className="ms-2 mb-0">Right hardness for Roofing</h6>
                                    </div>
                                    <div className="feature-overlay">
                                        <div className="feature-text">
                                            <p>Accurate tempering to resist cracks and fissures</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="feature animate1 wow fadeIn animated" data-wow-delay="600ms" data-animate1="fadeIn" data-duration1="1.3s" data-delay1="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '600ms', MozAnimationDelay: '600ms', animationDelay: '600ms' }}>
                                    <div className="d-flex align-items-center">
                                        <img src="https://tatashaktee.com/wp-content/uploads/2022/06/ic-feature-2.png" className="lazyloaded" alt="image" width="60px" height="60px" />
                                        <h6 className="ms-2 mb-0">High Tensile Strength</h6>
                                    </div>
                                    <div className="feature-overlay">
                                        <div className="feature-text">
                                            <p>High tensile strength of 700 MPa to resist natural forces like hailstorms</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="feature animate1 wow fadeIn animated" data-wow-delay="600ms" data-animate1="fadeIn" data-duration1="1.3s" data-delay1="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '600ms', MozAnimationDelay: '600ms', animationDelay: '600ms' }}>
                                    <div className="d-flex align-items-center">
                                        <img src="https://tatashaktee.com/wp-content/uploads/2022/06/ic-feature-3.png" className="lazyloaded" alt="image" width="60px" height="60px" />
                                        <h6 className="ms-2 mb-0">Accurate dimensions &amp; thickness</h6>
                                    </div>
                                    <div className="feature-overlay">
                                        <div className="feature-text">
                                            <p>Length &amp; thickness is equal to or more than specified ensuring value for money</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="feature animate1 wow fadeIn animated" data-wow-delay="600ms" data-animate1="fadeIn" data-duration1="1.3s" data-delay1="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '600ms', MozAnimationDelay: '600ms', animationDelay: '600ms' }}>
                                    <div className="d-flex align-items-center">
                                        <img src="https://tatashaktee.com/wp-content/uploads/2022/06/ic-feature-4.png" className="lazyloaded" alt="image" width="60px" height="60px" />
                                        <h6 className="ms-2 mb-0">Uniform zinc coating &amp; adherence</h6>
                                    </div>
                                    <div className="feature-overlay">
                                        <div className="feature-text">
                                            <p>Superior x-ray and cleaning technology to ensure even coating</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="feature animate1 wow fadeIn animated" data-wow-delay="600ms" data-animate1="fadeIn" data-duration1="1.3s" data-delay1="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '600ms', MozAnimationDelay: '600ms', animationDelay: '600ms' }}>
                                    <div className="d-flex align-items-center">
                                        <img src="https://tatashaktee.com/wp-content/uploads/2022/06/ic-feature-5.png" className="lazyloaded" alt="image" width="60px" height="60px" />
                                        <h6 className="ms-2 mb-0">Printed thickness &amp; zinc coating</h6>
                                    </div>
                                    <div className="feature-overlay">
                                        <div className="feature-text">
                                            <p>Thickness &amp; zinc coating printed on sheet ensuring fair pay</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="feature animate1 wow fadeIn animated" data-wow-delay="600ms" data-animate1="fadeIn" data-duration1="1.3s" data-delay1="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '600ms', MozAnimationDelay: '600ms', animationDelay: '600ms' }}>
                                    <div className="d-flex align-items-center">
                                        <img src="https://tatashaktee.com/wp-content/uploads/2022/06/ic-feature-6.png" className="lazyloaded" alt="image" width="60px" height="60px" />
                                        <h6 className="ms-2 mb-0">Even Corrugations</h6>
                                    </div>
                                    <div className="feature-overlay">
                                        <div className="feature-text">
                                            <p>Even corrugations ensure perfect overlapping, preventing water seepage and white rust</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="feature animate1 wow fadeIn animated" data-wow-delay="600ms" data-animate1="fadeIn" data-duration1="1.3s" data-delay1="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '600ms', MozAnimationDelay: '600ms', animationDelay: '600ms' }}>
                                    <div className="d-flex align-items-center">
                                        <img src="https://tatashaktee.com/wp-content/uploads/2022/06/ic-feature-7.png" className="lazyloaded" alt="image" width="60px" height="60px" />
                                        <h6 className="ms-2 mb-0">Optimum passivation</h6>
                                    </div>
                                    <div className="feature-overlay">
                                        <div className="feature-text">
                                            <p>Adequate chromate usage to prevent white rust and enhance sheet life</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h5 className="text-center">Jindal India</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GIRoofingSheets;