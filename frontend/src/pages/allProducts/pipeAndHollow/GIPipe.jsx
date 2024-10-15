import Navbar from "../../../include/Navbar";
import logo from "../../../assets/Logo.jpg";

function GIPipe() {
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

                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal1"  >
                            <div className="card-body">
                                <h5 className="card-title">GI Pipes</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2"  >
                            <div className="card-body">
                                <h5 className="card-title">GI Circular Hollow Section</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal2">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal3"  >
                            <div className="card-body">
                                <h5 className="card-title">GI Rectangle Hollow Section</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal3">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal4"  >
                            <div className="card-body">
                                <h5 className="card-title">GI Square Hollow Section</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal4">Go somewhere</a>
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
                            <h5 className="modal-title" id="exampleModalLabel">GI Pipes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="text-center mb-4">
                                    <h2>Specification of Pipes - IS: 1239</h2>
                                    <p>Dimensions and nominal mass of Steel Pipes - Light, Medium &amp; Heavy Conforming to IS:P 1239 (part-I) 2004</p>
                                </div>
                                <div className="card shadow-lg rounded">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table text-center table-bordered table-striped table-hover font-weight-bold">
                                                <thead className="bg-primary text-white">
                                                    <tr>
                                                        <th rowSpan={2}>Nominal Bore (mm)</th>
                                                        <th rowSpan={2}>Class or Category</th>
                                                        <th colSpan={2}>Outside Diameter (mm)</th>
                                                        <th rowSpan={2}>Thickness (mm)</th>
                                                        <th colSpan={4}>Nominal Mass of Tube Black &amp; Galvanised</th>
                                                    </tr>
                                                    <tr>
                                                        <th>Max</th>
                                                        <th>Min</th>
                                                        <th>Plain End Kg/m</th>
                                                        <th>Screwed &amp; Socketed Kg/m</th>
                                                        <th>Plain End Metre/Ton</th>
                                                        <th>Screwed &amp; Socketed Metre/Ton</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan={3}>15</td>
                                                        <td>Light</td>
                                                        <td>21.4</td>
                                                        <td>21</td>
                                                        <td>2</td>
                                                        <td>0.947</td>
                                                        <td>0.956</td>
                                                        <td>1056</td>
                                                        <td>1046</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medium</td>
                                                        <td>21.8</td>
                                                        <td>21</td>
                                                        <td>2.6</td>
                                                        <td>1.21</td>
                                                        <td>1.22</td>
                                                        <td>826</td>
                                                        <td>820</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heavy</td>
                                                        <td>21.8</td>
                                                        <td>21</td>
                                                        <td>3.2</td>
                                                        <td>1.44</td>
                                                        <td>1.45</td>
                                                        <td>694</td>
                                                        <td>690</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>20</td>
                                                        <td>Light</td>
                                                        <td>26.9</td>
                                                        <td>26.4</td>
                                                        <td>2.3</td>
                                                        <td>1.38</td>
                                                        <td>1.39</td>
                                                        <td>725</td>
                                                        <td>719</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medium</td>
                                                        <td>27.3</td>
                                                        <td>26.5</td>
                                                        <td>2.6</td>
                                                        <td>1.56</td>
                                                        <td>1.57</td>
                                                        <td>641</td>
                                                        <td>637</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heavy</td>
                                                        <td>27.3</td>
                                                        <td>26.5</td>
                                                        <td>3.2</td>
                                                        <td>1.87</td>
                                                        <td>1.88</td>
                                                        <td>535</td>
                                                        <td>532</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>25</td>
                                                        <td>Light</td>
                                                        <td>33.8</td>
                                                        <td>33.2</td>
                                                        <td>2.6</td>
                                                        <td>1.98</td>
                                                        <td>2</td>
                                                        <td>505</td>
                                                        <td>500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medium</td>
                                                        <td>34.2</td>
                                                        <td>33.3</td>
                                                        <td>3.2</td>
                                                        <td>2.41</td>
                                                        <td>2.43</td>
                                                        <td>415</td>
                                                        <td>412</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heavy</td>
                                                        <td>34.2</td>
                                                        <td>33.3</td>
                                                        <td>4</td>
                                                        <td>2.93</td>
                                                        <td>2.95</td>
                                                        <td>341</td>
                                                        <td>339</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>32</td>
                                                        <td>Light</td>
                                                        <td>42.5</td>
                                                        <td>41.9</td>
                                                        <td>2.6</td>
                                                        <td>2.54</td>
                                                        <td>2.57</td>
                                                        <td>394</td>
                                                        <td>389</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medium</td>
                                                        <td>42.9</td>
                                                        <td>42</td>
                                                        <td>3.2</td>
                                                        <td>3.1</td>
                                                        <td>3.13</td>
                                                        <td>323</td>
                                                        <td>319</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heavy</td>
                                                        <td>42.9</td>
                                                        <td>42</td>
                                                        <td>4</td>
                                                        <td>3.79</td>
                                                        <td>3.82</td>
                                                        <td>264</td>
                                                        <td>262</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>40</td>
                                                        <td>Light</td>
                                                        <td>48.4</td>
                                                        <td>47.8</td>
                                                        <td>2.9</td>
                                                        <td>3.23</td>
                                                        <td>3.27</td>
                                                        <td>310</td>
                                                        <td>306</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medium</td>
                                                        <td>48.8</td>
                                                        <td>47.9</td>
                                                        <td>3.2</td>
                                                        <td>3.56</td>
                                                        <td>3.6</td>
                                                        <td>281</td>
                                                        <td>278</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heavy</td>
                                                        <td>48.8</td>
                                                        <td>47.9</td>
                                                        <td>4</td>
                                                        <td>4.37</td>
                                                        <td>4.41</td>
                                                        <td>229</td>
                                                        <td>227</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>50</td>
                                                        <td>Light</td>
                                                        <td>60.2</td>
                                                        <td>59.6</td>
                                                        <td>2.9</td>
                                                        <td>4.08</td>
                                                        <td>4.15</td>
                                                        <td>245</td>
                                                        <td>241</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medium</td>
                                                        <td>60.8</td>
                                                        <td>59.7</td>
                                                        <td>3.6</td>
                                                        <td>5.03</td>
                                                        <td>5.1</td>
                                                        <td>199</td>
                                                        <td>196</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heavy</td>
                                                        <td>60.8</td>
                                                        <td>59.7</td>
                                                        <td>4.5</td>
                                                        <td>6.19</td>
                                                        <td>6.26</td>
                                                        <td>162</td>
                                                        <td>160</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>65</td>
                                                        <td>Light</td>
                                                        <td>76</td>
                                                        <td>75.2</td>
                                                        <td>3.2</td>
                                                        <td>5.71</td>
                                                        <td>5.83</td>
                                                        <td>175</td>
                                                        <td>172</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Medium</td>
                                                        <td>76.6</td>
                                                        <td>75.3</td>
                                                        <td>3.6</td>
                                                        <td>6.42</td>
                                                        <td>6.54</td>
                                                        <td>156</td>
                                                        <td>153</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Heavy</td>
                                                        <td>76.6</td>
                                                        <td>75.3</td>
                                                        <td>4.5</td>
                                                        <td>7.93</td>
                                                        <td>8.05</td>
                                                        <td>126</td>
                                                        <td>124</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                            <h5 className="modal-title" id="exampleModalLabel">GI Circular Hollow Section</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container m-auto py-16">
                                <h2 className="text-center mb-2">CHS WEIGHT TABLE</h2>
                                <div className="w-full mx-auto bg-white shadow-lg rounded-xl">
                                    <div className="p-3">
                                        <div className="overflow-x-auto">
                                            <table className="table text-center table-bordered table-striped table-hover font-weight-bold">
                                                <thead>
                                                    <tr className="bg-blue-500">
                                                        <td colSpan={16}>
                                                            Circular Hollow Section (Nominal Bore diameter) &nbsp; &nbsp; Weight of One Tube in (kg/metre) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Z+
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-blue-500">
                                                        <td className="px-3" rowSpan={2}>Section Type</td>
                                                        <td className="px-3" rowSpan={2}>Size Dimension (mm * mm)</td>
                                                        <td colSpan={14}>Thickness (mm)</td>
                                                    </tr>
                                                    <tr className="bg-blue-500">
                                                        <td className="px-2">1.0</td>
                                                        <td className="px-2">1.2</td>
                                                        <td className="px-2">1.6</td>
                                                        <td className="px-2">1.8</td>
                                                        <td className="px-2">2.0</td>
                                                        <td className="px-2">2.2</td>
                                                        <td className="px-2">2.6</td>
                                                        <td className="px-2">2.9</td>
                                                        <td className="px-2">3.2</td>
                                                        <td className="px-2">3.6</td>
                                                        <td className="px-2">4.0</td>
                                                        <td className="px-2">4.5</td>
                                                        <td className="px-2">4.8</td>
                                                        <td className="px-5">5.0</td>
                                                    </tr>
                                                </thead>
                                                <tbody className="font-bold">
                                                    <tr>
                                                        <td rowSpan={9}>CHS</td>
                                                        <td>15 NB</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>0.78</td>
                                                        <td>0.87</td>
                                                        <td>0.95</td>
                                                        <td>1.04</td>
                                                        <td>1.20</td>
                                                        <td>1.32</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>20 NB</td>
                                                        <td>-</td>
                                                        <td>0.76</td>
                                                        <td>1.00</td>
                                                        <td>1.11</td>
                                                        <td>1.23</td>
                                                        <td>1.34</td>
                                                        <td>1.56</td>
                                                        <td>1.72</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>25 NB</td>
                                                        <td>-</td>
                                                        <td>0.96</td>
                                                        <td>1.27</td>
                                                        <td>1.42</td>
                                                        <td>1.56</td>
                                                        <td>1.71</td>
                                                        <td>1.99</td>
                                                        <td>2.20</td>
                                                        <td>2.41</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>32 NB</td>
                                                        <td>1.02</td>
                                                        <td>1.22</td>
                                                        <td>1.61</td>
                                                        <td>1.80</td>
                                                        <td>1.99</td>
                                                        <td>2.18</td>
                                                        <td>2.55</td>
                                                        <td>2.82</td>
                                                        <td>3.09</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>40 NB</td>
                                                        <td>1.17</td>
                                                        <td>1.39</td>
                                                        <td>1.84</td>
                                                        <td>2.06</td>
                                                        <td>2.28</td>
                                                        <td>2.50</td>
                                                        <td>2.93</td>
                                                        <td>3.25</td>
                                                        <td>3.56</td>
                                                        <td>3.97</td>
                                                        <td>4.37</td>
                                                        <td>6.19</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50 NB</td>
                                                        <td>-</td>
                                                        <td>1.75</td>
                                                        <td>1.75</td>
                                                        <td>2.32</td>
                                                        <td>2.60</td>
                                                        <td>2.88</td>
                                                        <td>3.15</td>
                                                        <td>3.70</td>
                                                        <td>4.11</td>
                                                        <td>4.51</td>
                                                        <td>5.03</td>
                                                        <td>5.55</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65 NB</td>
                                                        <td>-</td>
                                                        <td>2.22</td>
                                                        <td>2.94</td>
                                                        <td>3.30</td>
                                                        <td>3.65</td>
                                                        <td>4.01</td>
                                                        <td>4.71</td>
                                                        <td>5.24</td>
                                                        <td>5.75</td>
                                                        <td>6.44</td>
                                                        <td>7.11</td>
                                                        <td>7.95</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>80 NB</td>
                                                        <td>-</td>
                                                        <td>2.60</td>
                                                        <td>-</td>
                                                        <td>3.87</td>
                                                        <td>4.29</td>
                                                        <td>4.70</td>
                                                        <td>5.53</td>
                                                        <td>6.15</td>
                                                        <td>6.76</td>
                                                        <td>7.57</td>
                                                        <td>8.38</td>
                                                        <td>9.37</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>100 NB</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>6.08</td>
                                                        <td>7.16</td>
                                                        <td>7.97</td>
                                                        <td>8.77</td>
                                                        <td>9.83</td>
                                                        <td>10.88</td>
                                                        <td>12.19</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                            <h5 className="modal-title" id="exampleModalLabel">GI Round Hollow Section</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container m-auto py-16">
                                <h2 className="text-center mb-4">RHS WEIGHT TABLE</h2>
                                <div className="w-full mx-auto bg-white shadow-lg rounded-xl">
                                    <div className="p-3">
                                        <div className="overflow-x-auto">
                                            <table className="font-bold w-full table table-bordered text-center table-striped table-hover ">
                                                <thead>
                                                    <tr className="bg-blue-500">
                                                        <td colSpan={16}>
                                                            Rectangular Hollow Section (DxB) &nbsp;&nbsp;&nbsp;&nbsp; Weight of One Tube in (kg/metre) &nbsp;&nbsp;&nbsp;&nbsp; Z+
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 bg-blue-500" rowSpan={2}>Section Type</td>
                                                        <td className="px-3 bg-blue-500" rowSpan={2}>Size Dimension&nbsp;-(mm*mm)</td>
                                                        <td className="bg-blue-500" colSpan={14}>Thickness (mm)</td>
                                                    </tr>
                                                    <tr className="bg-blue-500">
                                                        <td className="px-2">1.0</td>
                                                        <td className="px-2">1.2</td>
                                                        <td className="px-2">1.6</td>
                                                        <td className="px-2">1.8</td>
                                                        <td className="px-2">2.0</td>
                                                        <td className="px-2">2.2</td>
                                                        <td className="px-2">2.6</td>
                                                        <td className="px-2">2.9</td>
                                                        <td className="px-2">3.2</td>
                                                        <td className="px-2">3.6</td>
                                                        <td className="px-2">4.0</td>
                                                        <td className="px-2">4.5</td>
                                                        <td className="px-2">4.8</td>
                                                        <td className="px-5">5.0</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan={12}>RHS</td>
                                                        <td>40x10</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>1.12</td>
                                                        <td>1.25</td>
                                                        <td>1.36</td>
                                                        <td>1.48</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>40x20</td>
                                                        <td>-</td>
                                                        <td>1.06</td>
                                                        <td>1.38</td>
                                                        <td>1.53</td>
                                                        <td>1.68</td>
                                                        <td>1.82</td>
                                                        <td>2.10</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50x25</td>
                                                        <td>-</td>
                                                        <td>1.34</td>
                                                        <td>1.75</td>
                                                        <td>1.95</td>
                                                        <td>2.15</td>
                                                        <td>2.34</td>
                                                        <td>2.71</td>
                                                        <td>2.98</td>
                                                        <td>3.24</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>75x25</td>
                                                        <td>-</td>
                                                        <td>1.81</td>
                                                        <td>2.38</td>
                                                        <td>2.66</td>
                                                        <td>2.93</td>
                                                        <td>3.20</td>
                                                        <td>3.73</td>
                                                        <td>4.12</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>66x33</td>
                                                        <td>-</td>
                                                        <td>1.79</td>
                                                        <td>2.35</td>
                                                        <td>2.63</td>
                                                        <td>2.90</td>
                                                        <td>3.17</td>
                                                        <td>3.69</td>
                                                        <td>4.07</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>60x40</td>
                                                        <td>-</td>
                                                        <td>1.81</td>
                                                        <td>2.38</td>
                                                        <td>2.66</td>
                                                        <td>2.93</td>
                                                        <td>3.20</td>
                                                        <td>3.73</td>
                                                        <td>4.12</td>
                                                        <td>4.50</td>
                                                        <td>4.98</td>
                                                        <td>5.45</td>
                                                        <td>6.02</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>80x40</td>
                                                        <td>-</td>
                                                        <td>2.19</td>
                                                        <td>2.88</td>
                                                        <td>3.22</td>
                                                        <td>3.56</td>
                                                        <td>3.90</td>
                                                        <td>4.55</td>
                                                        <td>5.03</td>
                                                        <td>5.50</td>
                                                        <td>6.11</td>
                                                        <td>6.71</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>95x25</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>2.88</td>
                                                        <td>3.22</td>
                                                        <td>3.56</td>
                                                        <td>3.90</td>
                                                        <td>4.55</td>
                                                        <td>5.03</td>
                                                        <td>5.50</td>
                                                        <td>6.11</td>
                                                        <td>6.71</td>
                                                        <td>7.43</td>
                                                        <td>7.85</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>96x48</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>3.49</td>
                                                        <td>3.90</td>
                                                        <td>4.32</td>
                                                        <td>4.72</td>
                                                        <td>5.53</td>
                                                        <td>6.12</td>
                                                        <td>6.71</td>
                                                        <td>7.47</td>
                                                        <td>8.22</td>
                                                        <td>-</td>
                                                        <td>9.66</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>122x61</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>7.12</td>
                                                        <td>7.90</td>
                                                        <td>8.67</td>
                                                        <td>9.67</td>
                                                        <td>10.67</td>
                                                        <td>11.88</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>145x82</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>8.92</td>
                                                        <td>9.90</td>
                                                        <td>10.88</td>
                                                        <td>12.16</td>
                                                        <td>13.43</td>
                                                        <td>-</td>
                                                        <td>15.92</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>172x92</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>10.79</td>
                                                        <td>11.98</td>
                                                        <td>13.16</td>
                                                        <td>14.71</td>
                                                        <td>16.25</td>
                                                        <td>18.12</td>
                                                        <td>19.10</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cardModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">GI Square Hollow Section</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container m-auto">
                                <h2 className="text-center mb-4">SHS WEIGHT TABLE</h2>
                                <div className="card shadow-lg rounded">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table text-center table-bordered table-striped table-hover font-weight-bold">
                                                <thead className="bg-primary text-white">
                                                    <tr>
                                                        <td colSpan={16} className="text-center">
                                                            Square Hollow Section (BxB) &nbsp; &nbsp; Weight of One Tube in (kg/metre) &nbsp; &nbsp; Z+
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center" rowSpan={2}>Section Type</td>
                                                        <td className="text-center" rowSpan={2}>Size Dimension<br /> (mm*mm)</td>
                                                        <td className="text-center" colSpan={14}>Thickness (mm)</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">1.0</td>
                                                        <td className="text-center">1.2</td>
                                                        <td className="text-center">1.6</td>
                                                        <td className="text-center">1.8</td>
                                                        <td className="text-center">2.0</td>
                                                        <td className="text-center">2.2</td>
                                                        <td className="text-center">2.6</td>
                                                        <td className="text-center">2.9</td>
                                                        <td className="text-center">3.2</td>
                                                        <td className="text-center">3.6</td>
                                                        <td className="text-center">4.0</td>
                                                        <td className="text-center">4.5</td>
                                                        <td className="text-center">4.8</td>
                                                        <td className="text-center">5.0</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan={13}>SHS</td>
                                                        <td>20x20</td>
                                                        <td>0.58</td>
                                                        <td>0.68</td>
                                                        <td>0.87</td>
                                                        <td>0.96</td>
                                                        <td>1.05</td>
                                                        <td>1.13</td>
                                                        <td>1.28</td>
                                                        <td>1.39</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>

                                                    </tr>
                                                    <tr>
                                                        <td>25x25</td>
                                                        <td>0.73</td>
                                                        <td>0.87</td>
                                                        <td>1.12</td>
                                                        <td>1.25</td>
                                                        <td>1.36</td>
                                                        <td>1.48</td>
                                                        <td>1.69</td>
                                                        <td>1.84</td>
                                                        <td>1.98</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>32x32</td>
                                                        <td>-</td>
                                                        <td>1.13</td>
                                                        <td>1.48</td>
                                                        <td>1.64</td>
                                                        <td>1.80</td>
                                                        <td>1.96</td>
                                                        <td>2.26</td>
                                                        <td>2.48</td>
                                                        <td>2.69</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>38x38</td>
                                                        <td>-</td>
                                                        <td>1.36</td>
                                                        <td>1.78</td>
                                                        <td>1.98</td>
                                                        <td>2.18</td>
                                                        <td>2.38</td>
                                                        <td>2.75</td>
                                                        <td>3.03</td>
                                                        <td>3.29</td>
                                                        <td>-</td>
                                                        <td>3.95</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>40x40</td>
                                                        <td>-</td>
                                                        <td>1.43</td>
                                                        <td>1.88</td>
                                                        <td>2.09</td>
                                                        <td>2.31</td>
                                                        <td>2.51</td>
                                                        <td>2.92</td>
                                                        <td>3.21</td>
                                                        <td>3.49</td>
                                                        <td>-</td>
                                                        <td>4.20</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50x50</td>
                                                        <td>-</td>
                                                        <td>1.81</td>
                                                        <td>2.38</td>
                                                        <td>2.66</td>
                                                        <td>2.93</td>
                                                        <td>3.20</td>
                                                        <td>3.73</td>
                                                        <td>4.12</td>
                                                        <td>4.50</td>
                                                        <td>4.98</td>
                                                        <td>5.45</td>
                                                        <td>6.02</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>60x60</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>2.88</td>
                                                        <td>3.22</td>
                                                        <td>3.56</td>
                                                        <td>3.90</td>
                                                        <td>4.55</td>
                                                        <td>5.03</td>
                                                        <td>5.50</td>
                                                        <td>6.11</td>
                                                        <td>6.71</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>72x72</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>3.49</td>
                                                        <td>3.90</td>
                                                        <td>4.32</td>
                                                        <td>4.72</td>
                                                        <td>5.53</td>
                                                        <td>6.12</td>
                                                        <td>6.71</td>
                                                        <td>7.47</td>
                                                        <td>8.22</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>80x80</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>4.82</td>
                                                        <td>5.28</td>
                                                        <td>6.18</td>
                                                        <td>6.85</td>
                                                        <td>7.51</td>
                                                        <td>8.37</td>
                                                        <td>9.22</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>91.5x91.5</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>7.12</td>
                                                        <td>7.90</td>
                                                        <td>8.67</td>
                                                        <td>9.67</td>
                                                        <td>10.67</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>100x100</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>7.82</td>
                                                        <td>8.67</td>
                                                        <td>9.52</td>
                                                        <td>10.64</td>
                                                        <td>11.73</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>14.41</td>
                                                    </tr>
                                                    <tr>
                                                        <td>113.5x113.5</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>8.92</td>
                                                        <td>9.90</td>
                                                        <td>10.88</td>
                                                        <td>12.16</td>
                                                        <td>13.43</td>
                                                        <td>-</td>
                                                        <td>15.92</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td>132x132</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>12.74</td>
                                                        <td>14.25</td>
                                                        <td>15.75</td>
                                                        <td>-</td>
                                                        <td>18.71</td>
                                                        <td>-</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default GIPipe;