export type APIResponse<T = object> = {
    error: boolean,
    errorCode?: number,
    statusCode?: number,
    message?: string
} & T;