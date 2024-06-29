import { useState } from 'react';
import { images } from '../../assets/assets';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { PopupLoginProps } from '../PopupLogin/PopupLogin';
import NavBarCustomer from '../NavBarCustomer/NavBarCustomer';
import { useAppSelector } from '@/redux/store';
// import { useAuth } from '@/services/hooks/useAuth';

export type ParamChangeMenu = { value: string }

export type NavBarProps = {
} & PopupLoginProps;

const NavBar = ({
  setShowLogin
}: NavBarProps) => {
  const [menu, setMenu] = useState('home');

  // const { hasAuthenticated } = useAuth();
  const { hasAuthenticated } = useAppSelector((state) => state.auth);

  const onChangeMenu = ({value}: ParamChangeMenu) => {
    setMenu(value)
  }

  return (
    <div className='navbar'>
      <div className='wrap-logo'>
        <Link to='/'>
          <img src={images.logo} alt='' className='logo'/>
        </Link>
      </div>
      
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => onChangeMenu({ value: 'home' })} className={menu === 'home' ? 'active' : ''}>Trang chủ</Link>
        <a href='#explore-menu' onClick={() => onChangeMenu({ value: 'menu' })} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#mobile-app' onClick={() => onChangeMenu({ value: 'mobile-app' })} className={menu === 'mobile-app' ? 'active' : ''}>Mobile app</a>
        <a href='#content-footer' onClick={() => onChangeMenu({ value: 'contact-us' })} className={menu === 'contact-us' ? 'active' : ''}>Liên hệ</a>
      </ul>

      <div className='navbar-right'>
        <img src={images.ic_search} alt='' className='ic-search ic-navbar' />

        <Link to={'/cart'}>
          <div className='navbar-search-icon'>
            <img src={images.ic_basket} alt='' className='ic-basket ic-navbar' />
            <div className='dot'></div>
          </div>
        </Link>
        
        {
          hasAuthenticated ?
          <NavBarCustomer /> :
          <button className='btn-sign-in' onClick={() => setShowLogin(true)}>Đăng nhập</button>
        }
      </div>
    </div>
  );
};

export default NavBar;
