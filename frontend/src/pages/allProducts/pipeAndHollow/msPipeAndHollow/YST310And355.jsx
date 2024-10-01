import Navbar from "../../../../include/Navbar";
import logo from "../../../../assets/Logo.jpg";


function YST310And355() {
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
                            <div className="container">
                                <h4 className="text-center fw-bold">CHS WEIGHT TABLE</h4>
                                <div className="card shadow-lg rounded">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table text-center table-bordered  font-weight-bold">
                                                <tbody>
                                                    <tr>
                                                        <th>Nominal Bore</th>
                                                        <th>Outside Diameter</th>
                                                        <th>Thickness</th>
                                                        <th>Weight</th>
                                                        <th>Area of Cross Section</th>
                                                        <th>Moment of Inertia</th>
                                                        <th>Section Modulus</th>
                                                        <th>Radius of Gyration</th>
                                                        <th>Outer Surface Area/M</th>
                                                        <th>Nominal Length per tonne</th>
                                                    </tr>
                                                    <tr>
                                                        <th>MM</th>
                                                        <th>MM</th>
                                                        <th>MM</th>
                                                        <th>Kg/Mtr</th>
                                                        <th>CM^2</th>
                                                        <th>CM^4</th>
                                                        <th>CM^3</th>
                                                        <th>CM</th>
                                                        <th>CM^2 / M</th>
                                                        <th>M</th>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>25</td>
                                                        <td rowSpan={3}>33.7</td>
                                                        <td>2.6</td>
                                                        <td>1.99</td>
                                                        <td>2.54</td>
                                                        <td>3.09</td>
                                                        <td>1.84</td>
                                                        <td>1.10</td>
                                                        <td rowSpan={3}>1059</td>
                                                        <td>501.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3.2</td>
                                                        <td>2.41</td>
                                                        <td>3.07</td>
                                                        <td>3.61</td>
                                                        <td>2.14</td>
                                                        <td>1.08</td>
                                                        <td>415.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.0</td>
                                                        <td>2.93</td>
                                                        <td>3.73</td>
                                                        <td>4.19</td>
                                                        <td>2.49</td>
                                                        <td>1.06</td>
                                                        <td>341.2</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={3}>32</td>
                                                        <td rowSpan={3}>42.4</td>
                                                        <td>2.6</td>
                                                        <td>2.55</td>
                                                        <td>3.25</td>
                                                        <td>6.47</td>
                                                        <td>3.05</td>
                                                        <td>1.41</td>
                                                        <td rowSpan={3}>1332</td>
                                                        <td>391.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3.2</td>
                                                        <td>3.09</td>
                                                        <td>3.94</td>
                                                        <td>7.62</td>
                                                        <td>3.60</td>
                                                        <td>1.39</td>
                                                        <td>323.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.0</td>
                                                        <td>3.79</td>
                                                        <td>4.83</td>
                                                        <td>8.99</td>
                                                        <td>4.24</td>
                                                        <td>1.36</td>
                                                        <td>263.9</td>
                                                    </tr>
                                                    <tr className="new-adback">
                                                        <td rowSpan={3}>40</td>
                                                        <td rowSpan={3}>48.3</td>
                                                        <td>2.9</td>
                                                        <td>3.25</td>
                                                        <td>4.14</td>
                                                        <td>3.36</td>
                                                        <td>1.99</td>
                                                        <td>0.90</td>
                                                        <td rowSpan={3}>1517</td>
                                                        <td>307.9</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3.2</td>
                                                        <td>3.56</td>
                                                        <td>4.54</td>
                                                        <td>3.61</td>
                                                        <td>2.14</td>
                                                        <td>0.89</td>
                                                        <td>280.9</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.0</td>
                                                        <td>4.37</td>
                                                        <td>5.57</td>
                                                        <td>4.19</td>
                                                        <td>2.49</td>
                                                        <td>0.87</td>
                                                        <td>228.7</td>
                                                    </tr>

                                                    <tr className="add-sec-two">
                                                        <td rowSpan={4}>50</td>
                                                        <td rowSpan={4}>60.3</td>
                                                        <td>2.9</td>
                                                        <td>4.11</td>
                                                        <td>5.23</td>
                                                        <td>21.60</td>
                                                        <td>7.16</td>
                                                        <td>2.03</td>
                                                        <td rowSpan={4}>1895</td>
                                                        <td>243.5</td>
                                                    </tr>
                                                    <tr className="add-sec-two">
                                                        <td>3.6</td>
                                                        <td>5.04</td>
                                                        <td>6.42</td>
                                                        <td>25.88</td>
                                                        <td>8.59</td>
                                                        <td>2.01</td>
                                                        <td>198.6</td>
                                                    </tr>
                                                    <tr className="add-sec-two">
                                                        <td>4.5</td>
                                                        <td>6.19</td>
                                                        <td>7.89</td>
                                                        <td>30.91</td>
                                                        <td>10.25</td>
                                                        <td>1.98</td>
                                                        <td>161.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>6.57</td>
                                                        <td>8.37</td>
                                                        <td>32.48</td>
                                                        <td>10.77</td>
                                                        <td>1.97</td>
                                                        <td>152.1</td>
                                                    </tr>

                                                    <tr className="new-adback">
                                                        <td rowSpan={4}>65</td>
                                                        <td rowSpan={4}>76.1</td>
                                                        <td>3.2</td>
                                                        <td>5.76</td>
                                                        <td>7.33</td>
                                                        <td>48.80</td>
                                                        <td>12.82</td>
                                                        <td>2.58</td>
                                                        <td rowSpan={4}>2391</td>
                                                        <td>173.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3.6</td>
                                                        <td>6.44</td>
                                                        <td>8.20</td>
                                                        <td>54.03</td>
                                                        <td>14.20</td>
                                                        <td>2.57</td>
                                                        <td>155.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.5</td>
                                                        <td>7.95</td>
                                                        <td>10.13</td>
                                                        <td>65.15</td>
                                                        <td>17.12</td>
                                                        <td>2.54</td>
                                                        <td>125.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>8.44</td>
                                                        <td>10.76</td>
                                                        <td>68.66</td>
                                                        <td>18.04</td>
                                                        <td>2.53</td>
                                                        <td>118.4</td>
                                                    </tr>

                                                    <tr className="add-sec-two">
                                                        <td rowSpan={6}>80</td>
                                                        <td rowSpan={6}>88.9</td>
                                                        <td>3.2</td>
                                                        <td>6.77</td>
                                                        <td>8.62</td>
                                                        <td>79.24</td>
                                                        <td>17.83</td>
                                                        <td>3.03</td>
                                                        <td rowSpan={6}>2793</td>
                                                        <td>147.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.0</td>
                                                        <td>8.38</td>
                                                        <td>10.67</td>
                                                        <td>96.38</td>
                                                        <td>21.68</td>
                                                        <td>3.00</td>
                                                        <td>119.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>9.96</td>
                                                        <td>12.69</td>
                                                        <td>112.53</td>
                                                        <td>25.32</td>
                                                        <td>2.98</td>
                                                        <td>100.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>11.12</td>
                                                        <td>14.17</td>
                                                        <td>124.02</td>
                                                        <td>27.90</td>
                                                        <td>2.96</td>
                                                        <td>89.9</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>12.27</td>
                                                        <td>15.63</td>
                                                        <td>135.00</td>
                                                        <td>30.37</td>
                                                        <td>2.94</td>
                                                        <td>81.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>15.97</td>
                                                        <td>20.34</td>
                                                        <td>168.03</td>
                                                        <td>37.80</td>
                                                        <td>2.87</td>
                                                        <td>62.6</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={6}>100</td>
                                                        <td rowSpan={6}>114.3</td>
                                                        <td>3.6</td>
                                                        <td>9.83</td>
                                                        <td>12.52</td>
                                                        <td>192.06</td>
                                                        <td>33.61</td>
                                                        <td>3.92</td>
                                                        <td rowSpan={6}>3591</td>
                                                        <td>101.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.5</td>
                                                        <td>12.19</td>
                                                        <td>15.53</td>
                                                        <td>234.41</td>
                                                        <td>41.02</td>
                                                        <td>3.89</td>
                                                        <td>82.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>12.97</td>
                                                        <td>16.52</td>
                                                        <td>248.06</td>
                                                        <td>43.40</td>
                                                        <td>3.88</td>
                                                        <td>77.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>16.03</td>
                                                        <td>20.42</td>
                                                        <td>300.33</td>
                                                        <td>52.55</td>
                                                        <td>3.83</td>
                                                        <td>62.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>20.98</td>
                                                        <td>26.73</td>
                                                        <td>379.64</td>
                                                        <td>66.43</td>
                                                        <td>3.77</td>
                                                        <td>47.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>25.73</td>
                                                        <td>32.78</td>
                                                        <td>449.84</td>
                                                        <td>78.71</td>
                                                        <td>3.70</td>
                                                        <td>38.9</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={8}>115</td>
                                                        <td rowSpan={8}>127</td>
                                                        <td>3.2</td>
                                                        <td>9.77</td>
                                                        <td>12.45</td>
                                                        <td>238.69</td>
                                                        <td>37.59</td>
                                                        <td>4.38</td>
                                                        <td rowSpan={8}>3990</td>
                                                        <td>102.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3.6</td>
                                                        <td>10.96</td>
                                                        <td>13.96</td>
                                                        <td>265.98</td>
                                                        <td>41.89</td>
                                                        <td>4.36</td>
                                                        <td>91.2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.0</td>
                                                        <td>12.14</td>
                                                        <td>15.46</td>
                                                        <td>292.73</td>
                                                        <td>46.10</td>
                                                        <td>4.35</td>
                                                        <td>82.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>14.47</td>
                                                        <td>18.43</td>
                                                        <td>344.63</td>
                                                        <td>54.27</td>
                                                        <td>4.32</td>
                                                        <td>69.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>16.20</td>
                                                        <td>20.64</td>
                                                        <td>382.19</td>
                                                        <td>60.19</td>
                                                        <td>4.30</td>
                                                        <td>61.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>17.91</td>
                                                        <td>22.82</td>
                                                        <td>418.61</td>
                                                        <td>65.92</td>
                                                        <td>4.28</td>
                                                        <td>55.8</td>
                                                    </tr>

                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>23.49</td>
                                                        <td>29.92</td>
                                                        <td>532.02</td>
                                                        <td>83.78</td>
                                                        <td>4.22</td>
                                                        <td>42.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>28.87</td>
                                                        <td>36.77</td>
                                                        <td>633.80</td>
                                                        <td>99.81</td>
                                                        <td>4.15</td>
                                                        <td>34.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={6}>125</td>
                                                        <td rowSpan={6}>139.7</td>
                                                        <td>4.5</td>
                                                        <td>15.01</td>
                                                        <td>19.12</td>
                                                        <td>437.38</td>
                                                        <td>62.62</td>
                                                        <td>4.78</td>
                                                        <td rowSpan={6}>4389</td>
                                                        <td>66.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>15.98</td>
                                                        <td>20.35</td>
                                                        <td>463.51</td>
                                                        <td>66.36</td>
                                                        <td>4.77</td>
                                                        <td>62.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>17.89</td>
                                                        <td>22.79</td>
                                                        <td>514.70</td>
                                                        <td>73.69</td>
                                                        <td>4.75</td>
                                                        <td>55.9</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>19.79</td>
                                                        <td>25.21</td>
                                                        <td>564.49</td>
                                                        <td>80.81</td>
                                                        <td>4.73</td>
                                                        <td>50.5</td>
                                                    </tr>

                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>25.99</td>
                                                        <td>33.11</td>
                                                        <td>720.58</td>
                                                        <td>103.16</td>
                                                        <td>4.66</td>
                                                        <td>38.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>32.00</td>
                                                        <td>40.76</td>
                                                        <td>862.24</td>
                                                        <td>123.44</td>
                                                        <td>4.60</td>
                                                        <td>31.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={4}>150</td>
                                                        <td rowSpan={4}>165.1</td>
                                                        <td>4.5</td>
                                                        <td>15.01</td>
                                                        <td>19.12</td>
                                                        <td>437.38</td>
                                                        <td>62.62</td>
                                                        <td>4.78</td>
                                                        <td rowSpan={4}>5187</td>
                                                        <td>66.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>18.98</td>
                                                        <td>24.18</td>
                                                        <td>777.44</td>
                                                        <td>94.18</td>
                                                        <td>5.67</td>
                                                        <td>52.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>21.28</td>
                                                        <td>27.10</td>
                                                        <td>865.05</td>
                                                        <td>104.79</td>
                                                        <td>5.65</td>
                                                        <td>47.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>23.55</td>
                                                        <td>30.00</td>
                                                        <td>950.63</td>
                                                        <td>115.16</td>
                                                        <td>5.63</td>
                                                        <td>42.5</td>
                                                    </tr>

                                                    <tr className="new-adback">
                                                        <td rowSpan={7}>150</td>
                                                        <td rowSpan={7}>168.3</td>
                                                        <td>4.5</td>
                                                        <td>18.19</td>
                                                        <td>23.17</td>
                                                        <td>777.53</td>
                                                        <td>92.40</td>
                                                        <td>5.79</td>
                                                        <td rowSpan={7}>5287</td>
                                                        <td>55.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>19.36</td>
                                                        <td>24.67</td>
                                                        <td>824.90</td>
                                                        <td>98.03</td>
                                                        <td>5.78</td>
                                                        <td>51.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>21.70</td>
                                                        <td>27.65</td>
                                                        <td>918.05</td>
                                                        <td>109.10</td>
                                                        <td>5.76</td>
                                                        <td>46.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>24.03</td>
                                                        <td>30.61</td>
                                                        <td>1009.10</td>
                                                        <td>119.92</td>
                                                        <td>5.74</td>
                                                        <td>41.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>31.64</td>
                                                        <td>40.30</td>
                                                        <td>1297.79</td>
                                                        <td>154.22</td>
                                                        <td>5.67</td>
                                                        <td>31.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>39.05</td>
                                                        <td>49.75</td>
                                                        <td>1564.61</td>
                                                        <td>185.93</td>
                                                        <td>5.61</td>
                                                        <td>25.6</td>
                                                    </tr>

                                                    <tr className="new-adback">
                                                        <td>12.0</td>
                                                        <td>46.27</td>
                                                        <td>58.95</td>
                                                        <td>1810.69</td>
                                                        <td>215.17</td>
                                                        <td>5.54</td>
                                                        <td>21.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={8}>175</td>
                                                        <td rowSpan={8}>197.3</td>
                                                        <td>3.6</td>
                                                        <td>17.20</td>
                                                        <td>21.92</td>
                                                        <td>1028.20</td>
                                                        <td>104.23</td>
                                                        <td>6.85</td>
                                                        <td rowSpan={8}>6198</td>
                                                        <td>58.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.0</td>
                                                        <td>19.08</td>
                                                        <td>24.30</td>
                                                        <td>1135.47</td>
                                                        <td>115.10</td>
                                                        <td>6.84</td>
                                                        <td>52.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4.8</td>
                                                        <td>22.80</td>
                                                        <td>29.04</td>
                                                        <td>1345.98</td>
                                                        <td>136.44</td>
                                                        <td>6.81</td>
                                                        <td>43.9</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>25.57</td>
                                                        <td>32.57</td>
                                                        <td>1500.37</td>
                                                        <td>152.09</td>
                                                        <td>6.79</td>
                                                        <td>39.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>28.32</td>
                                                        <td>36.07</td>
                                                        <td>1651.80</td>
                                                        <td>167.44</td>
                                                        <td>6.77</td>
                                                        <td>35.3</td>
                                                    </tr>

                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>37.36</td>
                                                        <td>47.60</td>
                                                        <td>2135.76</td>
                                                        <td>216.50</td>
                                                        <td>6.70</td>
                                                        <td>26.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>46.21</td>
                                                        <td>58.87</td>
                                                        <td>2588.71</td>
                                                        <td>262.41</td>
                                                        <td>6.63</td>
                                                        <td>21.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>54.86</td>
                                                        <td>69.88</td>
                                                        <td>3012.03</td>
                                                        <td>305.33</td>
                                                        <td>6.57</td>
                                                        <td>18.2</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={6}>200</td>
                                                        <td rowSpan={6}>219.1</td>
                                                        <td>4.8</td>
                                                        <td>25.38</td>
                                                        <td>32.33</td>
                                                        <td>1856.78</td>
                                                        <td>169.49</td>
                                                        <td>7.58</td>
                                                        <td rowSpan={6}>6879</td>
                                                        <td>39.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>28.47</td>
                                                        <td>36.27</td>
                                                        <td>2071.66</td>
                                                        <td>189.11</td>
                                                        <td>7.56</td>
                                                        <td>35.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>31.54</td>
                                                        <td>40.18</td>
                                                        <td>2282.87</td>
                                                        <td>208.39</td>
                                                        <td>7.54</td>
                                                        <td>31.7</td>
                                                    </tr>

                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>41.67</td>
                                                        <td>53.08</td>
                                                        <td>2960.82</td>
                                                        <td>270.27</td>
                                                        <td>7.47</td>
                                                        <td>24.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>51.59</td>
                                                        <td>65.72</td>
                                                        <td>3599.89</td>
                                                        <td>328.61</td>
                                                        <td>7.40</td>
                                                        <td>19.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>61.31</td>
                                                        <td>78.11</td>
                                                        <td>4201.57</td>
                                                        <td>383.53</td>
                                                        <td>7.33</td>
                                                        <td>16.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={4}>250</td>
                                                        <td rowSpan={4}>273.1</td>
                                                        <td>6.0</td>
                                                        <td>39.54</td>
                                                        <td>50.37</td>
                                                        <td>4493.93</td>
                                                        <td>329.11</td>
                                                        <td>9.45</td>
                                                        <td rowSpan={4}>8575</td>
                                                        <td>25.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>52.32</td>
                                                        <td>66.65</td>
                                                        <td>5860.70</td>
                                                        <td>429.20</td>
                                                        <td>9.38</td>
                                                        <td>19.1</td>
                                                    </tr>

                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>64.91</td>
                                                        <td>82.69</td>
                                                        <td>7165.13</td>
                                                        <td>524.73</td>
                                                        <td>9.31</td>
                                                        <td>15.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>77.30</td>
                                                        <td>98.47</td>
                                                        <td>8409.17</td>
                                                        <td>615.83</td>
                                                        <td>9.24</td>
                                                        <td>12.9</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={4}>300</td>
                                                        <td rowSpan={4}>323.9</td>
                                                        <td>6.3</td>
                                                        <td>49.36</td>
                                                        <td>62.88</td>
                                                        <td>7932.09</td>
                                                        <td>489.79</td>
                                                        <td>11.23</td>
                                                        <td rowSpan={4}>10170</td>
                                                        <td>20.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>62.35</td>
                                                        <td>79.43</td>
                                                        <td>9914.07</td>
                                                        <td>612.17</td>
                                                        <td>11.17</td>
                                                        <td>16.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>77.44</td>
                                                        <td>98.65</td>
                                                        <td>12163.24</td>
                                                        <td>751.05</td>
                                                        <td>11.10</td>
                                                        <td>12.9</td>
                                                    </tr>

                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>92.34</td>
                                                        <td>117.63</td>
                                                        <td>14325.32</td>
                                                        <td>884.55</td>
                                                        <td>11.04</td>
                                                        <td>10.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={7}>350</td>
                                                        <td rowSpan={7}>355.6</td>
                                                        <td>4.8</td>
                                                        <td>41.54</td>
                                                        <td>52.92</td>
                                                        <td>8142.09</td>
                                                        <td>457.94</td>
                                                        <td>12.40</td>
                                                        <td rowSpan={7}>11172</td>
                                                        <td>24.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>46.66</td>
                                                        <td>59.43</td>
                                                        <td>9113.39</td>
                                                        <td>512.56</td>
                                                        <td>12.38</td>
                                                        <td>21.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>51.75</td>
                                                        <td>65.92</td>
                                                        <td>10074.61</td>
                                                        <td>566.63</td>
                                                        <td>12.36</td>
                                                        <td>19.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>68.61</td>
                                                        <td>87.40</td>
                                                        <td>13206.69</td>
                                                        <td>742.78</td>
                                                        <td>12.29</td>
                                                        <td>14.6</td>
                                                    </tr>

                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>85.26</td>
                                                        <td>108.62</td>
                                                        <td>16230.03</td>
                                                        <td>912.83</td>
                                                        <td>12.22</td>
                                                        <td>11.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>101.73</td>
                                                        <td>129.59</td>
                                                        <td>19147.18</td>
                                                        <td>1076.89</td>
                                                        <td>12.16</td>
                                                        <td>9.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>14.0</td>
                                                        <td>117.99</td>
                                                        <td>150.30</td>
                                                        <td>21960.65</td>
                                                        <td>1235.13</td>
                                                        <td>12.09</td>
                                                        <td>8.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={7}>400</td>
                                                        <td rowSpan={7}>406.4</td>
                                                        <td>4.8</td>
                                                        <td>47.56</td>
                                                        <td>60.58</td>
                                                        <td>12215.72</td>
                                                        <td>601.17</td>
                                                        <td>14.20</td>
                                                        <td rowSpan={7}>12767</td>
                                                        <td>21.0</td>
                                                    </tr>

                                                    <tr>
                                                        <td>5.4</td>
                                                        <td>53.42</td>
                                                        <td>68.06</td>
                                                        <td>13681.71</td>
                                                        <td>673.31</td>
                                                        <td>14.18</td>
                                                        <td>18.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>59.27</td>
                                                        <td>75.50</td>
                                                        <td>15134.41</td>
                                                        <td>744.80</td>
                                                        <td>14.16</td>
                                                        <td>16.9</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>78.63</td>
                                                        <td>100.17</td>
                                                        <td>19881.89</td>
                                                        <td>978.44</td>
                                                        <td>14.09</td>
                                                        <td>12.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>97.80</td>
                                                        <td>124.58</td>
                                                        <td>24485.66</td>
                                                        <td>1205.00</td>
                                                        <td>14.02</td>
                                                        <td>10.2</td>
                                                    </tr>

                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>116.76</td>
                                                        <td>148.75</td>
                                                        <td>28948.66</td>
                                                        <td>1424.64</td>
                                                        <td>13.95</td>
                                                        <td>8.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>16.0</td>
                                                        <td>154.11</td>
                                                        <td>196.32</td>
                                                        <td>37463.89</td>
                                                        <td>1843.70</td>
                                                        <td>13.81</td>
                                                        <td>6.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="6">450</td>
                                                        <td rowSpan="6">457.2</td>
                                                        <td>5.4</td>
                                                        <td>60.19</td>
                                                        <td>76.68</td>
                                                        <td>19567.22</td>
                                                        <td>855.96</td>
                                                        <td>15.97</td>
                                                        <td rowSpan="6">14363</td>
                                                        <td>16.6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>6.0</td>
                                                        <td>66.79</td>
                                                        <td>85.08</td>
                                                        <td>21655.59</td>
                                                        <td>947.31</td>
                                                        <td>15.95</td>
                                                        <td>15.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>88.66</td>
                                                        <td>112.94</td>
                                                        <td>28495.85</td>
                                                        <td>1246.54</td>
                                                        <td>15.88</td>
                                                        <td>11.3</td>
                                                    </tr>

                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>110.33</td>
                                                        <td>140.55</td>
                                                        <td>35152.58</td>
                                                        <td>1537.73</td>
                                                        <td>15.81</td>
                                                        <td>9.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>8.00</td>
                                                        <td>167.90</td>
                                                        <td>41629.08</td>
                                                        <td>1821.04</td>
                                                        <td>15.75</td>
                                                        <td>125.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>16.0</td>
                                                        <td>174.16</td>
                                                        <td>221.86</td>
                                                        <td>54054.51</td>
                                                        <td>2364.59</td>
                                                        <td>15.61</td>
                                                        <td>5.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="5">500</td>
                                                        <td rowSpan="5">508</td>
                                                        <td>6.0</td>
                                                        <td>74.31</td>
                                                        <td>94.66</td>
                                                        <td>29823.53</td>
                                                        <td>1174.15</td>
                                                        <td>17.75</td>
                                                        <td rowSpan="5">15959</td>
                                                        <td>13.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>98.69</td>
                                                        <td>125.71</td>
                                                        <td>39295.77</td>
                                                        <td>1547.08</td>
                                                        <td>17.68</td>
                                                        <td>10.1</td>
                                                    </tr>

                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>122.86</td>
                                                        <td>156.51</td>
                                                        <td>48539.78</td>
                                                        <td>1911.01</td>
                                                        <td>17.61</td>
                                                        <td>8.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>146.84</td>
                                                        <td>187.06</td>
                                                        <td>57559.24</td>
                                                        <td>2266.11</td>
                                                        <td>17.54</td>
                                                        <td>6.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>16.0</td>
                                                        <td>194.21</td>
                                                        <td>247.41</td>
                                                        <td>74939.19</td>
                                                        <td>2950.36</td>
                                                        <td>17.40</td>
                                                        <td>5.1</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="5">550</td>
                                                        <td rowSpan="5">558.8</td>
                                                        <td>6.0</td>
                                                        <td>81.83</td>
                                                        <td>104.24</td>
                                                        <td>39823.66</td>
                                                        <td>1425.33</td>
                                                        <td>19.55</td>
                                                        <td rowSpan="5">17555</td>
                                                        <td>12.2</td>
                                                    </tr>

                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>108.71</td>
                                                        <td>138.49</td>
                                                        <td>52528.87</td>
                                                        <td>1880.06</td>
                                                        <td>19.48</td>
                                                        <td>9.2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>135.40</td>
                                                        <td>172.48</td>
                                                        <td>64956.28</td>
                                                        <td>2324.85</td>
                                                        <td>19.41</td>
                                                        <td>7.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>161.88</td>
                                                        <td>206.22</td>
                                                        <td>77109.97</td>
                                                        <td>2759.84</td>
                                                        <td>19.34</td>
                                                        <td>6.2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>16.0</td>
                                                        <td>214.27</td>
                                                        <td>272.95</td>
                                                        <td>100612.4</td>
                                                        <td>3601.02</td>
                                                        <td>19.20</td>
                                                        <td>4.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan="7">600</td>
                                                        <td rowSpan="7">609.6</td>
                                                        <td>6.0</td>
                                                        <td>89.35</td>
                                                        <td>113.82</td>
                                                        <td>51841.4</td>
                                                        <td>1700.83</td>
                                                        <td>21.34</td>
                                                        <td rowSpan="7">19151</td>
                                                        <td>11.2</td>
                                                    </tr>

                                                    <tr>
                                                        <td>8.0</td>
                                                        <td>118.74</td>
                                                        <td>151.26</td>
                                                        <td>68442.4</td>
                                                        <td>2245.48</td>
                                                        <td>21.27</td>
                                                        <td>8.4</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10.0</td>
                                                        <td>147.93</td>
                                                        <td>188.45</td>
                                                        <td>84711.1</td>
                                                        <td>2779.24</td>
                                                        <td>21.20</td>
                                                        <td>6.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12.0</td>
                                                        <td>176.92</td>
                                                        <td>225.38</td>
                                                        <td>100652.1</td>
                                                        <td>3302.23</td>
                                                        <td>21.13</td>
                                                        <td>5.7</td>
                                                    </tr>
                                                    <tr>
                                                        <td>16.0</td>
                                                        <td>234.32</td>
                                                        <td>298.50</td>
                                                        <td>131568.4</td>
                                                        <td>4316.55</td>
                                                        <td>20.99</td>
                                                        <td>4.3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>18.0</td>
                                                        <td>262.72</td>
                                                        <td>334.68</td>
                                                        <td>146552.59</td>
                                                        <td>4808.16</td>
                                                        <td>20.93</td>
                                                        <td>3.8</td>
                                                    </tr>
                                                    <tr>
                                                        <td>20.0</td>
                                                        <td>290.93</td>
                                                        <td>370.61</td>
                                                        <td>161226.53</td>
                                                        <td>5289.58</td>
                                                        <td>20.86</td>
                                                        <td>3.4</td>
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
                            <div className="container">
                                <h4 className="text-center font-weight-bold">SHS WEIGHT TABLE</h4>
                                <div className="card shadow-lg rounded">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table text-center table-bordered  font-weight-bold">
                                                <tbody>
                                                    <tr>
                                                        <th rowSpan={2}>SHS B X B MM</th>
                                                        <th>B</th>
                                                        <th>B</th>
                                                        <th>T</th>
                                                        <th>Sec Area</th>
                                                        <th>weight</th>
                                                        <th colSpan={2}>Moment of inertia</th>
                                                        <th colSpan={2}>Radius of Gyration</th>
                                                        <th colSpan={2}>Elastic Modulus</th>
                                                        <th colSpan={2}>Torsional Constants</th>
                                                        <th>Outer surface Area</th>
                                                        <th>Normal Length Per Tonne</th>
                                                    </tr>
                                                    <tr>
                                                        <th>MM</th>
                                                        <th>MM</th>
                                                        <th>MM</th>
                                                        <th>CM^2</th>
                                                        <th>Kg/Mtr</th>
                                                        <th>lxx CM^4</th>
                                                        <th>lyy CM^4</th>
                                                        <th>Rxx CM</th>
                                                        <th>Ryy CM</th>
                                                        <th>Zxx CM^3</th>
                                                        <th>Zyy CM^3</th>
                                                        <th>J Cm^4</th>
                                                        <th>B Cm^3</th>
                                                        <th>Sq.Mtr/ Mtr</th>
                                                        <th>M</th>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={2}>25x25</td>
                                                        <td>25</td>
                                                        <td>25</td>
                                                        <td>2.6</td>
                                                        <td>2.16</td>
                                                        <td>1.69</td>
                                                        <td>1.72</td>
                                                        <td>1.72</td>
                                                        <td>0.89</td>
                                                        <td>0.89</td>
                                                        <td>1.38</td>
                                                        <td>1.38</td>
                                                        <td>3.04</td>
                                                        <td>2.12</td>
                                                        <td>0.087</td>
                                                        <td>590.92</td>
                                                    </tr>
                                                    <tr>
                                                        <td>25</td>
                                                        <td>25</td>
                                                        <td>3.2</td>
                                                        <td>2.53</td>
                                                        <td>1.98</td>
                                                        <td>1.89</td>
                                                        <td>1.89</td>
                                                        <td>0.86</td>
                                                        <td>0.86</td>
                                                        <td>1.51</td>
                                                        <td>1.51</td>
                                                        <td>3.45</td>
                                                        <td>2.34</td>
                                                        <td>0.084</td>
                                                        <td>504.09</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={2}>32x32</td>
                                                        <td>32</td>
                                                        <td>32</td>
                                                        <td>2.6</td>
                                                        <td>2.88</td>
                                                        <td>2.26</td>
                                                        <td>4.02</td>
                                                        <td>4.02</td>
                                                        <td>1.18</td>
                                                        <td>1.18</td>
                                                        <td>2.51</td>
                                                        <td>2.51</td>
                                                        <td>6.86</td>
                                                        <td>3.82</td>
                                                        <td>0.115</td>
                                                        <td>441.74</td>
                                                    </tr>
                                                    <tr>
                                                        <td>32</td>
                                                        <td>32</td>
                                                        <td>3.2</td>
                                                        <td>3.42</td>
                                                        <td>2.69</td>
                                                        <td>4.54</td>
                                                        <td>4.54</td>
                                                        <td>1.15</td>
                                                        <td>1.15</td>
                                                        <td>2.84</td>
                                                        <td>2.84</td>
                                                        <td>7.96</td>
                                                        <td>4.34</td>
                                                        <td>0.112</td>
                                                        <td>372.15</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>38x38</td>
                                                        <td>38</td>
                                                        <td>38</td>
                                                        <td>2.6</td>
                                                        <td>3.51</td>
                                                        <td>2.75</td>
                                                        <td>7.14</td>
                                                        <td>7.14</td>
                                                        <td>1.43</td>
                                                        <td>1.43</td>
                                                        <td>3.76</td>
                                                        <td>3.76</td>
                                                        <td>11.93</td>
                                                        <td>5.69</td>
                                                        <td>0.139</td>
                                                        <td>363.16</td>
                                                    </tr>
                                                    <tr>
                                                        <td>38</td>
                                                        <td>38</td>
                                                        <td>3.2</td>
                                                        <td>4.19</td>
                                                        <td>3.29</td>
                                                        <td>8.18</td>
                                                        <td>8.18</td>
                                                        <td>1.40</td>
                                                        <td>1.40</td>
                                                        <td>4.30</td>
                                                        <td>4.30</td>
                                                        <td>14.01</td>
                                                        <td>6.55</td>
                                                        <td>0.136</td>
                                                        <td>303.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td>38</td>
                                                        <td>38</td>
                                                        <td>4.0</td>
                                                        <td>5.03</td>
                                                        <td>3.95</td>
                                                        <td>9.26</td>
                                                        <td>9.26</td>
                                                        <td>1.36</td>
                                                        <td>1.36</td>
                                                        <td>4.87</td>
                                                        <td>4.87</td>
                                                        <td>16.38</td>
                                                        <td>7.48</td>
                                                        <td>0.131</td>
                                                        <td>253.33</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={3}>40x40</td>
                                                        <td>40</td>
                                                        <td>40</td>
                                                        <td>2.6</td>
                                                        <td>3.72</td>
                                                        <td>2.92</td>
                                                        <td>8.45</td>
                                                        <td>8.45</td>
                                                        <td>1.51</td>
                                                        <td>1.51</td>
                                                        <td>4.22</td>
                                                        <td>4.22</td>
                                                        <td>14.06</td>
                                                        <td>6.39</td>
                                                        <td>0.147</td>
                                                        <td>342.83</td>
                                                    </tr>
                                                    <tr>
                                                        <td>40</td>
                                                        <td>40</td>
                                                        <td>3.2</td>
                                                        <td>4.45</td>
                                                        <td>3.49</td>
                                                        <td>9.72</td>
                                                        <td>9.72</td>
                                                        <td>1.48</td>
                                                        <td>1.48</td>
                                                        <td>4.86</td>
                                                        <td>4.86</td>
                                                        <td>16.55</td>
                                                        <td>7.39</td>
                                                        <td>0.144</td>
                                                        <td>286.45</td>
                                                    </tr>
                                                    <tr>
                                                        <td>40</td>
                                                        <td>40</td>
                                                        <td>4.0</td>
                                                        <td>5.35</td>
                                                        <td>4.20</td>
                                                        <td>11.07</td>
                                                        <td>11.07</td>
                                                        <td>1.44</td>
                                                        <td>1.44</td>
                                                        <td>5.54</td>
                                                        <td>5.54</td>
                                                        <td>19.44</td>
                                                        <td>8.48</td>
                                                        <td>0.139</td>
                                                        <td>238.17</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={4}>50x50</td>
                                                        <td>50</td>
                                                        <td>50</td>
                                                        <td>2.6</td>
                                                        <td>4.76</td>
                                                        <td>3.73</td>
                                                        <td>17.47</td>
                                                        <td>17.47</td>
                                                        <td>1.92</td>
                                                        <td>1.92</td>
                                                        <td>6.99</td>
                                                        <td>6.99</td>
                                                        <td>28.48</td>
                                                        <td>10.54</td>
                                                        <td>0.187</td>
                                                        <td>267.86</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50</td>
                                                        <td>50</td>
                                                        <td>2.9</td>
                                                        <td>5.25</td>
                                                        <td>4.12</td>
                                                        <td>18.98</td>
                                                        <td>18.98</td>
                                                        <td>1.90</td>
                                                        <td>1.90</td>
                                                        <td>7.59</td>
                                                        <td>7.59</td>
                                                        <td>31.24</td>
                                                        <td>11.47</td>
                                                        <td>0.185</td>
                                                        <td>242.77</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50</td>
                                                        <td>50</td>
                                                        <td>3.6</td>
                                                        <td>6.35</td>
                                                        <td>4.98</td>
                                                        <td>22.15</td>
                                                        <td>22.15</td>
                                                        <td>1.87</td>
                                                        <td>1.87</td>
                                                        <td>8.86</td>
                                                        <td>8.86</td>
                                                        <td>37.25</td>
                                                        <td>13.43</td>
                                                        <td>0.181</td>
                                                        <td>200.66</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50</td>
                                                        <td>50</td>
                                                        <td>4.5</td>
                                                        <td>7.67</td>
                                                        <td>6.02</td>
                                                        <td>25.50</td>
                                                        <td>25.50</td>
                                                        <td>1.82</td>
                                                        <td>1.82</td>
                                                        <td>10.20</td>
                                                        <td>10.20</td>
                                                        <td>44.09</td>
                                                        <td>15.56</td>
                                                        <td>0.177</td>
                                                        <td>166.10</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={4}>60x60</td>
                                                        <td>60</td>
                                                        <td>60</td>
                                                        <td>2.6</td>
                                                        <td>5.80</td>
                                                        <td>4.55</td>
                                                        <td>31.33</td>
                                                        <td>31.33</td>
                                                        <td>2.33</td>
                                                        <td>2.33</td>
                                                        <td>10.44</td>
                                                        <td>10.44</td>
                                                        <td>50.38</td>
                                                        <td>15.72</td>
                                                        <td>0.227</td>
                                                        <td>219.80</td>
                                                    </tr>
                                                    <tr>
                                                        <td>60</td>
                                                        <td>60</td>
                                                        <td>3.2</td>
                                                        <td>7.01</td>
                                                        <td>5.50</td>
                                                        <td>36.94</td>
                                                        <td>36.94</td>
                                                        <td>2.30</td>
                                                        <td>2.30</td>
                                                        <td>12.31</td>
                                                        <td>12.31</td>
                                                        <td>60.34</td>
                                                        <td>18.57</td>
                                                        <td>0.224</td>
                                                        <td>181.80</td>
                                                    </tr>
                                                    <tr>
                                                        <td>60</td>
                                                        <td>60</td>
                                                        <td>4.0</td>
                                                        <td>8.55</td>
                                                        <td>6.71</td>
                                                        <td>43.55</td>
                                                        <td>43.55</td>
                                                        <td>2.26</td>
                                                        <td>2.26</td>
                                                        <td>14.52</td>
                                                        <td>14.52</td>
                                                        <td>72.64</td>
                                                        <td>21.97</td>
                                                        <td>0.219</td>
                                                        <td>149.02</td>
                                                    </tr>
                                                    <tr>
                                                        <td>60</td>
                                                        <td>60</td>
                                                        <td>4.8</td>
                                                        <td>10.01</td>
                                                        <td>7.85</td>
                                                        <td>49.22</td>
                                                        <td>49.22</td>
                                                        <td>2.22</td>
                                                        <td>2.22</td>
                                                        <td>16.41</td>
                                                        <td>16.41</td>
                                                        <td>83.81</td>
                                                        <td>24.94</td>
                                                        <td>0.215</td>
                                                        <td>127.31</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={5}>72x72</td>
                                                        <td>72</td>
                                                        <td>72</td>
                                                        <td>3.2</td>
                                                        <td>8.54</td>
                                                        <td>6.71</td>
                                                        <td>66.32</td>
                                                        <td>66.32</td>
                                                        <td>2.79</td>
                                                        <td>2.79</td>
                                                        <td>18.42</td>
                                                        <td>18.42</td>
                                                        <td>106.82</td>
                                                        <td>27.74</td>
                                                        <td>0.272</td>
                                                        <td>149.11</td>
                                                    </tr>
                                                    <tr>
                                                        <td>72</td>
                                                        <td>72</td>
                                                        <td>4.0</td>
                                                        <td>10.47</td>
                                                        <td>8.22</td>
                                                        <td>79.03</td>
                                                        <td>79.03</td>
                                                        <td>2.75</td>
                                                        <td>2.75</td>
                                                        <td>21.95</td>
                                                        <td>21.95</td>
                                                        <td>129.54</td>
                                                        <td>33.13</td>
                                                        <td>0.267</td>
                                                        <td>121.69</td>
                                                    </tr>
                                                    <tr>
                                                        <td>72</td>
                                                        <td>72</td>
                                                        <td>4.8</td>
                                                        <td>12.31</td>
                                                        <td>9.66</td>
                                                        <td>90.31</td>
                                                        <td>90.31</td>
                                                        <td>2.71</td>
                                                        <td>2.71</td>
                                                        <td>25.09</td>
                                                        <td>25.09</td>
                                                        <td>150.63</td>
                                                        <td>37.97</td>
                                                        <td>0.263</td>
                                                        <td>103.48</td>
                                                    </tr>
                                                    <tr>
                                                        <td>72</td>
                                                        <td>72</td>
                                                        <td>6.0</td>
                                                        <td>14.91</td>
                                                        <td>11.71</td>
                                                        <td>104.71</td>
                                                        <td>104.71</td>
                                                        <td>2.65</td>
                                                        <td>2.65</td>
                                                        <td>29.08</td>
                                                        <td>29.08</td>
                                                        <td>179.20</td>
                                                        <td>44.26</td>
                                                        <td>0.257</td>
                                                        <td>85.41</td>
                                                    </tr>
                                                    <tr>
                                                        <td>72</td>
                                                        <td>72</td>
                                                        <td>8.0</td>
                                                        <td>18.83</td>
                                                        <td>14.78</td>
                                                        <td>122.48</td>
                                                        <td>122.48</td>
                                                        <td>2.55</td>
                                                        <td>2.55</td>
                                                        <td>34.02</td>
                                                        <td>34.02</td>
                                                        <td>218.52</td>
                                                        <td>52.34</td>
                                                        <td>0.247</td>
                                                        <td>67.64</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={6}>80x80</td>
                                                        <td>80</td>
                                                        <td>80</td>
                                                        <td>2.9</td>
                                                        <td>8.73</td>
                                                        <td>6.85</td>
                                                        <td>85.36</td>
                                                        <td>85.36</td>
                                                        <td>3.13</td>
                                                        <td>3.13</td>
                                                        <td>21.34</td>
                                                        <td>21.34</td>
                                                        <td>135.71</td>
                                                        <td>32.08</td>
                                                        <td>0.305</td>
                                                        <td>145.96</td>
                                                    </tr>
                                                    <tr>
                                                        <td>80</td>
                                                        <td>80</td>
                                                        <td>3.2</td>
                                                        <td>9.57</td>
                                                        <td>7.51</td>
                                                        <td>92.71</td>
                                                        <td>92.71</td>
                                                        <td>3.11</td>
                                                        <td>3.11</td>
                                                        <td>23.18</td>
                                                        <td>23.18</td>
                                                        <td>148.28</td>
                                                        <td>34.87</td>
                                                        <td>0.304</td>
                                                        <td>133.15</td>
                                                    </tr>
                                                    <tr>
                                                        <td>80</td>
                                                        <td>80</td>
                                                        <td>4.0</td>
                                                        <td>11.75</td>
                                                        <td>9.22</td>
                                                        <td>111.04</td>
                                                        <td>111.04</td>
                                                        <td>3.07</td>
                                                        <td>3.07</td>
                                                        <td>27.76</td>
                                                        <td>27.76</td>
                                                        <td>180.43</td>
                                                        <td>41.84</td>
                                                        <td>0.299</td>
                                                        <td>108.43</td>
                                                    </tr>
                                                    <tr>
                                                        <td>80</td>
                                                        <td>80</td>
                                                        <td>4.8</td>
                                                        <td>13.85</td>
                                                        <td>10.87</td>
                                                        <td>127.58</td>
                                                        <td>127.58</td>
                                                        <td>3.04</td>
                                                        <td>3.04</td>
                                                        <td>31.89</td>
                                                        <td>31.89</td>
                                                        <td>210.59</td>
                                                        <td>48.19</td>
                                                        <td>0.295</td>
                                                        <td>92.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>80</td>
                                                        <td>80</td>
                                                        <td>6.0</td>
                                                        <td>16.83</td>
                                                        <td>13.21</td>
                                                        <td>149.18</td>
                                                        <td>149.18</td>
                                                        <td>2.98</td>
                                                        <td>2.98</td>
                                                        <td>37.29</td>
                                                        <td>37.29</td>
                                                        <td>252.06</td>
                                                        <td>56.59</td>
                                                        <td>0.289</td>
                                                        <td>75.67</td>
                                                    </tr>
                                                    <tr>
                                                        <td>80</td>
                                                        <td>80</td>
                                                        <td>8.0</td>
                                                        <td>21.39</td>
                                                        <td>16.79</td>
                                                        <td>177.19</td>
                                                        <td>177.19</td>
                                                        <td>2.88</td>
                                                        <td>2.88</td>
                                                        <td>44.30</td>
                                                        <td>44.30</td>
                                                        <td>311.00</td>
                                                        <td>67.84</td>
                                                        <td>0.279</td>
                                                        <td>59.54</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={7}>91.5x91.5</td>
                                                        <td>91.5</td>
                                                        <td>91.5</td>
                                                        <td>2.6</td>
                                                        <td>9.07</td>
                                                        <td>7.12</td>
                                                        <td>118.32</td>
                                                        <td>118.32</td>
                                                        <td>3.61</td>
                                                        <td>3.61</td>
                                                        <td>25.86</td>
                                                        <td>25.86</td>
                                                        <td>185.77</td>
                                                        <td>38.84</td>
                                                        <td>0.353</td>
                                                        <td>140.42</td>
                                                    </tr>
                                                    <tr>
                                                        <td>91.5</td>
                                                        <td>91.5</td>
                                                        <td>3.2</td>
                                                        <td>11.04</td>
                                                        <td>8.67</td>
                                                        <td>141.69</td>
                                                        <td>141.69</td>
                                                        <td>3.58</td>
                                                        <td>3.58</td>
                                                        <td>30.97</td>
                                                        <td>30.97</td>
                                                        <td>224.80</td>
                                                        <td>46.55</td>
                                                        <td>0.350</td>
                                                        <td>115.40</td>
                                                    </tr>
                                                    <tr>
                                                        <td>91.5</td>
                                                        <td>91.5</td>
                                                        <td>3.6</td>
                                                        <td>12.32</td>
                                                        <td>9.67</td>
                                                        <td>156.49</td>
                                                        <td>156.49</td>
                                                        <td>3.56</td>
                                                        <td>3.56</td>
                                                        <td>34.21</td>
                                                        <td>34.21</td>
                                                        <td>250.02</td>
                                                        <td>51.45</td>
                                                        <td>0.347</td>
                                                        <td>103.36</td>
                                                    </tr>
                                                    <tr>
                                                        <td>91.5</td>
                                                        <td>91.5</td>
                                                        <td>4.5</td>
                                                        <td>15.14</td>
                                                        <td>11.88</td>
                                                        <td>187.57</td>
                                                        <td>187.57</td>
                                                        <td>3.52</td>
                                                        <td>3.52</td>
                                                        <td>41.00</td>
                                                        <td>41.00</td>
                                                        <td>304.39</td>
                                                        <td>61.79</td>
                                                        <td>0.343</td>
                                                        <td>84.16</td>
                                                    </tr>
                                                    <tr>
                                                        <td>91.5</td>
                                                        <td>91.5</td>
                                                        <td>5.4</td>
                                                        <td>17.85</td>
                                                        <td>14.01</td>
                                                        <td>215.68</td>
                                                        <td>215.68</td>
                                                        <td>3.48</td>
                                                        <td>3.48</td>
                                                        <td>47.14</td>
                                                        <td>47.14</td>
                                                        <td>355.46</td>
                                                        <td>71.21</td>
                                                        <td>0.338</td>
                                                        <td>71.38</td>
                                                    </tr>
                                                    <tr>
                                                        <td>91.5</td>
                                                        <td>91.5</td>
                                                        <td>6.0</td>
                                                        <td>19.59</td>
                                                        <td>15.38</td>
                                                        <td>232.81</td>
                                                        <td>232.81</td>
                                                        <td>3.45</td>
                                                        <td>3.45</td>
                                                        <td>50.89</td>
                                                        <td>50.89</td>
                                                        <td>387.66</td>
                                                        <td>77.00</td>
                                                        <td>0.335</td>
                                                        <td>65.01</td>
                                                    </tr>
                                                    <tr>
                                                        <td>91.5</td>
                                                        <td>91.5</td>
                                                        <td>8.0</td>
                                                        <td>25.07</td>
                                                        <td>19.68</td>
                                                        <td>251.18</td>
                                                        <td>251.18</td>
                                                        <td>3.35</td>
                                                        <td>3.35</td>
                                                        <td>61.46</td>
                                                        <td>61.46</td>
                                                        <td>484.25</td>
                                                        <td>93.66</td>
                                                        <td>0.325</td>
                                                        <td>50.80</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={6}>100X100</td>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>2.6</td>
                                                        <td>9.96</td>
                                                        <td>7.82</td>
                                                        <td>156.01</td>
                                                        <td>156.01</td>
                                                        <td>3.96</td>
                                                        <td>3.96</td>
                                                        <td>31.20</td>
                                                        <td>31.20</td>
                                                        <td>243.99</td>
                                                        <td>46.85</td>
                                                        <td>0.387</td>
                                                        <td>127.95</td>
                                                    </tr>
                                                    <tr>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>3.2</td>
                                                        <td>12.13</td>
                                                        <td>9.52</td>
                                                        <td>187.28</td>
                                                        <td>187.28</td>
                                                        <td>3.93</td>
                                                        <td>3.93</td>
                                                        <td>37.46</td>
                                                        <td>37.46</td>
                                                        <td>295.72</td>
                                                        <td>56.28</td>
                                                        <td>0.384</td>
                                                        <td>105.04</td>
                                                    </tr>
                                                    <tr>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>4.0</td>
                                                        <td>14.95</td>
                                                        <td>11.73</td>
                                                        <td>226.35</td>
                                                        <td>226.35</td>
                                                        <td>3.89</td>
                                                        <td>3.89</td>
                                                        <td>45.27</td>
                                                        <td>45.27</td>
                                                        <td>362.00</td>
                                                        <td>68.10</td>
                                                        <td>0.379</td>
                                                        <td>85.22</td>
                                                    </tr>
                                                    <tr>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>5.0</td>
                                                        <td>18.36</td>
                                                        <td>14.41</td>
                                                        <td>271.10</td>
                                                        <td>271.10</td>
                                                        <td>3.84</td>
                                                        <td>3.84</td>
                                                        <td>54.22</td>
                                                        <td>54.22</td>
                                                        <td>440.50</td>
                                                        <td>81.72</td>
                                                        <td>0.374</td>
                                                        <td>69.39</td>
                                                    </tr>
                                                    <tr>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>6.0</td>
                                                        <td>21.63</td>
                                                        <td>16.98</td>
                                                        <td>311.47</td>
                                                        <td>311.47</td>
                                                        <td>3.79</td>
                                                        <td>3.79</td>
                                                        <td>62.29</td>
                                                        <td>62.29</td>
                                                        <td>514.14</td>
                                                        <td>94.12</td>
                                                        <td>0.369</td>
                                                        <td>58.88</td>
                                                    </tr>
                                                    <tr>
                                                        <td>100</td>
                                                        <td>100</td>
                                                        <td>8.0</td>
                                                        <td>27.79</td>
                                                        <td>21.82</td>
                                                        <td>379.77</td>
                                                        <td>379.77</td>
                                                        <td>3.70</td>
                                                        <td>3.70</td>
                                                        <td>75.95</td>
                                                        <td>75.95</td>
                                                        <td>646.66</td>
                                                        <td>115.45</td>
                                                        <td>0.359</td>
                                                        <td>45.83</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={5}>113.5x113.5</td>
                                                        <td>113.5</td>
                                                        <td>113.5</td>
                                                        <td>4.0</td>
                                                        <td>17.11</td>
                                                        <td>13.43</td>
                                                        <td>337.67</td>
                                                        <td>337.67</td>
                                                        <td>4.44</td>
                                                        <td>4.44</td>
                                                        <td>59.50</td>
                                                        <td>59.50</td>
                                                        <td>535.95</td>
                                                        <td>89.44</td>
                                                        <td>0.433</td>
                                                        <td>74.46</td>
                                                    </tr>
                                                    <tr>
                                                        <td>113.5</td>
                                                        <td>113.5</td>
                                                        <td>4.8</td>
                                                        <td>20.28</td>
                                                        <td>15.92</td>
                                                        <td>393.30</td>
                                                        <td>393.30</td>
                                                        <td>4.40</td>
                                                        <td>4.40</td>
                                                        <td>69.30</td>
                                                        <td>69.30</td>
                                                        <td>631.30</td>
                                                        <td>104.30</td>
                                                        <td>0.429</td>
                                                        <td>62.82</td>
                                                    </tr>
                                                    <tr>
                                                        <td>113.5</td>
                                                        <td>113.5</td>
                                                        <td>5.4</td>
                                                        <td>22.60</td>
                                                        <td>17.74</td>
                                                        <td>432.58</td>
                                                        <td>432.58</td>
                                                        <td>4.38</td>
                                                        <td>4.38</td>
                                                        <td>76.23</td>
                                                        <td>76.23</td>
                                                        <td>700.20</td>
                                                        <td>114.83</td>
                                                        <td>0.426</td>
                                                        <td>56.37</td>
                                                    </tr>
                                                    <tr>
                                                        <td>113.5</td>
                                                        <td>113.5</td>
                                                        <td>6.0</td>
                                                        <td>24.87</td>
                                                        <td>19.53</td>
                                                        <td>469.81</td>
                                                        <td>469.81</td>
                                                        <td>4.35</td>
                                                        <td>4.35</td>
                                                        <td>82.79</td>
                                                        <td>82.79</td>
                                                        <td>766.84</td>
                                                        <td>124.86</td>
                                                        <td>0.423</td>
                                                        <td>51.21</td>
                                                    </tr>
                                                    <tr>
                                                        <td>113.5</td>
                                                        <td>113.5</td>
                                                        <td>8.0</td>
                                                        <td>32.11</td>
                                                        <td>25.21</td>
                                                        <td>579.66</td>
                                                        <td>579.66</td>
                                                        <td>4.25</td>
                                                        <td>4.25</td>
                                                        <td>102.14</td>
                                                        <td>102.14</td>
                                                        <td>972.60</td>
                                                        <td>154.78</td>
                                                        <td>0.413</td>
                                                        <td>39.67</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={6}>132X132</td>
                                                        <td>132</td>
                                                        <td>132</td>
                                                        <td>4.0</td>
                                                        <td>20.07</td>
                                                        <td>15.75</td>
                                                        <td>542.25</td>
                                                        <td>542.25</td>
                                                        <td>5.20</td>
                                                        <td>5.20</td>
                                                        <td>82.16</td>
                                                        <td>82.16</td>
                                                        <td>853.91</td>
                                                        <td>123.42</td>
                                                        <td>0.507</td>
                                                        <td>63.48</td>
                                                    </tr>
                                                    <tr>
                                                        <td>132</td>
                                                        <td>132</td>
                                                        <td>4.8</td>
                                                        <td>23.83</td>
                                                        <td>18.71</td>
                                                        <td>634.39</td>
                                                        <td>634.39</td>
                                                        <td>5.16</td>
                                                        <td>5.16</td>
                                                        <td>96.12</td>
                                                        <td>96.12</td>
                                                        <td>1008.71</td>
                                                        <td>144.51</td>
                                                        <td>0.503</td>
                                                        <td>53.46</td>
                                                    </tr>
                                                    <tr>
                                                        <td>132</td>
                                                        <td>132</td>
                                                        <td>5.4</td>
                                                        <td>26.60</td>
                                                        <td>20.88</td>
                                                        <td>700.11</td>
                                                        <td>700.11</td>
                                                        <td>5.13</td>
                                                        <td>5.13</td>
                                                        <td>106.08</td>
                                                        <td>106.08</td>
                                                        <td>1121.29</td>
                                                        <td>159.60</td>
                                                        <td>0.500</td>
                                                        <td>47.90</td>
                                                    </tr>
                                                    <tr>
                                                        <td>132</td>
                                                        <td>132</td>
                                                        <td>6.0</td>
                                                        <td>29.31</td>
                                                        <td>23.01</td>
                                                        <td>762.98</td>
                                                        <td>762.98</td>
                                                        <td>5.10</td>
                                                        <td>5.10</td>
                                                        <td>115.60</td>
                                                        <td>115.60</td>
                                                        <td>1230.84</td>
                                                        <td>174.08</td>
                                                        <td>0.497</td>
                                                        <td>43.46</td>
                                                    </tr>
                                                    <tr>
                                                        <td>132</td>
                                                        <td>132</td>
                                                        <td>8.0</td>
                                                        <td>38.03</td>
                                                        <td>29.86</td>
                                                        <td>952.64</td>
                                                        <td>952.64</td>
                                                        <td>5.00</td>
                                                        <td>5.00</td>
                                                        <td>144.34</td>
                                                        <td>144.34</td>
                                                        <td>1573.97</td>
                                                        <td>218.11</td>
                                                        <td>0.487</td>
                                                        <td>33.49</td>
                                                    </tr>
                                                    <tr>
                                                        <td>132</td>
                                                        <td>132</td>
                                                        <td>10.0</td>
                                                        <td>46.23</td>
                                                        <td>36.29</td>
                                                        <td>1113.05</td>
                                                        <td>1113.05</td>
                                                        <td>4.91</td>
                                                        <td>4.91</td>
                                                        <td>168.64</td>
                                                        <td>168.64</td>
                                                        <td>1882.91</td>
                                                        <td>255.97</td>
                                                        <td>0.476</td>
                                                        <td>27.56</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={5}>150X150</td>
                                                        <td>150</td>
                                                        <td>150</td>
                                                        <td>4.0</td>
                                                        <td>22.95</td>
                                                        <td>18.01</td>
                                                        <td>807.82</td>
                                                        <td>807.82</td>
                                                        <td>5.93</td>
                                                        <td>5.93</td>
                                                        <td>107.71</td>
                                                        <td>107.71</td>
                                                        <td>1264.73</td>
                                                        <td>161.73</td>
                                                        <td>0.579</td>
                                                        <td>55.51</td>
                                                    </tr>
                                                    <tr>
                                                        <td>150</td>
                                                        <td>150</td>
                                                        <td>5.0</td>
                                                        <td>28.36</td>
                                                        <td>22.26</td>
                                                        <td>982.12</td>
                                                        <td>982.12</td>
                                                        <td>5.89</td>
                                                        <td>5.89</td>
                                                        <td>130.95</td>
                                                        <td>130.95</td>
                                                        <td>1554.09</td>
                                                        <td>196.79</td>
                                                        <td>0.574</td>
                                                        <td>44.92</td>
                                                    </tr>
                                                    <tr>
                                                        <td>150</td>
                                                        <td>150</td>
                                                        <td>6.0</td>
                                                        <td>33.63</td>
                                                        <td>26.40</td>
                                                        <td>1145.91</td>
                                                        <td>1145.91</td>
                                                        <td>5.84</td>
                                                        <td>5.84</td>
                                                        <td>152.79</td>
                                                        <td>152.79</td>
                                                        <td>1832.63</td>
                                                        <td>229.84</td>
                                                        <td>0.569</td>
                                                        <td>37.87</td>
                                                    </tr>
                                                    <tr>
                                                        <td>150</td>
                                                        <td>150</td>
                                                        <td>8.0</td>
                                                        <td>43.79</td>
                                                        <td>34.38</td>
                                                        <td>1443.00</td>
                                                        <td>1443.00</td>
                                                        <td>5.74</td>
                                                        <td>5.74</td>
                                                        <td>192.40</td>
                                                        <td>192.40</td>
                                                        <td>2357.04</td>
                                                        <td>290.22</td>
                                                        <td>0.559</td>
                                                        <td>29.09</td>
                                                    </tr>
                                                    <tr>
                                                        <td>150</td>
                                                        <td>150</td>
                                                        <td>10.0</td>
                                                        <td>53.43</td>
                                                        <td>41.94</td>
                                                        <td>1701.21</td>
                                                        <td>1701.21</td>
                                                        <td>5.64</td>
                                                        <td>5.64</td>
                                                        <td>226.83</td>
                                                        <td>226.83</td>
                                                        <td>2837.55</td>
                                                        <td>343.33</td>
                                                        <td>0.548</td>
                                                        <td>23.84</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={5}>180X180</td>
                                                        <td>180</td>
                                                        <td>180</td>
                                                        <td>4.0</td>
                                                        <td>27.75</td>
                                                        <td>21.78</td>
                                                        <td>1421.74</td>
                                                        <td>1421.74</td>
                                                        <td>7.16</td>
                                                        <td>7.16</td>
                                                        <td>157.97</td>
                                                        <td>157.97</td>
                                                        <td>2210.12</td>
                                                        <td>237.10</td>
                                                        <td>0.699</td>
                                                        <td>45.91</td>
                                                    </tr>
                                                    <tr>
                                                        <td>180</td>
                                                        <td>180</td>
                                                        <td>5.0</td>
                                                        <td>34.36</td>
                                                        <td>26.97</td>
                                                        <td>1736.87</td>
                                                        <td>1736.87</td>
                                                        <td>7.11</td>
                                                        <td>7.11</td>
                                                        <td>192.99</td>
                                                        <td>192.99</td>
                                                        <td>2724.10</td>
                                                        <td>289.81</td>
                                                        <td>0.694</td>
                                                        <td>37.08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>180</td>
                                                        <td>180</td>
                                                        <td>6.0</td>
                                                        <td>40.83</td>
                                                        <td>32.05</td>
                                                        <td>2036.52</td>
                                                        <td>2036.52</td>
                                                        <td>7.06</td>
                                                        <td>7.06</td>
                                                        <td>226.28</td>
                                                        <td>226.28</td>
                                                        <td>3222.56</td>
                                                        <td>340.05</td>
                                                        <td>0.689</td>
                                                        <td>31.20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>180</td>
                                                        <td>180</td>
                                                        <td>8.0</td>
                                                        <td>53.39</td>
                                                        <td>41.91</td>
                                                        <td>2590.73</td>
                                                        <td>2590.73</td>
                                                        <td>6.97</td>
                                                        <td>6.97</td>
                                                        <td>287.86</td>
                                                        <td>287.86</td>
                                                        <td>4172.68</td>
                                                        <td>433.39</td>
                                                        <td>0.679</td>
                                                        <td>23.86</td>
                                                    </tr>
                                                    <tr>
                                                        <td>180</td>
                                                        <td>180</td>
                                                        <td>10.0</td>
                                                        <td>65.43</td>
                                                        <td>51.36</td>
                                                        <td>3086.93</td>
                                                        <td>3086.93</td>
                                                        <td>6.87</td>
                                                        <td>6.87</td>
                                                        <td>342.99</td>
                                                        <td>342.99</td>
                                                        <td>5059.98</td>
                                                        <td>517.64</td>
                                                        <td>0.668</td>
                                                        <td>19.47</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={5}>200x200</td>
                                                        <td>200</td>
                                                        <td>200</td>
                                                        <td>4.0</td>
                                                        <td>30.95</td>
                                                        <td>24.29</td>
                                                        <td>1968.13</td>
                                                        <td>1968.13</td>
                                                        <td>7.97</td>
                                                        <td>7.97</td>
                                                        <td>196.81</td>
                                                        <td>196.81</td>
                                                        <td>3048.60</td>
                                                        <td>295.34</td>
                                                        <td>0.779</td>
                                                        <td>41.16</td>
                                                    </tr>
                                                    <tr>
                                                        <td>200</td>
                                                        <td>200</td>
                                                        <td>5.4</td>
                                                        <td>41.28</td>
                                                        <td>32.41</td>
                                                        <td>2581.45</td>
                                                        <td>2581.45</td>
                                                        <td>7.91</td>
                                                        <td>7.91</td>
                                                        <td>258.14</td>
                                                        <td>258.14</td>
                                                        <td>4043.71</td>
                                                        <td>387.62</td>
                                                        <td>0.772</td>
                                                        <td>30.86</td>
                                                    </tr>
                                                    <tr>
                                                        <td>200</td>
                                                        <td>200</td>
                                                        <td>6.0</td>
                                                        <td>45.63</td>
                                                        <td>35.82</td>
                                                        <td>2832.75</td>
                                                        <td>2832.75</td>
                                                        <td>7.88</td>
                                                        <td>7.88</td>
                                                        <td>283.27</td>
                                                        <td>283.27</td>
                                                        <td>4458.70</td>
                                                        <td>425.51</td>
                                                        <td>0.769</td>
                                                        <td>27.92</td>
                                                    </tr>
                                                    <tr>
                                                        <td>200</td>
                                                        <td>200</td>
                                                        <td>8.0</td>
                                                        <td>59.79</td>
                                                        <td>46.94</td>
                                                        <td>3621.63</td>
                                                        <td>3621.63</td>
                                                        <td>7.78</td>
                                                        <td>7.78</td>
                                                        <td>362.16</td>
                                                        <td>362.16</td>
                                                        <td>5792.01</td>
                                                        <td>544.81</td>
                                                        <td>0.759</td>
                                                        <td>21.30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>200</td>
                                                        <td>200</td>
                                                        <td>10.0</td>
                                                        <td>73.43</td>
                                                        <td>57.64</td>
                                                        <td>4337.63</td>
                                                        <td>4337.63</td>
                                                        <td>7.69</td>
                                                        <td>7.69</td>
                                                        <td>433.76</td>
                                                        <td>433.76</td>
                                                        <td>7048.03</td>
                                                        <td>653.80</td>
                                                        <td>0.748</td>
                                                        <td>17.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={4}>220x220</td>
                                                        <td>220</td>
                                                        <td>220</td>
                                                        <td>5.0</td>
                                                        <td>42.36</td>
                                                        <td>33.25</td>
                                                        <td>3238.02</td>
                                                        <td>3238.02</td>
                                                        <td>8.74</td>
                                                        <td>8.74</td>
                                                        <td>294.37</td>
                                                        <td>294.37</td>
                                                        <td>5037.62</td>
                                                        <td>441.83</td>
                                                        <td>0.854</td>
                                                        <td>30.07</td>
                                                    </tr>
                                                    <tr>
                                                        <td>220</td>
                                                        <td>220</td>
                                                        <td>6.0</td>
                                                        <td>50.43</td>
                                                        <td>39.59</td>
                                                        <td>3813.36</td>
                                                        <td>3813.36</td>
                                                        <td>8.70</td>
                                                        <td>8.70</td>
                                                        <td>346.67</td>
                                                        <td>346.67</td>
                                                        <td>5976.05</td>
                                                        <td>520.57</td>
                                                        <td>0.849</td>
                                                        <td>25.26</td>
                                                    </tr>
                                                    <tr>
                                                        <td>220</td>
                                                        <td>220</td>
                                                        <td>8.0</td>
                                                        <td>66.19</td>
                                                        <td>51.96</td>
                                                        <td>4894.99</td>
                                                        <td>4894.99</td>
                                                        <td>8.60</td>
                                                        <td>8.60</td>
                                                        <td>445.00</td>
                                                        <td>445.00</td>
                                                        <td>7783.28</td>
                                                        <td>669.03</td>
                                                        <td>0.839</td>
                                                        <td>19.24</td>
                                                    </tr>
                                                    <tr>
                                                        <td>220</td>
                                                        <td>220</td>
                                                        <td>10.0</td>
                                                        <td>81.43</td>
                                                        <td>63.92</td>
                                                        <td>5887.19</td>
                                                        <td>5887.19</td>
                                                        <td>8.50</td>
                                                        <td>8.50</td>
                                                        <td>535.20</td>
                                                        <td>535.20</td>
                                                        <td>9497.22</td>
                                                        <td>805.93</td>
                                                        <td>0.828</td>
                                                        <td>15.64</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={5}>250X250</td>
                                                        <td>250</td>
                                                        <td>250</td>
                                                        <td>5.0</td>
                                                        <td>48.36</td>
                                                        <td>37.96</td>
                                                        <td>4805.01</td>
                                                        <td>4805.01</td>
                                                        <td>9.97</td>
                                                        <td>9.97</td>
                                                        <td>384.40</td>
                                                        <td>384.40</td>
                                                        <td>7442.88</td>
                                                        <td>576.84</td>
                                                        <td>0.974</td>
                                                        <td>26.34</td>
                                                    </tr>
                                                    <tr>
                                                        <td>250</td>
                                                        <td>250</td>
                                                        <td>6.0</td>
                                                        <td>57.63</td>
                                                        <td>45.24</td>
                                                        <td>5672.00</td>
                                                        <td>5672.00</td>
                                                        <td>9.92</td>
                                                        <td>9.92</td>
                                                        <td>453.76</td>
                                                        <td>453.76</td>
                                                        <td>8842.34</td>
                                                        <td>681.15</td>
                                                        <td>0.969</td>
                                                        <td>22.10</td>
                                                    </tr>
                                                    <tr>
                                                        <td>250</td>
                                                        <td>250</td>
                                                        <td>8.0</td>
                                                        <td>75.79</td>
                                                        <td>59.50</td>
                                                        <td>7315.65</td>
                                                        <td>7315.65</td>
                                                        <td>9.82</td>
                                                        <td>9.82</td>
                                                        <td>585.25</td>
                                                        <td>585.25</td>
                                                        <td>11551.56</td>
                                                        <td>879.34</td>
                                                        <td>0.959</td>
                                                        <td>16.81</td>
                                                    </tr>
                                                    <tr>
                                                        <td>250</td>
                                                        <td>250</td>
                                                        <td>10.0</td>
                                                        <td>93.43</td>
                                                        <td>73.34</td>
                                                        <td>8841.86</td>
                                                        <td>8841.86</td>
                                                        <td>9.73</td>
                                                        <td>9.73</td>
                                                        <td>707.35</td>
                                                        <td>707.35</td>
                                                        <td>14140.66</td>
                                                        <td>1064.09</td>
                                                        <td>0.948</td>
                                                        <td>13.63</td>
                                                    </tr>
                                                    <tr>
                                                        <td>250</td>
                                                        <td>250</td>
                                                        <td>12.0</td>
                                                        <td>110.54</td>
                                                        <td>86.77</td>
                                                        <td>10254.21</td>
                                                        <td>10254.21</td>
                                                        <td>9.63</td>
                                                        <td>9.63</td>
                                                        <td>820.34</td>
                                                        <td>820.34</td>
                                                        <td>16608.97</td>
                                                        <td>1235.94</td>
                                                        <td>0.938</td>
                                                        <td>11.52</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={6}>300x300</td>
                                                        <td>300</td>
                                                        <td>300</td>
                                                        <td>6.0</td>
                                                        <td>69.63</td>
                                                        <td>54.66</td>
                                                        <td>9963.67</td>
                                                        <td>9963.67</td>
                                                        <td>11.96</td>
                                                        <td>11.96</td>
                                                        <td>664.24</td>
                                                        <td>664.24</td>
                                                        <td>15433.55</td>
                                                        <td>996.78</td>
                                                        <td>1.169</td>
                                                        <td>18.29</td>
                                                    </tr>
                                                    <tr>
                                                        <td>300</td>
                                                        <td>300</td>
                                                        <td>8.0</td>
                                                        <td>91.79</td>
                                                        <td>72.06</td>
                                                        <td>12925.07</td>
                                                        <td>12925.07</td>
                                                        <td>11.87</td>
                                                        <td>11.87</td>
                                                        <td>861.67</td>
                                                        <td>861.67</td>
                                                        <td>20235.69</td>
                                                        <td>1293.82</td>
                                                        <td>1.159</td>
                                                        <td>13.88</td>
                                                    </tr>
                                                    <tr>
                                                        <td>300</td>
                                                        <td>300</td>
                                                        <td>10.0</td>
                                                        <td>113.43</td>
                                                        <td>89.04</td>
                                                        <td>15713.90</td>
                                                        <td>15713.90</td>
                                                        <td>11.77</td>
                                                        <td>11.77</td>
                                                        <td>1047.6</td>
                                                        <td>1047.6</td>
                                                        <td>24865.45</td>
                                                        <td>1574.29</td>
                                                        <td>1.148</td>
                                                        <td>11.23</td>
                                                    </tr>
                                                    <tr>
                                                        <td>300</td>
                                                        <td>300</td>
                                                        <td>12.0</td>
                                                        <td>134.54</td>
                                                        <td>105.61</td>
                                                        <td>18334.49</td>
                                                        <td>18334.49</td>
                                                        <td>11.67</td>
                                                        <td>11.67</td>
                                                        <td>1222.3</td>
                                                        <td>1222.3</td>
                                                        <td>29322.07</td>
                                                        <td>1838.74</td>
                                                        <td>1.138</td>
                                                        <td>9.47</td>
                                                    </tr>
                                                    <tr>
                                                        <td>300</td>
                                                        <td>300</td>
                                                        <td>14.0</td>
                                                        <td>155.12</td>
                                                        <td>121.77</td>
                                                        <td>20791.11</td>
                                                        <td>20791.11</td>
                                                        <td>11.58</td>
                                                        <td>11.58</td>
                                                        <td>1386.1</td>
                                                        <td>1386.1</td>
                                                        <td>33604.76</td>
                                                        <td>2087.72</td>
                                                        <td>1.128</td>
                                                        <td>8.21</td>
                                                    </tr>
                                                    <tr>
                                                        <td>300</td>
                                                        <td>300</td>
                                                        <td>16.0</td>
                                                        <td>175.18</td>
                                                        <td>137.51</td>
                                                        <td>23088.02</td>
                                                        <td>23088.02</td>
                                                        <td>11.48</td>
                                                        <td>11.48</td>
                                                        <td>1539.2</td>
                                                        <td>1539.2</td>
                                                        <td>37712.69</td>
                                                        <td>2321.72</td>
                                                        <td>1.118</td>
                                                        <td>7.27</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={5}>400x400</td>
                                                        <td>400</td>
                                                        <td>400</td>
                                                        <td>8.0</td>
                                                        <td>123.79</td>
                                                        <td>97.18</td>
                                                        <td>31490.11</td>
                                                        <td>31490.11</td>
                                                        <td>15.95</td>
                                                        <td>15.95</td>
                                                        <td>1574.51</td>
                                                        <td>1574.51</td>
                                                        <td>48777.65</td>
                                                        <td>2362.73</td>
                                                        <td>1.559</td>
                                                        <td>10.29</td>
                                                    </tr>
                                                    <tr>
                                                        <td>400</td>
                                                        <td>400</td>
                                                        <td>10.0</td>
                                                        <td>153.43</td>
                                                        <td>120.44</td>
                                                        <td>38561.41</td>
                                                        <td>38561.41</td>
                                                        <td>15.85</td>
                                                        <td>15.85</td>
                                                        <td>1928.07</td>
                                                        <td>1928.07</td>
                                                        <td>60211.46</td>
                                                        <td>2894.55</td>
                                                        <td>1.548</td>
                                                        <td>8.30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>400</td>
                                                        <td>400</td>
                                                        <td>12.0</td>
                                                        <td>182.54</td>
                                                        <td>143.29</td>
                                                        <td>45323.97</td>
                                                        <td>45323.97</td>
                                                        <td>15.76</td>
                                                        <td>15.76</td>
                                                        <td>2266.2</td>
                                                        <td>2266.2</td>
                                                        <td>71339.17</td>
                                                        <td>3404.07</td>
                                                        <td>1.538</td>
                                                        <td>6.98</td>
                                                    </tr>
                                                    <tr>
                                                        <td>400</td>
                                                        <td>400</td>
                                                        <td>14.0</td>
                                                        <td>211.12</td>
                                                        <td>165.73</td>
                                                        <td>51783.59</td>
                                                        <td>51783.59</td>
                                                        <td>15.66</td>
                                                        <td>15.66</td>
                                                        <td>2589.2</td>
                                                        <td>2589.2</td>
                                                        <td>82159.77</td>
                                                        <td>3891.87</td>
                                                        <td>1.528</td>
                                                        <td>6.03</td>
                                                    </tr>
                                                    <tr>
                                                        <td>400</td>
                                                        <td>400</td>
                                                        <td>16.0</td>
                                                        <td>239.18</td>
                                                        <td>187.75</td>
                                                        <td>57946.03</td>
                                                        <td>57946.03</td>
                                                        <td>15.57</td>
                                                        <td>15.57</td>
                                                        <td>2897.3</td>
                                                        <td>2897.3</td>
                                                        <td>92672.23</td>
                                                        <td>4358.51</td>
                                                        <td>1.518</td>
                                                        <td>5.33</td>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={5}>450x450</td>
                                                        <td>450</td>
                                                        <td>450</td>
                                                        <td>8.0</td>
                                                        <td>139.79</td>
                                                        <td>109.74</td>
                                                        <td>45245.73</td>
                                                        <td>45245.73</td>
                                                        <td>17.99</td>
                                                        <td>17.99</td>
                                                        <td>2010.92</td>
                                                        <td>2010.92</td>
                                                        <td>69835.49</td>
                                                        <td>3017.17</td>
                                                        <td>1.759</td>
                                                        <td>9.11</td>
                                                    </tr>
                                                    <tr>
                                                        <td>450</td>
                                                        <td>450</td>
                                                        <td>10.0</td>
                                                        <td>173.43</td>
                                                        <td>136.14</td>
                                                        <td>55536.88</td>
                                                        <td>55536.88</td>
                                                        <td>17.89</td>
                                                        <td>17.89</td>
                                                        <td>2468.31</td>
                                                        <td>2468.31</td>
                                                        <td>86332.69</td>
                                                        <td>3704.64</td>
                                                        <td>1.748</td>
                                                        <td>7.35</td>
                                                    </tr>
                                                    <tr>
                                                        <td>450</td>
                                                        <td>450</td>
                                                        <td>12.0</td>
                                                        <td>206.54</td>
                                                        <td>162.13</td>
                                                        <td>65433.18</td>
                                                        <td>65433.18</td>
                                                        <td>17.80</td>
                                                        <td>17.80</td>
                                                        <td>2908.14</td>
                                                        <td>2908.14</td>
                                                        <td>102443.16</td>
                                                        <td>4366.65</td>
                                                        <td>1.738</td>
                                                        <td>6.17</td>
                                                    </tr>
                                                    <tr>
                                                        <td>450</td>
                                                        <td>450</td>
                                                        <td>16.0</td>
                                                        <td>271.18</td>
                                                        <td>212.87</td>
                                                        <td>84067.43</td>
                                                        <td>84067.43</td>
                                                        <td>17.61</td>
                                                        <td>17.61</td>
                                                        <td>3736.3</td>
                                                        <td>3736.3</td>
                                                        <td>133499.47</td>
                                                        <td>5616.65</td>
                                                        <td>1.718</td>
                                                        <td>4.70</td>
                                                    </tr>
                                                    <tr>
                                                        <td>450</td>
                                                        <td>450</td>
                                                        <td>18.0</td>
                                                        <td>302.71</td>
                                                        <td>237.63</td>
                                                        <td>92818.34</td>
                                                        <td>92818.34</td>
                                                        <td>17.51</td>
                                                        <td>17.51</td>
                                                        <td>4125.3</td>
                                                        <td>4125.3</td>
                                                        <td>148442.99</td>
                                                        <td>6205.76</td>
                                                        <td>1.707</td>
                                                        <td>4.21</td>
                                                    </tr>

                                                    <tr>
                                                        <td rowSpan={6}>500x500</td>
                                                        <td>500</td>
                                                        <td>500</td>
                                                        <td>8.0</td>
                                                        <td>155.79</td>
                                                        <td>122.30</td>
                                                        <td>62516.74</td>
                                                        <td>62516.74</td>
                                                        <td>20.03</td>
                                                        <td>20.03</td>
                                                        <td>2500.67</td>
                                                        <td>2500.67</td>
                                                        <td>96217.90</td>
                                                        <td>3751.60</td>
                                                        <td>1.959</td>
                                                        <td>8.18</td>
                                                    </tr>
                                                    <tr>
                                                        <td>500</td>
                                                        <td>500</td>
                                                        <td>10.0</td>
                                                        <td>193.43</td>
                                                        <td>151.84</td>
                                                        <td>76880.16</td>
                                                        <td>76880.16</td>
                                                        <td>19.94</td>
                                                        <td>19.94</td>
                                                        <td>3075.21</td>
                                                        <td>3075.21</td>
                                                        <td>119086.06</td>
                                                        <td>4614.71</td>
                                                        <td>1.948</td>
                                                        <td>6.59</td>
                                                    </tr>
                                                    <tr>
                                                        <td>500</td>
                                                        <td>500</td>
                                                        <td>12.0</td>
                                                        <td>230.54</td>
                                                        <td>180.97</td>
                                                        <td>90752.04</td>
                                                        <td>90752.04</td>
                                                        <td>19.84</td>
                                                        <td>19.84</td>
                                                        <td>3630.08</td>
                                                        <td>3630.08</td>
                                                        <td>141477.44</td>
                                                        <td>5449.19</td>
                                                        <td>1.938</td>
                                                        <td>5.53</td>
                                                    </tr>
                                                    <tr>
                                                        <td>500</td>
                                                        <td>500</td>
                                                        <td>16.0</td>
                                                        <td>303.18</td>
                                                        <td>237.99</td>
                                                        <td>117050.41</td>
                                                        <td>117050.41</td>
                                                        <td>19.65</td>
                                                        <td>19.65</td>
                                                        <td>4682.0</td>
                                                        <td>4682.0</td>
                                                        <td>184825.00</td>
                                                        <td>7034.70</td>
                                                        <td>1.918</td>
                                                        <td>4.20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>500</td>
                                                        <td>500</td>
                                                        <td>18.0</td>
                                                        <td>338.71</td>
                                                        <td>265.89</td>
                                                        <td>129491.39</td>
                                                        <td>129491.39</td>
                                                        <td>19.55</td>
                                                        <td>19.55</td>
                                                        <td>5179.7</td>
                                                        <td>5179.7</td>
                                                        <td>205778.68</td>
                                                        <td>7786.86</td>
                                                        <td>1.907</td>
                                                        <td>3.76</td>
                                                    </tr>
                                                    <tr>
                                                        <td>500</td>
                                                        <td>500</td>
                                                        <td>20.0</td>
                                                        <td>373.71</td>
                                                        <td>293.37</td>
                                                        <td>141469.80</td>
                                                        <td>141469.80</td>
                                                        <td>19.46</td>
                                                        <td>19.46</td>
                                                        <td>5658.8</td>
                                                        <td>5658.8</td>
                                                        <td>226250.56</td>
                                                        <td>8512.71</td>
                                                        <td>1.897</td>
                                                        <td>3.41</td>
                                                    </tr>

                                                </tbody></table>
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
                                            <table className="table text-center table-bordered  font-weight-bold">
                                                <tbody>
                                                    <tr>
                                                        <th rowSpan={2}>RHS B X B MM</th>
                                                        <th >D</th>
                                                        <th >B</th>
                                                        <th >T</th>
                                                        <th >Sec Area</th>
                                                        <th >weight</th>
                                                        <th colSpan={2}>
                                                            Moment of inertia
                                                        </th>
                                                        <th colSpan={2}>
                                                            Radius of Gyration
                                                        </th>
                                                        <th colSpan={2} >
                                                            Elastic Modulus
                                                        </th>
                                                        <th colSpan={2}>
                                                            Torsional Contants
                                                        </th >
                                                        <th >Outer surface Area</th>
                                                        <th >Nominal length per tonne</th>
                                                    </tr >
                                                    <tr>
                                                        <th >MM</th>
                                                        <th >MM</th>
                                                        <th >MM</th>
                                                        <th >CM^2</th>
                                                        <th >Kg/Mtr</th>
                                                        <th >lxx CM^4</th>
                                                        <th >lyy CM^4</th>
                                                        <th >Rxx CM</th>
                                                        <th >Ryy CM</th>
                                                        <th >Zxx CM^3</th>
                                                        <th >Zyy CM^3</th>
                                                        <th >J Cm^4</th>
                                                        <th >B Cm^3</th>
                                                        <th>Sq.Mtr/ Mtr</th>
                                                        <th >M</th>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={3}>50x25</td>
                                                        <td >50</td>
                                                        <td >25</td>
                                                        <td >2.6</td>
                                                        <td >3.46</td>
                                                        <td >2.71</td>
                                                        <td >10.16</td>
                                                        <td >3.36</td>
                                                        <td >1.71</td>
                                                        <td >0.99</td>
                                                        <td >4.06</td>
                                                        <td >2.69</td>
                                                        <td >8.68</td>
                                                        <td >4.72</td>
                                                        <td >0.137</td>
                                                        <td >368.63</td>
                                                    </tr >
                                                    <tr>
                                                        <td >50</td>
                                                        <td >25</td>
                                                        <td >3.2</td>
                                                        <td >4.13</td>
                                                        <td >3.24</td>
                                                        <td >11.63</td>
                                                        <td >3.80</td>
                                                        <td >1.68</td>
                                                        <td >0.96</td>
                                                        <td >4.65</td>
                                                        <td >3.04</td>
                                                        <td >10.08</td>
                                                        <td >5.38</td>
                                                        <td >0.134</td>
                                                        <td >308.66</td>
                                                    </tr >
                                                    <tr>
                                                        <td >50</td>
                                                        <td >25</td>
                                                        <td >4.0</td>
                                                        <td >4.95</td>
                                                        <td >3.88</td>
                                                        <td >13.13</td>
                                                        <td >4.23</td>
                                                        <td >1.63</td>
                                                        <td >0.92</td>
                                                        <td >5.25</td>
                                                        <td >3.38</td>
                                                        <td >11.57</td>
                                                        <td >6.05</td>
                                                        <td >0.129</td>
                                                        <td >257.42</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={4}>60x40</td>
                                                        <td >60</td>
                                                        <td >40</td>
                                                        <td >2.6</td>
                                                        <td >4.76</td>
                                                        <td >3.73</td>
                                                        <td >22.76</td>
                                                        <td >12.09</td>
                                                        <td >2.19</td>
                                                        <td >1.59</td>
                                                        <td >7.59</td>
                                                        <td >6.05</td>
                                                        <td >25.99</td>
                                                        <td >10.02</td>
                                                        <td >0.187</td>
                                                        <td >267.86</td>
                                                    </tr >
                                                    <tr>
                                                        <td>60</td>
                                                        <td>40</td>
                                                        <td >2.9</td>
                                                        <td >5.25</td>
                                                        <td >4.12</td>
                                                        <td >24.74</td>
                                                        <td >13.11</td>
                                                        <td >2.17</td>
                                                        <td >1.58</td>
                                                        <td >8.25</td>
                                                        <td >6.56</td>
                                                        <td >28.48</td>
                                                        <td >10.90</td>
                                                        <td >0.185</td>
                                                        <td >242.77</td>
                                                    </tr >
                                                    <tr>
                                                        <td >60</td>
                                                        <td >40</td>
                                                        <td >3.6</td>
                                                        <td >6.35</td>
                                                        <td >4.98</td>
                                                        <td >28.90</td>
                                                        <td >15.23</td>
                                                        <td >2.13</td>
                                                        <td >1.55</td>
                                                        <td >9.63</td>
                                                        <td >7.62</td>
                                                        <td >33.86</td>
                                                        <td >12.73</td>
                                                        <td >0.181</td>
                                                        <td >200.66</td>
                                                    </tr >
                                                    <tr>
                                                        <td >60</td>
                                                        <td >40</td>
                                                        <td >4.5</td>
                                                        <td >7.67</td>
                                                        <td >6.02</td>
                                                        <td >33.31</td>
                                                        <td >17.44</td>
                                                        <td >2.08</td>
                                                        <td >1.51</td>
                                                        <td >11.10</td>
                                                        <td >8.72</td>
                                                        <td >39.91</td>
                                                        <td >14.69</td>
                                                        <td >0.177</td>
                                                        <td >166.10</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >66x33</td>
                                                        <td >66</td>
                                                        <td>33</td>
                                                        <td >2.6</td>
                                                        <td >4.70</td>
                                                        <td >3.69</td>
                                                        <td >25.15</td>
                                                        <td >8.43</td>
                                                        <td >2.31</td>
                                                        <td >1.34</td>
                                                        <td >7.62</td>
                                                        <td >5.11</td>
                                                        <td >21.17</td>
                                                        <td >8.91</td>
                                                        <td >0.185</td>
                                                        <td >270.82</td>
                                                    </tr >
                                                    <tr>
                                                        <td >66</td>
                                                        <td>33</td>
                                                        <td >2.9</td>
                                                        <td >5.19</td>
                                                        <td >4.07</td>
                                                        <td >27.33</td>
                                                        <td >9.12</td>
                                                        <td >2.29</td>
                                                        <td >1.33</td>
                                                        <td >8.28</td>
                                                        <td >5.53</td>
                                                        <td >23.13</td>
                                                        <td >9.66</td>
                                                        <td >0.183</td>
                                                        <td >245.48</td>
                                                    </tr >
                                                    <tr>
                                                        <td >66</td>
                                                        <td>33</td>
                                                        <td >3.6</td>
                                                        <td >6.28</td>
                                                        <td >4.93</td>
                                                        <td >31.87</td>
                                                        <td >10.52</td>
                                                        <td >2.25</td>
                                                        <td >1.29</td>
                                                        <td >9.66</td>
                                                        <td >6.37</td>
                                                        <td >27.32</td>
                                                        <td >11.21</td>
                                                        <td >0.179</td>
                                                        <td >202.97</td>
                                                    </tr >
                                                    <tr>
                                                        <td >66</td>
                                                        <td>33</td>
                                                        <td >4.5</td>
                                                        <td >7.58</td>
                                                        <td >5.95</td>
                                                        <td >36.64</td>
                                                        <td >11.93</td>
                                                        <td >2.20</td>
                                                        <td >1.25</td>
                                                        <td >11.10</td>
                                                        <td >7.23</td>
                                                        <td >31.90</td>
                                                        <td >12.84</td>
                                                        <td >0.175</td>
                                                        <td >168.07</td>
                                                    </tr >
                                                    <tr>
                                                        <td >66</td>
                                                        <td>33</td>
                                                        <td >4.8</td>
                                                        <td >7.99</td>
                                                        <td >6.27</td>
                                                        <td >37.98</td>
                                                        <td >12.31</td>
                                                        <td >2.18</td>
                                                        <td >1.24</td>
                                                        <td >11.51</td>
                                                        <td >7.46</td>
                                                        <td >33.22</td>
                                                        <td >13.29</td>
                                                        <td >0.173</td>
                                                        <td >159.44</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={4} >80x40</td>
                                                        <td >80</td>
                                                        <td>40</td>
                                                        <td >2.6</td>
                                                        <td >5.80</td>
                                                        <td >4.55</td>
                                                        <td >46.58</td>
                                                        <td >15.74</td>
                                                        <td >2.84</td>
                                                        <td >1.65</td>
                                                        <td >11.65</td>
                                                        <td >7.87</td>
                                                        <td >38.87</td>
                                                        <td >13.66</td>
                                                        <td >0.227</td>
                                                        <td >219.80</td>
                                                    </tr >
                                                    <tr>
                                                        <td >80</td>
                                                        <td>40</td>
                                                        <td >3.2</td>
                                                        <td >7.01</td>
                                                        <td >5.50</td>
                                                        <td >54.94</td>
                                                        <td >18.41</td>
                                                        <td >2.80</td>
                                                        <td >1.62</td>
                                                        <td >13.74</td>
                                                        <td >9.21</td>
                                                        <td >46.28</td>
                                                        <td >16.05</td>
                                                        <td >0.224</td>
                                                        <td >181.80</td>
                                                    </tr >
                                                    <tr>
                                                        <td >80</td>
                                                        <td>40</td>
                                                        <td >4.0</td>
                                                        <td >8.55</td>
                                                        <td >6.71</td>
                                                        <td >64.79</td>
                                                        <td >21.49</td>
                                                        <td >2.75</td>
                                                        <td >1.59</td>
                                                        <td >16.20</td>
                                                        <td >10.74</td>
                                                        <td >55.24</td>
                                                        <td >18.84</td>
                                                        <td >0.219</td>
                                                        <td >149.02</td>
                                                    </tr >
                                                    <tr>
                                                        <td >80</td>
                                                        <td>40</td>
                                                        <td >4.8</td>
                                                        <td >10.01</td>
                                                        <td >7.85</td>
                                                        <td >73.22</td>
                                                        <td >24.03</td>
                                                        <td >2.71</td>
                                                        <td >1.55</td>
                                                        <td >18.30</td>
                                                        <td >12.02</td>
                                                        <td >63.16</td>
                                                        <td >21.21</td>
                                                        <td >0.215</td>
                                                        <td >127.31</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >96x48</td>
                                                        <td >96</td>
                                                        <td>48</td>
                                                        <td >2.6</td>
                                                        <td >7.04</td>
                                                        <td >5.53</td>
                                                        <td >82.96</td>
                                                        <td >28.19</td>
                                                        <td >3.43</td>
                                                        <td >2.00</td>
                                                        <td >17.28</td>
                                                        <td >11.74</td>
                                                        <td >68.76</td>
                                                        <td >20.34</td>
                                                        <td >0.275</td>
                                                        <td >180.85</td>
                                                    </tr >
                                                    <tr>
                                                        <td >96</td>
                                                        <td >48</td>
                                                        <td >3.2</td>
                                                        <td >8.54</td>
                                                        <td >6.71</td>
                                                        <td >98.61</td>
                                                        <td >33.28</td>
                                                        <td >3.40</td>
                                                        <td >1.97</td>
                                                        <td >20.54</td>
                                                        <td >13.87</td>
                                                        <td >82.38</td>
                                                        <td >24.09</td>
                                                        <td >0.272</td>
                                                        <td >149.11</td>
                                                    </tr >
                                                    <tr>
                                                        <td >96</td>
                                                        <td >48</td>
                                                        <td >4.0</td>
                                                        <td >10.47</td>
                                                        <td >8.22</td>
                                                        <td >117.54</td>
                                                        <td >39.32</td>
                                                        <td >3.35</td>
                                                        <td >1.94</td>
                                                        <td >24.49</td>
                                                        <td >16.38</td>
                                                        <td >99.22</td>
                                                        <td >28.59</td>
                                                        <td >0.267</td>
                                                        <td >121.69</td>
                                                    </tr >
                                                    <tr>
                                                        <td >96</td>
                                                        <td >48</td>
                                                        <td >4.8</td>
                                                        <td >12.31</td>
                                                        <td >9.66</td>
                                                        <td >134.35</td>
                                                        <td >44.55</td>
                                                        <td >3.30</td>
                                                        <td >1.90</td>
                                                        <td >27.99</td>
                                                        <td >18.56</td>
                                                        <td >114.55</td>
                                                        <td >32.56</td>
                                                        <td >0.263</td>
                                                        <td >103.48</td>
                                                    </tr >
                                                    <tr>
                                                        <td >96</td>
                                                        <td >48</td>
                                                        <td >6.0</td>
                                                        <td >14.91</td>
                                                        <td >11.71</td>
                                                        <td >155.75</td>
                                                        <td >51.00</td>
                                                        <td >3.23</td>
                                                        <td >1.85</td>
                                                        <td >32.45</td>
                                                        <td >21.25</td>
                                                        <td >134.73</td>
                                                        <td >37.57</td>
                                                        <td >0.257</td>
                                                        <td >85.41</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={6}>122x61</td>
                                                        <td >122</td>
                                                        <td >61</td>
                                                        <td >2.6</td>
                                                        <td >9.07</td>
                                                        <td >7.12</td>
                                                        <td >175.75</td>
                                                        <td >60.09</td>
                                                        <td >4.40</td>
                                                        <td >2.57</td>
                                                        <td >28.81</td>
                                                        <td >19.70</td>
                                                        <td >144.59</td>
                                                        <td >34.03</td>
                                                        <td >0.353</td>
                                                        <td >140.42</td>
                                                    </tr >
                                                    <tr>
                                                        <td>122</td>
                                                        <td>61</td>
                                                        <td>3.2</td>
                                                        <td>11.04</td>
                                                        <td>8.67</td>
                                                        <td>210.55</td>
                                                        <td>71.61</td>
                                                        <td>4.37</td>
                                                        <td>2.55</td>
                                                        <td>34.52</td>
                                                        <td>23.48</td>
                                                        <td>174.32</td>
                                                        <td>40.64</td>
                                                        <td>0.350</td>
                                                        <td>115.40</td>
                                                    </tr >
                                                    <tr>
                                                        <td >122</td>
                                                        <td >61</td>
                                                        <td >3.6</td>
                                                        <td >12.32</td>
                                                        <td >9.67</td>
                                                        <td >232.61</td>
                                                        <td >78.83</td>
                                                        <td >4.34</td>
                                                        <td >2.53</td>
                                                        <td >38.13</td>
                                                        <td >25.84</td>
                                                        <td >193.39</td>
                                                        <td >44.81</td>
                                                        <td >0.347</td>
                                                        <td >103.36</td>
                                                    </tr >
                                                    <tr>
                                                        <td>122</td>
                                                        <td>61</td>
                                                        <td>4.5</td>
                                                        <td>15.14</td>
                                                        <td>11.88</td>
                                                        <td>278.94</td>
                                                        <td>93.78</td>
                                                        <td>4.29</td>
                                                        <td>2.49</td>
                                                        <td>45.73</td>
                                                        <td>30.75</td>
                                                        <td>234.06</td>
                                                        <td>53.52</td>
                                                        <td>0.343</td>
                                                        <td>84.14</td>
                                                    </tr >
                                                    <tr>
                                                        <td >122</td>
                                                        <td >61</td>
                                                        <td >5.4</td>
                                                        <td >17.85</td>
                                                        <td >14.01</td>
                                                        <td >320.83</td>
                                                        <td >107.03</td>
                                                        <td >4.24</td>
                                                        <td >2.45</td>
                                                        <td >52.60</td>
                                                        <td >35.09</td>
                                                        <td >271.66</td>
                                                        <td >61.34</td>
                                                        <td >0.338</td>
                                                        <td >71.38</td>
                                                    </tr >
                                                    <tr>
                                                        <td >122</td>
                                                        <td >61</td>
                                                        <td >6.0</td>
                                                        <td >19.59</td>
                                                        <td >15.38</td>
                                                        <td >346.36</td>
                                                        <td >114.95</td>
                                                        <td >4.20</td>
                                                        <td >2.42</td>
                                                        <td >56.78</td>
                                                        <td >37.69</td>
                                                        <td >295.02</td>
                                                        <td >66.08</td>
                                                        <td >0.335</td>
                                                        <td >65.01</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >145x82</td>
                                                        <td >145</td>
                                                        <td >82</td>
                                                        <td >3.2</td>
                                                        <td >13.86</td>
                                                        <td >10.88</td>
                                                        <td >392.22</td>
                                                        <td >162.88</td>
                                                        <td >5.32</td>
                                                        <td >3.43</td>
                                                        <td >54.10</td>
                                                        <td >39.73</td>
                                                        <td >368.28</td>
                                                        <td >67.30</td>
                                                        <td >0.438</td>
                                                        <td >91.94</td>
                                                    </tr >
                                                    <tr>
                                                        <td >145</td>
                                                        <td >82</td>
                                                        <td >4.0</td>
                                                        <td >17.11</td>
                                                        <td >13.43</td>
                                                        <td >476.35</td>
                                                        <td >196.94</td>
                                                        <td >5.28</td>
                                                        <td >3.39</td>
                                                        <td >65.70</td>
                                                        <td >48.03</td>
                                                        <td >450.85</td>
                                                        <td >81.55</td>
                                                        <td >0.433</td>
                                                        <td >74.46</td>
                                                    </tr >
                                                    <tr>
                                                        <td >145</td>
                                                        <td >82</td>
                                                        <td >4.8</td>
                                                        <td >20.28</td>
                                                        <td >15.92</td>
                                                        <td >555.16</td>
                                                        <td >228.50</td>
                                                        <td >5.23</td>
                                                        <td >3.36</td>
                                                        <td >76.57</td>
                                                        <td >55.73</td>
                                                        <td >529.61</td>
                                                        <td >94.86</td>
                                                        <td >0.429</td>
                                                        <td >62.82</td>
                                                    </tr >
                                                    <tr>
                                                        <td >145</td>
                                                        <td >82</td>
                                                        <td >5.4</td>
                                                        <td >22.60</td>
                                                        <td >17.74</td>
                                                        <td >610.85</td>
                                                        <td >250.59</td>
                                                        <td >5.20</td>
                                                        <td >3.33</td>
                                                        <td >84.26</td>
                                                        <td >61.12</td>
                                                        <td >586.17</td>
                                                        <td >104.24</td>
                                                        <td >0.426</td>
                                                        <td >56.37</td>
                                                    </tr >
                                                    <tr>
                                                        <td >145</td>
                                                        <td >82</td>
                                                        <td >6.0</td>
                                                        <td >24.87</td>
                                                        <td >19.53</td>
                                                        <td >663.66</td>
                                                        <td >271.37</td>
                                                        <td >5.17</td>
                                                        <td >3.30</td>
                                                        <td >91.54</td>
                                                        <td >66.19</td>
                                                        <td >640.57</td>
                                                        <td >113.12</td>
                                                        <td >0.423</td>
                                                        <td >51.21</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >172x92</td>
                                                        <td >172</td>
                                                        <td >92</td>
                                                        <td >3.6</td>
                                                        <td >18.16</td>
                                                        <td >14.25</td>
                                                        <td >713.94</td>
                                                        <td >271.81</td>
                                                        <td >6.27</td>
                                                        <td >3.87</td>
                                                        <td >83.02</td>
                                                        <td >59.09</td>
                                                        <td >631.40</td>
                                                        <td >100.97</td>
                                                        <td >0.509</td>
                                                        <td >70.16</td>
                                                    </tr >
                                                    <tr>
                                                        <td >172</td>
                                                        <td >92</td>
                                                        <td >4.0</td>
                                                        <td >20.07</td>
                                                        <td >15.75</td>
                                                        <td >783.54</td>
                                                        <td >297.66</td>
                                                        <td >6.25</td>
                                                        <td >3.85</td>
                                                        <td >91.11</td>
                                                        <td >64.71</td>
                                                        <td >695.19</td>
                                                        <td >110.68</td>
                                                        <td >0.507</td>
                                                        <td >63.48</td>
                                                    </tr >
                                                    <tr>
                                                        <td >172</td>
                                                        <td >92</td>
                                                        <td >4.8</td>
                                                        <td >23.83</td>
                                                        <td >18.71</td>
                                                        <td >917.13</td>
                                                        <td >346.91</td>
                                                        <td >6.20</td>
                                                        <td >3.82</td>
                                                        <td >106.64</td>
                                                        <td >75.41</td>
                                                        <td >818.93</td>
                                                        <td >129.26</td>
                                                        <td >0.503</td>
                                                        <td >53.46</td>
                                                    </tr >
                                                    <tr>
                                                        <td >172</td>
                                                        <td >92</td>
                                                        <td >5.4</td>
                                                        <td >26.60</td>
                                                        <td >20.88</td>
                                                        <td >1012.47</td>
                                                        <td >381.74</td>
                                                        <td >6.17</td>
                                                        <td >3.79</td>
                                                        <td >117.73</td>
                                                        <td >82.99</td>
                                                        <td >908.38</td>
                                                        <td >142.47</td>
                                                        <td >0.500</td>
                                                        <td >47.90</td>
                                                    </tr >
                                                    <tr>
                                                        <td>172</td>
                                                        <td>92</td>
                                                        <td>6.0</td>
                                                        <td>29.31</td>
                                                        <td>23.01</td>
                                                        <td>1103.73</td>
                                                        <td>414.82</td>
                                                        <td>6.14</td>
                                                        <td>3.76</td>
                                                        <td>128.34</td>
                                                        <td>90.18</td>
                                                        <td>994.95</td>
                                                        <td>155.08</td>
                                                        <td>0.497</td>
                                                        <td>43.46</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >200x100</td>
                                                        <td >200</td>
                                                        <td >100</td>
                                                        <td >4.0</td>
                                                        <td >22.95</td>
                                                        <td >18.01</td>
                                                        <td >1199.71</td>
                                                        <td >410.78</td>
                                                        <td >7.23</td>
                                                        <td >4.23</td>
                                                        <td >119.97</td>
                                                        <td >82.16</td>
                                                        <td >985.36</td>
                                                        <td >141.81</td>
                                                        <td >0.579</td>
                                                        <td >55.51</td>
                                                    </tr >
                                                    <tr>
                                                        <td >200</td>
                                                        <td >100</td>
                                                        <td >5.0</td>
                                                        <td >28.36</td>
                                                        <td >22.26</td>
                                                        <td >1459.25</td>
                                                        <td >496.94</td>
                                                        <td >7.17</td>
                                                        <td >4.19</td>
                                                        <td >145.93</td>
                                                        <td >99.39</td>
                                                        <td >1206.26</td>
                                                        <td >171.94</td>
                                                        <td >0.574</td>
                                                        <td >44.92</td>
                                                    </tr >
                                                    <tr>
                                                        <td>200</td>
                                                        <td>100</td>
                                                        <td>6.0</td>
                                                        <td>33.63</td>
                                                        <td>26.40</td>
                                                        <td>1703.31</td>
                                                        <td>576.91</td>
                                                        <td>7.12</td>
                                                        <td>4.14</td>
                                                        <td>170.33</td>
                                                        <td>115.38</td>
                                                        <td>1416.98</td>
                                                        <td>200.10</td>
                                                        <td>0.569</td>
                                                        <td>37.87</td>
                                                    </tr >
                                                    <tr>
                                                        <td >200</td>
                                                        <td >100</td>
                                                        <td >8.0</td>
                                                        <td >43.79</td>
                                                        <td >34.38</td>
                                                        <td >2146.21</td>
                                                        <td >719.19</td>
                                                        <td >7.00</td>
                                                        <td >4.05</td>
                                                        <td >214.62</td>
                                                        <td >143.84</td>
                                                        <td >1807.84</td>
                                                        <td >250.80</td>
                                                        <td >0.559</td>
                                                        <td >29.09</td>
                                                    </tr >
                                                    <tr>
                                                        <td >200</td>
                                                        <td >100</td>
                                                        <td >10.0</td>
                                                        <td >53.43</td>
                                                        <td >41.94</td>
                                                        <td >2530.97</td>
                                                        <td >839.27</td>
                                                        <td >6.88</td>
                                                        <td >3.96</td>
                                                        <td >253.10</td>
                                                        <td >167.85</td>
                                                        <td >2157.87</td>
                                                        <td >294.43</td>
                                                        <td >0.548</td>
                                                        <td >23.84</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={4} >240x120</td>
                                                        <td >240</td>
                                                        <td >120</td>
                                                        <td >4.0</td>
                                                        <td >27.75</td>
                                                        <td >21.78</td>
                                                        <td >2110.72</td>
                                                        <td >725.35</td>
                                                        <td >8.72</td>
                                                        <td >5.11</td>
                                                        <td >175.89</td>
                                                        <td >120.89</td>
                                                        <td >1726.13</td>
                                                        <td >208.38</td>
                                                        <td >0.699</td>
                                                        <td >45.91</td>
                                                    </tr >
                                                    <tr>
                                                        <td >240</td>
                                                        <td >120</td>
                                                        <td >5.0</td>
                                                        <td >34.36</td>
                                                        <td >26.97</td>
                                                        <td >2579.67</td>
                                                        <td >882.47</td>
                                                        <td >8.67</td>
                                                        <td >5.07</td>
                                                        <td >214.97</td>
                                                        <td >147.08</td>
                                                        <td >2121.05</td>
                                                        <td >253.96</td>
                                                        <td >0.694</td>
                                                        <td >37.08</td>
                                                    </tr >
                                                    <tr>
                                                        <td >240</td>
                                                        <td >120</td>
                                                        <td >6.0</td>
                                                        <td >40.83</td>
                                                        <td >32.05</td>
                                                        <td >3025.91</td>
                                                        <td >1030.45</td>
                                                        <td >8.61</td>
                                                        <td >5.02</td>
                                                        <td >252.16</td>
                                                        <td >171.74</td>
                                                        <td >2501.31</td>
                                                        <td >297.11</td>
                                                        <td >0.689</td>
                                                        <td >31.20</td>
                                                    </tr >
                                                    <tr>
                                                        <td >240</td>
                                                        <td >120</td>
                                                        <td >8.0</td>
                                                        <td >53.39</td>
                                                        <td >41.91</td>
                                                        <td >3851.84</td>
                                                        <td >1299.95</td>
                                                        <td >8.49</td>
                                                        <td >4.93</td>
                                                        <td >320.99</td>
                                                        <td >216.66</td>
                                                        <td >3217.82</td>
                                                        <td >376.38</td>
                                                        <td >0.679</td>
                                                        <td >23.86</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={4} >300x150</td>
                                                        <td >300</td>
                                                        <td >150</td>
                                                        <td >5.0</td>
                                                        <td >43.36</td>
                                                        <td >34.04</td>
                                                        <td >5153.13</td>
                                                        <td >1770.87</td>
                                                        <td >10.90</td>
                                                        <td >6.39</td>
                                                        <td >343.54</td>
                                                        <td >236.12</td>
                                                        <td >4214.17</td>
                                                        <td >406.99</td>
                                                        <td >0.874</td>
                                                        <td >29.38</td>
                                                    </tr >
                                                    <tr>
                                                        <td >300</td>
                                                        <td >150</td>
                                                        <td >6.0</td>
                                                        <td >51.63</td>
                                                        <td >40.53</td>
                                                        <td >6073.51</td>
                                                        <td >2079.57</td>
                                                        <td >10.85</td>
                                                        <td >6.35</td>
                                                        <td >404.90</td>
                                                        <td >277.28</td>
                                                        <td >4988.36</td>
                                                        <td >478.60</td>
                                                        <td >0.869</td>
                                                        <td >24.67</td>
                                                    </tr >
                                                    <tr>
                                                        <td >300</td>
                                                        <td >150</td>
                                                        <td >8.0</td>
                                                        <td >67.79</td>
                                                        <td >53.22</td>
                                                        <td >7807.95</td>
                                                        <td >2654.12</td>
                                                        <td >10.73</td>
                                                        <td >6.26</td>
                                                        <td >520.53</td>
                                                        <td >353.88</td>
                                                        <td >6468.03</td>
                                                        <td >612.69</td>
                                                        <td >0.859</td>
                                                        <td >18.79</td>
                                                    </tr >
                                                    <tr>
                                                        <td >300</td>
                                                        <td >150</td>
                                                        <td >10.0</td>
                                                        <td >83.43</td>
                                                        <td >65.49</td>
                                                        <td >9403.90</td>
                                                        <td >3173.71</td>
                                                        <td >10.62</td>
                                                        <td >6.17</td>
                                                        <td >626.93</td>
                                                        <td >423.16</td>
                                                        <td >7856.00</td>
                                                        <td >735.12</td>
                                                        <td >0.848</td>
                                                        <td >15.27</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >300x200</td>
                                                        <td >300</td>
                                                        <td >200</td>
                                                        <td >5.0</td>
                                                        <td >48.36</td>
                                                        <td >37.96</td>
                                                        <td >6241.05</td>
                                                        <td >3360.92</td>
                                                        <td >11.36</td>
                                                        <td >8.34</td>
                                                        <td >416.07</td>
                                                        <td >336.09</td>
                                                        <td >6835.66</td>
                                                        <td >551.89</td>
                                                        <td >0.974</td>
                                                        <td >26.34</td>
                                                    </tr >
                                                    <tr>
                                                        <td >300</td>
                                                        <td >200</td>
                                                        <td >6.0</td>
                                                        <td >57.63</td>
                                                        <td >45.24</td>
                                                        <td >7370.23</td>
                                                        <td >3962.19</td>
                                                        <td >11.31</td>
                                                        <td >8.29</td>
                                                        <td >491.35</td>
                                                        <td >396.22</td>
                                                        <td >8115.07</td>
                                                        <td >651.24</td>
                                                        <td >0.969</td>
                                                        <td >22.10</td>
                                                    </tr >
                                                    <tr>
                                                        <td >300</td>
                                                        <td >200</td>
                                                        <td >8.0</td>
                                                        <td >75.79</td>
                                                        <td >59.50</td>
                                                        <td >9513.66</td>
                                                        <td >5097.04</td>
                                                        <td >11.20</td>
                                                        <td >8.20</td>
                                                        <td >634.24</td>
                                                        <td >509.70</td>
                                                        <td >10585.74</td>
                                                        <td >839.54</td>
                                                        <td >0.959</td>
                                                        <td >16.81</td>
                                                    </tr >
                                                    <tr>
                                                        <td>300</td>
                                                        <td>200</td>
                                                        <td>10.0</td>
                                                        <td>93.43</td>
                                                        <td>73.34</td>
                                                        <td>11507.24</td>
                                                        <td>6144.30</td>
                                                        <td>11.10</td>
                                                        <td>8.11</td>
                                                        <td>767.15</td>
                                                        <td>614.43</td>
                                                        <td>12938.52</td>
                                                        <td>1014.48</td>
                                                        <td>0.948</td>
                                                        <td>13.63</td>
                                                    </tr >
                                                    <tr>
                                                        <td >300</td>
                                                        <td >200</td>
                                                        <td >12.0</td>
                                                        <td >110.54</td>
                                                        <td >86.77</td>
                                                        <td >13354.97</td>
                                                        <td >7107.11</td>
                                                        <td >10.99</td>
                                                        <td >8.02</td>
                                                        <td >890.33</td>
                                                        <td >710.71</td>
                                                        <td >15172.94</td>
                                                        <td >1176.60</td>
                                                        <td >0.938</td>
                                                        <td >11.52</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >400x200</td>
                                                        <td >400.0</td>
                                                        <td >200.0</td>
                                                        <td >6.0</td>
                                                        <td >69.6</td>
                                                        <td >54.7</td>
                                                        <td >14789.4</td>
                                                        <td >5091.6</td>
                                                        <td >14.6</td>
                                                        <td >8.6</td>
                                                        <td >739.5</td>
                                                        <td >509.2</td>
                                                        <td >12068.3</td>
                                                        <td >877.0</td>
                                                        <td >1.2</td>
                                                        <td >18.3</td>
                                                    </tr >
                                                    <tr>
                                                        <td >400.0</td>
                                                        <td >200.0</td>
                                                        <td >8.0</td>
                                                        <td >91.8</td>
                                                        <td >72.1</td>
                                                        <td >19195.3</td>
                                                        <td >6572.5</td>
                                                        <td >14.5</td>
                                                        <td >8.5</td>
                                                        <td >959.8</td>
                                                        <td >657.2</td>
                                                        <td >15765.7</td>
                                                        <td >1134.5</td>
                                                        <td >1.2</td>
                                                        <td >13.9</td>
                                                    </tr >
                                                    <tr>
                                                        <td >400.0</td>
                                                        <td >200.0</td>
                                                        <td >10.0</td>
                                                        <td >113.4</td>
                                                        <td >89.0</td>
                                                        <td >23348.1</td>
                                                        <td >7951.0</td>
                                                        <td >14.3</td>
                                                        <td >8.4</td>
                                                        <td >1167.4</td>
                                                        <td >795.1</td>
                                                        <td >19300.2</td>
                                                        <td >1375.5</td>
                                                        <td >1.1</td>
                                                        <td >11.2</td>
                                                    </tr >
                                                    <tr>
                                                        <td >400.0</td>
                                                        <td >200.0</td>
                                                        <td >12.0</td>
                                                        <td >134.5</td>
                                                        <td >105.6</td>
                                                        <td >27252.9</td>
                                                        <td >9230.6</td>
                                                        <td >14.2</td>
                                                        <td >8.3</td>
                                                        <td >1362.6</td>
                                                        <td >923.1</td>
                                                        <td >22671.7</td>
                                                        <td >1600.8</td>
                                                        <td >1.1</td>
                                                        <td >9.5</td>
                                                    </tr >
                                                    <tr>
                                                        <td >400</td>
                                                        <td >200</td>
                                                        <td >14.0</td>
                                                        <td >155.12</td>
                                                        <td >121.77</td>
                                                        <td >30915.01</td>
                                                        <td >10414.85</td>
                                                        <td >14.12</td>
                                                        <td >8.19</td>
                                                        <td >1545.75</td>
                                                        <td >1041.48</td>
                                                        <td >25880.20</td>
                                                        <td >1810.90</td>
                                                        <td >1.128</td>
                                                        <td >8.21</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >500x200</td>
                                                        <td >500.0</td>
                                                        <td >200.0</td>
                                                        <td >6.0</td>
                                                        <td >81.6</td>
                                                        <td >64.1</td>
                                                        <td >25690.1</td>
                                                        <td >6221.1</td>
                                                        <td >17.7</td>
                                                        <td >8.7</td>
                                                        <td >1027.6</td>
                                                        <td >622.1</td>
                                                        <td >16187.5</td>
                                                        <td >1102.9</td>
                                                        <td >1.4</td>
                                                        <td >15.6</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >200.0</td>
                                                        <td >8.0</td>
                                                        <td >107.8</td>
                                                        <td >84.6</td>
                                                        <td >33466.5</td>
                                                        <td >8047.9</td>
                                                        <td >17.6</td>
                                                        <td >8.6</td>
                                                        <td >1338.7</td>
                                                        <td >804.8</td>
                                                        <td >21159.9</td>
                                                        <td >1429.4</td>
                                                        <td >1.4</td>
                                                        <td >11.8</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >200.0</td>
                                                        <td >10.0</td>
                                                        <td >133.4</td>
                                                        <td >104.7</td>
                                                        <td >40860.2</td>
                                                        <td >9757.6</td>
                                                        <td >17.5</td>
                                                        <td >8.6</td>
                                                        <td >1634.4</td>
                                                        <td >975.8</td>
                                                        <td >25921.2</td>
                                                        <td >1736.6</td>
                                                        <td >1.3</td>
                                                        <td >9.5</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >200.0</td>
                                                        <td >12.0</td>
                                                        <td >158.5</td>
                                                        <td >124.5</td>
                                                        <td >47877.5</td>
                                                        <td >11354.1</td>
                                                        <td >17.4</td>
                                                        <td >8.5</td>
                                                        <td >1915.1</td>
                                                        <td >1135.4</td>
                                                        <td >30471.9</td>
                                                        <td >2025.2</td>
                                                        <td >1.3</td>
                                                        <td >8.0</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >200.0</td>
                                                        <td >16.0</td>
                                                        <td >207.2</td>
                                                        <td >162.6</td>
                                                        <td >60808.5</td>
                                                        <td >14222.3</td>
                                                        <td >17.1</td>
                                                        <td >8.3</td>
                                                        <td >2432.3</td>
                                                        <td >1422.2</td>
                                                        <td >38943.2</td>
                                                        <td >2548.8</td>
                                                        <td >1.3</td>
                                                        <td >6.1</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={6} >500x300</td>
                                                        <td >500.0</td>
                                                        <td >300.0</td>
                                                        <td >6.0</td>
                                                        <td >93.6</td>
                                                        <td >73.5</td>
                                                        <td >33011.6</td>
                                                        <td >15150.5</td>
                                                        <td >18.8</td>
                                                        <td >12.7</td>
                                                        <td >1320.5</td>
                                                        <td >1010.0</td>
                                                        <td >32419.9</td>
                                                        <td >1688.2</td>
                                                        <td >1.6</td>
                                                        <td >13.6</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >300.0</td>
                                                        <td >8.0</td>
                                                        <td >123.8</td>
                                                        <td >97.2</td>
                                                        <td >43149.9</td>
                                                        <td >19747.9</td>
                                                        <td >18.7</td>
                                                        <td >12.6</td>
                                                        <td >1726.0</td>
                                                        <td >1316.5</td>
                                                        <td >42634.2</td>
                                                        <td >2203.1</td>
                                                        <td >1.6</td>
                                                        <td >10.3</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >300.0</td>
                                                        <td >10.0</td>
                                                        <td >153.4</td>
                                                        <td >120.4</td>
                                                        <td >52866.8</td>
                                                        <td >24127.2</td>
                                                        <td >18.6</td>
                                                        <td >12.5</td>
                                                        <td >2114.7</td>
                                                        <td >1608.5</td>
                                                        <td >52551.5</td>
                                                        <td >2695.2</td>
                                                        <td >1.5</td>
                                                        <td >8.3</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >300.0</td>
                                                        <td >12.0</td>
                                                        <td >182.5</td>
                                                        <td >143.3</td>
                                                        <td >62169.0</td>
                                                        <td >28293.5</td>
                                                        <td >18.5</td>
                                                        <td >12.4</td>
                                                        <td >2486.8</td>
                                                        <td >1886.2</td>
                                                        <td >62171.4</td>
                                                        <td >3165.2</td>
                                                        <td >1.5</td>
                                                        <td >7.0</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >300.0</td>
                                                        <td >16.0</td>
                                                        <td >239.2</td>
                                                        <td >187.8</td>
                                                        <td >79555.8</td>
                                                        <td >36006.6</td>
                                                        <td >18.2</td>
                                                        <td >12.3</td>
                                                        <td >3182.2</td>
                                                        <td >2400.4</td>
                                                        <td >80516.4</td>
                                                        <td >4041.1</td>
                                                        <td >1.5</td>
                                                        <td >5.3</td>
                                                    </tr >
                                                    <tr>
                                                        <td >500.0</td>
                                                        <td >300.0</td>
                                                        <td >18.0</td>
                                                        <td >266.7</td>
                                                        <td >209.4</td>
                                                        <td >87653.6</td>
                                                        <td >39563.2</td>
                                                        <td >18.1</td>
                                                        <td >12.2</td>
                                                        <td >3506.1</td>
                                                        <td >2637.5</td>
                                                        <td >89240.5</td>
                                                        <td >4448.1</td>
                                                        <td >1.5</td>
                                                        <td >4.8</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={6} >600x200</td>
                                                        <td >600.0</td>
                                                        <td >200.0</td>
                                                        <td >6.0</td>
                                                        <td >93.6</td>
                                                        <td >73.5</td>
                                                        <td >40672.5</td>
                                                        <td >7350.5</td>
                                                        <td >20.8</td>
                                                        <td >8.9</td>
                                                        <td >1355.8</td>
                                                        <td >735.1</td>
                                                        <td >20408.9</td>
                                                        <td >1328.7</td>
                                                        <td >1.6</td>
                                                        <td >13.6</td>
                                                    </tr >
                                                    <tr>
                                                        <td >600.0</td>
                                                        <td >200.0</td>
                                                        <td >8.0</td>
                                                        <td >123.8</td>
                                                        <td >97.2</td>
                                                        <td >53127.3</td>
                                                        <td >9523.3</td>
                                                        <td >20.7</td>
                                                        <td >8.8</td>
                                                        <td >1770.9</td>
                                                        <td >952.3</td>
                                                        <td >26685.3</td>
                                                        <td >1724.4</td>
                                                        <td >1.6</td>
                                                        <td >10.3</td>
                                                    </tr >
                                                    <tr>
                                                        <td >600.0</td>
                                                        <td >200.0</td>
                                                        <td >10.0</td>
                                                        <td >153.4</td>
                                                        <td >120.4</td>
                                                        <td >65043.5</td>
                                                        <td >11564.3</td>
                                                        <td >20.6</td>
                                                        <td >8.7</td>
                                                        <td >2168.1</td>
                                                        <td >1156.4</td>
                                                        <td >32700.1</td>
                                                        <td >2097.8</td>
                                                        <td >1.5</td>
                                                        <td >8.3</td>
                                                    </tr >
                                                    <tr>
                                                        <td >600.0</td>
                                                        <td >200.0</td>
                                                        <td >12.0</td>
                                                        <td >182.5</td>
                                                        <td >143.3</td>
                                                        <td >76428.6</td>
                                                        <td >13477.7</td>
                                                        <td >20.5</td>
                                                        <td >8.6</td>
                                                        <td >2547.6</td>
                                                        <td >1347.8</td>
                                                        <td >38454.5</td>
                                                        <td >2449.7</td>
                                                        <td >1.5</td>
                                                        <td >7.0</td>
                                                    </tr >
                                                    <tr>
                                                        <td >600.0</td>
                                                        <td >200.0</td>
                                                        <td >16.0</td>
                                                        <td >239.2</td>
                                                        <td >187.8</td>
                                                        <td >97635.9</td>
                                                        <td >16937.6</td>
                                                        <td >20.2</td>
                                                        <td >8.4</td>
                                                        <td >3254.5</td>
                                                        <td >1693.8</td>
                                                        <td >49186.7</td>
                                                        <td >3091.4</td>
                                                        <td >1.5</td>
                                                        <td >5.3</td>
                                                    </tr >
                                                    <tr>
                                                        <td >600.0</td>
                                                        <td >200.0</td>
                                                        <td >18.0</td>
                                                        <td >266.7</td>
                                                        <td >209.4</td>
                                                        <td >107473.1</td>
                                                        <td >18492.2</td>
                                                        <td >20.1</td>
                                                        <td >8.3</td>
                                                        <td >3582.4</td>
                                                        <td >1849.2</td>
                                                        <td >54166.8</td>
                                                        <td >3382.6</td>
                                                        <td >1.5</td>
                                                        <td >4.8</td>
                                                    </tr >
                                                    <tr>
                                                        <td rowSpan={5} >700x300</td>
                                                        <td >700.0</td>
                                                        <td >300.0</td>
                                                        <td >8.0</td>
                                                        <td >155.8</td>
                                                        <td >122.3</td>
                                                        <td >98133.1</td>
                                                        <td >26570.7</td>
                                                        <td >25.1</td>
                                                        <td >13.1</td>
                                                        <td >2803.8</td>
                                                        <td >1771.4</td>
                                                        <td >67042.6</td>
                                                        <td >3112.6</td>
                                                        <td >2.0</td>
                                                        <td >8.2</td>
                                                    </tr >
                                                    <tr>
                                                        <td >700.0</td>
                                                        <td >300.0</td>
                                                        <td >10.0</td>
                                                        <td >193.4</td>
                                                        <td >151.8</td>
                                                        <td >120704.7</td>
                                                        <td >32540.6</td>
                                                        <td >25.0</td>
                                                        <td >13.0</td>
                                                        <td >3448.7</td>
                                                        <td >2169.4</td>
                                                        <td >82705.6</td>
                                                        <td >3816.6</td>
                                                        <td >1.9</td>
                                                        <td >6.6</td>
                                                    </tr >
                                                    <tr>
                                                        <td >700.0</td>
                                                        <td >300.0</td>
                                                        <td >12.0</td>
                                                        <td >230.5</td>
                                                        <td >181.0</td>
                                                        <td >142509.8</td>
                                                        <td >38252.6</td>
                                                        <td >24.9</td>
                                                        <td >12.9</td>
                                                        <td >4071.7</td>
                                                        <td >2550.2</td>
                                                        <td >97930.1</td>
                                                        <td >4492.5</td>
                                                        <td >1.9</td>
                                                        <td >5.5</td>
                                                    </tr >
                                                    <tr>
                                                        <td >700.0</td>
                                                        <td >300.0</td>
                                                        <td >16.0</td>
                                                        <td >303.2</td>
                                                        <td >238.0</td>
                                                        <td >183857.1</td>
                                                        <td >48925.2</td>
                                                        <td >24.6</td>
                                                        <td >12.7</td>
                                                        <td >5253.1</td>
                                                        <td >3261.7</td>
                                                        <td >127065.4</td>
                                                        <td >5762.2</td>
                                                        <td >1.9</td>
                                                        <td >4.2</td>
                                                    </tr >
                                                    <tr>
                                                        <td >700.0</td>
                                                        <td >300.0</td>
                                                        <td >18.0</td>
                                                        <td >338.7</td>
                                                        <td >265.9</td>
                                                        <td >203417.1</td>
                                                        <td >53896.9</td>
                                                        <td >24.5</td>
                                                        <td >12.6</td>
                                                        <td >5811.9</td>
                                                        <td >3593.1</td>
                                                        <td >140976.8</td>
                                                        <td >6357.5</td>
                                                        <td >1.9</td>
                                                        <td >3.8</td>
                                                    </tr >
                                                </tbody >
                                            </table >
                                        </div>
                                    </div>


                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
        </>
    );
}

export default YST310And355;