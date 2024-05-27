import { images } from '@/assets/assets'
import './SocialLogin.css'
import { POPUP_TYPE } from '../PopupLogin/PopupLogin'

export type SocialLoginProps = {
    popupType: string
}

const SocialLogin = ({popupType}: SocialLoginProps) => {
  return (
    <div className="container-social-login">
        <div className="btn-login-facebook">
            <img src={images.ic_facebook_signin} alt="" className="img-btn-login-facebook" />
            <p className='title-signin-third-party'>{popupType === POPUP_TYPE.SIGNIN ? 'Đăng nhập với Facebook' : 'Đăng ký bằng Facebook'}</p>
        </div>

        <div className="btn-login-google">
            <img src={images.ic_google} alt="" className="img-btn-login-google" />
            <p className='title-signin-third-party'>{popupType === POPUP_TYPE.SIGNIN ? 'Đăng nhập với Google' : 'Đăng ký bằng Google'}</p>
        </div>
    </div>
  )
}

export default SocialLogin