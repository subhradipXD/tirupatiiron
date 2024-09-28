import Navbar from "../../include/Navbar";
// import Footer from "../../include/Footer";
function GodrejSafes() {
    const products = [
        {
            name: "Godrej NX Pro Key Lock (15L) Ebony Home Locker",
            description: "NX pro-Key Lock Home lockers are compact, secure and affordable options to safeguard your valuables. It comes with a Nickle-Plated corrosion-resistant lock.",
            images: [
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/28/397//nx%20pro%2015l%20keylock%20ebony.jpg",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//41/img/product/28/397//4.webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//41/img/product/28/397//6.webp"
            ],
            info: "https://shop.godrejsecure.com/products/Godrej-NX-Pro-Key-Lock-(15L)-Ebony-Home-Locker/397"
        },
        {
            name: "Godrej NX Pro Digital (25L) Ebony Home Locker",
            description: "In today's digital age, security has kept pace. Godrej NX Pro Digi Home Lockers are designed for both, business and home use, they always provide strong security for your valuables. The Digi lock Protects valuables with a unique 4 to 6-digit password. To add, it has a non-volatile memory that remembers the password even when the batteries are replaced. The safe is smart enough to freeze after 4 consecutive wrong attempts.",
            images: [
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/28/399//nx%20pro%2025L%20Ebony%20digital.jpg",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/28/399//4.webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/28/399//6.webp"

            ],
            info: "https://shop.godrejsecure.com/products/Godrej-NX-Pro-Digital-(25L)-Ebony-Home-Locker/399"
        },
        {
            name: "Godrej Rhino Advanced 79L Digital Home Locker",
            description: "Rhino Advanced safes are strong, compact and built to last. The safe comes with a heavy plate door, Armour Plate protection and has twin solid steel shooting bolts that provides additional security to your valuables.",
            images: [
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/29/417//1%20-%201(1).webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/29/417//1%20-%204(1).webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/29/417//1%20-%206(1).webp"
            ],
            info: "https://shop.godrejsecure.com/products/Godrej-Rhino-Advanced-79L-Digital-Home-Locker/417"
        },
        {
            name: "Godrej Matrix 3016 (94L) V5 KL Coffee Brown",
            description: "Elevate your home security with our ultra-strong safe , featuring premiun interiors, dual-control lock and double walled construction. It can be securely anchored and is compatible with advanced i-buzz alram module and sensors like GSM and an external hooter for added protection.",
            images: [
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/30/462//1.jpg",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/30/462//2.jpg",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/30/462//4.jpg",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/30/462//5.jpg"
            ],
            info: "https://shop.godrejsecure.com/products/Godrej-Matrix-3016-(94L)-V5-KL-Coffee-Brown/462"
        },
        {
            name: "Godrej Centiguard 560 (89L) Digital Home Locker",
            description: "Centiguard mechanical safes are designed to withstand even the most intense fire and keep your documents well protected. Ideal for safeguarding paper documents from fire.",
            images: [
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/31/431//Centiguard%20560.webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/31/431//Centiguard-560-EL%20-%201%20(1).webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/31/431//Centiguard-560-EL%20-%204.webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/31/431//Centiguard-560-EL%20-%206.webp",

            ],
            info: "https://shop.godrejsecure.com/products/Godrej-Centiguard-560-(89L)-Digital-Home-Locker/431"
        },
        {
            name: "Godrej Ritz Bio With I Buzz Home Locker",
            description: "Specially designed to offer superior security, Ritz comes with 'i-buzz' - an inbuilt alarm system that alerts the user in case the safe is tampered with. Equipped with sophisticated features, the safe is available in two variants 'Ritz Touch-pad' and 'Ritz Bio' to offer secure storage as well as convenient access to cash, jewellery and important documents among other valuables.",
            images: [
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/29/415//Ritz%20bio.webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/29/415//1.webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/29/415//4.webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/29/415//6.webp"
            ],
            info: "https://shop.godrejsecure.com/products/Godrej-Ritz-Bio-With-I-Buzz-Home-Locker/415"
        },
        {
            name: "Godrej Presidio 50L Key Lock Home Locker",
            description: "Presidio brings upgraded security through a host of advanced features that includes additional protection with its secondary re-locking device. The safe's double-walled construction with an armoured plate in its body offers extra strength, whereas the adjustable shelves inside, offer that much needed convenience. All in all, Presidio is not just built strong, but is also designed to enhance the interiors of your home and office.",
            images: [
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//64/img/product/30/419//PRESIDIO.jpg",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/30/419//4.webp",
                "https://s3.ap-south-1.amazonaws.com/brandbuddiez.com//5/img/product/30/419//6.webp"
            ],
            info: "https://shop.godrejsecure.com/products/Godrej-Presidio-50L-Key-Lock-Home-Locker/419"
        },


    ];

    return (
        <>
            <Navbar />


            <div className="container mt-5">
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                {/* Bootstrap Carousel for each product */}
                                <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {product.images.map((image, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                                            >
                                                <img
                                                    src={image}
                                                    className="d-block w-100"
                                                    alt={`${product.name} image ${imgIndex + 1}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Controls for carousel */}
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target={`#carousel-${index}`}
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target={`#carousel-${index}`}
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text font-weight-bold">for more information <a href={product.info}>click here.</a></p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5 mb-3 ">
                    <p className="text-center">
                        For More Products <a href={"https://shop.godrejsecure.com/Home-Lockers/4"} className="btn btn-warning">Visit Here</a>
                    </p>
                </div>
            </div>

        </>
    );
}


export default GodrejSafes;
