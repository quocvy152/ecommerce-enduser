import { Dispatch, SetStateAction, useState } from "react";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

import "./PopupLogin.css";
import { images } from "../../assets/assets";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useAuth } from "@/services/hooks/useAuth";
import { SignInPayload } from "@/typings/authentication/auth";

export type PopupLoginProps = {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
};

export type OnHandleSubmitFormPayload = SignInPayload & PopupLoginProps;

export const POPUP_TYPE = {
  SIGNIN: "signin",
  SIGNUP: "signup",
};

const SignInSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const PopupLogin = ({ setShowLogin }: PopupLoginProps) => {
  const [popupType, setPopupType] = useState(POPUP_TYPE.SIGNIN);

  const { 
    isLoading: isLoadingSignIn, 
    signIn,
  } = useAuth();

  const onHandleSubmitForm = async (payload: OnHandleSubmitFormPayload) => {
    signIn(payload);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      const { email, password } = values;

      onHandleSubmitForm({
        email,
        password,
        setShowLogin
      });
    },
  });

  return (
    <div className="container-popup-login">
      <form className="form-content-login" onSubmit={formik.handleSubmit}>
        <div className="wrap-title-popup">
          <h2 className="title-popup">
            {popupType === POPUP_TYPE.SIGNIN ? "Đăng Nhập" : "Đăng Ký"}
          </h2>
          <img
            onClick={() => setShowLogin(false)}
            src={images.ic_close}
            alt=""
            className="ic_close"
          />
        </div>

        <div className="wrap-login-input">
          {popupType === "signup" ? (
            <TextField id="txt_fullname" label="Tên của bạn" defaultValue="" />
          ) : (
            <></>
          )}
          <div className="wrap-input">
            <TextField
              id="email"
              name="email"
              label="Email"
              defaultValue=""
              className="text-field-custom"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="wrap-input">
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              defaultValue=""
              className="text-field-custom"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>
        </div>

        {popupType === POPUP_TYPE.SIGNIN ? (
          <SocialLogin popupType={popupType} />
        ) : (
          <></>
        )}

        <button className="btn-form">
          {isLoadingSignIn && (<img src={images.ic_loading_gif} alt="" className="ic_loading" />)}
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
            <span onClick={() => setPopupType(POPUP_TYPE.SIGNIN)}>
              Đăng nhập
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default PopupLogin;
