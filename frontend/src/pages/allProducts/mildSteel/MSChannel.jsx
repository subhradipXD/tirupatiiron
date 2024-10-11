import Navbar from "../../../include/Navbar";
import channel from "../../../assets/MS/ms-channel.jpg"
function MSChannel() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-md-4">
                        <img src={channel} alt="" className="img-fluid rounded" />
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
                                    <th scope="col">Size</th>
                                    <th scope="col">Weight(Kg/m)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>MC 75 × 40</td>
                                    <td>7.14</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>MC 100 × 50</td>
                                    <td>9.56</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>MC 125 × 65</td>
                                    <td>13.10</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>MC 150 × 75</td>
                                    <td>16.80</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>MC 200 × 75</td>
                                    <td>22.30</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>MC 250 × 82</td>
                                    <td>34.20</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>MC 300 × 90</td>
                                    <td>36.30</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>MC 400 × 100</td>
                                    <td>50.10</td>
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

export default MSChannel;