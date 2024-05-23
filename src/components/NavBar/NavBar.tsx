import { useState } from 'react';
import { images } from '../../assets/assets';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { PopupLoginProps } from '../PopupLogin/PopupLogin';

export type ParamChangeMenu = { value: string }

const NavBar = ({setShowLogin}: PopupLoginProps) => {
  const [menu, setMenu] = useState('home')

  const onChangeMenu = ({value}: ParamChangeMenu) => {
    setMenu(value)
  }

  return (
    <div className='navbar'>
      <div className='wrap-logo'>
        <img src={images.logo} alt='' className='logo'/>
      </div>
      
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => onChangeMenu({ value: 'home' })} className={menu === 'home' ? 'active' : ''}>Trang chủ</Link>
        <a href='#explore-menu' onClick={() => onChangeMenu({ value: 'menu' })} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#mobile-app' onClick={() => onChangeMenu({ value: 'mobile-app' })} className={menu === 'mobile-app' ? 'active' : ''}>Mobile app</a>
        <a href='#content-footer' onClick={() => onChangeMenu({ value: 'contact-us' })} className={menu === 'contact-us' ? 'active' : ''}>Liên hệ</a>
      </ul>

      <div className='navbar-right'>
        <img src={images.ic_search} alt='' className='ic-search ic-navbar' />

        <div className='navbar-search-icon'>
          <img src={images.ic_basket} alt='' className='ic-basket ic-navbar' />
          <div className='dot'></div>
        </div>

        <button className='btn-sign-in' onClick={() => setShowLogin(true)}>Đăng nhập</button>
      </div>
    </div>
  );
};

export default NavBar;
