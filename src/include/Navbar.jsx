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
                            {/* <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/Products' ? 'active' : ''}`}
                                    aria-current={location.pathname === '/Products' ? 'page' : undefined}
                                    to="/Products"
                                >
                                    Products
                                </Link>
                            </li> */}

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
                                            <li><Link className="dropdown-item" to="/">MS Plate / Sheets</Link></li>
                                            <li><Link className="dropdown-item" to="/">MS Angle</Link></li>
                                            <li><Link className="dropdown-item" to="/">MS Channel</Link></li>
                                            <li><Link className="dropdown-item" to="/">MS Beam</Link></li>
                                            <li><Link className="dropdown-item" to="/">MS Round</Link></li>
                                            <li><Link className="dropdown-item" to="/">MS Square Bar</Link></li>
                                            <li><Link className="dropdown-item" to="/">MS Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Galvanized Iron(GI)
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/">GI Sheets</Link></li>
                                            <li><Link className="dropdown-item" to="/">GI Angle</Link></li>
                                            <li><Link className="dropdown-item" to="/">GI Channel</Link></li>
                                            <li><Link className="dropdown-item" to="/">GI Beam</Link></li>
                                            <li><Link className="dropdown-item" to="/">GI Round</Link></li>
                                            <li><Link className="dropdown-item" to="/">GI Square Bar</Link></li>
                                            <li><Link className="dropdown-item" to="/">GI Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Stainless Steel (SS)
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/">SS Plate / Sheets</Link></li>
                                            <li><Link className="dropdown-item" to="/">SS Angle</Link></li>
                                            <li><Link className="dropdown-item" to="/">SS Channel</Link></li>
                                            <li><Link className="dropdown-item" to="/">SS Beam</Link></li>
                                            <li><Link className="dropdown-item" to="/">SS Round</Link></li>
                                            <li><Link className="dropdown-item" to="/">SS Square Bar</Link></li>
                                            <li><Link className="dropdown-item" to="/">SS Flat Bar</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pipe And Hollow Section
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/">GI</Link></li>
                                            <li><Link className="dropdown-item" to="/">MS</Link></li>
                                            <li><Link className="dropdown-item" to="/">SS</Link></li>
                                            <li><Link className="dropdown-item" to="/">Seamless</Link></li>
                                        </ul>
                                    </li><li className="nav-item dropend">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Corrugated Roofing Sheets
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/">Color Coated</Link></li>
                                            <li><Link className="dropdown-item" to="/">GI</Link></li>
                                            <li><Link className="dropdown-item" to="/">Poly Carbonate</Link></li>
                                            <li><Link className="dropdown-item" to="/">FRP</Link></li>
                                            <li><Link className="dropdown-item" to="/">Aluminum</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="dropdown-item" to="/">Rail</Link></li>
                                    <li><Link className="dropdown-item" to="/">Cement</Link></li>
                                    <li><Link className="dropdown-item" to="/">Godrej Safes</Link></li>
                                    <li><Link className="dropdown-item" to="/">Hardware</Link></li>
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
