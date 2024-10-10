import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function SSAngleChannelBeam() {
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

                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h6 className="text-center">
                                <span className="bg-warning p-2 d-inline-block">
                                    SS Angles & Channel Fe-415, 500, 550 as per IS 1785-1786 made up as per ISI Grade.
                                </span>
                            </h6>
                        </div>
                    </div>

                    <div className="row justify-content-center m-4">
                        <div className="col-md-6">
                            <ul className="list-group shadow-sm">
                                <li className="list-group-item list-group-item-primary">
                                    <strong>Size Range</strong>
                                </li>
                                <li className="list-group-item">25 mm 3/4/5/6</li>
                                <li className="list-group-item">30 mm 3/4</li>
                                <li className="list-group-item">33 mm 3/4</li>
                                <li className="list-group-item">40 mm 3/4/5/6</li>
                                <li className="list-group-item">50 mm 3/4/5/6</li>
                                <li className="list-group-item">65 mm 5/6/7</li>
                                <li className="list-group-item">75 mm 5/6/7</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default SSAngleChannelBeam;
