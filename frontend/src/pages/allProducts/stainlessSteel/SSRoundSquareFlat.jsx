import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function SSRoundSquareFlat() {
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
                        <h3>lorem ipsum</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                        dolorum nulla voluptatum numquam, velit corrupti aliquid, unde
                        facilis deserunt a adipisci alias dolores? Velit expedita voluptatem
                        ut officia rerum eius.
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
                                <h5 className="card-title">SS Round Bar</h5>
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
                                <h5 className="card-title">SS Square bar</h5>
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
                                <h5 className="card-title">SS Flat Bar</h5>
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
                                SS Round Bar
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">SS Round Bar</div>
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
                                SS Square Bar
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">SS Square Bar</div>
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
                                SS Flat Bar
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">SS Flat Bar</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SSRoundSquareFlat;