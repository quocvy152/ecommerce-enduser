import { useQuery } from "@tanstack/react-query";

import AuthenticationRepository from "@/apis/authentication";
import { SignInPayload } from "@/typings/authentication/auth";

export type UseAuth = {
    signIn: (payload: SignInPayload) => void;
}

export const useAuth = (): UseAuth => {
    const signIn = async (payload: SignInPayload) => {
        try {
            const { isPending, isError, data, } = useQuery({
                queryKey: ['signIn'],
                queryFn: async () => {
                    const resultSignIn = await AuthenticationRepository.signIn(payload);
                    return resultSignIn;
                },
            })
            console.log({isPending, isError, data})
        } catch (error) {
            console.log({ error })
        }
    };

    return {
        signIn,
    };
};