import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";
import HRCOIL from "../../../assets/SS.PlateSheets/HR Coil.jpeg";
import CRCOIL from "../../../assets/SS.PlateSheets/CR Coil.jpeg";
import PLATESHEETS from "../../../assets/SS.PlateSheets/Plate Sheets.jpeg";


function SSPlateSheets() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-2">
            <img
              src={logo}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="col-md-10">
            <div className="container">
              <h3>lorem ipsum</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              ducimus, ea animi earum illo pariatur, voluptatibus magni commodi,
              nam nemo id itaque cum in sed error provident officia incidunt
              debitis!
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal1" >
              <div className="card-body">
                <h5 className="card-title">HR Coil</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#cardModal1">View Products</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2" >
              <div className="card-body">
                <h5 className="card-title">CR Coil</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#cardModal2">View Products</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal3" >
              <div className="card-body">
                <h5 className="card-title">Plate</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#cardModal3">View Products</a>
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
              <h5 className="modal-title" id="exampleModalLabel">HR Coil</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center mb-4">
                <div className="col-12 text-center">
                  <img
                    src={HRCOIL}
                    alt="HR Coil"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="row">
                <h3 className="text-center mb-4">Specifications</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <h5>Dimensions</h5>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>Width (in mm):</strong> Up to 1500 mm
                        </li>
                        <li className="list-group-item">
                          <strong>Thickness (in mm):</strong> 2 to 2 mm
                        </li>
                        <li className="list-group-item">
                          <strong>Length:</strong> Coil form or length as required
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <h5>Finish and QC</h5>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>Finish:</strong> No.1/HRAP &amp; HR Black finish available
                        </li>
                        <li className="list-group-item">
                          <strong>Slits Available:</strong> For HR Coil as per requirements
                        </li>
                        <li className="list-group-item">
                          <strong>Edges:</strong> Mill Edge &amp; Trim Edge
                        </li>
                      </ul>
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
              <h5 className="modal-title" id="exampleModalLabel">CR Coil</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center mb-4">
                <div className="col-12 text-center">
                  <img
                    src={CRCOIL}
                    alt="HR Coil"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="row">
                <h3 className="text-center mb-4">Specifications</h3>
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <h5>Dimensions</h5>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>Width (in mm):</strong> up to 1250 mm
                        </li>
                        <li className="list-group-item">
                          <strong>Thickness (in mm):</strong> 0.2 to 2 mm
                        </li>
                        <li className="list-group-item">
                          <strong>Length:</strong> Coil form or Length as required
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <h5>Finish and QC</h5>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <strong>Finish:</strong>  Bright Annealed (BA), 2B, No.4, CRAP finish available.
                        </li>
                        <li className="list-group-item">
                          <strong>Slits Available:</strong> Slits available for CR Coil as per customer requirements.
                        </li>
                        <li className="list-group-item">
                          <strong>Edges:</strong> Mill Edge &amp; Trim Edge available for CR Coil &amp; Sheet.
                        </li>
                      </ul>
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
              <h5 className="modal-title" id="exampleModalLabel">Plate</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center mb-4">
                <div className="col-12 text-center">
                  <img
                    src={PLATESHEETS}
                    alt="HR Coil"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: '300px', objectFit: 'cover', maxWidth: '100%' }}
                  />
                </div>
              </div>

              <div className="container my-4">
                <div className="row">

                  <div className="col-md-12">
                    <h3 className="text-center mb-4">Grades We Offer</h3>
                  </div>
                  <div className="col-md-6">
                    <h5>Austenitic Family</h5>
                    <ul className="list-group mb-3">
                      <li className="list-group-item">
                        <strong>300 Series:</strong> 304, 304L, 304LN, 316, 316L, 309, 309S, 321, 321H, and Many Others
                      </li>
                      <li className="list-group-item">
                        <strong>200 Series Grades</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Ferritic Family</h5>
                    <ul className="list-group mb-3">
                      <li className="list-group-item">
                        <strong>Grades:</strong> 409, 409Ti, 430, 430L, 409M, X2, X5, and Many Others
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-12">
                    <h3 className="text-center mb-4">Finish and QC</h3>
                    <ul className="list-group mb-4">
                      <li className="list-group-item">
                        <strong>Finish:</strong> No.1/HRAP finish available
                      </li>
                      <li className="list-group-item">
                        <strong>Edges:</strong> Mill Edge &amp; Trim Edge
                      </li>
                      <li className="list-group-item">
                        <strong>Quality Test:</strong> HR plates pass through Ultrasonic Test for ensuring best quality.
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-12">
                    <h3 className="text-center mb-4">Size Specifications</h3>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <strong>Length (in mm):</strong> Up to 12
                      </li>
                      <li className="list-group-item">
                        <strong>Width (in mm):</strong> Up to 2100
                      </li>
                      <li className="list-group-item">
                        <strong>Thickness (in mm):</strong> Up to 120
                      </li>
                    </ul>
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

export default SSPlateSheets;
