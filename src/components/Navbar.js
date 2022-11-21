import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Button2 } from './Buttom2';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Condomínio Rossi
            <i class='fab fa-envira'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Início
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Informações
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/recicly'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                
              </Link>
            </li>

            <li>
              <Link
                to='/talk'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>


          </ul>
          {button && <Button  color="primary">Envie sua sugestão</Button>}
          {/* {button && <Button2 buttonStyle='btn--outline'>LOGIN</Button2>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
