import Navbar from "../../include/Navbar";
import logo from "../../assets/Logo.jpg";
import AgriAndAlliedBusiness from "../../assets/pdf/Agri-RCP (1).pdf";
import IndustrialAndHardwareConsumables from "../../assets/pdf/Consumables_MRP_Jul22-Compressed (1).pdf";
import TradeHandTools from "../../assets/pdf/GPHT-June23-compressed (1).pdf";

function Hardware() {
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
                        <div className="card text-center mb-3 card-hover"  >
                            <img src="http://www.tataagrico.com/wp-content/uploads/2022/04/1-April_Agri-Icon.png" className="card-img-top" alt="Product 1" />

                            <div className="card-body">
                                <h5 className="card-title">Agri & Allied Business</h5>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">View Products</a>
                                <a href={AgriAndAlliedBusiness} className="ms-2 btn btn-warning" download>Download PDF</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover">
                            <div className="d-flex justify-content-center">
                                <img src="http://www.tataagrico.com/wp-content/uploads/2023/09/industrial-hardware-inner.png"
                                    className="card-img-top"
                                    alt="Product 1"
                                    style={{ width: '250px', height: '250px' }} />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Industrial & Hardware Consumables</h5>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal2">View Products</a>
                                <a href={IndustrialAndHardwareConsumables} className="ms-2 btn btn-warning" download>Download PDF</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover">
                            <img src="http://www.tataagrico.com/wp-content/uploads/2022/04/1-April_Trade-Hand-Icon.png" className="card-img-top" alt="Product 1" />

                            <div className="card-body">
                                <h5 className="card-title">Trade Hand Tools</h5>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal3">View Products</a>
                                <a href={TradeHandTools} className="ms-2 btn btn-warning" download>Download PDF</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="cardModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agri & Allied Business</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Axe.png" className="card-img-top img-fluid" alt="Axe" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Axe</h2>
                                                <a href="http://www.tataagrico.com/product-cat/axe" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Chaff-Cutter.jpg" className="card-img-top img-fluid" alt="Chaff Cutter" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Chaff Cutter</h2>
                                                <a href="http://www.tataagrico.com/product-cat/chaff-cutter" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/07/chisel.png" className="card-img-top img-fluid" alt="Chisel" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Chisel</h2>
                                                <a href="http://www.tataagrico.com/product-cat/chisel" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Crowbar-2.png" className="card-img-top img-fluid" alt="Crowbar" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Crowbar</h2>
                                                <a href="http://www.tataagrico.com/product-cat/crowbar" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/cultivator.jpg" className="card-img-top img-fluid" alt="Cultivator" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Cultivator</h2>
                                                <a href="http://www.tataagrico.com/product-cat/cultivator" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/stone-breaking-hammer-2.png" className="card-img-top img-fluid" alt="Hammer" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Hammer</h2>
                                                <a href="http://www.tataagrico.com/product-cat/hammer" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/agri-hoe.png" className="card-img-top img-fluid" alt="Hoe" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Hoe</h2>
                                                <a href="http://www.tataagrico.com/product-cat/hoe" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/pick-axe-c-p.png" className="card-img-top img-fluid" alt="Pickaxe" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Pickaxe</h2>
                                                <a href="http://www.tataagrico.com/product-cat/pick-axe" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Rotavator-Blade-LR.jpg" className="card-img-top img-fluid" alt="Rotavator Blade" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Rotavator Blade</h2>
                                                <a href="http://www.tataagrico.com/product-cat/rotavator-blade" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/07/Shovel-1.png" className="card-img-top img-fluid" alt="Shovel" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Shovel</h2>
                                                <a href="http://www.tataagrico.com/product-cat/shovel" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/sickle-10.png" className="card-img-top img-fluid" alt="Sickle" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Sickle</h2>
                                                <a href="http://www.tataagrico.com/product-cat/sickle" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
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
                            <h5 className="modal-title" id="exampleModalLabel">Industrial & Hardware Consumables</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2021/11/Carpentry-nail-image.jpeg" className="card-img-top img-fluid" alt="Carpentry Nails" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Carpentry Nails</h2>
                                                <a href="http://www.tataagrico.com/product-cat/carpentry-nails" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2021/11/Concrete-Nail-image.jpeg" className="card-img-top img-fluid mx-auto d-block" alt="Concrete Nails" style={{ height: '250px', width: '150px' }} />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Concrete Nails</h2>
                                                <a href="http://www.tataagrico.com/product-cat/concrete-nails" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2021/02/61W9nevjz9L._SL1000_.jpg" className="card-img-top img-fluid" alt="Cutting Wheels" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Cutting Wheels</h2>
                                                <a href="http://www.tataagrico.com/product-cat/cutting-wheels" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2024/07/drywall-screw.png" className="card-img-top img-fluid" alt="Dry Wall Screws" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Dry Wall Screws</h2>
                                                <a href="http://www.tataagrico.com/product-cat/dry-wall-screws" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2024/04/113134_1.jpg" className="card-img-top img-fluid" alt="Electrodes" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Electrodes</h2>
                                                <a href="http://www.tataagrico.com/product-cat/electrodes" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2021/02/81Q-iUpLASL._SL1500_.jpg" className="card-img-top img-fluid" alt="Grinding Wheels" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Grinding Wheels</h2>
                                                <a href="http://www.tataagrico.com/product-cat/grinding-wheels" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2024/07/HT-fastener.png" className="card-img-top img-fluid" alt="High Tensile Fasteners" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">High Tensile Fasteners</h2>
                                                <a href="http://www.tataagrico.com/product-cat/high-tensile-fasteners" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2022/03/image007.png" className="card-img-top img-fluid" alt="MIG Wire" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">MIG Wire</h2>
                                                <a href="http://www.tataagrico.com/product-cat/mig-wire" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-3">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2021/02/81dfl49VdfL._SL1500_.jpg" className="card-img-top img-fluid" alt="Self Drilling Screws" />
                                            <div className="card-body">
                                                <h2 className="h5 mt-2">Self Drilling Screws</h2>
                                                <a href="http://www.tataagrico.com/product-cat/self-drilling-screws" target="_blank" className="btn btn-primary">
                                                    Know More <i className="fa fa-angle-right" aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Trade Hand Tools</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2024/07/rachet-handle.png" className="card-img-top" alt="1/2 Dr. 90T Ratchet Handle" />
                                            <div className="card-body">
                                                <h5 className="card-title">1/2 Dr. 90T Ratchet Handle</h5>
                                                <a href="http://www.tataagrico.com/product-cat/1-2-dr-90t-ratchet-handle" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2021/02/313xv4-dHzL.jpg" className="card-img-top" alt="Allen Key" />
                                            <div className="card-body">
                                                <h5 className="card-title">Allen Key</h5>
                                                <a href="http://www.tataagrico.com/product-cat/allen-key" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Engineering-File.png" className="card-img-top" alt="Engineering Files" />
                                            <div className="card-body">
                                                <h5 className="card-title">Engineering Files</h5>
                                                <a href="http://www.tataagrico.com/product-cat/engineering-files" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Garden-tool-set.png" className="card-img-top" alt="Garden Tools" />
                                            <div className="card-body">
                                                <h5 className="card-title">Garden Tools</h5>
                                                <a href="http://www.tataagrico.com/product-cat/garden-tools" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/07/Grease-GUn.png" className="card-img-top" alt="Grease Gun" />
                                            <div className="card-body">
                                                <h5 className="card-title">Grease Gun</h5>
                                                <a href="http://www.tataagrico.com/product-cat/grease-gun" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Ball-Point-Hammer.jpg" className="card-img-top" alt="Hammer" />
                                            <div className="card-body">
                                                <h5 className="card-title">Hammer</h5>
                                                <a href="http://www.tataagrico.com/product-cat/hammer-general-purpose-hand-tools" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2019/01/Files-Slim-Taper.png" className="card-img-top" alt="Pit Saw Files" />
                                            <div className="card-body">
                                                <h5 className="card-title">Pit Saw Files</h5>
                                                <a href="http://www.tataagrico.com/product-cat/pit-saw" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2019/01/PLC-002_a.jpg" className="card-img-top" alt="Plier" />
                                            <div className="card-body">
                                                <h5 className="card-title">Plier</h5>
                                                <a href="http://www.tataagrico.com/product-cat/plier" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Flat-Tip-Screwdriver.png" className="card-img-top" alt="Screw Drivers" />
                                            <div className="card-body">
                                                <h5 className="card-title">Screw Drivers</h5>
                                                <a href="http://www.tataagrico.com/product-cat/screw-drivers" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/07/Socket-1.png" className="card-img-top" alt="Sockets & Accessories" />
                                            <div className="card-body">
                                                <h5 className="card-title">Sockets &amp; Accessories</h5>
                                                <a href="http://www.tataagrico.com/product-cat/sockets-accessories" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Spanner-Matt-DOE-1.jpg" className="card-img-top" alt="Spanner" />
                                            <div className="card-body">
                                                <h5 className="card-title">Spanner</h5>
                                                <a href="http://www.tataagrico.com/product-cat/spanner" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2021/02/51o-s57VP-L._SL1000_.jpg" className="card-img-top" alt="Tin Cutter" />
                                            <div className="card-body">
                                                <h5 className="card-title">Tin Cutter</h5>
                                                <a href="http://www.tataagrico.com/product-cat/tin-cutter" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2021/02/81ZYLBs-8kL._SL1500_.jpg" className="card-img-top" alt="Tool Kits" />
                                            <div className="card-body">
                                                <h5 className="card-title">Tool Kits</h5>
                                                <a href="http://www.tataagrico.com/product-cat/tool-kits" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 mb-4">
                                        <div className="card h-100 text-center">
                                            <img src="http://www.tataagrico.com/wp-content/uploads/2018/08/Adj-Wrench1.jpg" className="card-img-top" alt="Wrench" />
                                            <div className="card-body">
                                                <h5 className="card-title">Wrench</h5>
                                                <a href="http://www.tataagrico.com/product-cat/wrench" target="_blank" className="btn btn-primary">Know More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hardware;