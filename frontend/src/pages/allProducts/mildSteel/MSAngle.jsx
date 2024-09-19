import Navbar from "../../../include/Navbar";
import logo from '../../../assets/Logo.jpg';

function MSAngle() {
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
                                    <th scope="col">Size</th>
                                    <th scope="col">Weight(Kg/m)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Angle 25 × 25 × 3/5</td>
                                    <td>1.10 / 1.80</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Angle 30 × 30 × 3/5</td>
                                    <td>1.40 / 2.20</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Angle 35 × 35 × 3/5/6</td>
                                    <td>1.80 / 3.00 / 3.50</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Angle 40 × 40 × 5/6</td>
                                    <td>3.79 / 4.49</td>
                                </tr>

                                <tr>
                                    <th scope="row">5</th>
                                    <td>Angle 50 × 50 × 5/6</td>
                                    <td>3.79 / 4.49</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Angle 60 × 60 × 5/6/8</td>
                                    <td>4.50 / 5.40 / 7.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Angle 65 × 65 × 5/6/8/10</td>
                                    <td>4.98 / 5.91 / 7.73 / 9.49</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Angle 60 × 60 × 5/6</td>
                                    <td>5.30 / 6.30</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Angle 75 × 75 × 5/6/8/10</td>
                                    <td>5.77 / 6.86 / 9.00 / 11.07</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Angle 80 × 80 × 6/8/10</td>
                                    <td>7.36 / 9.65 / 11.88 / 14.05</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>Angle 90 × 90 × 6/8/10/12</td>
                                    <td>8.32 / 10.92 / 13.47 / 15.95</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>Angle 100 × 100 × 6/8/10/12</td>
                                    <td>9.26 / 12.18 / 15.04 / 17.83</td>
                                </tr>
                                <tr>
                                    <th scope="row">13</th>
                                    <td>Angle 150 × 150 × 10/12</td>
                                    <td>22.93 / 27.29</td>
                                </tr>
                                <tr>
                                    <th scope="row">14</th>
                                    <td>Angle 200 × 200 × 12/16/18/20/25</td>
                                    <td>36.85 / 48.53 / 54.30 / 59.96 / 73.90</td>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default MSAngle;