import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='mt-5 container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
