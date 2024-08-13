import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cart);

  const handleNavigate = (path) => navigate(path);

  return (
    <nav className='navbar bg-dark text-white'>
      <div className='container-fluid'>
        <span
          onClick={() => handleNavigate('/')}
          className='navbar-brand text-white'
          role='button'
        >
          ChopShop
        </span>
        <span role='button' onClick={() => handleNavigate('/cart')}>
          <span>
            {cartState?.cartItems?.length > 0 && cartState?.cartItems?.length}
          </span>
          <i className='bi bi-bag'></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
