import { Link } from "react-router-dom";
import Navbar from "../include/Navbar";


function products() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h3 className="mt-3 text-center">OUR PRODUCTS</h3>
                {/* row */}
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal1"  >
                            <div className="card-body">
                                <h5 className="card-title">Mild Steel (MS)</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2"  >
                            <div className="card-body">
                                <h5 className="card-title">Galvanized Iron (GI)</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal2">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal3"  >
                            <div className="card-body">
                                <h5 className="card-title">Stainless Steel (SS)</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal3">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* row */}
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal4"  >
                            <div className="card-body">
                                <h5 className="card-title">Pipe And Hollow Section</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal4">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal5"  >
                            <div className="card-body">
                                <h5 className="card-title">Corrugated Roofing Sheets</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal5">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover"  >
                            <div className="card-body">
                                <h5 className="card-title">Rail</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/Products/Rail" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover"  >
                            <div className="card-body">
                                <h5 className="card-title">Cement</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/Products/Cement" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover"  >
                            <div className="card-body">
                                <h5 className="card-title">Godrej Safes</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/Products/GodrejSafes" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal6"  >
                            <div className="card-body">
                                <h5 className="card-title">Hardware</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal6">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover"  >
                            <div className="card-body">
                                <h5 className="card-title">Building Product Solution</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="/Products/BuildingProductSolutions" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}
            <div className="modal fade" id="cardModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Mild Steel (MS)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group list-group-flush text-center">
                                <Link className="list-group-item" to="/Products/Mild-Steel/Plate-Sheets">MS Plate / Sheets</Link>
                                <Link className="list-group-item" to="/Products/Mild-Steel/Angle">MS Angle</Link>
                                <Link className="list-group-item" to="/Products/Mild-Steel/Channel">MS Channel</Link>
                                <Link className="list-group-item" to="/Products/Mild-Steel/Beam">MS Beam</Link>
                                <Link className="list-group-item" to="/Products/Mild-Steel/Round">MS Round</Link>
                                <Link className="list-group-item" to="/Products/Mild-Steel/Square-Bar">MS Square Bar</Link>
                                <Link className="list-group-item" to="/Products/Mild-Steel/Flat-Bar">MS Flat Bar</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Galvanized Iron (GI)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group list-group-flush text-center">
                                <Link className="list-group-item" to="/Products/Galvanized-Steel/Sheets">GI Sheets</Link>
                                <Link className="list-group-item" to="/Products/Galvanized-Steel/Angle">GI Angle</Link>
                                <Link className="list-group-item" to="/Products/Galvanized-Steel/Channel">GI Channel</Link>
                                <Link className="list-group-item" to="/Products/Galvanized-Steel/Beam">GI Beam</Link>
                                <Link className="list-group-item" to="/Products/Galvanized-Steel/Round">GI Round</Link>
                                <Link className="list-group-item" to="/Products/Galvanized-Steel/Square-Bar">GI Square Bar</Link>
                                <Link className="list-group-item" to="/Products/Galvanized-Steel/Flat-Bar">GI Flat Bar</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Stainless Steel (SS)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group list-group-flush text-center">
                                <Link className="list-group-item" to="/Products/Stainless-Steel/Plate-Sheets">SS Plate / Sheets</Link>
                                <Link className="list-group-item" to="/Products/Stainless-Steel/Angle">SS Angle</Link>
                                <Link className="list-group-item" to="/Products/Stainless-Steel/Channel">SS Channel</Link>
                                <Link className="list-group-item" to="/Products/Stainless-Steel/Beam">SS Beam</Link>
                                <Link className="list-group-item" to="/Products/Stainless-Steel/Round">SS Round</Link>
                                <Link className="list-group-item" to="/Products/Stainless-Steel/Square-Bar">SS Square Bar</Link>
                                <Link className="list-group-item" to="/Products/Stainless-Steel/Flat-Bar">SS Flat Bar</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Pipe And Hollow Section</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group list-group-flush text-center">
                                <Link className="list-group-item" to="/Products/Pipe-Hollow/GI-Pipe">GI</Link>
                                <Link className="list-group-item" to="/Products/Pipe-Hollow/MS-Pipe">MS</Link>
                                <Link className="list-group-item" to="/Products/Pipe-Hollow/SS-Pipe">SS</Link>
                                <Link className="list-group-item" to="/Products/Pipe-Hollow/Seamless-Pipe">Seamless</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Corrugated Roofing Sheets</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group list-group-flush text-center">
                                <Link className="list-group-item" to="/Products/Corrugated-Roofing-Sheets/ColorCoated">Color Coated</Link>
                                <Link className="list-group-item" to="/Products/Corrugated-Roofing-Sheets/GI-RoofingSheets">GI</Link>
                                <Link className="list-group-item" to="/Products/Corrugated-Roofing-Sheets/AluminumPolyFRP">Aluminum & Poly Carbonate & FRP</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Hardware</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group list-group-flush text-center">
                                <Link className="list-group-item" to="/Products/Hardware/TataAgriAndConstruction">Tata Agri and Construction Tools</Link>
                                <Link className="list-group-item" to="/Products/Hardware/TataHandTools">Tata Hand Tools</Link>
                                <Link className="list-group-item" to="/Products/Hardware/TataConsumables">Tata Consumables</Link>
                                <Link className="list-group-item" to="/Products/Hardware/TataGardenTools">Tata Garden Tools</Link>
                                <Link className="list-group-item" to="/Products/Hardware/TataWeldingElectrodes">Tata Welding Electrodes</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default products;