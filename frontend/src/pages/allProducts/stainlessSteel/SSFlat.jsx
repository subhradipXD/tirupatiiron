import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function SSFlat
    () {
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

                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="container">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem neque numquam aut esse itaque perferendis ex exercitationem quo aperiam corporis possimus, dolor soluta vel autem asperiores recusandae fugiat? Nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perferendis numquam, neque rerum ea saepe unde repudiandae enim vero, quam dolore deleniti itaque, in dignissimos? Autem error ut vel dolore.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-center">Specifications</h5>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Grades:</strong> All 200 Series, 300 Series &amp; 400 Series</li>
                            <li className="list-group-item"> <strong>Cross Section:</strong> 750 mm² to 3500 mm²</li>
                            <li className="list-group-item">  <strong>Width:</strong> 190 mm</li>
                            <li className="list-group-item"><strong>Length:</strong> 6 meters or As per customer’s requirement
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SSFlat
    ;