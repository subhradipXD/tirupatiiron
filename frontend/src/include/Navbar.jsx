import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import './navbar.css';


function Navbar() {
    const location = useLocation(); // Get the current location for active link

    return (
        <>
            <div className="d-flex align-items-center ps-3 pt-3">
                <img src={Logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
                <div className="ms-3">
                    <div className="fs-1">TIRUPATI IRON</div>
                    <div>COMMERCIAL PRIVATE LIMITED</div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ps-4 sticky-top">
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
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Mild Steel (MS)
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/Products/Mild-Steel/Plate-Sheets">MS Plate / Sheets</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Mild-Steel/Angle">MS Angle</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Mild-Steel/Channel">MS Channel</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Mild-Steel/Beam">MS Beam</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Mild-Steel/Round">MS Round</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Mild-Steel/Square-Bar">MS Square Bar</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Mild-Steel/Flat-Bar">MS Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Galvanized Iron(GI)
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/Products/Galvanized-Steel/Sheets">GI Sheets</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Galvanized-Steel/Angle">GI Angle</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Galvanized-Steel/Channel">GI Channel</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Galvanized-Steel/Beam">GI Beam</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Galvanized-Steel/Round">GI Round</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Galvanized-Steel/Square-Bar">GI Square Bar</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Galvanized-Steel/Flat-Bar">GI Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Stainless Steel (SS)
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/Products/Stainless-Steel/Plate-Sheets">SS Plate / Sheets</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Stainless-Steel/Angle">SS Angle</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Stainless-Steel/Channel">SS Channel</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Stainless-Steel/Beam">SS Beam</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Stainless-Steel/Round">SS Round</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Stainless-Steel/Square-Bar">SS Square Bar</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Stainless-Steel/Flat-Bar">SS Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pipe And Hollow Section
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/Products/Pipe-Hollow/GI-Pipe">GI</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Pipe-Hollow/MS-Pipe">MS</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Pipe-Hollow/SS-Pipe">SS</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Pipe-Hollow/Seamless-Pipe">Seamless</Link></li>
                                        </ul>
                                    </li><li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Corrugated Roofing Sheets
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/Products/Corrugated-Roofing-Sheets/ColorCoated">Color Coated</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Corrugated-Roofing-Sheets/GI-RoofingSheets">GI</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Corrugated-Roofing-Sheets/PolyCarbonate">Poly Carbonate</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Corrugated-Roofing-Sheets/FRP">FRP</Link></li>
                                            <li><Link className="dropdown-item" to="/Products/Corrugated-Roofing-Sheets/Aluminum">Aluminum</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="dropdown-item" to="/Products/Rail">Rail</Link></li>
                                    <li><Link className="dropdown-item" to="/Products/Cement">Cement</Link></li>
                                    <li><Link className="dropdown-item" to="/Products/GodrejSafes">Godrej Safes</Link></li>
                                    <li><Link className="dropdown-item" to="/Products/Hardware">Hardware</Link></li>
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
