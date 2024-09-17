import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import './navbar.css';


function Navbar() {
    const location = useLocation();

    return (
        <>
            <div className="d-flex align-items-center ps-3 pt-3">
                <img src={Logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
                <div className="ms-3">
                    <div className="fs-1">TIRUPATI IRON</div>
                    <div>COMMERCIAL PRIVATE LIMITED</div>
                </div>

                <div className="ms-auto d-none d-lg-block me-5 pe-5">
                    <div className="text-end">
                        <div><strong>Phone:</strong> +91 9434035673</div>
                        <div><strong>Email: </strong><a
                            href="mailto:contact@tirupatiiron.com"
                            className="text-decoration-none"
                        >
                            contact@tirupatiiron.com
                        </a></div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ps-4 sticky-top z-10">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                    aria-current={location.pathname === '/' ? 'page' : undefined}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu mt-0 pt-0">
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle ms-3 ms-sm-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Mild Steel (MS)
                                        </a>
                                        <ul className="dropdown-menu ms-0 ps-0">
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Plate-Sheets">MS Plate / Sheets</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Angle">MS Angle</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Channel">MS Channel</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Beam">MS Beam</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Round">MS Round</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Square-Bar">MS Square Bar</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Flat-Bar">MS Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle ms-3 ms-sm-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Galvanized Iron (GI)
                                        </a>
                                        <ul className="dropdown-menu ms-0 ps-0">
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/Sheets">GI Sheets</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/Angle">GI Angle</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/Channel">GI Channel</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/Beam">GI Beam</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/Round">GI Round</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/Square-Bar">GI Square Bar</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/Flat-Bar">GI Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle ms-3 ms-sm-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Stainless Steel (SS)
                                        </a>
                                        <ul className="dropdown-menu ms-0 ps-0">
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Plate-Sheets">SS Plate / Sheets</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Angle">SS Angle</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Channel">SS Channel</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Beam">SS Beam</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Round">SS Round</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Square-Bar">SS Square Bar</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Flat-Bar">SS Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle ms-3 ms-sm-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pipe And Hollow Section
                                        </a>
                                        <ul className="dropdown-menu ms-0 ps-0">
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/GI-Pipe">GI</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/MS-Pipe">MS</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/SS-Pipe">SS</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/Seamless-Pipe">Seamless</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle ms-3 ms-sm-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Corrugated Roofing Sheets
                                        </a>
                                        <ul className="dropdown-menu ms-0 ps-0">
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Corrugated-Roofing-Sheets/ColorCoated">Color Coated</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Corrugated-Roofing-Sheets/GI-RoofingSheets">GI</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Corrugated-Roofing-Sheets/AluminumPolyFRP">Aluminum & Poly Carbonate & FRP</Link></li>
                                        </ul>
                                    </li>

                                    <li><Link className="dropdown-item" to="/Products/Cement">Cement</Link></li>

                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle ms-3 ms-sm-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Hardware
                                        </a>
                                        <ul className="dropdown-menu ms-0 ps-0">
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Hardware/TataAgriAndConstruction">Tata Agri & Construction Tools</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Hardware/TataHandTools">Tata Hand Tools</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Hardware/TataConsumables">Tata Consumables</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Hardware/TataGardenTools">Tata Garden Tools</Link></li>
                                            <li><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Hardware/TataWeldingElectrodes">Tata Welding Electrodes</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="dropdown-item" to="/Products/Rail">Rail</Link></li>
                                    <li><Link className="dropdown-item" to="/Products/GodrejSafes">Godrej Safes</Link></li>
                                    <li><Link className="dropdown-item" to="/Products/BuildingProductSolutions">Building Product Solution</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/AboutUs' ? 'active' : ''}`}
                                    aria-current={location.pathname === '/AboutUs' ? 'page' : undefined}
                                    to="/AboutUs"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/ContactUs' ? 'active' : ''}`}
                                    aria-current={location.pathname === '/ContactUs' ? 'page' : undefined}
                                    to="/ContactUs"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
