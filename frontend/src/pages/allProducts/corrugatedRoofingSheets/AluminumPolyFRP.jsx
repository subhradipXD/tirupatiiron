/* eslint-disable react/no-unescaped-entities */
import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function AluminumPolyFRP() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-2">
                        <img src={logo} alt="" style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div className="col-md-10">
                        <h3>lorem ipsum</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorum nulla voluptatum numquam, velit corrupti aliquid, unde facilis deserunt a adipisci alias dolores? Velit expedita voluptatem ut officia rerum eius.
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal1" >
                            <div className="card-body">
                                <h5 className="card-title">Aluminum</h5>
                                <p className="card-text">Roofs that match your modern outlook</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2" >
                            <div className="card-body">
                                <h5 className="card-title">Poly Carbonate</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal2">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal3">
                            <div className="card-body">
                                <h5 className="card-title">Fibre-Reinforced Plastic (FRP)</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal3">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal */}
            <div className="modal fade" id="cardModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Aluminum</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <p><strong>Mechanical Properties</strong></p>
                                    <table className="products-table-1 table table-bordered">
                                        <thead>
                                            <tr className="green">
                                                <th>Alloy</th>
                                                <th>Temper</th>
                                                <th colSpan={2}>UTS (MPa)</th>
                                                <th rowSpan={2}>Yield Stress (0.2% proof-stress)</th>
                                            </tr>
                                            <tr className="green">
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                                <th>Min</th>
                                                <th>Max</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ background: '#e2f1c1' }}>
                                                <td className="text-center">AA3003</td>
                                                <td className="text-center">H18</td>
                                                <td className="text-center">200</td>
                                                <td className="text-center">240</td>
                                                <td className="text-center">180</td>
                                            </tr>
                                            <tr style={{ background: '#f4fae7' }}>
                                                <td className="text-center">AA3105</td>
                                                <td className="text-center">H18</td>
                                                <td className="text-center">195</td>
                                                <td className="text-center">-</td>
                                                <td className="text-center">160</td>
                                            </tr>
                                            <tr style={{ background: '#e2f1c1' }}>
                                                <td className="text-center">AA8011</td>
                                                <td className="text-center">H18</td>
                                                <td className="text-center">175</td>
                                                <td className="text-center">-</td>
                                                <td className="text-center">140</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="MsoNormal">Hindalco Everlast aluminium trapezoidal sheets transform the traditional appearance of roofs by providing a modern alternative to its traditional corrugated roofing counterparts. When it comes to appearance, these aluminium troughed sheets look sleek and angular compared to the other alternatives.</p>
                                    <p className="MsoNormal">The wavy structure of the aluminium trapezoidal sheets proves to be durable and resistant to inevitable catastrophes such as storms, hails, and snowfalls. The design of these types of corrugated aluminium sheets ensures that they are lightweight and easy to work with and install.</p>
                                    <p className="MsoNormal">Hindalco Everlast also prides itself upon a fine selection of pre-painted troughed or trapezoidal sheets that can appeal to an extensive section of the crowd's aesthetic. One should consider Hindalco Everlast to meet their aluminium roofing needs because of the flexibility in our services. We let our customers customise the sheet based on their requirements without any limitations.</p>
                                    <p className="MsoNormal">Hindalco Everlast aluminium trapezoidal sheets are</p>
                                    <ul>
                                        <li>Customisable length available on order at a reasonable price</li>
                                        <li>Very flexible and are among the</li>
                                        <li>Most popular alternatives in the corrugated roofing market</li>
                                    </ul>
                                    <p className="MsoNormal"><strong>Modern and sophisticated designs.</strong></p>
                                    <p className="note-p">Note: Figures are indicative only.</p>
                                    <div className="layer">
                                        <img src="https://hindalcoeverlast.com/upload/product/164562371051.png" alt="Product1" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-12 mt-5 mb-5">
                                    <p><strong>Widths:</strong> 920 mm and 1044 mm.</p>
                                    <p><strong>Length:</strong> Hindalco Everlast Aluminium Sheets are available in lengths between 1500 mm and 6500 mm. Other lengths can be provided on request. Per unit weight may increase up to 3% in case of colour-coated sheets.</p>
                                    <table className="table table-striped table-hover table-bordered">
                                        <thead>
                                            <tr className="table-success">
                                                <th rowSpan="3" className="text-center align-middle">
                                                    Thickness<br />(mm)
                                                </th>
                                                <th colSpan="3" className="text-center align-middle">
                                                    Weight of Sheet (Kg)
                                                </th>
                                            </tr>
                                            <tr className="table-success">
                                                <th rowSpan="2" className="text-center align-middle">
                                                    Per Sq. Mtrs Sheet
                                                </th>
                                                <th colSpan="2" className="text-center align-middle">
                                                    Per Mtr Length
                                                </th>
                                            </tr>
                                            <tr className="table-success">
                                                <th className="text-center align-middle">7/125 (920 mm)</th>
                                                <th className="text-center align-middle">8/125 (1044 mm)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-light">
                                                <td className="text-center">1.22</td>
                                                <td className="text-center">4.33</td>
                                                <td className="text-center">3.97</td>
                                                <td className="text-center">4.50</td>
                                            </tr>
                                            <tr className="table-light">
                                                <td className="text-center">0.91</td>
                                                <td className="text-center">3.23</td>
                                                <td className="text-center">2.96</td>
                                                <td className="text-center">3.36</td>
                                            </tr>
                                            <tr className="table-light">
                                                <td className="text-center">0.71</td>
                                                <td className="text-center">2.50</td>
                                                <td className="text-center">2.31</td>
                                                <td className="text-center">2.62</td>
                                            </tr>
                                            <tr className="table-light">
                                                <td className="text-center">0.65</td>
                                                <td className="text-center">2.31</td>
                                                <td className="text-center">2.12</td>
                                                <td className="text-center">2.41</td>
                                            </tr>
                                            <tr className="table-light">
                                                <td className="text-center">0.56</td>
                                                <td className="text-center">1.96</td>
                                                <td className="text-center">1.82</td>
                                                <td className="text-center">2.07</td>
                                            </tr>
                                            <tr className="table-light">
                                                <td className="text-center">0.50</td>
                                                <td className="text-center">1.77</td>
                                                <td className="text-center">1.63</td>
                                                <td className="text-center">1.85</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Poly Carbonate</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Poly Carbonate
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Fibre-Reinforced Plastic (FRP)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Fibre-Reinforced Plastic (FRP)
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AluminumPolyFRP;