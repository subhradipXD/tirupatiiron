/* eslint-disable react-refresh/only-export-components */
import Navbar from "../../../../include/Navbar";
import logo from "../../../../assets/Logo.jpg";


function YST210() {
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
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal1" >
                            <div className="card-body">
                                <h5 className="card-title">Circular Hollow Section (CHS)</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal1">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal2" >
                            <div className="card-body">
                                <h5 className="card-title">Square Hollow Section (SHS)</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal2">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card text-center mb-3 card-hover" data-bs-toggle="modal" data-bs-target="#cardModal3">
                            <div className="card-body">
                                <h5 className="card-title">Rectangle Hollow Section (RHS)</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal3">Go somewhere</a>
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
                            <h5 className="modal-title" id="exampleModalLabel">Circular Hollow Section (CHS)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container ">
                                <h4 className="text-center fw-bold">CHS WEIGHT TABLE</h4>
                                <div className="card shadow-lg rounded">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table text-center table-bordered table-striped table-hover font-weight-bold">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={16}>
                                                            Circular Hollow Section (Nominal Bore diameter) &nbsp; &nbsp; Weight of One Tube in (kg/metre) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Yst-210
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th rowSpan={2}>Section Type</th>
                                                        <th rowSpan={2}>Size Dimension<br /> (mm*mm)</th>
                                                        <th colSpan={14}>Thickness (mm)</th>
                                                    </tr>
                                                    <tr>
                                                        <th>1.0</th>
                                                        <th>1.2</th>
                                                        <th>1.6</th>
                                                        <th>1.8</th>
                                                        <th>2.0</th>
                                                        <th>2.2</th>
                                                        <th>2.6</th>
                                                        <th>2.9</th>
                                                        <th>3.2</th>
                                                        <th>3.6</th>
                                                        <th>4.0</th>
                                                        <th>4.5</th>
                                                        <th>4.8</th>
                                                        <th>5.0</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan={9}>CHS</td>
                                                        <td>15 NB</td>
                                                        <td />
                                                        <td />
                                                        <td className="">0.78</td>
                                                        <td className="">0.87</td>
                                                        <td className="">0.95</td>
                                                        <td className="">1.04</td>
                                                        <td className="">1.20</td>
                                                        <td className="">1.32</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>20 NB</td>
                                                        <td />
                                                        <td className="back-add">0.76</td>
                                                        <td className="back-add">1.00</td>
                                                        <td className="back-add">1.11</td>
                                                        <td className="back-add">1.23</td>
                                                        <td className="back-add">1.34</td>
                                                        <td className="back-add">1.56</td>
                                                        <td className="back-add">1.72</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>25 NB</td>
                                                        <td />
                                                        <td className="back-add">0.96</td>
                                                        <td className="back-add">1.27</td>
                                                        <td className="back-add">1.42</td>
                                                        <td className="back-add">1.56</td>
                                                        <td className="back-add">1.71</td>
                                                        <td className="back-add">1.99</td>
                                                        <td className="back-add">2.20</td>
                                                        <td className="back-add">2.41</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>32 NB</td>
                                                        <td className="back-add">1.02</td>
                                                        <td className="back-add">1.22</td>
                                                        <td className="back-add">1.61</td>
                                                        <td className="back-add">1.80</td>
                                                        <td className="back-add">1.99</td>
                                                        <td className="back-add">2.18</td>
                                                        <td className="back-add">2.55</td>
                                                        <td className="back-add">2.82</td>
                                                        <td className="back-add">3.09</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>40 NB</td>
                                                        <td className="back-add">1.17</td>
                                                        <td className="back-add">1.39</td>
                                                        <td className="back-add">1.84</td>
                                                        <td className="back-add">2.06</td>
                                                        <td className="back-add">2.28</td>
                                                        <td className="back-add">2.50</td>
                                                        <td className="back-add">2.93</td>
                                                        <td className="back-add">3.25</td>
                                                        <td className="back-add">3.56</td>
                                                        <td className="back-add">3.97</td>
                                                        <td className="back-add">4.37</td>
                                                        <td className="back-add">6.19</td>
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>50 NB</td>
                                                        <td />
                                                        <td className="back-add">1.75</td>
                                                        <td className="back-add">1.75</td>
                                                        <td className="back-add">2.32</td>
                                                        <td className="back-add">2.60</td>
                                                        <td className="back-add">2.88</td>
                                                        <td className="back-add">3.15</td>
                                                        <td className="back-add">3.70</td>
                                                        <td className="back-add">4.11</td>
                                                        <td className="back-add">4.51</td>
                                                        <td className="back-add">5.03</td>
                                                        <td className="back-add">5.55</td>
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>65 NB</td>
                                                        <td />
                                                        <td className="back-add">2.22</td>
                                                        <td className="back-add">2.94</td>
                                                        <td className="back-add">3.30</td>
                                                        <td className="back-add">3.65</td>
                                                        <td className="back-add">4.01</td>
                                                        <td className="back-add">4.71</td>
                                                        <td className="back-add">5.24</td>
                                                        <td className="back-add">5.75</td>
                                                        <td className="back-add">6.44</td>
                                                        <td className="back-add">7.11</td>
                                                        <td className="back-add">7.95</td>
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>80 NB</td>
                                                        <td />
                                                        <td className="back-add">2.60</td>
                                                        <td />
                                                        <td className="back-add">3.87</td>
                                                        <td className="back-add">4.29</td>
                                                        <td className="back-add">4.70</td>
                                                        <td className="back-add">5.53</td>
                                                        <td className="back-add">6.15</td>
                                                        <td className="back-add">6.76</td>
                                                        <td className="back-add">7.57</td>
                                                        <td className="back-add">8.38</td>
                                                        <td className="back-add">9.37</td>
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>100 NB</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="back-add">6.08</td>
                                                        <td className="back-add">7.16</td>
                                                        <td className="back-add">7.97</td>
                                                        <td className="back-add">8.77</td>
                                                        <td className="back-add">9.83</td>
                                                        <td className="back-add">10.88</td>
                                                        <td className="back-add">12.19</td>
                                                        <td />
                                                        <td />
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
                            <h5 className="modal-title" id="exampleModalLabel">Square Hollow Section (SHS)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container ">
                                <h4 className="text-center font-weight-bold">SHS WEIGHT TABLE</h4>
                                <div className="card shadow-lg rounded">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table text-center table-bordered table-striped table-hover font-weight-bold">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={16}>Square Hollow Section (BxB) &nbsp; Weight of One Tube in (kg/metre) &nbsp; Yst-210</th>
                                                    </tr>
                                                    <tr>
                                                        <th rowSpan={2}>Section Type</th>
                                                        <th rowSpan={2}>Size Dimension<br />(mm*mm)</th>
                                                        <th colSpan={14}>Thickness (mm)</th>
                                                    </tr>
                                                    <tr>
                                                        <th>1.0</th>
                                                        <th>1.2</th>
                                                        <th>1.6</th>
                                                        <th>1.8</th>
                                                        <th>2.0</th>
                                                        <th>2.2</th>
                                                        <th>2.6</th>
                                                        <th>2.9</th>
                                                        <th>3.2</th>
                                                        <th>3.6</th>
                                                        <th>4.0</th>
                                                        <th>4.5</th>
                                                        <th>4.8</th>
                                                        <th>5.0</th>
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
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
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
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>32x32</td>
                                                        <td />
                                                        <td>1.13</td>
                                                        <td>1.48</td>
                                                        <td>1.64</td>
                                                        <td>1.80</td>
                                                        <td>1.96</td>
                                                        <td>2.26</td>
                                                        <td>2.48</td>
                                                        <td>2.69</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>38x38</td>
                                                        <td />
                                                        <td>1.36</td>
                                                        <td>1.78</td>
                                                        <td>1.98</td>
                                                        <td>2.18</td>
                                                        <td>2.38</td>
                                                        <td>2.75</td>
                                                        <td>3.03</td>
                                                        <td>3.29</td>
                                                        <td />
                                                        <td>3.95</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>40x40</td>
                                                        <td />
                                                        <td>1.43</td>
                                                        <td>1.88</td>
                                                        <td>2.09</td>
                                                        <td>2.31</td>
                                                        <td>2.51</td>
                                                        <td>2.92</td>
                                                        <td>3.21</td>
                                                        <td>3.49</td>
                                                        <td />
                                                        <td>4.20</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>50x50</td>
                                                        <td />
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
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>60x60</td>
                                                        <td />
                                                        <td />
                                                        <td>2.88</td>
                                                        <td>3.22</td>
                                                        <td>3.56</td>
                                                        <td>3.90</td>
                                                        <td>4.55</td>
                                                        <td>5.03</td>
                                                        <td>5.50</td>
                                                        <td>6.11</td>
                                                        <td>6.71</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>72x72</td>
                                                        <td />
                                                        <td />
                                                        <td>3.49</td>
                                                        <td>3.90</td>
                                                        <td>4.32</td>
                                                        <td>4.72</td>
                                                        <td>5.53</td>
                                                        <td>6.12</td>
                                                        <td>6.71</td>
                                                        <td>7.47</td>
                                                        <td>8.22</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>80x80</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td>4.82</td>
                                                        <td>5.28</td>
                                                        <td>6.18</td>
                                                        <td>6.85</td>
                                                        <td>7.51</td>
                                                        <td>8.37</td>
                                                        <td>9.22</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>91.5x91.5</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td>7.12</td>
                                                        <td>7.90</td>
                                                        <td>8.67</td>
                                                        <td>9.67</td>
                                                        <td>10.67</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>100x100</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td>7.82</td>
                                                        <td>8.67</td>
                                                        <td>9.52</td>
                                                        <td>10.64</td>
                                                        <td>11.73</td>
                                                        <td />
                                                        <td />
                                                        <td>14.41</td>
                                                    </tr>
                                                    <tr>
                                                        <td>113.5x113.5</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td>8.92</td>
                                                        <td>9.90</td>
                                                        <td>10.88</td>
                                                        <td>12.16</td>
                                                        <td>13.43</td>
                                                        <td />
                                                        <td>15.92</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>132x132</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td>12.74</td>
                                                        <td>14.25</td>
                                                        <td>15.75</td>
                                                        <td>17.32</td>
                                                        <td />
                                                        <td />
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
                            <h5 className="modal-title" id="exampleModalLabel">Rectangle Hollow Section (RHS)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container ">
                                <h4 className="text-center fw-bold">RHS WEIGHT TABLE</h4>
                                <div className="card shadow-lg rounded">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table text-center table-bordered table-striped table-hover font-weight-bold">
                                                <thead>
                                                    <tr>
                                                        <th colSpan={16}>
                                                            Rectangular Hollow Section (DxB) &nbsp; Weight of One Tube in (kg/metre) &nbsp; Yst-210
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th rowSpan={2}>Section Type</th>
                                                        <th rowSpan={2}>Size Dimension (mm*mm)</th>
                                                        <th colSpan={14}>Thickness (mm)</th>
                                                    </tr>
                                                    <tr>
                                                        <th>1.0</th>
                                                        <th>1.2</th>
                                                        <th>1.6</th>
                                                        <th>1.8</th>
                                                        <th>2.0</th>
                                                        <th>2.2</th>
                                                        <th>2.6</th>
                                                        <th>2.9</th>
                                                        <th>3.2</th>
                                                        <th>3.6</th>
                                                        <th>4.0</th>
                                                        <th>4.5</th>
                                                        <th>4.8</th>
                                                        <th>5.0</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td rowSpan={12}>RHS</td>
                                                        <td>40x10</td>
                                                        <td />
                                                        <td />
                                                        <td>1.12</td>
                                                        <td>1.25</td>
                                                        <td>1.36</td>
                                                        <td>1.48</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>40x20</td>
                                                        <td />
                                                        <td>1.06</td>
                                                        <td>1.38</td>
                                                        <td>1.53</td>
                                                        <td>1.68</td>
                                                        <td>1.82</td>
                                                        <td>2.10</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>50x25</td>
                                                        <td />
                                                        <td>1.34</td>
                                                        <td>1.75</td>
                                                        <td>1.95</td>
                                                        <td>2.15</td>
                                                        <td>2.34</td>
                                                        <td>2.71</td>
                                                        <td>2.98</td>
                                                        <td>3.24</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>75x25</td>
                                                        <td />
                                                        <td>1.81</td>
                                                        <td>2.38</td>
                                                        <td>2.66</td>
                                                        <td>2.93</td>
                                                        <td>3.20</td>
                                                        <td>3.73</td>
                                                        <td>4.12</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>66x33</td>
                                                        <td />
                                                        <td>1.79</td>
                                                        <td>2.35</td>
                                                        <td>2.63</td>
                                                        <td>2.90</td>
                                                        <td>3.17</td>
                                                        <td>3.69</td>
                                                        <td>4.07</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>60x40</td>
                                                        <td />
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
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>80x40</td>
                                                        <td />
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
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>95x25</td>
                                                        <td />
                                                        <td />
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
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>96x48</td>
                                                        <td />
                                                        <td />
                                                        <td>3.49</td>
                                                        <td>3.90</td>
                                                        <td>4.32</td>
                                                        <td>4.72</td>
                                                        <td>5.53</td>
                                                        <td>6.12</td>
                                                        <td>6.71</td>
                                                        <td>7.47</td>
                                                        <td>8.22</td>
                                                        <td />
                                                        <td>9.66</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>122x61</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td>7.12</td>
                                                        <td>7.90</td>
                                                        <td>8.67</td>
                                                        <td>9.67</td>
                                                        <td>10.67</td>
                                                        <td>11.88</td>
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>145x82</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td>8.92</td>
                                                        <td>9.90</td>
                                                        <td>10.88</td>
                                                        <td>12.16</td>
                                                        <td>13.43</td>
                                                        <td />
                                                        <td>15.92</td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>172x92</td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td>12.74</td>
                                                        <td>14.25</td>
                                                        <td>15.75</td>
                                                        <td>17.61</td>
                                                        <td>18.71</td>
                                                        <td />
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

export default YST210;