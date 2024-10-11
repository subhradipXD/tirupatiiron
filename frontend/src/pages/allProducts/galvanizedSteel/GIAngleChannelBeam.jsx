import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function GIAngleChannelBeam() {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-4">
                        <img src={logo} alt="" className="img-fluid rounded" />
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
                    <div className="col-md-4">
                        <div
                            className="card text-center mb-3 card-hover"
                            data-bs-toggle="modal"
                            data-bs-target="#cardModal1"
                        >
                            <div className="card-body">
                                <h5 className="card-title">GI Angle</h5>
                                <p className="card-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Assumenda commodi est cum, repudiandae cumque similique
                                    recusandae perspiciatis facilis beatae sequi eligendi, nulla
                                    velit autem vitae libero amet incidunt nesciunt dicta?
                                </p>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#cardModal1"
                                >
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="card text-center mb-3 card-hover"
                            data-bs-toggle="modal"
                            data-bs-target="#cardModal2"
                        >
                            <div className="card-body">
                                <h5 className="card-title">GI Channel</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Labore repellat explicabo aut cupiditate quia autem, facilis
                                    culpa ipsa similique optio nostrum assumenda vero. Porro
                                    facilis, illum maiores eum natus minus?
                                </p>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#cardModal2"
                                >
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="card text-center mb-3 card-hover"
                            data-bs-toggle="modal"
                            data-bs-target="#cardModal3"
                        >
                            <div className="card-body">
                                <h5 className="card-title">GI Beam</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                    corrupti ipsum tempora vero, iure repellat quod, temporibus
                                    animi magnam optio nemo. Impedit consequuntur natus modi et
                                    corrupti laborum consectetur ducimus.
                                </p>
                                <a
                                    href="#"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#cardModal3"
                                >
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}
            <div
                className="modal fade"
                id="cardModal1"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                GI Angle
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">GI Angle</div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="cardModal2"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                GI Channel
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">GI Channel</div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="cardModal3"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                GI Beam
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">GI Beam</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GIAngleChannelBeam;
