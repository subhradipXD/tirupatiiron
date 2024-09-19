import Navbar from "../../../../include/Navbar";
import logo from "../../../../assets/Logo.jpg";

function MSSheets() {
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
                            <h3>MS Sheets</h3>
                            The Coils are cut into a desired width by the process of slitting the coils, and the desired length by uncoiling the coils and cut them into a required length. Coils that is cut to length (CTL) is normally shipped flat-stacked and that is called as Sheets. Sheets are of different types like H.R Sheets, C.R Sheets, G.P Sheets, G.C Sheets etc.
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
                                <li className="list-group-item">Tube Making</li>
                                <li className="list-group-item">Manufacture of Hamilton and Other Poles, Flanging Applications</li>
                                <li className="list-group-item">Manufacture of Pipes Mostly for Oil and Gas Sector</li>
                                <li className="list-group-item">Cold Reduction and for Manufacture of Galvanised Sheets</li>
                                <li className="list-group-item">General Structural Applications</li>
                                <li className="list-group-item">Strapping</li>
                                <li className="list-group-item">Cycle Chain</li>
                                <li className="list-group-item">Manufacture of Electrical Equipment</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default MSSheets;