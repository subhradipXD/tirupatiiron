import Footer from "../include/Footer";
import Navbar from "../include/Navbar";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from 'react-icons/fa';

function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="container my-4">
                <h1 className="text-center mb-4">About Us</h1>

                <section className="mb-5">
                    <h2>Who We Are</h2>
                    <p>
                        Get to know TIRUPATI IRON, a leading Steel Distributor in West Bengal. Our company was founded in 1995 when our founder, Swapan Debnath, noticed there was a gap between industry needs and what suppliers were offering. Since then, we have been growing in both size and reputation at an astonishing rate. We lead the way in customer care and satisfaction, and we strive to provide the very best service to everyone we work with.
                    </p>
                    <p>
                        Since 1995, the cornerstone of our business has been our relationship with our customers. We go out of our way to give you the very best product options, prices, advice, and service, so that you can concentrate on getting your job done. TIRUPATI IRON has been an industry-leading Steel Distributor since 1995. We only offer our customers the highest quality products available on the market - and for the best prices you’ll find anywhere. When you order from TIRUPATI IRON, you can rest assured that you are getting the very highest quality, and best value for your money. Working with TIRUPATI IRON simply means working with the best. We guarantee you won’t need - or want - any other supplier!
                    </p>
                    <p>
                        Tirupati Iron is reckoned amongst the foremost Wholesaler, Distributor, Trader, and Retailer of TMT Bars, Structural Steel, Sheets & Plate, Pipes & Hollow Sections, Rounds, Flats, etc. Our range is widely appreciated by our clients for its varied features such as elevated durability, flawless functionality, high tensile strength, compact design, longer service life, and corrosion resistance. Our complete product range is obtained from licensed vendors, who use optimum quality raw materials and progressive technology in the manufacturing process. Moreover, our vendors precisely-engineered these products in conformity with the industry laid standards. Also, we provide these products in diverse sizes and dimensions at competitive prices.
                    </p>
                    <p>
                        We’re in this for the long haul: we aim to be your supplier of choice - in fact, your only supplier. We understand this requires more than just a few quality products and great pricing on our end. We know you also need the most professional, personal, informative, and quickest service available. We know that the quality of our service affects your work, your reputation, and the money you make, so we know we have to be the best. And so that’s what we offer you. The best. World-class service, right here.
                    </p>
                    <p>
                        Our mentor, Mr. Swapan Debnath, helps us satisfy the precise demands of our clients in an efficient manner.
                    </p>
                </section>

                <section className="mb-5">
                    <h2>Why Us?</h2>
                    <ul>
                        <li>Quality approved products</li>
                        <li>Ethical business practices</li>
                        <li>Genuine vendor base</li>
                        <li>Team of trained professionals</li>
                        <li>Flexible payment modes</li>
                    </ul>
                </section>

                <section>
                    <h2>Company Details</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li><strong>Company CEO:</strong> Swapan Debnath</li>
                                <li><strong>Year of Establishment:</strong> 1995</li>
                                <li><strong>Legal Status of Firm:</strong> Partnership</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li><strong>Banker:</strong> HDFC BANK, STATE BANK OF INDIA</li>
                                <li><strong>GST No.:</strong> 19AABFT8437B1Z6</li>
                                <li><strong>Payment Mode:</strong> Cash, Cheque, DD, NEFT, RTGS, IMPS</li>
                                <li><strong>Shipment Mode:</strong> By Road</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
