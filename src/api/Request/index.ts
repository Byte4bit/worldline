import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ErrorFenextjs } from "fenextjs-error";

export const onRequest = async <T = any, D = any>(
    config: AxiosRequestConfig<D>,
) => {
    try {
        const response = await axios<T, AxiosResponse<T>, D>(config);

        return response.data;
    } catch (error: any) {
        const errorData = error?.response?.data ?? error?.response ?? error;
        const result: ErrorFenextjs = new ErrorFenextjs({
            data: {
                error: errorData,
                send: config,
            },
            message: `${errorData?.message ?? errorData}`,
        });
        return result;
    }
};
