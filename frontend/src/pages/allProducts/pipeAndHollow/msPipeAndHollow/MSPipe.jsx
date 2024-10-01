import Navbar from "../../../../include/Navbar";
import logo from "../../../../assets/Logo.jpg";

function MSPipe() {
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
                    <div className="container">
                        <div className="text-center">
                            <h2>Specification of Pipes - IS: 1239</h2>
                            <p>Dimensions and Nominal Mass of Steel Pipes - Light, Medium &amp; Heavy Conforming to IS: P 1239 (part-I) 2004</p>
                        </div>
                        <div className="card shadow-lg rounded">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table text-center table-bordered table-striped table-hover font-weight-bold">
                                        <thead className="thead-light">
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
                                                <td>7.95</td>
                                                <td>8.07</td>
                                                <td>126</td>
                                                <td>124</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan="3">80</td>
                                                <td>Light</td>
                                                <td>88.7</td>
                                                <td>87.9</td>
                                                <td>3.2</td>
                                                <td>6.72</td>
                                                <td>6.89</td>
                                                <td>149</td>
                                                <td>145</td>
                                            </tr>
                                            <tr>
                                                <td>Medium</td>
                                                <td>89.5</td>
                                                <td>88</td>
                                                <td>4</td>
                                                <td>8.36</td>
                                                <td>8.53</td>
                                                <td>120</td>
                                                <td>117</td>
                                            </tr>
                                            <tr>
                                                <td>Heavy</td>
                                                <td>89.5</td>
                                                <td>88</td>
                                                <td>4.8</td>
                                                <td>9.9</td>
                                                <td>10.1</td>
                                                <td>101</td>
                                                <td>96</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan="3">100</td>
                                                <td>Light</td>
                                                <td>113.9</td>
                                                <td>113</td>
                                                <td>3.6</td>
                                                <td>9.75</td>
                                                <td>10</td>
                                                <td>103</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>Medium</td>
                                                <td>115</td>
                                                <td>113.1</td>
                                                <td>4.5</td>
                                                <td>12.2</td>
                                                <td>12.5</td>
                                                <td>82</td>
                                                <td>80</td>
                                            </tr>
                                            <tr>
                                                <td>Heavy</td>
                                                <td>115</td>
                                                <td>113.1</td>
                                                <td>5.4</td>
                                                <td>14.5</td>
                                                <td>14.8</td>
                                                <td>69</td>
                                                <td>68</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan="2">125</td>
                                                <td>Medium</td>
                                                <td>140.8</td>
                                                <td>138.5</td>
                                                <td>4.8</td>
                                                <td>15.9</td>
                                                <td>16.4</td>
                                                <td>63</td>
                                                <td>61</td>
                                            </tr>
                                            <tr>
                                                <td>Heavy</td>
                                                <td>140.8</td>
                                                <td>138.5</td>
                                                <td>5.4</td>
                                                <td>17.9</td>
                                                <td>18.4</td>
                                                <td>56</td>
                                                <td>54</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan="2">150</td>
                                                <td>Medium</td>
                                                <td>166.5</td>
                                                <td>163.9</td>
                                                <td>4.8</td>
                                                <td>18.9</td>
                                                <td>19.5</td>
                                                <td>53</td>
                                                <td>54</td>
                                            </tr>
                                            <tr>
                                                <td>Heavy</td>
                                                <td>166.5</td>
                                                <td>163.9</td>
                                                <td>5.4</td>
                                                <td>21.3</td>
                                                <td>21.9</td>
                                                <td>47</td>
                                                <td>46</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <h2>Specification of Pipes - IS: 3589</h2>
                            <p>Dimensions and Nominal Mass of Steel Tubes - Preferred Sizes</p>
                        </div>
                        <div className="card shadow-lg rounded mb-5">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table text-center table-bordered table-striped table-hover font-weight-bold">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Nominal Bore (mm)</th>
                                                <th>Outside Diameter (mm)</th>
                                                <th>Thickness (mm)</th>
                                                <th>Mass of Tube (Kg/Mtr)</th>
                                                <th>Mass of Tube (Metre/Ton)*</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>200</td>
                                                <td>219.1</td>
                                                <td>4.35</td>
                                                <td>23.04</td>
                                                <td>43.4</td>
                                            </tr>
                                            <tr>
                                                <td>200</td>
                                                <td>219.1</td>
                                                <td>5</td>
                                                <td>26.4</td>
                                                <td>37.88</td>
                                            </tr>
                                            <tr>
                                                <td>200</td>
                                                <td>219.1</td>
                                                <td>6.35</td>
                                                <td>33.32</td>
                                                <td>30.01</td>
                                            </tr>
                                            <tr>
                                                <td>250</td>
                                                <td>273.1</td>
                                                <td>5</td>
                                                <td>33.06</td>
                                                <td>30.25</td>
                                            </tr>
                                            <tr>
                                                <td>250</td>
                                                <td>273.1</td>
                                                <td>6.35</td>
                                                <td>41.77</td>
                                                <td>23.94</td>
                                            </tr>
                                            <tr>
                                                <td>300</td>
                                                <td>323.9</td>
                                                <td>5</td>
                                                <td>39.32</td>
                                                <td>25.43</td>
                                            </tr>
                                            <tr>
                                                <td>300</td>
                                                <td>323.9</td>
                                                <td>6.35</td>
                                                <td>49.72</td>
                                                <td>20.11</td>
                                            </tr>
                                            <tr>
                                                <td>350</td>
                                                <td>355.6</td>
                                                <td>5</td>
                                                <td>43.23</td>
                                                <td>23.13</td>
                                            </tr>
                                            <tr>
                                                <td>350</td>
                                                <td>355.6</td>
                                                <td>6.35</td>
                                                <td>54.69</td>
                                                <td>18.28</td>
                                            </tr>
                                            <tr>
                                                <td>400</td>
                                                <td>406.4</td>
                                                <td>5</td>
                                                <td>49.5</td>
                                                <td>20.2</td>
                                            </tr>
                                            <tr>
                                                <td>400</td>
                                                <td>406.4</td>
                                                <td>6</td>
                                                <td>59.25</td>
                                                <td>16.88</td>
                                            </tr>
                                            <tr>
                                                <td>450</td>
                                                <td>457</td>
                                                <td>6</td>
                                                <td>66.73</td>
                                                <td>14.98</td>
                                            </tr>
                                            <tr>
                                                <td>450</td>
                                                <td>457</td>
                                                <td>8</td>
                                                <td>88.58</td>
                                                <td>11.29</td>
                                            </tr>
                                            <tr>
                                                <td>500</td>
                                                <td>508</td>
                                                <td>8</td>
                                                <td>98.65</td>
                                                <td>10.14</td>
                                            </tr>
                                            <tr>
                                                <td>500</td>
                                                <td>508</td>
                                                <td>10</td>
                                                <td>122.81</td>
                                                <td>8.14</td>
                                            </tr>
                                            <tr>
                                                <td>550</td>
                                                <td>559</td>
                                                <td>8</td>
                                                <td>108.71</td>
                                                <td>9.2</td>
                                            </tr>
                                            <tr>
                                                <td>550</td>
                                                <td>559</td>
                                                <td>10</td>
                                                <td>135.39</td>
                                                <td>7.39</td>
                                            </tr>
                                            <tr>
                                                <td>600</td>
                                                <td>610</td>
                                                <td>10</td>
                                                <td>147.97</td>
                                                <td>6.76</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default MSPipe;