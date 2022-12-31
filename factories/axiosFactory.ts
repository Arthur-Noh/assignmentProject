import { ACCESS_TOKEN } from './../constants/host';
import axios from 'axios';
import { HOST } from '../constants/host';

const createInstance = () => {
    const instance = axios.create({
        baseURL: HOST,
    });

    instance.interceptors.request.use(
        async (config) => {
            config.headers = {
                // Authorization: `Bearer ${ACCESS_TOKEN}`,
                'Content-Type' : 'application/json',
            };

            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    )

    return instance;
};

let Instance = createInstance();

const initAxiosInstance = () => {
    console.log(`[AxiosFactory] init, host: ${HOST}`);
    Instance = createInstance();
};

export {
    Instance,
    initAxiosInstance,
};