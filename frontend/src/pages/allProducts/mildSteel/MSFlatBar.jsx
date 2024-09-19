import Navbar from "../../../include/Navbar";
import logo from '../../../assets/Logo.jpg';

function MSFlatBar() {
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
                                    <th scope="col">Size (mm)</th>
                                    <th scope="col">Weight (Mtr)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>20 x 6</td>
                                    <td>0.942</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>25 x 3/5/6</td>
                                    <td>0.589 / 1.081 / 1.177</td>
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>32 x 6</td>
                                    <td>0.507</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>40 x 5/6</td>
                                    <td>1.57 / 1.884</td>
                                </tr>

                                <tr>
                                    <th scope="row">8</th>
                                    <td>50 x 5/6</td>
                                    <td>1.962 / 2.355</td>
                                </tr>

                                <tr>
                                    <th scope="row">10</th>
                                    <td>65 x 6/8</td>
                                    <td>3.06 / 4.08</td>
                                </tr>

                                <tr>
                                    <th scope="row">12</th>
                                    <td>75 x 6/8/10</td>
                                    <td>3.532 / 4.71 / 5.887</td>
                                </tr>

                                <tr>
                                    <th scope="row">15</th>
                                    <td>100 x 6/8/10/12</td>
                                    <td>4.71 / 6.28 / 7.85 / 9.42</td>
                                </tr>

                                <tr>
                                    <th scope="row">19</th>
                                    <td>150 x 6/10</td>
                                    <td>7.065 / 11.775</td>
                                </tr>

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

export default MSFlatBar;