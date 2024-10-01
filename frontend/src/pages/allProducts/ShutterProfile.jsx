import Navbar from "../../include/Navbar";
import logo from '../../assets/Logo.jpg';

function ShutterProfile() {
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
                            <h3>Shutter Profile</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus, ea animi earum illo pariatur, voluptatibus magni commodi, nam nemo id itaque cum in sed error provident officia incidunt debitis!
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12">
                        <h3 className="text-center">TATA KOSH BRANDED ROUND PROFILE SHUTTER WITH THICKNESS EMBOSSING</h3>
                        <table className="table table-hover table-striped-columns mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Sl. No.</th>
                                    <th scope="col">Thickness(MM)</th>
                                    <th scope="col">Swg</th>
                                    <th scope="col">GSM</th>
                                    <th scope="col">Weight Approx Per R.Ft</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Shutter 0.80x128.5</td>
                                    <td>22 Swg</td>
                                    <td>80</td>
                                    <td>0.240</td>

                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Shutter 1.00x128.5</td>
                                    <td>20 Swg</td>
                                    <td>80</td>
                                    <td>0.300</td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Shutter 1.20x128.5</td>
                                    <td>18 swg</td>
                                    <td>80</td>
                                    <td>0.360</td>

                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>


                <div className="row mt-3">
                    <div className="col-md-12">
                        <h3 className="text-center">TATA KOSH BRANDED FLAT PROFILE SHUTTER WITH THICKNESS EMBOSSING</h3>
                        <table className="table table-hover table-striped-columns mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Sl. No.</th>
                                    <th scope="col">Thickness(MM)</th>
                                    <th scope="col">Swg</th>
                                    <th scope="col">GSM</th>
                                    <th scope="col">Weight Approx Per R.Ft</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Shutter 0.80x150</td>
                                    <td>22 Swg</td>
                                    <td>80</td>
                                    <td>0.285</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Shutter 1.00x150</td>
                                    <td>20 Swg</td>
                                    <td>80</td>
                                    <td>0.356</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Shutter 1.20x150</td>
                                    <td>18 swg</td>
                                    <td>80</td>
                                    <td>0.427</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ShutterProfile;