import Navbar from "../../include/Navbar";
import logo from "../../assets/Logo.jpg";
function Rail() {
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
                    <div>
                        {/* Table 1 */}
                        <div className="table-responsive">
                            <table className="table table-hover table-striped-columns">
                                <tbody>
                                    <tr>
                                        <td>Specification :</td>
                                        <td colSpan={3}>IRS T12 2009 Gr 880 Class B Prime Quality, UIC 52 &amp; UIC 60 K.G.</td>
                                    </tr>
                                    <tr>
                                        <td>Size Ranges :</td>
                                        <td colSpan={3}>13 Meter Length (10% of Short Length in 9 – 12 Meters)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Table 2 */}
                        <div className="table-responsive">
                            <table className="table table-hover table-striped-columns">
                                <thead>
                                    <tr>
                                        <th colSpan={9}><em>Chemical Composition (Percentage)</em></th>
                                        <th colSpan={3}><em>Mechanical Properties</em></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>GRADE</td>
                                        <td>C</td>
                                        <td>Mn</td>
                                        <td>Si</td>
                                        <td>S (Max) *</td>
                                        <td>P (Max) *</td>
                                        <td>A1 (Max)</td>
                                        <td>Mo (Max)</td>
                                        <td>Hydrogen content in liquid steel (Max)</td>
                                        <td>UTS (Mpa) Minimum</td>
                                        <td>Elongation % on gauge length = 5.65v̄ So Minimum</td>
                                        <td>Running Surface Hardness **</td>
                                    </tr>
                                    <tr>
                                        <td>880</td>
                                        <td>0.60-0.80</td>
                                        <td>0.80-1.30</td>
                                        <td>0.10-0.50</td>
                                        <td>0.030</td>
                                        <td>0.030</td>
                                        <td>0.015</td>
                                        <td>-</td>
                                        <td>1.6</td>
                                        <td>880</td>
                                        <td>10.0</td>
                                        <td>Min.260</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={12}>So = Cross sectional area of tensile test piece in mm²</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={12}>* 0.040 maximum for finished rail.</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={12}>** Desirable Value</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Table 3 */}
                        <div className="table-responsive">
                            <table className="table table-hover table-striped-columns">
                                <thead>
                                    <tr>
                                        <th>Quality Parameter/Criteria</th>
                                        <th>UIC Specification</th>
                                        <th>EURO Norm</th>
                                        <th>*IRS T-12 2009 Specification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Hydrogen</td>
                                        <td>&lt;3 PPM</td>
                                        <td>&lt;2.5 PPM</td>
                                        <td>&lt;1.6 PPM</td>
                                    </tr>
                                    <tr>
                                        <td>UTS (Mpa)</td>
                                        <td>880</td>
                                        <td>880</td>
                                        <td>880</td>
                                    </tr>
                                    <tr>
                                        <td>Elongation (%)</td>
                                        <td>10%</td>
                                        <td>10%</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <td>Reduction Ratio</td>
                                        <td>8</td>
                                        <td>9</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>Hardness (BHN)</td>
                                        <td>260</td>
                                        <td>260</td>
                                        <td>260</td>
                                    </tr>
                                    <tr>
                                        <td>Fracture Toughness (Mpavm)</td>
                                        <td>N.S.</td>
                                        <td>29-35</td>
                                        <td>29</td>
                                    </tr>
                                    <tr>
                                        <td>Telegue Strength (Mpa/m)</td>
                                        <td>N.S.</td>
                                        <td>300 (5 Million Cycles)</td>
                                        <td>285 (10 Million cycles)</td>
                                    </tr>
                                    <tr>
                                        <td>Residual Stress (N/sq.mm)</td>
                                        <td>N.S.</td>
                                        <td>250</td>
                                        <td>123.2 (14% of UTS)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p><strong>* IRS denotes Indian Railway Specification.</strong></p>
                </div>

            </div>
        </>
    );
}

export default Rail;