import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';

import Cement from './pages/allProducts/Cement';
import GodrejSafes from './pages/allProducts/GodrejSafes';
import Hardware from './pages/allProducts/Hardware';
import Rail from './pages/allProducts/Rail';

import GISheets from './pages/allProducts/galvanizedSteel/GISheets';
import GIAngle from './pages/allProducts/galvanizedSteel/GIAngle';
import GIChannel from './pages/allProducts/galvanizedSteel/GIChannel';
import GIBeam from './pages/allProducts/galvanizedSteel/GIBeam';
import GIRound from './pages/allProducts/galvanizedSteel/GIRound';
import GISquareBar from './pages/allProducts/galvanizedSteel/GISquareBar';
import GIFlatBar from './pages/allProducts/galvanizedSteel/GIFlatBar';

import MSPlateSheets from './pages/allProducts/mildSteel/MSPlateSheets';
import MSAngle from './pages/allProducts/mildSteel/MSAngle';
import MSChannel from './pages/allProducts/mildSteel/MSChannel';
import MSBeam from './pages/allProducts/mildSteel/MSBeam';
import MSRound from './pages/allProducts/mildSteel/MSRound';
import MSSquareBar from './pages/allProducts/mildSteel/MSSquareBar';
import MSFlatBar from './pages/allProducts/mildSteel/MSFlatBar';

import SSPlateSheets from './pages/allProducts/stainlessSteel/SSPlateSheets';
import SSAngle from './pages/allProducts/stainlessSteel/SSAngle';
import SSChannel from './pages/allProducts/stainlessSteel/SSChannel';
import SSBeam from './pages/allProducts/stainlessSteel/SSBeam';
import SSRound from './pages/allProducts/stainlessSteel/SSRound';
import SSSquareBar from './pages/allProducts/stainlessSteel/SSSquareBar';
import SSFlatBar from './pages/allProducts/stainlessSteel/SSFlatBar';

import GIPipe from './pages/allProducts/pipeAndHollow/GIPipe';
import MSPipe from './pages/allProducts/pipeAndHollow/MSPipe';
import SSPipe from './pages/allProducts/pipeAndHollow/SSPipe';
import SeamlessPipe from './pages/allProducts/pipeAndHollow/SeamlessPipe';

import ColorCoated from './pages/allProducts/corrugatedRoofingSheets/ColorCoated';
import GIRoofingSheets from './pages/allProducts/corrugatedRoofingSheets/GIRoofingSheets';
import PolyCarbonate from './pages/allProducts/corrugatedRoofingSheets/PolyCarbonate';
import FRPRoofingSheets from './pages/allProducts/corrugatedRoofingSheets/FRPRoofingSheets';
import Aluminum from './pages/allProducts/corrugatedRoofingSheets/Aluminum';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Products' element={<Products />} />


          {/* GI Products */}
          <Route path='/Products/Galvanized-Steel/Sheets' element={<GISheets />} />
          <Route path='/Products/Galvanized-Steel/Angle' element={<GIAngle />} />
          <Route path='/Products/Galvanized-Steel/Channel' element={<GIChannel />} />
          <Route path='/Products/Galvanized-Steel/Beam' element={<GIBeam />} />
          <Route path='/Products/Galvanized-Steel/Round' element={<GIRound />} />
          <Route path='/Products/Galvanized-Steel/Square-Bar' element={<GISquareBar />} />
          <Route path='/Products/Galvanized-Steel/Flat-Bar' element={<GIFlatBar />} />

          {/* MS Products */}
          <Route path='/Products/Mild-Steel/Plate-Sheets' element={<MSPlateSheets />} />
          <Route path='/Products/Mild-Steel/Angle' element={<MSAngle />} />
          <Route path='/Products/Mild-Steel/Channel' element={<MSChannel />} />
          <Route path='/Products/Mild-Steel/Beam' element={<MSBeam />} />
          <Route path='/Products/Mild-Steel/Round' element={<MSRound />} />
          <Route path='/Products/Mild-Steel/Square-Bar' element={<MSSquareBar />} />
          <Route path='/Products/Mild-Steel/Flat-Bar' element={<MSFlatBar />} />

          {/* SS Products */}
          <Route path='/Products/Stainless-Steel/Plate-Sheets' element={<SSPlateSheets />} />
          <Route path='/Products/Stainless-Steel/Angle' element={<SSAngle />} />
          <Route path='/Products/Stainless-Steel/Channel' element={<SSChannel />} />
          <Route path='/Products/Stainless-Steel/Beam' element={<SSBeam />} />
          <Route path='/Products/Stainless-Steel/Round' element={<SSRound />} />
          <Route path='/Products/Stainless-Steel/Square-Bar' element={<SSSquareBar />} />
          <Route path='/Products/Stainless-Steel/Flat-Bar' element={<SSFlatBar />} />

          {/* Pipe Products */}
          <Route path='/Products/Pipe-Hollow/GI-Pipe' element={<GIPipe />} />
          <Route path='/Products/Pipe-Hollow/MS-Pipe' element={<MSPipe />} />
          <Route path='/Products/Pipe-Hollow/SS-Pipe' element={<SSPipe />} />
          <Route path='/Products/Pipe-Hollow/Seamless-Pipe' element={<SeamlessPipe />} />

          {/* Roofing Sheets */}
          <Route path='/Products/Corrugated-Roofing-Sheets/ColorCoated' element={<ColorCoated />} />
          <Route path='/Products/Corrugated-Roofing-Sheets/GI-RoofingSheets' element={<GIRoofingSheets />} />
          <Route path='/Products/Corrugated-Roofing-Sheets/PolyCarbonate' element={<PolyCarbonate />} />
          <Route path='/Products/Corrugated-Roofing-Sheets/FRP' element={<FRPRoofingSheets />} />
          <Route path='/Products/Corrugated-Roofing-Sheets/Aluminum' element={<Aluminum />} />

          {/* Others Products */}
          <Route path='/Products/Cement' element={<Cement />} />
          <Route path='/Products/GodrejSafes' element={<GodrejSafes />} />
          <Route path='/Products/Hardware' element={<Hardware />} />
          <Route path='/Products/Rail' element={<Rail />} />


        </Routes>
      </Router>
    </>
  )
}

export default App;
