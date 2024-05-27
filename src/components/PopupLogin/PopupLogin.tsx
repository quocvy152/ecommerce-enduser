/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, useState } from "react";
import "./PopupLogin.css";
import { images } from "../../assets/assets";
import SocialLogin from "../SocialLogin/SocialLogin";

export type PopupLoginProps = {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
};

export const POPUP_TYPE = {
  SIGNIN: 'signin',
  SIGNUP: 'signup',
}

const PopupLogin = ({setShowLogin}: PopupLoginProps) => {
  const [popupType, setPopupType] = useState(POPUP_TYPE.SIGNIN);

  return (
    <div className="container-popup-login">
      <form action="" className="form-content-login">
        <div className="wrap-title-popup">
          <h2 className="title-popup">
            {popupType === POPUP_TYPE.SIGNIN ? "Đăng Nhập" : "Đăng Ký"}
          </h2>
          <img onClick={() => setShowLogin(false)} src={images.ic_close} alt="" className="ic_close" />
        </div>

        <div className="wrap-login-input">
          {popupType === "signup" ? (
            <input
              type="text"
              name="txt_fullname"
              id="txt_fullname"
              placeholder="Tên của bạn"
              required
            />
          ) : (
            <></>
          )}
          <input
            type="text"
            name="txt_username"
            id="txt_username"
            placeholder="Địa chỉ email/username"
            required
          />
          <input
            type="password"
            name="txt_password"
            id="txt_password"
            placeholder="Mật khẩu của bạn"
            required
          />
        </div>

        <SocialLogin popupType={popupType} />

        <button className="btn-form">
          {popupType === POPUP_TYPE.SIGNIN ? "Đăng nhập" : "Tạo tài khoản"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" className="checkbox-input" required />
          <p>
            Bằng cách tiếp tục, tôi đồng ý với các điều khoản sử dụng và chính
            sách quyền riêng tư.
          </p>
        </div>
        {popupType === POPUP_TYPE.SIGNIN ? (
          <p>
            Bạn chưa có tài khoản?{" "}
            <span onClick={() => setPopupType("signup")}>Đăng ký ngay</span>
          </p>
        ) : (
          <p>
            Bạn đã có tài khoản?{" "}
            <span onClick={() => setPopupType(POPUP_TYPE.SIGNIN)}>Đăng nhập</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default PopupLogin;
