import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import Cement from './pages/allProducts/Cement';
import GodrejSafes from './pages/allProducts/GodrejSafes';
import Rail from './pages/allProducts/Rail';

import GISheets from './pages/allProducts/galvanizedSteel/GISheets';
import GIAngleChannelBeam from './pages/allProducts/galvanizedSteel/GiAngleChannelBeam';
import GIRoundSquareFlat from './pages/allProducts/galvanizedSteel/GIRoundSquareFlat';



import MSAngle from './pages/allProducts/mildSteel/MSAngle';
import MSChannel from './pages/allProducts/mildSteel/MSChannel';
import MSBeam from './pages/allProducts/mildSteel/MSBeam';
import MSRound from './pages/allProducts/mildSteel/MSRound';
import MSSquareBar from './pages/allProducts/mildSteel/MSSquareBar';
import MSFlatBar from './pages/allProducts/mildSteel/MSFlatBar';



import GIPipe from './pages/allProducts/pipeAndHollow/GIPipe';
import SSPipe from './pages/allProducts/pipeAndHollow/SSPipe';
import SeamlessPipe from './pages/allProducts/pipeAndHollow/SeamlessPipe';

import ColorCoated from './pages/allProducts/corrugatedRoofingSheets/ColorCoated';
import GIRoofingSheets from './pages/allProducts/corrugatedRoofingSheets/GIRoofingSheets';
import AluminumPolyFRP from './pages/allProducts/corrugatedRoofingSheets/AluminumPolyFRP';

import BuildingProductSolutions from './pages/allProducts/BuildingProductSolutions';
import ReBar from './pages/allProducts/ReBar';
import MSPlate from './pages/allProducts/mildSteel/msPlateAndSheets/MSPlate';
import MSSheets from './pages/allProducts/mildSteel/msPlateAndSheets/MSSheets';
import MSCheckeredSheets from './pages/allProducts/mildSteel/msPlateAndSheets/MSCheckeredSheets';
import Hardware from './pages/allProducts/Hardware';
import ShutterProfile from './pages/allProducts/ShutterProfile';
import MSPipe from './pages/allProducts/pipeAndHollow/msPipeAndHollow/MSPipe';
import YST210 from './pages/allProducts/pipeAndHollow/msPipeAndHollow/YST210';
import YST310And355 from './pages/allProducts/pipeAndHollow/msPipeAndHollow/YST310And355';
import SSAngleChannelBeam from './pages/allProducts/stainlessSteel/SSAngleChannelBeam';
import SSPlateSheets from './pages/allProducts/stainlessSteel/SSPlateSheets';
import SSFlat from './pages/allProducts/stainlessSteel/SSFlat';
import SSBrightBar from './pages/allProducts/stainlessSteel/SSBrightBar';
import SSReBar from './pages/allProducts/stainlessSteel/SSReBar';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />


          {/* GI Products */}
          <Route path='/Products/Galvanized-Steel/Sheets' element={<GISheets />} />
          <Route path='/Products/Galvanized-Steel/AngleChannelBeam' element={<GIAngleChannelBeam />} />
          <Route path='/Products/Galvanized-Steel/RoundSquareFlat' element={<GIRoundSquareFlat />} />

          {/* MS Products */}
          <Route path='/Products/Mild-Steel/Angle' element={<MSAngle />} />
          <Route path='/Products/Mild-Steel/Channel' element={<MSChannel />} />
          <Route path='/Products/Mild-Steel/Beam' element={<MSBeam />} />
          <Route path='/Products/Mild-Steel/Round' element={<MSRound />} />
          <Route path='/Products/Mild-Steel/Square-Bar' element={<MSSquareBar />} />
          <Route path='/Products/Mild-Steel/Flat-Bar' element={<MSFlatBar />} />
          <Route path='/Products/Mild-Steel/Plate-Sheets/MS-Plate' element={<MSPlate />} />
          <Route path='/Products/Mild-Steel/Plate-Sheets/MS-Sheets' element={<MSSheets />} />
          <Route path='/Products/Mild-Steel/Plate-Sheets/MS-Checkered-Sheets' element={<MSCheckeredSheets />} />


          {/* SS Products */}
          <Route path='/Products/Stainless-Steel/Sheets' element={<SSPlateSheets />} />
          <Route path='/Products/Stainless-Steel/AngleChannelBeam' element={<SSAngleChannelBeam />} />
          <Route path='/Products/Stainless-Steel/Flat' element={<SSFlat />} />
          <Route path='/Products/Stainless-Steel/BrightBar' element={<SSBrightBar />} />
          <Route path='/Products/Stainless-Steel/Re-Bar' element={<SSReBar />} />


          {/* Pipe Products */}
          <Route path='/Products/Pipe-Hollow/GI-Pipe' element={<GIPipe />} />
          <Route path='/Products/Pipe-Hollow/MS/MS-Pipe' element={<MSPipe />} />
          <Route path='/Products/Pipe-Hollow/MS/YST-210' element={<YST210 />} />
          <Route path='/Products/Pipe-Hollow/MS/YST-310-355' element={<YST310And355 />} />
          <Route path='/Products/Pipe-Hollow/SS-Pipe' element={<SSPipe />} />
          <Route path='/Products/Pipe-Hollow/Seamless-Pipe' element={<SeamlessPipe />} />

          {/* Roofing Sheets */}
          <Route path='/Products/Corrugated-Roofing-Sheets/ColorCoated' element={<ColorCoated />} />
          <Route path='/Products/Corrugated-Roofing-Sheets/GI-RoofingSheets' element={<GIRoofingSheets />} />
          <Route path='/Products/Corrugated-Roofing-Sheets/AluminumPolyFRP' element={<AluminumPolyFRP />} />


          {/* Others Products */}
          <Route path='/Products/Cement' element={<Cement />} />
          <Route path='/Products/GodrejSafes' element={<GodrejSafes />} />
          <Route path='/Products/Rail' element={<Rail />} />
          <Route path='/Products/BuildingProductSolutions' element={<BuildingProductSolutions />} />
          <Route path='/Products/Re-Bar' element={<ReBar />} />
          <Route path='/Products/Hardware' element={<Hardware />} />
          <Route path='/Products/ShutterProfile' element={<ShutterProfile />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
