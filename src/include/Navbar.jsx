import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

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
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${location.pathname === '/Products' ? 'active' : ''}`}
                                    aria-current={location.pathname === '/Products' ? 'page' : undefined}
                                    to="/Products"
                                >
                                    Products
                                </Link>
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
