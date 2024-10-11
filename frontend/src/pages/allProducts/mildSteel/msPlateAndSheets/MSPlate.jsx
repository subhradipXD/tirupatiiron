import Navbar from "../../../../include/Navbar";
import plate from "../../../../assets/MS/ms-plates.jpg";
function MSPlate() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-4">
                        <img src={plate} alt="" className="img-fluid rounded" />
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
                        <h3>Specifications</h3>
                        <table className="table table-hover table-striped-columns table-responsive">
                            <thead>
                                <tr>
                                    <th>Thickness (mm)</th>
                                    <th>Width (mm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>1030, 1070, 1250, 1270, 1310, 1400</td>
                                </tr>
                                <tr>
                                    <td>2.1, 2.2</td>
                                    <td>1030, 1070, 1250, 1270, 1310, 1400</td>
                                </tr>
                                <tr>
                                    <td>2.3, 2.37</td>
                                    <td>1030, 1250, 1270, 1305, 1400</td>
                                </tr>
                                <tr>
                                    <td>2.5</td>
                                    <td>1030, 1070, 1130, 1250, 1270, 1310, 1400, 1420</td>
                                </tr>
                                <tr>
                                    <td>2.6</td>
                                    <td>1030, 1100, 1250, 1270, 1310, 1400, 1420</td>
                                </tr>
                                <tr>
                                    <td>2.7, 2.8</td>
                                    <td>1030, 1070, 1250, 1270, 1310, 1400, 1420</td>
                                </tr>
                                <tr>
                                    <td>2.9</td>
                                    <td>1030, 1090, 1130, 1150, 1155, 1160, 1250, 1270, 1310, 1400, 1420</td>
                                </tr>
                                <tr>
                                    <td>2.95, 3.0, 3.10, 3.15, 3.2</td>
                                    <td>1030, 1130, 1250, 1270, 1310, 1400, 1420, 1500, 1550</td>
                                </tr>
                                <tr>
                                    <td>3.35</td>
                                    <td>1030, 1250, 1270, 1310, 1385, 1400, 1420, 1500, 1550</td>
                                </tr>
                                <tr>
                                    <td>3.5, 3.55, 3.6</td>
                                    <td>1030, 1250, 1270, 1310, 1360, 1400, 1420, 1500, 1550</td>
                                </tr>
                                <tr>
                                    <td>3.65</td>
                                    <td>1030, 1250, 1270, 1310, 1385, 1400, 1420, 1500, 1550</td>
                                </tr>
                                <tr>
                                    <td>3.8, 3.9, 3.95</td>
                                    <td>1030, 1250, 1270, 1310, 1400, 1420, 1500, 1550</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>1030, 1250, 1270, 1310, 1400, 1420, 1500, 1550</td>
                                </tr>
                                <tr>
                                    <td>4.10</td>
                                    <td>1030, 1250, 1270, 1310, 1385, 1400, 1420, 1500, 1550</td>
                                </tr>
                                <tr>
                                    <td>4.3</td>
                                    <td>1030, 1250, 1270, 1310, 1360, 1385, 1400, 1420, 1500, 1550, 1730</td>
                                </tr>
                                <tr>
                                    <td>4.50</td>
                                    <td>1030, 1100, 1250, 1270, 1310, 1360, 1400, 1420, 1500, 1550, 1730</td>
                                </tr>
                                <tr>
                                    <td>4.8, 4.9</td>
                                    <td>1030, 1250, 1270, 1310, 1360, 1385, 1400, 1420, 1500, 1550, 1730</td>
                                </tr>
                            </tbody>
                        </table>



                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h4>Applications</h4>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Tube &amp; Pipe Making</li>
                                <li className="list-group-item">For Cold Rolling Purpose</li>
                                <li className="list-group-item">General Structural and Engineering Application</li>
                                <li className="list-group-item">Manufacturing of Corrosion Resistant Engineering Products (Segments Wagon Building, Railways etc.)</li>
                                <li className="list-group-item">Drawing, Forming &amp; General Engineering Purposes</li>
                                <li className="list-group-item">For Manufacturing of LPG Cylinders</li>
                                <li className="list-group-item">Auto Components and Pre Engineered Building (PEB) Sections (For Forming at Ambient Temperature)</li>
                                <li className="list-group-item">Auto Components (For Forming at High Temperature - Hot Forming)</li>
                                <li className="list-group-item">Chains, Hair Clip, Sprocket, Clutch Plate, Hacksaw Blade etc.</li>
                                <li className="list-group-item">Manufacturing of Propeller Shaft</li>
                                <li className="list-group-item">Manufacturing of Fork and Spokes for Two Wheelers</li>
                                <li className="list-group-item">Manufacturing of Pipes mostly for Oil and Gas Sector</li>
                                <li className="list-group-item">Manufacturing of Cycle Rims</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MSPlate;