import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function SSBrightBar() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-2">
                        <img
                            src={logo}
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                        />
                    </div>
                    <div className="col-md-10">
                        <div className="container">
                            <h3>lorem ipsum</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                            ducimus, ea animi earum illo pariatur, voluptatibus magni commodi,
                            nam nemo id itaque cum in sed error provident officia incidunt
                            debitis!
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="container">
                        <div className="card mb-4">
                            <div className="card-header bg-primary text-white">
                                <h5>Supply Conditions</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Hot Rolled</li>
                                    <li className="list-group-item">Hot Rolled &amp; Annealed</li>
                                    <li className="list-group-item">Cold Drawn</li>
                                    <li className="list-group-item">Cold Drawn &amp; Polished</li>
                                    <li className="list-group-item">Peeled &amp; Polished</li>
                                    <li className="list-group-item">Peeled</li>
                                    <li className="list-group-item">Centerless Ground &amp; Polished</li>
                                    <li className="list-group-item">Solution Annealed</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header bg-success text-white">
                                <h5>Grades We Offer</h5>
                            </div>
                            <div className="card-body">
                                <h5 className="text-secondary">Austenitic Family:</h5>
                                <p>300 Series: 304, 304L, 304LN, 316, 316L, 309, 309S, 321, 321H, and Many Others</p>
                                <p>200 Series Grades</p>
                                <h5 className="text-secondary">Ferritic Family:</h5>
                                <p>409, 409Ti, 430, 430L, 409M, X2, X5, and Many Others</p>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header bg-warning text-dark">
                                <h5>Finish and Quality Control</h5>
                            </div>
                            <div className="card-body">
                                <p><strong>No.1/HRAP finish available</strong></p>
                                <p><strong>Mill Edge &amp; Trim Edge</strong></p>
                                <p>HR plates pass through Ultrasonic Test for ensuring best quality.</p>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header bg-info text-white">
                                <h5>Tolerance &amp; Length</h5>
                            </div>
                            <div className="card-body">
                                <p><strong>Tolerance:</strong> h9, h10, h11, k11, k12, k13 or as per customer requirement</p>
                                <p><strong>Length:</strong> 2.5mtr to 8mtr</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default SSBrightBar;