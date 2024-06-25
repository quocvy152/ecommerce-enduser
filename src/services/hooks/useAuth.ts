import { useMutation } from "@tanstack/react-query";

import AuthenticationRepository from "@/apis/authentication";
import { SignInPayload } from "@/typings/authentication/auth";
import { toast } from "react-toastify";

export type UseAuth = {
    isLoading: boolean;
    isError: boolean;
    hasAuthenticated: boolean;
    signIn: (payload: SignInPayload) => Promise<void>;
    signOut: () => void;
}

export const useAuth = (): UseAuth => {
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
            const { error, message, data, } = await signInMutateAsync(payload);
            console.log({ error, message, data })

            if (error) {
                toast.error(message);
            }

            toast.success('Đăng nhập thành công!');

            localStorage.setItem('currentUser', JSON.stringify('info-user'));
            localStorage.setItem('accessToken', JSON.stringify('access-token'));
            localStorage.setItem('refreshToken', JSON.stringify('refresh-token'));
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