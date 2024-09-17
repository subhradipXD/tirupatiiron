import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function AluminumPolyFRP() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-2">
                        <img src={logo} alt="" style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div className="col-md-10">
                        <h3>lorem ipsum</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorum nulla voluptatum numquam, velit corrupti aliquid, unde facilis deserunt a adipisci alias dolores? Velit expedita voluptatem ut officia rerum eius.
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal1" >
                            <div className="card-body">
                                <h5 className="card-title">Aluminum</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2" >
                            <div className="card-body">
                                <h5 className="card-title">Poly Carbonate</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal2">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal3">
                            <div className="card-body">
                                <h5 className="card-title">Fibre-Reinforced Plastic (FRP)</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal3">Go somewhere</a>
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
                            <h5 className="modal-title" id="exampleModalLabel">Aluminum</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Aluminum
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Poly Carbonate</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Poly Carbonate
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Fibre-Reinforced Plastic (FRP)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Fibre-Reinforced Plastic (FRP)
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AluminumPolyFRP;