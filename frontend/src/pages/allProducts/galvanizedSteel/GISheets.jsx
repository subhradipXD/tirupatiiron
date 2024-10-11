import Navbar from "../../../include/Navbar";
import sheets from "../../../assets/GI/GI Sheets.jpeg";
function GISheets() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-4">
                        <img src={sheets} alt="" className="img-fluid rounded" />
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


                <div className="row mt-3">
                    <div className="col-md-6">
                        <h3 className="text-center">lorem ipsum</h3>
                        <table className="table table-hover table-striped-columns mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Sl. No.</th>
                                    <th scope="col">Thickness(MM)</th>
                                    <th scope="col">Swg</th>
                                    <th scope="col">GSM</th>
                                    <th scope="col">Weight/Pcs K.G(approx)</th>
                                    {/* <th scope="col">Rate/Pcs. Rs.</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>0.20x1220mm (4 Ft)</td>
                                    <td></td>
                                    <td>80</td>
                                    <td>4.520</td>
                                    {/* <td>469</td> */}

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>0.25x1220mm (4 Ft)</td>
                                    <td></td>
                                    <td>80</td>
                                    <td>5.660</td>
                                    {/* <td>556</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>0.30x1220mm (4 Ft)</td>
                                    <td>30 Swg</td>
                                    <td>80</td>
                                    <td>6.790</td>
                                    {/* <td>634</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>0.35x1220mm (4 Ft)</td>
                                    <td>29 Swg</td>
                                    <td>80</td>
                                    <td>7.950</td>
                                    {/* <td>719</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>0.40x1220mm (4 Ft)</td>
                                    <td>28 Swg</td>
                                    <td>80</td>
                                    <td>9.020</td>
                                    {/* <td>801</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>0.45x1220mm (4 Ft)</td>
                                    <td>27 Swg</td>
                                    <td>80</td>
                                    <td>10.120</td>
                                    {/* <td>887</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>0.50x1220mm (4 Ft)</td>
                                    <td>26 Swg</td>
                                    <td>80</td>
                                    <td>11.330</td>
                                    {/* <td>981</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>0.60x1220mm (4 Ft)</td>
                                    <td>24 Swg</td>
                                    <td>80</td>
                                    <td>13.660</td>
                                    {/* <td>1165</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>0.80x1220mm (4 Ft)</td>
                                    <td>22 Swg</td>
                                    <td>80</td>
                                    <td>18.100</td>
                                    {/* <td>1481</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>1.00x1220mm (4 Ft)</td>
                                    <td>20 Swg</td>
                                    <td>80</td>
                                    <td>22.620</td>
                                    {/* <td>1846</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>1.20x1220mm (4 Ft)</td>
                                    <td>18 Swg</td>
                                    <td>80</td>
                                    <td>27.150</td>
                                    {/* <td>2212</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>1.50x1220mm (4 Ft)</td>
                                    <td>16 Swg</td>
                                    <td>80</td>
                                    <td>35.250</td>
                                    {/* <td>2870</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">13</th>
                                    <td>1.60x1220mm (4 Ft)</td>
                                    <td>16 Swg</td>
                                    <td>80</td>
                                    <td>37.150</td>
                                    {/* <td>3025</td> */}
                                </tr>
                                <tr>
                                    <th scope="row">14</th>
                                    <td>2.00x1220mm (4 Ft)</td>
                                    <td>14 Swg</td>
                                    <td>80</td>
                                    <td>45.250</td>
                                    {/* <td>3684</td> */}
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h3>lorem ipsum</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum officiis deleniti perferendis doloribus labore sit tenetur molestias aspernatur, quaerat nemo iste placeat obcaecati at. Sapiente repellat nesciunt aut aliquam.
                        </div>

                        <div className="container mt-3">
                            <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal1" >
                                <div className="card-body">
                                    <h5 className="card-title">TATA</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2" >
                                <div className="card-body">
                                    <h5 className="card-title">JSW</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal2">Go somewhere</a>
                                </div>
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
                            <h5 className="modal-title" id="exampleModalLabel">TATA</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            TATA
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">JSW</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            JSW
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GISheets;