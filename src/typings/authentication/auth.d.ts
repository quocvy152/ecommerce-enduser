import { APIResponse } from '../base';
import { Users } from '../users/users';

export enum Roles {
    ADMIN = 'admin',
    CUSTOMER = 'customer',
    EDITER = 'editer',
    SELLER = 'seller',
}

export type SignUpData = {
    data: {
        Users
    }
};

export type SignUpResponse = APIResponse<SignUpData>;

export type SignUpPayload = {
    email: string;
    password: string;
    username: string;
    fullname: string;
    phone: string;
    roles: Roles[];
}

export type SignInPayload<T = onject> = {
    email: string;
    password: string;
} & T;

export type SignInData = {
    data?: Users | null,
    accessToken?: string | undefined,
    refreshToken?: string | undefined,
};

export type SignInResponse = APIResponse<SignInData>;

export type AuthPayload = {
    accessToken?: string | null;
    refreshToken?: string | null;
    user?: Users | null;
}

export type AuthState = {
    hasAuthenticated: boolean,
    accessToken: string | null;
    refreshToken: string | null;
    user: Users | null;
}