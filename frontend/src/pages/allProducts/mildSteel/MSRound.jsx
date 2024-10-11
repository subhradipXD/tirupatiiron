import Navbar from "../../../include/Navbar";
import round from "../../../assets/MS/ms-round-bar.jpeg"

function MSRound() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-4">
                        <img src={round} alt="" className="img-fluid rounded" />
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
                                    <th scope="col">Size (mm)</th>
                                    <th scope="col">Weight (Kg/Mtr)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>12</td>
                                    <td>0.89</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>16</td>
                                    <td>1.58</td>
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>20</td>
                                    <td>2.47</td>
                                </tr>

                                <tr>
                                    <th scope="row">4</th>
                                    <td>25</td>
                                    <td>3.85</td>
                                </tr>

                                <tr>
                                    <th scope="row">5</th>
                                    <td>32</td>
                                    <td>6.31</td>
                                </tr>

                                <tr>
                                    <th scope="row">6</th>
                                    <td>40</td>
                                    <td>9.86</td>
                                </tr>

                                <tr>
                                    <th scope="row">7</th>
                                    <td>50</td>
                                    <td>15.41</td>
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

export default MSRound;