import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import ProductsOne from './pages/allProducts/ProductsOne';
import ProductsTwo from './pages/allProducts/ProductsTwo';
import ProductsThree from './pages/allProducts/ProductsThree';
import ProductsFour from './pages/allProducts/ProductsFour';
import ProductsFive from './pages/allProducts/ProductsFive';
import ProductsSix from './pages/allProducts/ProductsSix';
import ProductsSeven from './pages/allProducts/ProductsSeven';
import ProductsEight from './pages/allProducts/ProductsEight';

import ProductsNine from './pages/allProducts/ProductsNine';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          {/* All Products */}
          <Route path='/Products/1' element={<ProductsOne />} />
          <Route path='/Products/3' element={<ProductsTwo />} />
          <Route path='/Products/4' element={<ProductsThree />} />
          <Route path='/Products/5' element={<ProductsFour />} />
          <Route path='/Products/6' element={<ProductsFive />} />
          <Route path='/Products/7' element={<ProductsSix />} />
          <Route path='/Products/8' element={<ProductsSeven />} />
          <Route path='/Products/9' element={<ProductsEight />} />
          <Route path='/Products/2' element={<ProductsNine />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
