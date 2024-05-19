import { useState } from 'react';
import { images } from '../../assets/assets';
import './NavBar.css';

export type ParamChangeMenu = { value: string }

const NavBar = () => {
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
        <li onClick={() => onChangeMenu({ value: 'home' })} className={menu === 'home' ? 'active' : ''}>Trang chủ</li>
        <li onClick={() => onChangeMenu({ value: 'menu' })} className={menu === 'menu' ? 'active' : ''}>Menu</li>
        <li onClick={() => onChangeMenu({ value: 'mobile-app' })} className={menu === 'mobile-app' ? 'active' : ''}>Mobile app</li>
        <li onClick={() => onChangeMenu({ value: 'contact-us' })} className={menu === 'contact-us' ? 'active' : ''}>Liên hệ</li>
      </ul>

      <div className='navbar-right'>
        <img src={images.ic_search} alt='' className='ic-search ic-navbar' />

        <div className='navbar-search-icon'>
          <img src={images.ic_basket} alt='' className='ic-basket ic-navbar' />
          <div className='dot'></div>
        </div>

        <button className='btn-sign-in'>Đăng nhập</button>
      </div>
    </div>
  );
};

export default NavBar;
