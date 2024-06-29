import API from "../base-api";
import { SignInPayload, SignInResponse, SignUpPayload, SignUpResponse } from "@/typings/authentication/auth";
import { AUTH_URL } from "./constant";
import { AxiosResponse } from "axios";

const AuthenticationRepository = {
  async signUp(payload: SignUpPayload): Promise<SignUpResponse> {
    const { data } = await API.post<SignUpResponse>(
      `${AUTH_URL.SIGN_UP_CUSTOMER}`,
      payload
    );

    return data;
  },

  async signIn(payload: SignInPayload): Promise<SignInResponse> {
    const resultSignIn: AxiosResponse<SignInResponse> = await API.post<SignInResponse>(
      `${AUTH_URL.SIGN_IN_CUSTOMER}`,
      payload
    );
    return resultSignIn.data;
  },
};

export default AuthenticationRepository;