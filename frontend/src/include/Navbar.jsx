import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo2.png";
import './navbar.css';
import { useState } from "react";


function Navbar() {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const [openSubDropdown, setOpenSubDropdown] = useState(null); // Track which sub-dropdown is open
    const [openNestedSubDropdown, setOpenNestedSubDropdown] = useState(null); // Track nested sub-dropdown

    const toggleDropdown = (dropdownName) => {
        if (openDropdown === dropdownName) {
            setOpenDropdown(null); // Close the dropdown if clicked again
            setOpenSubDropdown(null); // Close sub-dropdown if main dropdown closes
        } else {
            setOpenDropdown(dropdownName); // Open clicked dropdown
            setOpenSubDropdown(null); // Reset sub-dropdown
        }
    };

    const toggleSubDropdown = (subDropdownName) => {
        if (openSubDropdown === subDropdownName) {
            setOpenSubDropdown(null); // Close sub-dropdown
            setOpenNestedSubDropdown(null); // Close nested sub-dropdown
        } else {
            setOpenSubDropdown(subDropdownName); // Open sub-dropdown
            setOpenNestedSubDropdown(null); // Reset nested sub-dropdown
        }
    };

    const toggleNestedSubDropdown = (nestedSubDropdownName) => {
        if (openNestedSubDropdown === nestedSubDropdownName) {
            setOpenNestedSubDropdown(null); // Close nested sub-dropdown
        } else {
            setOpenNestedSubDropdown(nestedSubDropdownName); // Open nested sub-dropdown
        }
    };

    return (
        <>
            <div className="d-flex align-items-center ps-3 pt-3">
                <img src={Logo} alt="Logo" style={{ width: '70px', height: '70px' }} />
                <div className="ms-3">
                    <div className="fs-1">AMI BHOGOBAN</div>
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

            <nav className="navbar navbar-expand-lg bg-body-tertiary ps-4 sticky-top z-10 mt-3 nav-underline">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" style={{ width: '35px', height: '35px' }} />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
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
                                <button
                                    className="nav-link dropdown-toggle"
                                    type="button"
                                    onClick={() => toggleDropdown('PRODUCT')}
                                >
                                    Products
                                </button>
                                {openDropdown === 'PRODUCT' && (
                                    <ul className="dropdown-menu show">
                                        <li><Link className="dropdown-item" to="/Products/Re-Bar">Re-Bar</Link></li>
                                        <li>
                                            <button
                                                className="dropdown-item dropdown-toggle"
                                                onClick={() => toggleSubDropdown('Product1')}
                                            >
                                                Mild Steel (MS)
                                            </button>
                                            {openSubDropdown === 'Product1' && (
                                                <ul className="dropdown-submenu show">
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Angle">MS Angle</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Channel">MS Channel</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Beam">MS Beam</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Round">MS Round</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Square-Bar">MS Square Bar</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Flat-Bar">MS Flat Bar</Link></li>
                                                </ul>
                                            )}
                                        </li>

                                        <li>
                                            <button
                                                className="dropdown-item dropdown-toggle"
                                                onClick={() => toggleSubDropdown('Product2')}
                                            >
                                                MS Plate & Sheets
                                            </button>
                                            {openSubDropdown === 'Product2' && (
                                                <ul className="dropdown-submenu show">
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Plate-Sheets/MS-Plate">MS Plate</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Plate-Sheets/MS-Sheets">MS Sheets</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Mild-Steel/Plate-Sheets/MS-Checkered-Sheets">MS Checkered Sheets</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item dropdown-toggle"
                                                onClick={() => toggleSubDropdown('Product3')}
                                            >
                                                Galvanized Iron (GI)
                                            </button>
                                            {openSubDropdown === 'Product3' && (
                                                <ul className="dropdown-submenu show">
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/Sheets">GI Sheets</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/AngleChannelBeam">GI Angle & Channel & Beam</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Galvanized-Steel/RoundSquareFlat">GI Round & Square & Flat Bar</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item dropdown-toggle"
                                                onClick={() => toggleSubDropdown('Product4')}
                                            >
                                                Stainless Steel (SS)
                                            </button>
                                            {openSubDropdown === 'Product4' && (
                                                <ul className="dropdown-submenu show">
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Sheets">SS Plate Sheets</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/AngleChannelBeam">SS Angle & Channel</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Flat">SS Flat</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/BrightBar">SS Bright Bar</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Stainless-Steel/Re-Bar">SS Re-Bar</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item dropdown-toggle"
                                                onClick={() => toggleSubDropdown('Product5')}
                                            >
                                                Pipe And Hollow Section
                                            </button>
                                            {openSubDropdown === 'Product5' && (
                                                <ul className="dropdown-submenu show">
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/GI-Pipe">GI</Link></li>
                                                    {/* Nested dropdown */}
                                                    <li className="list-group-item">
                                                        <button
                                                            className="dropdown-item dropdown-toggle"
                                                            onClick={() => toggleNestedSubDropdown('Product5Nested')}
                                                        >
                                                            MS
                                                        </button>
                                                        {openNestedSubDropdown === 'Product5Nested' && (
                                                            <ul className="dropdown-submenu show">
                                                                <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/MS/MS-Pipe">MS Pipe</Link></li>
                                                                <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/MS/YST-210">YST-210</Link></li>
                                                                <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/MS/YST-310-355">YST-310 & 355</Link></li>
                                                            </ul>
                                                        )}
                                                    </li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/SS-Pipe">SS</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Pipe-Hollow/Seamless-Pipe">Seamless</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <button
                                                className="dropdown-item dropdown-toggle"
                                                onClick={() => toggleSubDropdown('Product6')}
                                            >
                                                Corrugated Roofing Sheets
                                            </button>
                                            {openSubDropdown === 'Product6' && (
                                                <ul className="dropdown-submenu show">
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Corrugated-Roofing-Sheets/ColorCoated">Color Coated</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Corrugated-Roofing-Sheets/GI-RoofingSheets">GI</Link></li>
                                                    <li className="list-group-item"><Link className="dropdown-item mt-2 mb-2 pt-2 pb-2" to="/Products/Corrugated-Roofing-Sheets/AluminumPolyFRP">Aluminum & Poly Carbonate & FRP</Link></li>
                                                </ul>
                                            )}
                                        </li>
                                        <li><Link className="dropdown-item" to="/Products/Cement">Cement</Link></li>
                                        <li><Link className="dropdown-item" to="/Products/Hardware">Hardware</Link></li>
                                        <li><Link className="dropdown-item" to="/Products/Rail">Rail</Link></li>
                                        <li><Link className="dropdown-item" to="/Products/GodrejSafes">Godrej Safes</Link></li>
                                        <li><Link className="dropdown-item" to="/Products/BuildingProductSolutions">Building Product Solution</Link></li>
                                        <li><Link className="dropdown-item" to="/Products/ShutterProfile">Shutter Profile</Link></li>
                                    </ul>
                                )}
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
