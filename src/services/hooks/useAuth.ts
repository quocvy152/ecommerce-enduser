import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import AuthenticationRepository from "@/apis/authentication";
import { SignInPayload } from "@/typings/authentication/auth";
import { useAppDispatch } from "@/redux/store";
import { signIn as signInReducer } from "@/redux/auth";

export type UseAuth = {
    isLoading: boolean;
    isError: boolean;
    hasAuthenticated: boolean;
    signIn: (payload: SignInPayload) => Promise<void>;
    signOut: () => void;
}

export const useAuth = (): UseAuth => {
    const dispatch = useAppDispatch();

    const { mutateAsync: signInMutateAsync, isPending: isPendingSignIn, isError: isErrorSignIn } = useMutation({
        mutationFn: async (payload: SignInPayload) => {
            const resultSignIn = await AuthenticationRepository.signIn(payload);

            if (resultSignIn.error) {
                throw new Error(resultSignIn.message);
            }

            return resultSignIn;
        }
    });

    const signIn = async (payload: SignInPayload) => {
        try {
            const { error, data, accessToken, refreshToken, message } = await signInMutateAsync(payload);

            const { setShowLogin } = payload;

            if (error) {
                toast.error(message);
            }

            localStorage.setItem('currentUser', JSON.stringify('info-user'));
            localStorage.setItem('accessToken', JSON.stringify('access-token'));
            localStorage.setItem('refreshToken', JSON.stringify('refresh-token'));

            dispatch(
                signInReducer({
                    accessToken,
                    refreshToken,
                    user: data
                })
            )

            setShowLogin(false);

            toast.success('Đăng nhập thành công!');
        } catch (error: any) {
            console.log({ error })
        }
    }

    const signOut = () => {
        try {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        } catch (error) {
            toast.error('Đăng xuất thất bại!')
        }
    }

    return {
        isLoading: isPendingSignIn,
        isError: isErrorSignIn,
        hasAuthenticated:
            !!localStorage.getItem('currentUser') ||
            !!localStorage.getItem('accessToken') ||
            !!localStorage.getItem('refreshToken'),
        signIn,
        signOut,
    };
};