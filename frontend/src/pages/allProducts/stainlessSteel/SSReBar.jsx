import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function SSReBar() {
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

                <div className="mt-3">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h4 className="text-center mb-4">Stainless Steel Rebars</h4>
                            <p>
                                Stainless Steel Rebars offer significant advantages in construction, particularly in corrosive environments such as marine settings, chemical plants, and coastal infrastructure. Their superior corrosion resistance extends the service life of structures, preserving their integrity and reducing maintenance costs over time.
                            </p>
                            <ul className="list-group mb-4">
                                <li className="list-group-item">● Resistance to corrosion from Chloride Ion.</li>
                                <li className="list-group-item">● Reduced concrete cover needed.</li>
                                <li className="list-group-item">● Concrete sealant, like Silane, can be eliminated.</li>
                                <li className="list-group-item">● Simplified use of Concrete mix for design needs, not for protection needs.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row justify-content-center m-4">
                        <div className="col-md-8">
                            <h5 className="text-center bg-info text-white p-2">Specifications</h5>
                            <table className="table table-bordered table-striped mt-3">
                                <tbody>
                                    <tr>
                                        <th scope="row">Finish</th>
                                        <td>Pickled Surface</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Diameter (mm)</th>
                                        <td>8 – 32 mm</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Standard Length (mtrs)</th>
                                        <td>Coil form or 12 mtr</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Grade</th>
                                        <td>410L as per IS16651-2017</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default SSReBar;