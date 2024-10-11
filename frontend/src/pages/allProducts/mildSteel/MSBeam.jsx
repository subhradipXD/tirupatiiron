import Navbar from "../../../include/Navbar";
import beam from "../../../assets/MS/ms-beam.jpg"


function MSBeam() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-4">
                        <img src={beam} alt="" className="img-fluid rounded" />
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
                        <h3>lorem ipsum</h3>
                        <table className="table table-hover table-striped-columns">
                            <thead>
                                <tr>
                                    <th scope="col">Sl. No.</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Weight(Kg/m)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>MB 100 × 50</td>
                                    <td>8.95</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>MB 150 × 75</td>
                                    <td>14.96</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>MB 200 × 100</td>
                                    <td>24.17</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>MB 250 × 125</td>
                                    <td>37.30</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>MB 300 × 140</td>
                                    <td>46.02</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>MB 350 × 140</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>MB 400 × 140</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>MB 450 × 150</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>MB 500 × 180</td>
                                    <td>Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>MB 650 × 190</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>MB 600 × 210</td>
                                    <td>Thornton</td>
                                </tr>
                                {/* <tr>
                                    <th scope="row">3</th>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr> */}
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
                                    <h5 className="card-title">NPB & WPB</h5>
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

                            <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal3" >
                                <div className="card-body">
                                    <h5 className="card-title">Universal Beam (UB)</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal3">Go somewhere</a>
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

            <div className="modal fade" id="cardModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Card 3 Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Content for card 3 modal...
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MSBeam;