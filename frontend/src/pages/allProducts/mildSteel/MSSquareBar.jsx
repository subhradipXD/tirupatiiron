import Navbar from "../../../include/Navbar";
import logo from '../../../assets/Logo.jpg';

function MSSquareBar() {
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
                                    <th scope="col">Weight (Kg/Mtr)</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th scope="row">1</th>
                                    <td>10 x 10</td>
                                    <td>0.785</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>12 x 12</td>
                                    <td>1.130</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>16 x 16</td>
                                    <td>2.099</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>20 x 20</td>
                                    <td>3.140</td>
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

export default MSSquareBar;