/* eslint-disable react/no-unescaped-entities */
import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";
function ColorCoated() {
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
                            <img src="https://th.bing.com/th/id/OIP.kBiUrxcxVuVVpyIE0yBwrgHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.2&pid=1.7" className="card-img-top" alt="Product 1" />

                            <div className="card-body">
                                <h5 className="card-title">TATA</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2" >
                            <img src="https://companieslogo.com/img/orig/JSWSTEEL.NS-5d2dda26.png" className="card-img-top" alt="Product 1" />

                            <div className="card-body">
                                <h5 className="card-title">JSW</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal2">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal3">
                            <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/HM/VO/RC/39899039/ppgi-ppgl-profile-sheets-500x500.jpg" className="card-img-top" alt="Product 1" />
                            <div className="card-body">
                                <h5 className="card-title">Bhusan</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                {/* <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal3">Go somewhere</a> */}
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
                            <h5 className="modal-title" id="exampleModalLabel">TATA</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <img src="https://www.bluescopelanka.com/images/logos/lysaght_logo.png" className="card-img-top" alt="Product 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">LYSAGHT®</h5>
                                            <p className="card-text">The legendary LYSAGHT® range of Roofing and Wall Cladding products is renowned for its strength, innovation and design flexibility and has shaped many architectural landmarks in its history of 150 years. The brand’s product superiority is well complemented by Tata BlueScope Steel’s expertise in offering customised solutions for diverse applications in industrial, infrastructure and commercial segments in India. LYSAGHT® range of premium building products are manufactured from high-quality ZINCALUME® steel and COLORBOND® steel. The range of products includes Roofing sheets, Wall Cladding sheets, Decking sheets, Purlins, Solar Mounting Structures and allied accessories.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <img src="https://i0.wp.com/manglas.com/wp-content/uploads/2022/10/kpjhihglight-02-1024x547-1.png" className="card-img-top" alt="Product 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">DURASHINE®</h5>
                                            <p className="card-text">DURASHINE® is the flagship retail brand of Tata BlueScope Steel, which offers colour coated profile sheets in form of roof and wall solutions. The brand manufactures and sells roll formed colour coated steel roof & wall sheets, structural products and accessories. DURASHINE® offers aesthetically superior and durable roofing solutions for residential, commercial and industrial applications. Launched in the year 2008, the brand has won several awards and is the most preferred choice in this segment. Recently DURASHINE® has been recognised as “Asia’s Most Trusted Brand for Best Color Coated Steel Sheet Category by International Brand Consulting Corporation, USA.</p>
                                        </div>
                                    </div>
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
                            <h5 className="modal-title" id="exampleModalLabel">JSW</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <img src="https://www.jswcoatedsteel.in/jsw-colouron-plus/images/colouronPlus-webbanner2.jpg" className="card-img-top" alt="Product 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Colouron+</h5>
                                            <h6 className="card-title">Premium Colour Coated Roofing Sheets</h6>
                                            <p className="card-text">
                                                <strong>FEATURES</strong>
                                                <ul>
                                                    <li>JSW Colouron+ comes with Anti – Corrosion Technology that prevents early corrosion of steel and substantially increases the life of the roof.</li>
                                                    <li>JSW Colouron+ withstands all kinds of weather be it heavy rains, salty sea air, humid coastal areas, cold snow areas or heat.</li>
                                                    <li>Strength</li>
                                                    <ul>
                                                        <li>JSW Colouron+ is made from Pure Steel. This ensures maximum strength for every sheet of the colour coated steel.</li>
                                                        <li>The consistency of the steel leads to very high quality and strength.</li>
                                                        <li>JSW Colouron+ is light weight high tensile sheet. It offers a yield strength of min 550 mpa and 770 mpa to meet the needs of various application.</li>
                                                        <li>The light weight, high strength combination requires lighter supporting structure and also reduces transportation cost and they are virtually maintaince free.</li>
                                                    </ul>
                                                    <li>JSW uses a superior paint technology that provides additional protection for longer life. The superior paint technology resists cracking and peeling even of paint. Ordinary paint starts fading very fast and in 1-2 years the roof starts looking dull and old. It ensures that the roof looks new for many years providing additional beauty to your house</li>
                                                    <li>JSW Colouron+ is India's only ISI certified colour coated sheets which shows the commitment of JSW towards world class products.</li>
                                                    <li>JSW Colouron+ goes through more than 20 stringent quality tests to ensure best quality product is supplied to the customers.</li>
                                                    <li>Al-Zn Coating</li>
                                                    <ul>
                                                        <li>JSW Steel is the first licensee of Galvalume in India.</li>
                                                        <li>Galvalume products offer superior corrosion resistance compared to other coating technologies making your roof last longer even in the harshest of weather conditions.</li>
                                                    </ul>
                                                    <li>Advanced Technology</li>
                                                    <ul>
                                                        <li>JSW Steel uses the latest technology from all over the world, be it Japan or USA or Italy to manufacture steel and steel products.</li>
                                                        <li>The manufacturing of JSW Colouron+ Sheets includes latest global technology and the best machinery to ensure the highest level of safety, long life and beauty for your home.</li>
                                                    </ul>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card h-100">
                                        <img src="https://www.jswcoatedsteel.in/jsw-pragati/images/warrnaty-banner.jpg" className="card-img-top" alt="Product 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Pragati+</h5>
                                            <h6 className="card-title">Colour Coated Sheets</h6>
                                            <p className="card-text">
                                                <strong>FEATURES</strong>
                                                <ul>
                                                    <li>JSW Colouron+ comes with Anti – Corrosion Technology that prevents early corrosion of steel and substantially increases the life of the roof.</li>
                                                    <li>JSW Colouron+ withstands all kinds of weather be it heavy rains, salty sea air, humid coastal areas, cold snow areas or heat.</li>
                                                    <li>Strength</li>
                                                    <ul>
                                                        <li>JSW Colouron+ is made from Pure Steel. This ensures maximum strength for every sheet of the colour coated steel.</li>
                                                        <li>The consistency of the steel leads to very high quality and strength.</li>
                                                        <li>JSW Colouron+ is light weight high tensile sheet. It offers a yield strength of min 550 mpa and 770 mpa to meet the needs of various application.</li>
                                                        <li>The light weight, high strength combination requires lighter supporting structure and also reduces transportation cost and they are virtually maintaince free.</li>
                                                    </ul>
                                                    <li>Al-Zn Coating</li>
                                                    <ul>
                                                        <li>JSW Steel is the first licensee of Galvalume in India.</li>
                                                        <li>Galvalume products offer superior corrosion resistance compared to other coating technologies making your roof last longer even in the harshest of weather conditions.</li>
                                                    </ul>
                                                    <li>Wide range of colors</li>
                                                    <li>7 years of warranty</li>
                                                </ul>
                                                <strong>SPECIFICATIONS</strong>
                                                <table className="table table-striped table-bordered table-hover">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th>Specification</th>
                                                            <th>Details</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>Thickness Range</th>
                                                            <td>0.25 - 1.5 mm</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Width Range</th>
                                                            <td>Up to 1440 mm</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Length (mm)</th>
                                                            <td>Up to 12000 mm (39 Feet)</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Profile Types</th>
                                                            <td>Trapezoidal, Single Ribbed, Double Ribbed, Mangalore Tiles, Corrugated</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="modal fade" id="cardModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Fibre-Reinforced Plastic (FRP)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bhusan
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default ColorCoated;