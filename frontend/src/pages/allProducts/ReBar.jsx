import Navbar from "../../include/Navbar";
import logo from "../../assets/Logo.jpg";
function ReBar() {
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
                            <h3>lorem ipsum</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus, ea animi earum illo pariatur, voluptatibus magni commodi, nam nemo id itaque cum in sed error provident officia incidunt debitis!
                        </div>
                    </div>
                </div>



                <div className="row mt-5">
                    <div className="col-md-6">
                        <h3>lorem ipsum</h3>
                        <table className="table table-hover table-striped-columns">
                            <thead>
                                <tr>
                                    <th scope="col">Sl. No.</th>
                                    <th scope="col">Diameter (mm)</th>
                                    <th scope="col">Weight (Kg/m)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>8</td>
                                    <td>0.395</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>10</td>
                                    <td>0.617</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>12</td>
                                    <td>0.888</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>16</td>
                                    <td>1.58</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>20</td>
                                    <td>2.47</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>22</td>
                                    <td>2.98</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>25</td>
                                    <td>3.85</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>28</td>
                                    <td>4.83</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>32</td>
                                    <td>6.31</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>36</td>
                                    <td>7.99</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>40</td>
                                    <td>9.85</td>
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
                                    <h5 className="card-title">NPB + WPB</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2" >
                                <div className="card-body">
                                    <h5 className="card-title">Universal Column (UC)</h5>
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
                            <h5 className="modal-title" id="exampleModalLabel">Card 1 Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Content for card 1 modal...
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Card 2 Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Content for card 2 modal...
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default ReBar;